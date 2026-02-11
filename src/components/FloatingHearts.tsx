import { useEffect, useRef } from "react";

const FloatingHearts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const heartSymbols = ["❤", "♥", "💕", "🌹", "✨", "💗"];

    const createHeart = () => {
      const heart = document.createElement("span");
      const symbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      heart.innerHTML = symbol;
      heart.className = "animate-float-heart fixed pointer-events-none z-0";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.fontSize = Math.random() * 14 + 8 + "px";
      heart.style.opacity = "0";
      heart.style.color = `hsl(340 ${50 + Math.random() * 30}% ${40 + Math.random() * 30}%)`;
      heart.style.setProperty("--duration", Math.random() * 8 + 8 + "s");
      heart.style.setProperty("--delay", "0s");
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 16000);
    };

    // Create rose petals too
    const createPetal = () => {
      const petal = document.createElement("span");
      petal.innerHTML = "🌸";
      petal.className = "animate-rose-petal fixed pointer-events-none z-0";
      petal.style.left = Math.random() * 100 + "%";
      petal.style.top = "-20px";
      petal.style.fontSize = Math.random() * 10 + 8 + "px";
      petal.style.opacity = "0";
      petal.style.setProperty("--duration", Math.random() * 8 + 10 + "s");
      petal.style.setProperty("--delay", "0s");
      container.appendChild(petal);
      setTimeout(() => petal.remove(), 18000);
    };

    const heartInterval = setInterval(createHeart, 1200);
    const petalInterval = setInterval(createPetal, 2500);
    return () => {
      clearInterval(heartInterval);
      clearInterval(petalInterval);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0" />;
};

export default FloatingHearts;
