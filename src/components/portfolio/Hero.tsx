import { Suspense, lazy, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Code2, Brain } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "@/hooks/useGsap";

const NeuralSphere = lazy(() => import("./NeuralSphere"));
const ParticleField = lazy(() => import("./ParticleField"));

const stats = [
  { value: "15+", label: "Projects" },
  { value: "5+", label: "AI Systems" },
  { value: "2+", label: "Years Building" },
];

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
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

      // Stats counter animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll(".stat-item"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            delay: 1.8,
            ease: "power3.out",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="hero-canvas absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <ParticleField />
            <NeuralSphere />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_75%)]" />

      {/* Content */}
      <div className="hero-content relative z-20 w-full max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs tracking-wider text-primary">
                Available for opportunities
              </span>
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ lineHeight: 1.08 }}
            >
              <span className="block text-foreground">Full Stack Developer</span>
              <span className="mt-2 block">
                <span className="text-gradient">&</span>
                <span className="text-foreground"> AI Integrator</span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            Building intelligent, scalable, and immersive web applications 
            at the intersection of full-stack engineering and artificial intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsla(250,89%,65%,0.4)] active:scale-[0.97]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Code2 className="h-4 w-4" />
              View Work
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-card/20 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 active:scale-[0.97]"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>

          {/* Stats row */}
          <div ref={statsRef} className="mt-16 flex items-center gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="stat-item flex flex-col items-center opacity-0">
                {i > 0 && (
                  <div className="absolute -left-4 sm:-left-6 h-8 w-px bg-border/30" />
                )}
                <span className="text-2xl font-bold text-gradient sm:text-3xl">{stat.value}</span>
                <span className="mt-1 font-mono text-[10px] tracking-wider text-muted-foreground/60 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50 uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-muted-foreground/30" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
