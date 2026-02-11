import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

// ✏️ EDIT SECRET MESSAGE HERE
const SECRET_TEXT =
  "You are not just my love — you are my home, my peace, my forever adventure. I choose you today, tomorrow, and every day after that. Thank you for being the most beautiful chapter in my story. 💕";

const SecretMessage = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="px-6 py-24 flex flex-col items-center text-center">
      <h2 className="font-display text-lg tracking-[0.3em] uppercase text-primary/60 mb-12">
        A Secret For You
      </h2>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setRevealed(!revealed)}
        className="relative w-20 h-20 flex items-center justify-center"
      >
        <Heart
          className="w-20 h-20 text-primary fill-primary/80 drop-shadow-lg"
          style={{ filter: "drop-shadow(0 0 20px hsl(340 65% 55% / 0.4))" }}
        />
        <span className="absolute text-primary-foreground text-xs font-display font-semibold">
          💌
        </span>
      </motion.button>

      <p className="text-muted-foreground font-body text-lg mt-4 mb-6">
        Tap to reveal something special
      </p>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card glow-rose p-8 md:p-10 max-w-lg mt-4"
          >
            <p className="font-body text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
              {SECRET_TEXT}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SecretMessage;
