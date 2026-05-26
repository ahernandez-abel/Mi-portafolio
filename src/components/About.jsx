export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">
            Sobre mí
          </p>

          <h2 className="section-title">
            Desarrollo soluciones pensadas para producción.
          </h2>

          <p className="section-subtitle">
            He trabajado en sistemas de inventario, plataformas web y aplicaciones orientadas a gestión de datos y automatización. Mi enfoque combina diseño moderno, estructura limpia y escalabilidad.
          </p>
        </div>

        <div className="space-y-5">
          {[
            {
              title: "Arquitectura limpia",
              text: "Organización profesional del frontend y backend para proyectos mantenibles."
            },
            {
              title: "Experiencia moderna",
              text: "Interfaces fluidas, responsive y enfocadas en claridad visual."
            },
            {
              title: "Bases de datos",
              text: "Diseño relacional con PostgreSQL y SQL Server para aplicaciones reales."
            }
          ].map((item) => (
            <div key={item.title} className="card p-7">
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-400 leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}