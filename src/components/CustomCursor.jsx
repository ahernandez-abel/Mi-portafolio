import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest(".interactive, a, button")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2"
    >
      {/* Cursor principal */}
      <div
        className={`
          rounded-full bg-blue-500
          transition-all duration-150
          ${hovering ? "w-12 h-12 opacity-40 animate-pulse-glow" : "w-4 h-4 opacity-90"}
        `}
        style={{
          boxShadow: hovering
            ? "0 0 20px 6px rgba(59, 130, 246, 0.6), 0 0 35px 12px rgba(59, 130, 246, 0.3)"
            : "0 0 5px 1px rgba(59, 130, 246, 0.5)",
        }}
      />
    </div>
  );
}
