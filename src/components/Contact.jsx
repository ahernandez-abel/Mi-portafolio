import { useState } from "react";



// Contact Section - Ultra Recruiter Killer
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Validación profesional
    if (!form.name.value || !form.email.value || !form.message.value) {
      setError("Por favor completa todos los campos.");
      return;
    }

    // Validación de email básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.value)) {
      setError("Por favor ingresa un email válido.");
      return;
    }

    setError(""); // Limpia errores
    form.submit();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 min-h-screen py-28 px-6 max-w-3xl mx-auto overflow-hidden"
    >
    
    
      {/* Fondo animado premium */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-linear-to-tr from-blue-900 via-slate-900 to-purple-900 opacity-40 animate-gradient blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.02),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.02),transparent_70%)]"></div>
      </div>

      {/* Header con animación fade-in y gradient */}
      <div className="text-center fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Contacto
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          ¿Listo para hablar de proyectos, ideas o colaboración?  
          Llena el formulario y te responderé rápido.
        </p>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/abelhernandezestevez@gmail.com"
        method="POST"
        className="mt-12 space-y-6 fade-in-up delay-1"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://tudominio.com/gracias" />

        {/* Nombre */}
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 placeholder:text-gray-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          required
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-300 placeholder:text-gray-400"
        />

        {/* Mensaje */}
        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows="6"
          required
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 resize-none placeholder:text-gray-400"
        />

        {/* Error message */}
        {error && (
          <p className="text-red-400 text-center font-medium">{error}</p>
        )}

        {/* Botón premium */}
        <button
          type="submit"
          className="w-full py-4 bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600
                     hover:from-purple-600 hover:via-blue-500 hover:to-cyan-500
                     rounded-xl font-semibold text-lg transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105"
        >
          Enviar mensaje
        </button>

        {/* Feedback visual */}
        {submitted && (
          <p className="text-green-400 mt-4 text-center font-medium fade-in-up animate-fade-in">
            ¡Gracias! Tu mensaje ha sido enviado.
          </p>
        )}
      </form>
    </section>
  );
}
