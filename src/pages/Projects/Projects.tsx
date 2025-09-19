import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  return (
    <main className="projects">
      <div className="projects-header">
        <h1 className="projects-title">Mis Proyectos</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </main>
  );
}
