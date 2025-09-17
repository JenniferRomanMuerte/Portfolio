import { createPortal } from "react-dom";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  content: string[];
}

export default function Modal({ isOpen, onClose, title, subtitle, content }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2 className="modal-title">{title}</h2>
        {subtitle && <p className="modal-subtitle">{subtitle}</p>}
        <ul className="modal-content">
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>,
    document.body // 👈 monta el modal directamente en el <body>
  );
}
