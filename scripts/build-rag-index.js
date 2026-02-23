import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const RAG_FOLDER = "./rag";
const OUTPUT_FILE = "./public/rag/index.json";

function chunkText(text, size = 1000) {
  const chunks = [];
  for (let i = 0; i < text.length; i += size) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks;
}

async function buildIndex() {
  const files = fs.readdirSync(RAG_FOLDER);
  const index = [];

  for (const file of files) {
    const filePath = path.join(RAG_FOLDER, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const chunks = chunkText(content);

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];

      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: chunk,
      });

      index.push({
        id: `${file}_${i}`,
        source: file,
        text: chunk,
        embedding: embeddingResponse.data[0].embedding,
      });

      console.log(`✔ Procesado: ${file} - chunk ${i}`);
    }
  }

  fs.mkdirSync("./public/rag", { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2));

  console.log("✨ Índice generado correctamente.");
}

buildIndex();