import { useEffect, useState } from "react";
import "./Home.css";
import SplitImage from "../../components/SplitImage/SplitImage";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="home">
      {/* Fondo con vídeo */}
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
        <h1 className={`home__title ${animate ? "animate-left" : ""}`}>
          Jennifer Román
        </h1>

        <SplitImage />

        <h2 className={`home__subtitle ${animate ? "animate-right" : ""}`}>
          Fullstack Developer
        </h2>
      </section>
    </main>
  );
}
