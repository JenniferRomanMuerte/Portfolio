import OpenAI from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, value, i) => sum + value * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, value) => sum + value * value, 0));
  const normB = Math.sqrt(b.reduce((sum, value) => sum + value * value, 0));
  return dot / (normA * normB);
}

export const handler = async (event) => {
  try {
    const { question } = JSON.parse(event.body);

    // 1️⃣ Cargar índice
    const indexPath = path.resolve("public/rag/index.json");
    const indexRaw = fs.readFileSync(indexPath, "utf-8");
    const index = JSON.parse(indexRaw);

    // 2️⃣ Embedding de la pregunta
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: question,
    });

    const questionEmbedding = embeddingResponse.data[0].embedding;

    // 3️⃣ Calcular similitud
    const scored = index.map((item) => ({
      ...item,
      score: cosineSimilarity(questionEmbedding, item.embedding),
    }));

    const topChunks = scored.sort((a, b) => b.score - a.score).slice(0, 4);

    const highestScore = topChunks[0]?.score || 0;

    if (highestScore < 0.45) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          answer:
            "No tengo información suficiente en mis documentos para responder a esa pregunta.",
          sources: [],
        }),
      };
    }

    const context = topChunks.map((c) => c.text).join("\n\n");

    // 4️⃣ Generar respuesta
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
Responde únicamente basándote en el siguiente contexto.
Si la respuesta no está en el contexto, di que no tienes información suficiente.

Contexto:
${context}

Pregunta:
${question}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        answer: response.output_text,
        sources: topChunks.map((c) => c.source),
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error procesando la solicitud." }),
    };
  }
};
