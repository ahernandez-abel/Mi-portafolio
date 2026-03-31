import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "React · Node.js · Express · .NET · SQL Server",
    "Production Web Applications",
    "Open to Remote Opportunities",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    let timeout;
    const current = roles[index];

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1200);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, 40);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 blur-[100px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 text-sm rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-400 backdrop-blur-md">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
            Disponible para proyectos 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hola, soy <br />
            <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Abel Hernández
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl font-semibold text-gray-300 h-10">
            {text}
            <span className="inline-block w-1 h-7 bg-blue-400 ml-2 animate-pulse"></span>
          </p>

          <p className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed">
            Desarrollo aplicaciones web escalables y sistemas robustos con 
            arquitectura limpia, backend sólido y enfoque en rendimiento y experiencia de usuario.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl font-semibold text-lg
                         bg-linear-to-r from-blue-600 to-cyan-500
                         hover:from-purple-600 hover:to-blue-500
                         transition-all duration-500 shadow-2xl hover:scale-105"
            >
              🚀 Ver Proyectos
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl font-semibold text-lg
                         border border-gray-600 hover:border-blue-500
                         hover:bg-blue-500/10
                         transition-all duration-500 backdrop-blur-md hover:scale-105"
            >
              Contacto
            </a>
          </div>


        </motion.div>

        {/* RIGHT SIDE (Visual Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

            <div className="flex justify-between text-sm text-gray-400 mb-4">
              <span>Portfolio Preview</span>
              <span>v2026</span>
            </div>

            <div className="space-y-4">
              <div className="h-3 bg-blue-500/40 rounded-full w-3/4"></div>
              <div className="h-3 bg-purple-500/40 rounded-full w-2/3"></div>
              <div className="h-3 bg-cyan-500/40 rounded-full w-1/2"></div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/10 text-sm text-gray-300 font-mono">
              {"<CleanArchitecture />"}
              <br />
              {"<ScalableBackend />"}
              <br />
              {"<ModernFrontend />"}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}