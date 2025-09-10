import { useEffect, useRef } from "react";
import "./Home.css";

export default function Home({ onReady }: { onReady: () => void }) {
  const readyOnce = useRef(false);
  const signalReady = () => {
    if (!readyOnce.current) {
      readyOnce.current = true;
      onReady();
    }
  };

  // Fallback por si el evento del vídeo no se dispara (autoplay bloqueado, etc.)
  useEffect(() => {
    const t = setTimeout(signalReady, 500);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home">
      <div className="home__bg" aria-hidden="true">
        <video
          className="home__video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlayThrough={signalReady}
          onLoadedData={signalReady}
          onError={signalReady}
        >
          <source src="/assets/VideoCode.mp4" type="video/mp4" />
          Tu navegador no soporta el vídeo.
        </video>
      </div>

      <section className="home__content">
        <h1 className="home__title">Jennifer Román</h1>
        <p className="home__tagline">Desarrolladora web full stack</p>
      </section>
    </main>
  );
}
