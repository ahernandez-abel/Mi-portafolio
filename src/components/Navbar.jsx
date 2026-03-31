import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "stack", "projects", "contact"];
      const scrollPos = window.scrollY + 150;

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(sec);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const navLinks = [
    { id: "about", label: "Sobre mí" },
    { id: "stack", label: "Stack" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-white/10 dark:bg-black/60 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-xl font-extrabold tracking-wide cursor-pointer"
        >
          Abel<span className="text-blue-500">Dev</span>
        </motion.h2>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm items-center relative">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-3 py-2 transition-colors duration-300
                ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-blue-500/20 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 p-2 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            {dark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-blue-400" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}