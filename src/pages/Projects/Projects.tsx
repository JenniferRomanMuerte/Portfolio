import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useEffect, useState, type CSSProperties } from "react";

const TABLET_BREAKPOINT = 768;
const LARGE_DESKTOP_BREAKPOINT = 1280;

interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  techs: string[];
  link?: string;
  private?: boolean;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Gira y Adivina",
    description:
      "Juego interactivo inspirado en la Ruleta de la Suerte, con lógica de turnos, puntuación, letras, comodines y gestión completa de partidas.",
    imageUrl: "/assets/project-roulette.png",
    techs: ["React Vite", "Node.js", "SCSS"],
    link: "https://spin-and-guess-1.onrender.com/",
  },
  {
    title: "Gestor de facturación",
    description:
      "Aplicación de escritorio para gestión de citas, facturas y pagos sincronizada con Google Calendar.",
    imageUrl: "/assets/project-facturacion.png",
    techs: ["React", "Electron", "SQLite"],
    link: "https://youtu.be/ikzdzZQN7eM",
  },
  {
    title: "Asociación de fumadores",
    description:
      "Gestión de socios, generación de contratos, inventario y transacciones usando llaveros NFC y sistema web local.",
    imageUrl: "/assets/project-asociacion.png",
    techs: ["React", "NestJS", "PostgreSQL"],
    private: true,
  },
  {
    title: "Web corporativa – Desirée Porcel Psicología",
    description:
      "Diseño e implementación de una página profesional para consulta de psicología forense. Optimizada para SEO con herramientas como Google Search Console.",
    imageUrl: "/assets/project-psicologia.png",
    techs: ["Wix", "SEO", "Google Search Console"],
    link: "https://www.psicologiadesireeporcel.org/",
  },
  {
    title: "Web corporativa – SAM Psicoterapia y Formación",
    description:
      "Evolución de la web desarrollada para Desirée Porcel, adaptada a la ampliación del negocio como centro especializado.",
    imageUrl: "/assets/project-SAM.png",
    techs: ["Wix Studio", "SEO técnico", "Arquitectura de información"],
    link: "https://www.sampsicoterapia.org/",
  },
  {
    title: "Travel Map",
    description:
      "Aplicación web para guardar viajes sobre un globo 3D, registrar destinos y subir fotos y vídeos de cada lugar. Incluye gestión multimedia, compresión de archivos y almacenamiento en la nube.",
    imageUrl: "/assets/project-travel-map.png",
    techs: ["React", "Vite", "Mapbox GL", "Supabase", "Cloudflare R2", "SCSS"],
    link: "https://github.com/JenniferRomanMuerte/travel-map",
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

interface ViewportMode {
  isCarousel: boolean;
  visibleCards: number;
  isLargeDesktop: boolean;
}

function getViewportMode(): ViewportMode {
  if (typeof window === "undefined") {
    return {
      isCarousel: false,
      visibleCards: 1,
      isLargeDesktop: false,
    };
  }

  const width = window.innerWidth;

  if (width < TABLET_BREAKPOINT) {
    return {
      isCarousel: false,
      visibleCards: 1,
      isLargeDesktop: false,
    };
  }

  if (width < LARGE_DESKTOP_BREAKPOINT) {
    return {
      isCarousel: true,
      visibleCards: 1,
      isLargeDesktop: false,
    };
  }

  return {
    isCarousel: true,
    visibleCards: 2,
    isLargeDesktop: true,
  };
}

export default function Projects() {
  const [viewportMode, setViewportMode] = useState(getViewportMode);
  const [current, setCurrent] = useState(0);

  const { isCarousel, visibleCards, isLargeDesktop } = viewportMode;

  const maxIndex = Math.max(0, PROJECTS.length - visibleCards);
  const canSlide = PROJECTS.length > visibleCards;
  const translatePct = current * (100 / visibleCards);

  useEffect(() => {
    const handleResize = () => {
      const nextMode = getViewportMode();
      setViewportMode(nextMode);

      if (!nextMode.isCarousel) {
        setCurrent(0);
        return;
      }

      const nextMaxIndex = Math.max(0, PROJECTS.length - nextMode.visibleCards);
      setCurrent((prev) => Math.min(prev, nextMaxIndex));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleNext() {
    if (!isCarousel || !canSlide) return;
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }

  function handlePrev() {
    if (!isCarousel || !canSlide) return;
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }

  const trackStyle = {
    "--desktop-translate": `-${translatePct}%`,
    "--visible-cards": visibleCards,
  } as CSSProperties;

  return (
    <main className="projects">
      <header className="projects-bar">
        <h1 className="projects-title">Mis Proyectos</h1>
      </header>

      {!isCarousel ? (
        <section className="projects-list" aria-label="Lista de proyectos">
          {PROJECTS.map((project) => (
            <div className="projects-list__item" key={project.title}>
              <ProjectCard {...project} />
            </div>
          ))}
        </section>
      ) : (
        <section
          className={`projects-carousel ${isLargeDesktop ? "projects-carousel--wide" : "projects-carousel--stacked"}`}
          aria-label="Carrusel de proyectos"
        >
          <div className="carousel-viewport">
            <div className="carousel-track" style={trackStyle}>
              {PROJECTS.map((project) => (
                <div className="carousel-slide" key={project.title}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-btn carousel-btn--left"
              onClick={handlePrev}
              aria-label="Proyecto anterior"
              disabled={!canSlide}
            >
              <img src="/assets/arrow.png" alt="" />
            </button>

            <button
              type="button"
              className="carousel-btn carousel-btn--right"
              onClick={handleNext}
              aria-label="Proyecto siguiente"
              disabled={!canSlide}
            >
              <img src="/assets/arrow.png" alt="" />
            </button>
          </div>
        </section>
      )}
    </main>
  );
}