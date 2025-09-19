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
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      className="project-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/assets/notebook_page.webp" alt="hoja" className="paper-bg" />

      <div className="project-content">
        <h3>{title}</h3>
        <img src={imageUrl} alt={title} className="project-image" />
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
