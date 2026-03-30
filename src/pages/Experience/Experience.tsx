import "./Experience.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useState, Fragment } from "react";
import Modal from "../../components/Modal/Modal";
import type { IconType } from "react-icons";

interface ExperienceItem {
  id: string;
  Icon: IconType;
  title: string;
  subtitle: string;
  date: string;
  modalContent: string[];
  cta?: { text: string; href: string };
}

interface EducationItem {
  Icon: IconType;
  title: string;
  institution?: string;
  details: string[];
  date: string;
}

interface CourseItem {
  name: string;
  date: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    id: "freelance",
    Icon: FaBriefcase,
    title: "Proyectos Freelance – Desarrolladora Web",
    subtitle: "Aplicaciones multiplataforma y páginas corporativas",
    date: "2024 – 2025",
    modalContent: [
      "- Desarrollo de páginas web corporativas responsive, con optimización SEO on-page, estructura semántica y mejora de conversión orientada a visibilidad y captación de clientes.",
      "- Diseño y desarrollo de web corporativa con portfolio multimedia y blog autogestionable, enfocada a contenidos visuales, rendimiento y facilidad de actualización por parte del cliente.",
      "- Implementación de un sistema de registro de socios, generación de contratos, control de accesos, gestion de inventario y contabilidad.",
      "- Desarrollo de un juego web interactivo tipo ruleta, con gestión avanzada de estado, lógica de turnos, validación de letras, puntuación dinámica y enfoque en experiencia de usuario.",
    ],
    cta: { text: "Ver proyectos completos", href: "/projects" },
  },
  {
    id: "horus",
    Icon: FaBriefcase,
    title: "Horus Financial – Desarrolladora Web Full Stack",
    subtitle: "Plataforma web de gestión de inventario y depósitos",
    date: "Mar 2025 – Sep 2025",
    modalContent: [
      "- Desarrollo de plataforma web de gestión de inventario y depósitos, con monitorización en tiempo real.",
      "- Implementación de alertas automáticas y reportes exportables.",
      "- Creación de un dashboard analítico con métricas clave y gráficos interactivos.",
      "- Diseño y desarrollo de la web corporativa con área privada y gestión documental.",
    ],
  },
  {
    id: "vtlab",
    Icon: FaBriefcase,
    title: "VT-LAB – Desarrolladora Web (Prácticas FP – Proyecto I+D)",
    subtitle: "Soluciones web con React, Python y Knowledge Graphs",
    date: "2023 – 2024",
    modalContent: [
      "- Desarrollo de interfaces web con HTML, CSS, Bootstrap y JavaScript.",
      "- Creación de componentes reutilizables para mejorar eficiencia.",
      "- Soluciones web con React (frontend) y Python (backend).",
      "- Integración de modelos BIM con datos externos.",
      "- Gestión de bases de datos grafo (Neo4j) para Knowledge Graphs.",
      "- Validaciones de datos con JSON Schema para calidad e interoperabilidad.",
      "- Automatización de procesos con Celery, optimizando tareas asíncronas.",
    ],
  },
];

const EDUCATION: EducationItem[] = [
  {
    Icon: FaGraduationCap,
    title: "Bootcamp de Programación Web – Adalab",
    details: [
      "Desarrollo web con HTML, CSS, JavaScript, React, Node.js, Express, PostgreSQL.",
      "Aplicación de Scrum y metodologías ágiles.",
      "Uso de Git y GitHub para trabajo colaborativo.",
    ],
    date: "Sep 2025 - Dic 2025",
  },
  {
    Icon: FaGraduationCap,
    title: "FP Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    institution: "IFP",
    details: [
      "Programación en HTML, CSS, Java, SQL, SpringBoot, Android Studio, Bootstrap, UML.",
      "Desarrollo multiplataforma y gestión de bases de datos.",
      "Diseño de interfaces y experiencia de usuario.",
      "Proyecto final: Web de recetas con Angular y SpringBoot.",
    ],
    date: "2021 – 2023",
  },
];

const COURSES: CourseItem[] = [
  { name: "SEO: Posicionar una Web en Google – Udemy", date: "2024" },
  { name: "Git y GitHub – Udemy", date: "2024" },
  { name: "JavaScript Básico – OpenBootcamp", date: "2023" },
  { name: "Universidad CSS y HTML – Udemy", date: "2022" },
];

export default function Experience() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <main className="experience-container">
      <div className="experience-bg" />
      <div className="experience-overlay-pattern" />

      <div className="experience-content">
        {/* EXPERIENCIA */}
        <div className="section-wrapper exp-section">
          <h1 className="experience-title">Experiencia</h1>
          <section className="experience-box">
            {EXPERIENCE.map((item) => (
              <Fragment key={item.id}>
                <div
                  className="experience-item clickable"
                  onClick={() => setOpenModal(item.id)}
                >
                  <item.Icon className="experience-icon" />
                  <div>
                    <strong>{item.title}</strong>
                    <br />
                    {item.subtitle}
                  </div>
                  <span className="experience-date">{item.date}</span>
                </div>
                <Modal
                  isOpen={openModal === item.id}
                  onClose={() => setOpenModal(null)}
                  title={item.title}
                  subtitle={item.date}
                  content={item.modalContent}
                  cta={item.cta}
                />
              </Fragment>
            ))}
          </section>
        </div>

        {/* FORMACIÓN */}
        <div className="section-wrapper form-section">
          <h1 className="experience-title">Formación Técnica</h1>
          <section className="experience-box">
            {EDUCATION.map((item) => (
              <div key={item.title} className="experience-item">
                <item.Icon className="experience-icon" />
                <div className="experience-text">
                  <strong>{item.title}</strong>
                  {item.institution && <><br />{item.institution}</>}
                  <p>
                    {item.details.map((detail) => (
                      <span key={detail}>{detail}<br /></span>
                    ))}
                  </p>
                </div>
                <span className="experience-date">{item.date}</span>
              </div>
            ))}
          </section>
        </div>

        {/* CURSOS */}
        <div className="section-wrapper cursos-section">
          <h2 className="experience-subtitle">🧠 Cursos Complementarios</h2>
          <section className="experience-grid">
            {COURSES.map((course) => (
              <div key={course.name} className="experience-card">
                <FaGraduationCap className="experience-icon" />
                <div>{course.name}</div>
                <span className="experience-date">{course.date}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
