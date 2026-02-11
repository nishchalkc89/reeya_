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

      <AnimatePresence>
        {!unlocked && <LockScreen onUnlock={() => setUnlocked(true)} />}
      </AnimatePresence>

      {unlocked && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <TypingHero />
          <MemoryGallery />
          <SecretMessage />
          <FinalQuestion />

          <footer className="text-center py-10 text-muted-foreground/40 font-body text-sm">
            Made with ❤️ just for you
          </footer>
        </motion.main>
      )}
    </div>
  );
};

export default Index;
