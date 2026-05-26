export default function Hero() {
  return (
    <section className="min-h-screen flex items-center professional-gradient">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 mb-8">
            Disponible para proyectos remotos y freelance
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Desarrollo software moderno con enfoque profesional.
          </h1>

          <p className="mt-8 text-lg text-slate-400 leading-8 max-w-2xl">
            Desarrollo aplicaciones web escalables con React, Node.js,
            PostgreSQL y .NET. Me enfoco en arquitectura limpia,
            rendimiento y experiencias modernas orientadas a negocio.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-white text-slate-900 px-7 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="border border-slate-600 px-7 py-4 rounded-2xl text-slate-200 hover:bg-slate-800 transition"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="card p-10">
          <div className="grid grid-cols-2 gap-5">
            {[
              ["3+", "Proyectos reales"],
              ["Full Stack", "Frontend & Backend"],
              ["React", "Interfaces modernas"],
              [".NET & SQL", "Sistemas empresariales"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl bg-slate-900/70 p-6 border border-slate-800"
              >
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-950 p-6 border border-slate-800">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Especialidades
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {["React", "Node.js", "Express", "PostgreSQL", "C#", ".NET", "Tailwind"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}