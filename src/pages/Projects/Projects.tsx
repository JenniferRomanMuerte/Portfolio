import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Gestor de facturación",
      description:
        "Aplicación de escritorio para gestión de citas, facturas y pagos sincronizada con Google Calendar.",
      imageUrl: "/assets/project-facturacion.png",
      techs: ["React", "Electron", "SQLite"],
      link: "https://github.com/JenniferRomanMuerte/facturacion_fisio_pilates",
    },
    {
      title: "Asociación de fumadores",
      description:
        "Gestión de socios, generación de contratos, inventario y transacciones usando llaveros NFC y sistema web local.",
      imageUrl: "/assets/project-asociacion.png",
      techs: ["React", "NestJS", "PostgreSQL"],
      link: "https://github.com/JenniferRomanMuerte/asociacion-backend",
    },
    {
      title: "Página web de psicología",
      description:
        "Diseño e implementación de una página profesional para consulta de psicología forense. Optimizada para SEO con herramientas como Google Search Console.",
      imageUrl: "/assets/project-psicologia.png",
      techs: ["Wix", "SEO", "Google Search Console"],
      link: "https://www.psicologiadesireeporcel.org/",
    },
    {
      title: "Galería 3D interactiva",
      description:
        "Aplicación web con globo terráqueo 3D y escenas interactivas para mostrar fotos y vídeos de viajes. Desarrollada con integración 3D y contenido dinámico.",
      imageUrl: "/assets/project-galeria.png",
      techs: ["Angular", "Three.js"],
      link: "https://github.com/JenniferRomanMuerte/traveling",
    },
    {
      title: "Proyecto final de FP",
      description:
        "Aplicación web completa de comunidad de recetas, visualizando éstas mediante filtros de ingredientes o categorías. Registro de clientes para poder subir y valorar recetas.",
      imageUrl: "/assets/project-helpcook.png",
      techs: ["Java", "Springboot", "SQL", "Angular"],
      link: "https://github.com/JenniferRomanMuerte/helpcook",
    },
  ];

  // nº de tarjetas visibles según ancho
  const getVisible = () => (window.innerWidth < 768 ? 1 : 2);

  const [visible, setVisible] = useState(getVisible());
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const onResize = () => setVisible(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const next = () =>
    setCurrent((p) => (p + 1) % (projects.length - (visible - 1)));
  const prev = () =>
    setCurrent(
      (p) =>
        (p - 1 + (projects.length - (visible - 1))) %
        (projects.length - (visible - 1))
    );

  const slideWidthPct = 100 / visible; // 50% en desktop, 100% en móvil
  const translatePct = current * slideWidthPct;

  return (
    <main className="projects">
      <h1 className="projects-title">
         <span className="word-mis">Mis</span> <span className="word-proyectos">Proyectos</span>
        </h1>

      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${translatePct}%)` }}
        >
          {projects.map((project, i) => (
            <div
              className="carousel-slide"
              key={i}
              style={{ flex: `0 0 ${slideWidthPct}%` }} // anchura exacta del slide
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        {/* 👇 Botones debajo */}
        <div className="carousel-buttons">
          <button className="carousel-btn left" onClick={prev}>
            <img src="/assets/arrow.png" alt="Anterior" />
          </button>
          <button className="carousel-btn right" onClick={next}>
            <img src="/assets/arrow.png" alt="Siguiente" />
          </button>
        </div>
      </div>
    </main>
  );
}
