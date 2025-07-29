const Projects = () => {
  return (
    <section style={{ padding: "2rem", background: "#fafafa" }}>
      <h2>Proyectos destacados</h2>
      <ul>
        <li>
          <strong>App de facturación (Electron + React):</strong> Sincronización de citas con Google Calendar y generación de facturas PDF.
        </li>
        <li>
          <strong>Gestor de Asociación (NestJS + React):</strong> Gestión de clientes, productos, movimientos y autenticación con JWT.
        </li>
        <li>
          <strong>Traveling (Angular):</strong> Visualizador 3D de viajes y recuerdos.
        </li>
      </ul>
    </section>
  );
};

export default Projects;
