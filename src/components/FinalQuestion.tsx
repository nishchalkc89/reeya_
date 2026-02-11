import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ✏️ EDIT FINAL QUESTION TEXT HERE
const FINAL_QUESTION = "Will you keep choosing me every day?";

const FinalQuestion = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spawnHeart = () => {
      const heart = document.createElement("span");
      heart.innerHTML = ["❤", "💕", "💗", "♥"][Math.floor(Math.random() * 4)];
      heart.className = "animate-tiny-heart absolute pointer-events-none";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.bottom = "0";
      heart.style.fontSize = Math.random() * 12 + 10 + "px";
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    };

    const interval = setInterval(spawnHeart, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-24 relative">
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <h2 className="font-display text-3xl md:text-5xl text-foreground animate-pulse-glow leading-snug">
          {FINAL_QUESTION}
        </h2>
        <p className="text-primary/60 font-body text-xl mt-6">Forever yours ❤️</p>
      </motion.div>
    </section>
  );
};

export default FinalQuestion;
