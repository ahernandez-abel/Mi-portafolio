export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="card p-10 lg:p-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">
          Contacto
        </p>

        <h2 className="text-4xl md:text-5xl font-black text-white">
          Construyamos algo serio y profesional.
        </h2>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
          Disponible para colaborar en proyectos web, sistemas administrativos,
          plataformas SaaS y desarrollo full stack.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:abel@example.com"
            className="bg-white text-slate-900 px-7 py-4 rounded-2xl font-semibold"
          >
            Enviar correo
          </a>

          <a
            href="https://github.com"
            className="border border-slate-700 px-7 py-4 rounded-2xl text-slate-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}