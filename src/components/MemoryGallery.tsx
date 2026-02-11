import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";

// ✏️ EDIT PHOTOS AND CAPTIONS HERE — replace images with your own photos of Reeya
const memories = [
  { src: memory1, caption: "Level 1: Baby Mode Activated” 😄", date: "Chapter One" },
  { src: memory2, caption: "Acting serious… but we were literally just joking.", date: "Chapter Two" },
  { src: memory3, caption: "Zero posing, 100% us 😌.", date: "Chapter Three" },
  { src: memory4, caption: "Movie date — zero focus on the movie.” 😄", date: "Chapter Four" },

];

const MemoryGallery = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-24 max-w-5xl mx-auto relative">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="font-script text-4xl md:text-5xl text-gradient-rose">
          Our Memories
        </span>
        <p className="font-body text-muted-foreground text-lg mt-3 italic">
          Every photo holds a thousand whispered I-love-yous
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-6" />
      </motion.div>

      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-48 bottom-24 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

      <div className="space-y-16 md:space-y-24 relative">
        {memories.map((memory, i) => (
          <motion.div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            data-index={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 30 }}
            animate={
              visibleItems.has(i)
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 30 }
            }
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}
          >
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60 glow-border" />

            <div className="glass-card overflow-hidden group cursor-pointer flex-1 max-w-lg w-full">
              <div className="overflow-hidden rounded-t-2xl relative">
                <img
                  src={memory.src}
                  alt={memory.caption}
                  className="w-full h-64 md:h-80 object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 text-center">
                <span className="font-display text-xs tracking-[0.3em] uppercase text-primary/50 block mb-2">
                  {memory.date}
                </span>
                <p className="font-body text-xl text-foreground/80 italic">
                  {memory.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGallery;
