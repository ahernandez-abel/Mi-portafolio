export default function Navbar() {
  const links = [
    { id: "about", label: "Sobre mí" },
    { id: "stack", label: "Tecnologías" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-wide text-white">
            Abel Hernandez
          </h1>
          <p className="text-xs text-slate-400">
            Full Stack Developer
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}