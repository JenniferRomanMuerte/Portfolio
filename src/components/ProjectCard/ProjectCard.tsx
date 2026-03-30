import { useState } from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techs: string[];
  link?: string;
  private?: boolean;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  techs,
  link,
  private: isPrivate,
}: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (isPrivate) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const cardContent = (
    <>
      {/* Pin decorativo */}
      <img
        src="/assets/pin.png"
        alt=""
        aria-hidden="true"
        className="project-pin"
      />

      {/* Contenido */}
      <div className="project-content">
        <h3>{title}</h3>
        <img
          src={imageUrl}
          alt={title}
          className="project-image"
          loading="lazy"
          decoding="async"
        />
        <p>{description}</p>
        <div className="project-techs">
          {techs.map((tech, i) => (
            <span key={i} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {link && !isPrivate ? (
        <a
          className="project-card"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardContent}
        </a>
      ) : (
        <div className="project-card" onClick={handleClick}>
          {cardContent}
        </div>
      )}

      {/* Modal para proyectos privados */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{title}</h2>
            <p>🔒 Este proyecto es privado y está en curso.</p>
            <p>
              Si quieres más detalles,{" "}
              <a href="mailto:jenniferromanmuerte@gmail.com">contáctame</a>.
            </p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}
