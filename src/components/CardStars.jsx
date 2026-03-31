import { useMemo } from "react";

export default function CardStars({ count = 12 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      id: crypto.randomUUID(),
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animation: `floatStar ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
