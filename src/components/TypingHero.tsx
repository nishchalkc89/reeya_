import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ✏️ EDIT ROMANTIC MESSAGE HERE
const ROMANTIC_MESSAGE =
  "Every moment with you feels like a beautiful story written in time... You are the reason I believe in magic, in fate, and in forever. With you, even the ordinary becomes extraordinary. I love you more than words could ever say.";

const TypingHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < ROMANTIC_MESSAGE.length) {
        setDisplayedText(ROMANTIC_MESSAGE.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center"
      >
        <h2 className="font-display text-lg tracking-[0.3em] uppercase text-primary/60 mb-8">
          A Message For You
        </h2>
        <p className="font-display text-2xl md:text-4xl leading-relaxed text-foreground/90">
          "{displayedText}
          <span className={`${isComplete ? "hidden" : "animate-blink"} text-primary`}>|</span>
          {isComplete && '"'}
        </p>
      </motion.div>
    </section>
  );
};

export default TypingHero;
