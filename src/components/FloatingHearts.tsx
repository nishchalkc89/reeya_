import { useEffect, useRef } from "react";

const FloatingHearts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createHeart = () => {
      const heart = document.createElement("span");
      heart.innerHTML = "❤";
      heart.className = "animate-float-heart fixed text-primary/30 pointer-events-none z-0";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.fontSize = Math.random() * 16 + 10 + "px";
      heart.style.setProperty("--duration", Math.random() * 6 + 6 + "s");
      heart.style.setProperty("--delay", "0s");
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 12000);
    };

    const interval = setInterval(createHeart, 1500);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0" />;
};

export default FloatingHearts;
