const projects = [
  {
    title: "DiamondStats",
    description:
      "Plataforma SaaS para gestión de estadísticas deportivas y administración de equipos.",
    tech: "React · Node.js · PostgreSQL",
  },
  {
    title: "MINVEX",
    description:
      "Sistema de inventario médico con arquitectura empresarial y control de suministros.",
    tech: "C# · .NET · SQL Server",
  },
  {
    title: "Konquis Legends",
    description:
      "Aplicación web con autenticación, progresión y arquitectura full stack.",
    tech: "React · Express · PostgreSQL",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">
          Portafolio
        </p>

        <h2 className="section-title">
          Proyectos destacados
        </h2>

        <p className="section-subtitle">
          Aplicaciones enfocadas en negocio, administración y plataformas web modernas.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.title} className="card p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Proyecto
              </span>

              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              {project.description}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-sm text-slate-500">
                {project.tech}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}