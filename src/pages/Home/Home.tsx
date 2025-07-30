import "./Home.css";
import { useEffect, useState } from "react";
import TechCube from "../../components/TechCube/TechCube";
import Text3D from "../../components/Text3d/Text3d";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";

export default function Home({ on3DReady }: { on3DReady: () => void }) {
  const [isMobile, setIsMobile] = useState(false);
  const [textReady, setTextReady] = useState(false);
  const [cubeReady, setCubeReady] = useState(false);

  useEffect(() => {
    if (textReady && cubeReady) {
      console.log("🔁 Ambos listos: llamando on3DReady()");
      on3DReady();
    }
  }, [textReady, cubeReady, on3DReady]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 840);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  return (
    <div className={`home-container ${textReady && cubeReady ? "visible" : ""}`}>
      <div className="background-overlay" />
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/assets/VideoCode.mp4" type="video/mp4" />
        Tu navegador no soporta el vídeo.
      </video>

      <div className="home-header-wrapper">
        <div className="home-header">
          <Text3D
            text="Jennifer Román"
            fontUrl="/fonts/Caveat_Regular.json"
            size={isMobile ? 2.5 : 3.8}
            position={isMobile ? [-9, -1.5, 0] : [-10, -1.5, 0]}
            color="#ffffff"
            metalness={0.1}
            roughness={0.8}
            onReady={() => setTextReady(true)}
          />

          <p className="home-role">
            <em>Desarrolladora web full stack</em>
          </p>
        </div>

        <div className="home-cube">
          {!isMobile && (
            <TechCube
              size={3.5}
              canvasSize={200}
              onReady={() => setCubeReady(true)}
            />
          )}
        </div>
      </div>

      <div className="home-content">
        {isMobile ? (
          <div className="home-image-cube-wrapper">
            <img
              src="/assets/Jennifer.jpg"
              alt="Jennifer Román"
              className="home-image"
            />
            <div className="home-cube-mobile">
              <TechCube
                size={3.5}
                canvasSize={200}
                onReady={() => setCubeReady(true)}
              />
            </div>
          </div>
        ) : (
          <img
            src="/assets/Jennifer.jpg"
            alt="Jennifer Román"
            className="home-image"
          />
        )}
        <div className="home-about-box">
          <p>
            Desarrolladora web full stack con experiencia en proyectos reales
            que combinan frontend moderno y backend robusto. He trabajado con
            tecnologías como React, Vite, Angular, Three.js y Electron, creando
            aplicaciones tanto web como de escritorio. Tras una trayectoria
            previa en atención al cliente, he canalizado mi capacidad resolutiva
            y mi pasión por la tecnología hacia el desarrollo de soluciones
            intuitivas, eficientes y bien estructuradas. Me motiva el
            aprendizaje continuo y disfruto enfrentando retos técnicos con una
            mentalidad analítica y colaborativa.
          </p>
        </div>
      </div>
    </div>
  );
}
