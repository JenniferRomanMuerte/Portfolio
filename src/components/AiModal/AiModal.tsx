import { useState } from "react";
import "./AiModal.css";

interface AiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiModal({ isOpen, onClose }: AiModalProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [sources, setSources] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer(null);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      setAnswer(data.answer);
      setSources(data.sources || []);
    } catch (error) {
      setAnswer("Ha ocurrido un error al procesar la pregunta.");
    }

    setLoading(false);
  };

  return (
    <div className="ai-overlay">
      <div className="ai-modal">
        <button className="ai-close" onClick={onClose}>✕</button>

        <h2>Pregúntame sobre mi experiencia</h2>

        <textarea
          placeholder="Escribe tu pregunta..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="ai-textarea"
        />

        <button onClick={handleSubmit} disabled={loading} className="ai-button">
          {loading ? "Pensando..." : "Enviar"}
        </button>

        {answer && (
          <div className="ai-response">
            <p>{answer}</p>

            {sources.length > 0 && (
              <small className="ai-sources">
                Fuentes: {sources.join(", ")}
              </small>
            )}
          </div>
        )}
      </div>
    </div>
  );
}