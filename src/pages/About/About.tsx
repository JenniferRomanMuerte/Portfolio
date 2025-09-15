import { useEffect, useState } from "react";
import "./About.css";

export default function About() {
  const [showPolaroid, setShowPolaroid] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="about">
      {!showPolaroid && (
        <h1 className={`about-title ${fadeIn ? "visible" : ""}`}>Sobre mí</h1>
      )}

      {/* Libreta + área de texto + cámara anclada a la libreta */}
      {!showPolaroid && (
        <figure className={`notebook-wrapper ${fadeIn ? "visible" : ""}`}>
          <img src="/assets/notebook.png" alt="Fondo libreta" className="notebook-img" />

          <figcaption className="notebook-text">
            <p>
              Soy desarrolladora web full stack, con experiencia en proyectos
              reales que combinan front-end moderno y back-end robusto.
            </p>
            <p>
              He trabajado con React, Angular, Node.js, Three.js, Electron,
              creando aplicaciones web y de escritorio.
            </p>
            <p>
              Tras una trayectoria en atención al cliente y el ámbito social, he
              canalizado mi capacidad resolutiva y mi pasión por la tecnología
              hacia el desarrollo de soluciones intuitivas, eficientes y bien
              estructuradas.
            </p>
            <p>Me motiva el aprendizaje continuo y disfruto enfrentando retos.</p>
          </figcaption>

          {/* Cámara anclada al borde inferior-derecho de la libreta */}
          <img
            src="/assets/camera.png"
            alt="Icono de cámara"
            className="camera-btn"
            onClick={() => setShowPolaroid(true)}
          />
        </figure>
      )}

      {/* Polaroid (sustituye a la libreta) */}
      {showPolaroid && (
        <img
          src="/assets/polaroid_text.png"
          alt="Foto estilo polaroid de Jennifer Román"
          className="polaroid-img"
          onClick={() => setShowPolaroid(false)}
        />
      )}
    </section>
  );
}
