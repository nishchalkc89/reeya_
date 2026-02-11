import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart } from "lucide-react";

interface LockScreenProps {
  onUnlock: () => void;
}

// ✏️ EDIT PASSWORD HERE
const SECRET_PASSWORD = "590512";

const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      setTimeout(() => setError(false), 3500);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background bg-romantic-gradient"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`glass-card-glow p-10 md:p-14 max-w-md w-full mx-6 text-center relative overflow-hidden ${shaking ? "animate-shake" : ""}`}
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 shimmer rounded-2xl" />
        
        <div className="relative z-10">
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 inline-block"
          >
            <div className="relative">
              <Heart className="w-14 h-14 text-primary fill-primary/30 mx-auto" 
                style={{ filter: "drop-shadow(0 0 20px hsl(340 72% 52% / 0.4))" }}
              />
              <Lock className="w-6 h-6 text-primary-foreground/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </motion.div>

          <h1 className="font-script text-4xl md:text-5xl text-gradient-rose mb-2">
            Our Story
          </h1>
          <p className="font-display text-sm tracking-[0.25em] uppercase text-muted-foreground mb-8">
            Unlock my heart
          </p>
          <p className="text-foreground/70 text-lg mb-8 font-body italic">
            Enter the password to unveil what my heart holds for you, Reeya ❤️
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Our secret..."
                className="w-full bg-muted/40 border border-primary/20 rounded-xl px-5 py-4 text-center text-foreground text-lg font-body placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-all duration-500 animate-glow-pulse"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary/90 via-primary to-deep-rose text-primary-foreground font-display text-lg py-4 rounded-xl transition-all duration-300 glow-border flex items-center justify-center gap-3 tracking-wide"
            >
              <Heart className="w-5 h-5 fill-current" />
              Unlock My Heart
            </motion.button>
          </form>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-primary/80 mt-5 font-body text-lg italic"
              >
                Not quite, my love... try again 💕
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LockScreen;
