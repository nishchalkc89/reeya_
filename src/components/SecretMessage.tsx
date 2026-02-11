import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

// ✏️ EDIT SECRET MESSAGE HERE
const SECRET_TEXT =
  "Reeya, there has been a small… technical error. My brain auto-saved your funniest photos without asking for permission.Before you press DELETE on me, just know — those pictures are my favorite because they show your real chaos mode.I promise to behave… after laughing one last time. 💻😂"
;

const SecretMessage = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="px-6 py-28 flex flex-col items-center text-center relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-romantic-gradient" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="font-script text-4xl md:text-5xl text-gradient-rose">
            A Secret For You
          </span>
          <p className="font-body text-muted-foreground text-lg mt-3 italic">
            Some words are meant only for your heart
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setRevealed(!revealed)}
          className="relative w-24 h-24 flex items-center justify-center animate-gentle-float"
        >
          <Heart
            className="w-24 h-24 text-primary fill-primary/70"
            style={{ filter: "drop-shadow(0 0 30px hsl(340 72% 52% / 0.5))" }}
          />
          <span className="absolute text-2xl">💌</span>
        </motion.button>

        <p className="text-muted-foreground font-body text-lg mt-6 mb-8 italic">
          Tap to reveal something special
        </p>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, height: "auto", scale: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card-glow glow-rose p-8 md:p-12 max-w-lg"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6" />
              <p className="font-body text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
                {SECRET_TEXT}
              </p>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-6" />
              <p className="font-script text-xl text-primary/50 mt-4">— Yours, always</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SecretMessage;
