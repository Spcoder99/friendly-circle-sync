import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { Canvas } from "@react-three/fiber";

const NeuralSphere = lazy(() => import("./NeuralSphere"));
const ParticleField = lazy(() => import("./ParticleField"));

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <ParticleField />
            <NeuralSphere />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
            Full Stack Developer &bull; AI Integrator
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Building{" "}
          <span className="text-gradient">intelligent</span>,{" "}
          scalable & immersive web applications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          Crafting next-generation experiences at the intersection of full-stack engineering and artificial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:shadow-[0_0_30px_hsla(250,89%,65%,0.4)] active:scale-[0.97]"
          >
            View Work <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary/60 active:scale-[0.97]"
          >
            Contact Me <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
