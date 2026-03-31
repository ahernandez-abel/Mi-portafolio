import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 40 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.3 },
          links: {
            enable: true,
            distance: 150,
            opacity: 0.2,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
