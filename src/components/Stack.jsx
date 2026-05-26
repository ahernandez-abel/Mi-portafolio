const stack = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "SQL Server",
  "Tailwind CSS",
  ".NET",
  "Git & GitHub",
];

export default function Stack() {
  return (
    <section id="stack" className="section-container">
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">
          Stack Tecnológico
        </p>

        <h2 className="section-title">
          Tecnologías con las que trabajo
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stack.map((item) => (
          <div
            key={item}
            className="card p-8 hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold text-white">
              {item}
            </h3>

            <p className="mt-3 text-slate-400 leading-7">
              Desarrollo enfocado en rendimiento, mantenibilidad y experiencia de usuario profesional.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}