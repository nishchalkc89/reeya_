import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

// ✏️ EDIT PHOTOS AND CAPTIONS HERE
const memories = [
  { src: memory1, caption: "The day our story began" },
  { src: memory2, caption: "Holding on, never letting go" },
  { src: memory3, caption: "Our perfect evening together" },
  { src: memory4, caption: "Cozy mornings with you" },
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
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="font-display text-lg tracking-[0.3em] uppercase text-primary/60 text-center mb-16">
        Our Memories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {memories.map((memory, i) => (
          <motion.div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            data-index={i}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={
              visibleItems.has(i)
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.9, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={memory.src}
                alt={memory.caption}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <p className="font-body text-lg text-foreground/80 p-5 text-center italic">
              {memory.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGallery;
