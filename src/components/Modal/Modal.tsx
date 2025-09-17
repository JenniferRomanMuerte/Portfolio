import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  content: string[]; // array de bullet points
}

export default function Modal({ isOpen, onClose, title, subtitle, content }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Botón cerrar */}
        <button className="modal-close" onClick={onClose}>✖</button>

        {/* Encabezado */}
        <h2 className="modal-title">{title}</h2>
        {subtitle && <p className="modal-subtitle">{subtitle}</p>}

        {/* Contenido */}
        <ul className="modal-content">
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
