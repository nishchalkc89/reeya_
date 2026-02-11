import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ✏️ EDIT ROMANTIC MESSAGE HERE
const ROMANTIC_MESSAGE =
  "Reeya... from the very first moment I saw you, something inside me changed forever. You became my reason to smile, my reason to dream, my reason to believe that love is the most beautiful thing in this world. Every heartbeat whispers your name. Every sunrise reminds me how lucky I am. You are not just my love — you are my entire universe. I will choose you, again and again, without pause, without doubt, in a heartbeat. Always. Forever. Only you.";

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
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-2xl text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="font-script text-5xl md:text-7xl text-gradient-rose">
            Dear Reeya
          </span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto my-8"
        />

        <p className="font-display text-xl md:text-3xl leading-relaxed text-foreground/85 italic">
          "{displayedText}
          <span className={`${isComplete ? "hidden" : "animate-blink"} text-primary`}>|</span>
          {isComplete && '"'}
        </p>

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10"
          >
            <span className="font-script text-2xl text-primary/60">— With all my love ♥</span>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default TypingHero;
