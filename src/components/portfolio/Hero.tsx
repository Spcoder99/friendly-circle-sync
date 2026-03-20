import { Suspense, lazy, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "@/hooks/useGsap";

const NeuralSphere = lazy(() => import("./NeuralSphere"));
const ParticleField = lazy(() => import("./ParticleField"));

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphOf>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax on the 3D scene
      gsap.to(".hero-canvas", {
        yPercent: 30,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Parallax on hero content — moves up slower
      gsap.to(".hero-content", {
        yPercent: -20,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "60% top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="hero-canvas absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <ParticleField />
            <NeuralSphere />
          </Suspense>
        </Canvas>
      </div>

      {/* Multiple gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_80%)]" />

      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-32 z-[5] h-96 w-96 rounded-full bg-primary/8 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 z-[5] h-80 w-80 rounded-full bg-accent/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="hero-content relative z-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs tracking-wider text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Full Stack Developer &bull; AI Integrator
          </span>
        </motion.div>

        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ lineHeight: 1.05, textWrap: "balance" } as React.CSSProperties}
        >
          Building{" "}
          <span className="relative inline-block">
            <span className="text-gradient">intelligent</span>
            <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-primary/60 via-accent/40 to-transparent" />
          </span>
          {", "}
          <br className="hidden sm:block" />
          scalable & immersive
          <br />
          web applications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          Crafting next-generation experiences at the intersection of full-stack engineering and artificial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsla(250,89%,65%,0.5)] active:scale-[0.97]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            View Work <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/30 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_30px_hsla(250,89%,65%,0.1)] active:scale-[0.97]"
          >
            Contact Me <Mail className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-muted-foreground/40" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
