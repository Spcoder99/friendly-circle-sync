import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center"
          >
            <p className="mb-8 font-mono text-lg tracking-[0.3em] text-gradient font-bold">
              {"<Dev />"}
            </p>
            
            <div className="relative h-[2px] w-56 overflow-hidden rounded-full bg-secondary/40">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                  boxShadow: "0 0 20px hsla(250, 89%, 65%, 0.5)",
                }}
              />
            </div>
            
            <div className="mt-4 flex items-center gap-3">
              <p className="font-mono text-xs text-muted-foreground/60 tabular-nums">
                {Math.min(Math.round(progress), 100)}%
              </p>
              <span className="text-muted-foreground/30">·</span>
              <p className="font-mono text-[10px] text-muted-foreground/40 tracking-wider">
                INITIALIZING
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
