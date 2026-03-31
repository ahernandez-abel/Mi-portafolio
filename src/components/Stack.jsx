import { motion, useMotionValue, useTransform } from "framer-motion";
import StarsBackground from "./StarsBackground";

import ParticlesBackground from "./ParticlesBackground";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

/* SVG Oficial C# */
function CSharpIcon({ className }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <polygon fill="#9B4F96" points="64,4 120,36 120,92 64,124 8,92 8,36" />
      <path
        fill="#fff"
        d="M79.8 82.5c-4.5 2.6-9.7 4-15.1 4-16.6 0-30-13.4-30-30s13.4-30 30-30c5.4 0 10.6 1.4 15.1 4v10.5c-4.1-4.1-9.7-6.6-15.9-6.6-12.5 0-22.6 10.1-22.6 22.6s10.1 22.6 22.6 22.6c6.2 0 11.8-2.5 15.9-6.6v9.9z"
      />
      <rect x="83" y="54" width="25" height="6" fill="#fff" />
      <rect x="83" y="68" width="25" height="6" fill="#fff" />
    </svg>
  );
}

export default function Stack() {
  const technologies = [
    { name: "React", color: "#38bdf8", icon: <FaReact className="text-5xl" /> },
    { name: "Node.js", color: "#22c55e", icon: <FaNodeJs className="text-5xl" /> },
    { name: "Express", color: "#aaaaaa", icon: <SiExpress className="text-5xl" /> },
    { name: "PostgreSQL", color: "#3b82f6", icon: <SiPostgresql className="text-5xl" /> },
    { name: "SQL Server", color: "#ef4444", icon: <FaDatabase className="text-5xl" /> },
    { name: "JavaScript", color: "#facc15", icon: <FaJs className="text-5xl" /> },
    { name: "Tailwind", color: "#06b6d4", icon: <SiTailwindcss className="text-5xl" /> },
    { name: "Git", color: "#f97316", icon: <FaGitAlt className="text-5xl" /> },
    { name: "C#", color: "#9B4F96", icon: <CSharpIcon className="w-14 h-14" /> },
  ];

  return (
    <section id="stack" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* ⭐ FONDO DE ESTRELLAS */}
    <StarsBackground count={100} />

      {/* Partículas interactivas */}
      <ParticlesBackground />

      {/* Fondo glow ambiental */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-3xl opacity-40" />

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-24 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
      >
        Stack Tecnológico
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-16 place-items-center">
        {technologies.map((tech, index) => (
          <TechCard key={index} tech={tech} delay={index * 0.08} />
        ))}
      </div>

    </section>
  );
}

function TechCard({ tech, delay }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [18, -18]);
  const rotateY = useTransform(x, [-100, 100], [-18, 18]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ delay, duration: 0.9 }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="relative w-36 h-36 group"
    >
      {/* Aura dinámica */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-500"
        style={{ backgroundColor: tech.color }}
      />

      {/* Card Glass 3D */}
      <div
        className="relative flex items-center justify-center w-full h-full
                   rounded-3xl bg-white/5 border border-white/10
                   backdrop-blur-xl shadow-2xl
                   transition-all duration-500
                   group-hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]"
      >
        <div style={{ color: tech.color }}>
          {tech.icon}
        </div>
      </div>

      {/* Label */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-300 opacity-80">
        {tech.name}
      </div>
    </motion.div>
  );
}