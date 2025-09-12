import { useEffect, useState } from "react";
import "./Home.css";
import SplitImage from "../../components/SplitImage/SplitImage";

export default function Home() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="home">
      {/* Fondo vídeo */}
      <div className="home__bg" aria-hidden="true">
        <video
          className="home__video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/VideoCode.mp4" type="video/mp4" />
          Tu navegador no soporta el vídeo.
        </video>
      </div>

      {/* Contenido */}
      <section className="home__content">
        {/* H1: capas superpuestas */}
        <h1 className={`home__title from-left ${inView ? "is-in" : ""}`} aria-label="Jennifer Román">
          <span className="home__measure" aria-hidden>Jennifer Román</span>
          <span className="home__layer home__layer--mono" aria-hidden>Jennifer Román</span>
          <span className="home__layer home__layer--rainbow" aria-hidden>Jennifer Román</span>
        </h1>

        {/* Imagen con slider (actualiza --split-p y activa .has-moved) */}
        <SplitImage />

        {/* H2: capas superpuestas */}
        <h2 className={`home__subtitle from-right ${inView ? "is-in" : ""}`} aria-label="Fullstack Developer">
          <span className="home__measure" aria-hidden>Fullstack Developer</span>
          <span className="home__layer home__layer--mono" aria-hidden>Fullstack Developer</span>
          <span className="home__layer home__layer--rainbow" aria-hidden>Fullstack Developer</span>
        </h2>
      </section>
    </main>
  );
}
