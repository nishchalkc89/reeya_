import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart } from "lucide-react";

interface LockScreenProps {
  onUnlock: () => void;
}

// ✏️ EDIT PASSWORD HERE
const SECRET_PASSWORD = "iloveyou";

const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === SECRET_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`glass-card p-10 md:p-14 max-w-md w-full mx-6 text-center ${shaking ? "animate-shake" : ""}`}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Lock className="w-12 h-12 text-primary mx-auto" />
        </motion.div>

        <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          Our Story
        </h1>
        <p className="text-muted-foreground text-lg mb-8 font-body">
          Enter the password to unlock my heart ❤️
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type the magic word..."
            className="w-full bg-muted/50 border border-border/50 rounded-xl px-5 py-3.5 text-center text-foreground text-lg font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 glow-border transition-all duration-300"
          />

          <button
            type="submit"
            className="w-full bg-primary/90 hover:bg-primary text-primary-foreground font-display text-lg py-3.5 rounded-xl transition-all duration-300 hover:glow-border flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Unlock My Heart
          </button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-primary/80 mt-5 font-body text-lg"
            >
              Try again, my love 💕
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default LockScreen;
