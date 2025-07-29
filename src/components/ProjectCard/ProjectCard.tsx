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
  return (
    <div className="project-card">
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
        {link && (
          <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        )}
      </div>
    </div>
  );
}
