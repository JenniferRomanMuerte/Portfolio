import "./Projects.css";

export default function Projects() {
  return (
    <main className="projects-container">
      <div className="projects-overlay" />
      <video className="projects-video" autoPlay loop muted playsInline>
        <source src="/assets/VideoProject.mp4" type="video/mp4" />
        Tu navegador no soporta el vídeo.
      </video>

      <div className="projects-content">
        <h1 className="projects-title">Mis Proyectos</h1>
        {/* Aquí irán las tarjetas, lista o galería */}
      </div>
    </main>
  );
}
