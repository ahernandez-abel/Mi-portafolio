import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import ParticlesBackground from "./components/ParticlesBackground";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300">
        <ParticlesBackground />
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
