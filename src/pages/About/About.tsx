import "./About.css";

export default function About() {
  return (
    <section className="about">
      {/* 1) Título */}
      <h1 className="about__title">Sobre mí</h1>

      {/* 2) Polaroid (png único) */}
      <figure className="polaroid">
        <img
          src="/assets/jennifer-polaroid.png"
          alt="Jennifer Román en una foto estilo polaroid"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 96vw, 720px"
        />
      </figure>

      {/* 3) Libreta con el texto (imagen única) */}
      <figure className="notebook-img">
        <picture>
          <source type="image/png" srcSet="/assets/cuaderno-texto.png 1x" />
          <img
            src="/assets/cuaderno-texto.png"
            alt="Sobre mí: desarrolladora web full stack con experiencia en front-end moderno y back-end robusto; React, Angular, Node.js, Three.js y Electron; soluciones intuitivas y bien estructuradas."
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 98vw, 720px"
          />
        </picture>

        {/* A11y/SEO (oculto visualmente) */}
        <figcaption className="sr-only">
          Desarrolladora web full stack con experiencia en proyectos reales que combinan front-end
          moderno y back-end robusto. He trabajado con React, Angular, Node.js, Three.js y Electron,
          creando aplicaciones web y de escritorio. Tras una trayectoria en atención al cliente y el
          ámbito social, he canalizado mi capacidad resolutiva y mi pasión por la tecnología hacia el
          desarrollo de soluciones intuitivas, eficientes y bien estructuradas. Me motiva el
          aprendizaje continuo y disfruto enfrentando retos.
        </figcaption>
      </figure>
    </section>
  );
}
