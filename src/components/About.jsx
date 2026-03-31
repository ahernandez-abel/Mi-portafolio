import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import StarsBackground from "./StarsBackground";

export default function About() {
  const [counts, setCounts] = useState({
    apps: 0,
    fullstack: 0,
    production: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        apps: prev.apps < 3 ? prev.apps + 1 : 3,
        fullstack: prev.fullstack < 100 ? prev.fullstack + 5 : 100,
        production: prev.production < 100 ? prev.production + 5 : 100,
      }));
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-28 px-6 max-w-7xl mx-auto">

          {/* ⭐ FONDO DE ESTRELLAS */}
    <StarsBackground count={100} />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Sobre mí
        </h2>

        <div className="mt-6 inline-block px-6 py-2 text-sm rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 backdrop-blur-md">
          Full Stack Developer · 3 Proyectos Reales en Producción
        </div>
      </motion.div>

      {/* Métricas */}
      <div className="grid md:grid-cols-3 gap-10 mb-24 text-center">
        <Metric value={counts.apps} label="Aplicaciones desarrolladas" color="text-blue-400" />
        <Metric value={counts.fullstack} label="Stack completo dominado" suffix="%" color="text-purple-400" />
        <Metric value={counts.production} label="Deploy en producción" suffix="%" color="text-cyan-400" />
      </div>

      {/* Contenido principal */}
      <div className="grid md:grid-cols-2 gap-20 items-start">

        {/* Descripción + Información + Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Soy desarrollador Full Stack construyendo aplicaciones completas desde cero.
            Trabajo con <span className="text-blue-400 font-semibold">React</span> en frontend y
            <span className="text-purple-400 font-semibold"> Node.js, Express y .NET</span> en backend,
            integrando bases de datos como
            <span className="text-cyan-400 font-semibold"> PostgreSQL y SQL Server</span>.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            He desarrollado proyectos como <strong>Konquis-Legends</strong>,
            <strong> Minvex</strong> y una aplicación web personalizada
            para invitación de boda.
          </p>

          {/* Información Personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">
              Información Personal
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <InfoItem label="📍 Ubicación" value="Santo Domingo Norte, República Dominicana" />
              <InfoItem label="🎂 Edad" value="28 años" />
              <InfoItem label="🎓 Formación" value="Ingeniería de Software" />
              <InfoItem label="💼 Rol" value="Full Stack Developer" />
              <InfoItem label="🌎 Disponibilidad" value="Remoto / Presencial" />
              <InfoItem label="🗣 Idiomas" value="Español (Nativo) · Inglés (Basico)" />
              <InfoItem label="📧 Email" value="abelhernandezestevez@email.com" />
              <InfoItem label="📱 Teléfono" value="+1 809 447 2022" />
            </div>
          </motion.div>

          {/* Botón Descargar CV */}
          <motion.a
            href="/cv-abel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                       bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500
                       text-white font-semibold shadow-lg shadow-blue-500/30
                       hover:shadow-purple-500/40 transition-all duration-300"
          >
            <Download size={18} />
            Descargar CV
          </motion.a>

          {/* Timeline */}
          <div className="mt-14 border-l border-white/10 pl-8 space-y-10">
            <TimelineItem
              title="Konquis-Legends"
              desc="React · Node.js · Express · PostgreSQL · Producción"
              color="bg-blue-500"
            />
            <TimelineItem
              title="Minvex"
              desc="C# · .NET · SQL Server · Arquitectura por capas"
              color="bg-purple-500"
            />
            <TimelineItem
              title="Invitación Web"
              desc="HTML · CSS · Responsive · Deploy final"
              color="bg-cyan-500"
            />
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <SkillBar title="React & Frontend Development" width="85%" />
          <SkillBar title="Node.js & Express Backend" width="85%" />
          <SkillBar title=".NET & C# Backend" width="80%" />
          <SkillBar title="SQL (PostgreSQL / SQL Server)" width="80%" />
        </motion.div>

      </div>
    </section>
  );
}

/* -------- Info Item -------- */
function InfoItem({ label, value }) {
  return (
    
    <div className="flex flex-col">
      <span className="text-xs text-gray-600 dark:text-gray-400">
        {label}
        
      </span>
      <span className="font-medium text-gray-900 dark:text-white">
        {value}
      </span>
    </div>
  );
}

/* -------- Metric -------- */
function Metric({ value, label, color, suffix }) {
  return (
    <div>
    
      <h3 className={`text-4xl font-bold ${color}`}>
        {value}{suffix}
      </h3>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
}

/* -------- Timeline -------- */
function TimelineItem({ title, desc, color }) {
  return (
    <div className="relative group">
      {/* ⭐ FONDO DE ESTRELLAS */}
    <StarsBackground count={50} />
      <span className={`absolute -left-8.5 top-1 w-4 h-4 rounded-full ${color}`}></span>
      <h4 className="text-white font-semibold group-hover:text-blue-400 transition">
        {title}
      </h4>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

/* -------- Skill Bar -------- */
function SkillBar({ title, width }) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between mb-3">
        {/* ⭐ FONDO DE ESTRELLAS */}
    <StarsBackground count={50} />
        <span className="text-gray-300 font-semibold">{title}</span>
        <span className="text-gray-500 text-sm">{width}</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500"
        />
      </div>
    </div>
  );
}