import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techs: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  techs,
  link,
}: ProjectCardProps) {
  const Wrapper: any = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper className="project-card" {...wrapperProps}>
      {/* Pin decorativo */}
      <img src="/assets/pin.png" alt="" aria-hidden="true" className="project-pin" />

      {/* Contenido */}
      <div className="project-content">
        <h3>{title}</h3>
        <img
          src={imageUrl}
          alt={title}
          className="project-image"
          loading="lazy"
          decoding="async"
        />
        <p>{description}</p>
        <div className="project-techs">
          {techs.map((tech, i) => (
            <span key={i} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
