import { LuDownload } from "react-icons/lu";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="postcard">
        {/* Nota / tarjeta */}
        <article className="note">
          <header className="note__header">
            <h1>Sobre mí</h1>
            <span className="paperclip" aria-hidden="true" />
          </header>

          <p className="note__lead">
            Soy <strong>Jennifer Román</strong>, desarrolladora <strong>Full-Stack</strong> con
            foco actual en <strong>React</strong> y experiencia real en apps de
            escritorio (Electron), sincronización con Google Calendar, generación de
            PDFs, y backends con <strong>NestJS</strong> y bases de datos <strong>SQL</strong>.
          </p>

          <p>
            Me encanta construir productos útiles con buen UX, cuidar los detalles
            (accesibilidad, rendimiento) y documentar bien para que otros puedan
            instalar y mantener el proyecto sin fricción.
          </p>

          <ul className="note__tags" aria-label="Tecnologías">
            <li>React</li>
            <li>Vite</li>
            <li>Electron</li>
            <li>NestJS</li>
            <li>PostgreSQL / SQLite</li>
            <li>Three.js</li>
          </ul>

          <div className="note__cta">
            <a className="btn" href="/assets/CV-Jennifer-Roman.pdf" download>
              <LuDownload aria-hidden="true" />
              <span>Descargar CV</span>
            </a>
          </div>
        </article>

        {/* Retrato con borde de sello */}
        <figure className="stamp">
          <img
            src="/assets/Jennifer.png"
            alt="Retrato de Jennifer Román"
            loading="lazy"
          />
          <figcaption className="visually-hidden">Jennifer Román</figcaption>
          <span className="tape tape--top" aria-hidden="true" />
          <span className="tape tape--bottom" aria-hidden="true" />
        </figure>
      </div>
    </section>
  );
}
