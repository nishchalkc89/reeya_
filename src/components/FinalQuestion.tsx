import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ✏️ EDIT FINAL QUESTION TEXT HERE
const FINAL_QUESTION = "will you keep picking me… or should I send more bad photos?” 😂";

const FinalQuestion = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const heartSymbols = ["❤", "💕", "💗", "♥", "💖", "🌹", "✨"];

    const spawnHeart = () => {
      const heart = document.createElement("span");
      heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      heart.className = "animate-tiny-heart absolute pointer-events-none";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.bottom = "0";
      heart.style.fontSize = Math.random() * 14 + 8 + "px";
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 3500);
    };

    const interval = setInterval(spawnHeart, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-28 relative">
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center relative z-10"
      >
        <span className="font-script text-3xl text-primary/40 block mb-6">
          One last question...
        </span>
        <h2 className="font-display text-3xl md:text-6xl text-foreground animate-pulse-glow leading-snug">
          {FINAL_QUESTION}
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto my-8" />
        <p className="font-script text-3xl md:text-4xl text-gradient-gold mt-4">
          Forever yours ❤️
        </p>
      </motion.div>
    </section>
  );
};

export default FinalQuestion;
