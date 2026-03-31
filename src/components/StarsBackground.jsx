import { useEffect, useState } from "react";

export default function StarsBackground({ count = 40 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
  }, []);

  const generateStars = () => {
    const newStars = Array.from({ length: count }).map(() => ({
      id: crypto.randomUUID(),
      size: Math.random() * 4 + 2, // tamaño entre 2px y 6px
      left: Math.random() * 100, // posición horizontal %
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5, // duración animación
    }));

    setStars(newStars);
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute bg-white rounded-full animate-star"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.left}%`,
            bottom: "-10px",
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
