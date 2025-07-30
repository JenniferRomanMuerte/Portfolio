import "./Experience.css";
import Text3D from "../../components/Text3d/Text3d";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="experience-container">
      <div className="experience-overlay" />
      <video className="experience-video" autoPlay loop muted playsInline>
        <source src="/assets/VideoExperience.mp4" type="video/mp4" />
        Tu navegador no soporta el vídeo.
      </video>

      <div className="experience-content">
        {/* FORMACIÓN */}
        <div className="experience-title">
          <Text3D
            text="Formación"
            fontUrl="/fonts/Caveat_Regular.json"
            size={isMobile ? 2.8 : 3.8}
            position={isMobile ? [-14, 0, 0] : [-10, 0, 0]}
            color="#815baa"
            metalness={0.8}
            roughness={0.5}
          />
        </div>

        <section className="experience-box">
          <div className="experience-item">
            <FaGraduationCap className="experience-icon" />
            <div className="experience-text">
              <strong>
                FP Superior de Desarrollo de Aplicaciones Multiplataforma
              </strong>
              <br />
              IFP
              <p>
                Tecnologías aprendidas: HTML, CSS, Java, SQL, SpringBoot,
                Android Studio, Bootstrap, UML. <br />
                Proyecto final: Web de búsqueda de recetas con Angular y
                SpringBoot.
              </p>
            </div>
            <span className="experience-date">2021 - 2023</span>
          </div>
        </section>

        <section className="experience-box">
          <h2>🧠 Cursos Complementarios</h2>

          <div className="experience-item">
            <FaGraduationCap className="experience-icon" />
            <div className="experience-text">
              <strong>Universidad HTML</strong>
              <br />
              Udemy
            </div>
            <span className="experience-date">2022</span>
          </div>

          <div className="experience-item">
            <FaGraduationCap className="experience-icon" />
            <div className="experience-text">
              <strong>Universidad CSS</strong>
              <br />
              Udemy
            </div>
            <span className="experience-date">2022</span>
          </div>
          <div className="experience-item">
            <FaGraduationCap className="experience-icon" />
            <div className="experience-text">
              <strong>Curso de JavaScript básico</strong>
              <br />
              OpenBootcamp
            </div>
            <span className="experience-date">2023</span>
          </div>

          <div className="experience-item">
            <FaGraduationCap className="experience-icon" />
            <div className="experience-text">
              <strong>Git y GitHub</strong>
              <br />
              Udemy
            </div>
            <span className="experience-date">2024</span>
          </div>
          <div className="experience-item">
            <FaGraduationCap className="experience-icon" />
            <div className="experience-text">
              <strong>SEO: Posicionar una Web en Google</strong>
              <br />
              Udemy
            </div>
            <span className="experience-date">2025</span>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <div className="experience-title">
          <Text3D
            text="Experiencia"
            fontUrl="/fonts/Caveat_Regular.json"
            size={isMobile ? 2.8 : 3.8}
            position={isMobile ? [-14, 0, 0] : [-10, 0, 0]}
            color="#815baa"
            metalness={0.8}
            roughness={0.5}
          />
        </div>

        <section className="experience-box">
          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div>
              <strong>Desarrolladora de aplicaciones web (prácticas)</strong>
              <br />
              VT-LAB · Desarrollo web con JavaScript
            </div>
            <span className="experience-date">2023</span>
          </div>

          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div>
              <strong>Desarrolladora junior</strong>
              <br />
              VT-LAB · Desarrollo app de productos de datos unidos a BIM mediante knowledgeGraph
            </div>
            <span className="experience-date">2023 – 2024</span>
          </div>
          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div>
              <strong>Diseño web y SEO</strong>
              <br />
              Web profesional para psicóloga
            </div>
            <span className="experience-date">2024</span>
          </div>
          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div>
              <strong>Desarrolladora freelance</strong>
              <br />
              Proyectos: facturación, portfolio, asociación, etc.
            </div>
            <span className="experience-date">2024 – 2025</span>
          </div>
        </section>
      </div>
    </main>
  );
}
