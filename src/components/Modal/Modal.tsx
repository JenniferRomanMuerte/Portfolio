import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  content: string[];
  cta?: {
    text: string;
    href: string;
  };
}

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  content,
  cta,
}: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal-title">{title}</h2>
        {subtitle && <p className="modal-subtitle">{subtitle}</p>}

        {content.map((item, i) => (
          <p key={i} className="modal-paragraph">
            {item}
          </p>
        ))}
        {cta && (
          <div className="modal-cta">
            <Link to={cta.href} className="modal-link">
              {cta.text}
            </Link>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
