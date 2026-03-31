import Reveal from "./Reveal";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import StarsBackground from "./StarsBackground";
import CardStars from "./CardStars";



export default function Projects() {
  const projects = [
    {
      title: "Konquis-Legends",
      description:
        "Plataforma web gamificada con autenticación JWT, gestión de usuarios y sistema de progreso. Backend en Node.js con Express y base de datos PostgreSQL desplegado en producción.",
      tech: "React • Node.js • Express • PostgreSQL",
      githubFrontend:
        "https://github.com/ahernandez-abel/Konquis-Legends-Frontend",
      githubBackend:
        "https://github.com/ahernandez-abel/Konquis-Legends-Backend",
      demo: "https://konquis-legends-frontend-30xz.onrender.com/",
      complexity: "⭐⭐⭐",
    },
    {
      title: "MINVEX - Sistema de Inventario Médico",
      description:
        "Sistema de gestión de inventario para suministros médicos con modelado relacional avanzado en SQL Server y arquitectura por capas en C# (.NET).",
      tech: "C# • .NET • SQL Server",
      github:
        "https://github.com/ahernandez-abel/SystemInventaryMinvex",
      complexity: "⭐⭐⭐⭐",
    },
    {
      title: "Invitación de Boda Interactiva",
      description:
        "Landing page personalizada desarrollada con HTML y CSS, optimizada para dispositivos móviles y desplegada en producción.",
      tech: "HTML • CSS",
      github:
        "https://github.com/ahernandez-abel/invitacion-boda",
      demo: "https://invitacion-boda4bbb41.netlify.app/",
      complexity: "⭐",
    },
    {
      title: "Tienda Virtual Responsive",
      description:
        "Tienda online desarrollada con HTML y CSS puro y un poco de JavaScript, diseño moderno responsive, catálogo de productos.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/ahernandez-abel/MI-TIENDA",
      demo: "https://abeldev-store.netlify.app/",
      complexity: "⭐⭐",
    },
  ];

  return (
  <section
    id="projects"
    className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden"
  >
    
    {/* ⭐ FONDO DE ESTRELLAS */}
    <StarsBackground count={50} />

    <Reveal>
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center
                   bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500
                   bg-clip-text text-transparent"
      >
        Proyectos Destacados
      </h2>
    </Reveal>


      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              className="group relative 
                         bg-white/5
                         border border-white/10
                         rounded-xl p-6
                         hover:border-blue-500 
                         hover:-translate-y-3 hover:scale-105
                         transition-all duration-500 cursor-pointer
                         shadow-md hover:shadow-xl 
                         backdrop-blur-md overflow-hidden"
>
                         
  {/* ⭐ ESTRELLAS INTERNAS */}
  <CardStars count={15} />
            
              {/* Glow */}
              <div
                className="absolute inset-0 
                           bg-linear-to-tr from-blue-600 via-cyan-500 to-purple-600
                           opacity-10 blur-3xl scale-110 
                           transition-all duration-500 pointer-events-none
                           group-hover:opacity-30 group-hover:scale-125"
              ></div>

              <div className="flex justify-between items-center mb-3 relative z-10">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-yellow-400 font-semibold text-sm">
                  {project.complexity}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4 relative z-10">
                {project.description}
              </p>

              <p className="text-blue-400 text-xs mb-6 relative z-10">
                {project.tech}
              </p>

              {/* BOTONES */}
              <div className="flex gap-3 relative z-10 flex-wrap">

                {/* DEMO */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2
                              bg-linear-to-tr from-blue-600 via-cyan-500 to-purple-600
                               rounded-xl font-semibold text-sm text-white
                               transition-all duration-500 shadow-md hover:shadow-xl
                               hover:scale-105"
                  >
                    <FaExternalLinkAlt />
                    Ver Demo
                  </a>
                )}

                {/* FRONTEND */}
                {project.githubFrontend && (
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2
                               bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600
                               hover:from-purple-600 hover:via-blue-500 hover:to-cyan-500
                               rounded-xl font-semibold text-sm text-white
                               transition-all duration-500 shadow-md hover:shadow-xl
                               hover:scale-105"
                  >
                    <FaGithub />
                    Frontend
                  </a>
                )}

                {/* BACKEND */}
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2
                               bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600
                               hover:from-purple-600 hover:via-blue-500 hover:to-cyan-500
                               rounded-xl font-semibold text-sm text-white
                               transition-all duration-500 shadow-md hover:shadow-xl
                               hover:scale-105"
                  >
                    <FaGithub />
                    Backend
                  </a>
                )}

                {/* REPO ÚNICO */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2
                               bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600
                               hover:from-purple-600 hover:via-blue-500 hover:to-cyan-500
                               rounded-xl font-semibold text-sm text-white
                               transition-all duration-500 shadow-md hover:shadow-xl
                               hover:scale-105"
                  >
                    <FaGithub />
                    Ver código
                  </a>
                )}

              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}