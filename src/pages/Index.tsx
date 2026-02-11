import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import LockScreen from "@/components/LockScreen";
import TypingHero from "@/components/TypingHero";
import MemoryGallery from "@/components/MemoryGallery";
import SecretMessage from "@/components/SecretMessage";
import FinalQuestion from "@/components/FinalQuestion";

const Index = () => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!unlocked && <LockScreen key="lock" onUnlock={() => setUnlocked(true)} />}
      </AnimatePresence>

      {unlocked && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="relative z-10"
        >
          <TypingHero />

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-primary/30 text-sm">✦</span>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-primary/20" />
          </div>

          <MemoryGallery />

          <div className="flex items-center justify-center gap-4 py-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-primary/30 text-sm">♥</span>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-primary/20" />
          </div>

          <SecretMessage />
          <FinalQuestion />

          <footer className="text-center py-12 relative">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-auto mb-4" />
            <p className="text-muted-foreground/30 font-body text-sm italic">
              Crafted with love, just for you, Reeya ❤️
            </p>
          </footer>
        </motion.main>
      )}
    </div>
  );
};

export default Index;
