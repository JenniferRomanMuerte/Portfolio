import { useEffect, useRef, useState } from "react";
import "./About.css";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const [showPolaroid, setShowPolaroid] = useState(false);

  const paperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null); // 👈 wrapper (máquina + papel)
  const containerRef = useRef<HTMLDivElement>(null); // 👈 contenedor (.about-right)

  const fullText = `Soy desarrolladora web full stack, con experiencia en proyectos reales que combinan front-end moderno y back-end robusto.

He trabajado con React, Angular, Node.js, Three.js, Electron, creando aplicaciones web y de escritorio.

Tras una trayectoria en atención al cliente y el ámbito social, he canalizado mi capacidad resolutiva y mi pasión por la tecnología hacia el desarrollo de soluciones intuitivas, eficientes y bien estructuradas.

Me motiva el aprendizaje continuo y disfruto enfrentando retos.`;

  // efecto "máquina de escribir"
  useEffect(() => {
    if (!showPolaroid) {
      let i = 0;
      setTypedText("");
      const id = setInterval(() => {
        i += 1;
        setTypedText(fullText.slice(0, i));

        // 👇 Mantener siempre visible la última línea
        if (paperRef.current) {
          paperRef.current.scrollTop = paperRef.current.scrollHeight;
        }

        if (i >= fullText.length) clearInterval(id);
      }, 35);
      return () => clearInterval(id);
    }
  }, [showPolaroid]);

  // guardar altura del header en variable CSS
  useEffect(() => {
    const header = document.querySelector(".about-header");
    if (header) {
      const h = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--about-header-h", `${h}px`);
    }
  }, []);

  // escalar wrapper dinámicamente
  useEffect(() => {
    function resize() {
      if (!wrapperRef.current || !containerRef.current) return;

      const containerH = containerRef.current.clientHeight;
      const wrapperW = wrapperRef.current.offsetWidth; // ancho del wrapper
      const naturalH = wrapperW * (900 / 1100); // 👈 proporción máquina

      const scale = Math.min(1, containerH / naturalH);
      wrapperRef.current.style.transform = `scale(${scale})`;
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="about">
      {/* Header móvil */}
      <div className="about-header mobile-only">
        <h1 className="about-title">Sobre mí</h1>
        {!showPolaroid ? (
          <img
            src="/assets/camera.png"
            alt="Ver Polaroid"
            className="action-btn"
            onClick={() => setShowPolaroid(true)}
          />
        ) : (
          <img
            src="/assets/arrow.png"
            alt="Volver"
            className="action-btn"
            onClick={() => setShowPolaroid(false)}
          />
        )}
      </div>

      {/* Layout responsive */}
      <div className="about-layout">
        <div className="about-left desktop-only">
          <h1 className="about-title">Sobre mí</h1>
          <div className="polaroid-block">
            <img
              src="/assets/polaroid_Jennifer.png"
              alt="Polaroid de Jennifer Román"
              draggable={false}
            />
          </div>
        </div>

        {/* 👇 asignamos containerRef aquí */}
        <div className="about-right" ref={containerRef}>
          {/* 👇 asignamos wrapperRef aquí */}
          <div className="typewriter-wrapper" ref={wrapperRef}>
            <img
              className="typewriter-up"
              src="/assets/printwriter/typewriter_up-1100.webp"
              alt="Parte superior máquina"
            />

            {/* Paper fijo con scroll interno */}
            <div className="paper" ref={paperRef}>
              {!showPolaroid ? (
                <p>{typedText}</p>
              ) : (
                <div className="polaroid-in mobile-only">
                  <img
                    src="/assets/polaroid_Jennifer.png"
                    alt="Polaroid de Jennifer Román"
                    draggable={false}
                  />
                </div>
              )}
            </div>

            <img
              className="typewriter-down"
              src="/assets/printwriter/typewriter_down-1100.webp"
              alt="Parte inferior máquina"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
