import { useEffect, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { Brain, Cpu, Workflow, Zap } from "lucide-react";
import { gsap } from "@/hooks/useGsap";

const nodes = [
  { icon: Brain, label: "LLM Integration", desc: "OpenAI, Gemini, Cohere, local models via Ollama", color: "from-primary/20 to-primary/5" },
  { icon: Cpu, label: "Local Models", desc: "On-device inference for privacy-first workflows", color: "from-accent/20 to-accent/5" },
  { icon: Workflow, label: "API Orchestration", desc: "Chaining multiple AI providers for robust pipelines", color: "from-primary/15 to-accent/10" },
  { icon: Zap, label: "Real-time AI", desc: "Live AI assistance in interviews & coding sessions", color: "from-accent/15 to-primary/10" },
];

const AIIntegration = () => {
  const nodesRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nodesRef.current) return;

    const ctx = gsap.context(() => {
      const cards = nodesRef.current!.querySelectorAll(".ai-node");

      // Stagger entrance from center outward
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.8, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: { each: 0.12, from: "center" },
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: nodesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Pulse dots animation
      if (pulseRef.current) {
        const dots = pulseRef.current.querySelectorAll(".flow-dot");
        gsap.fromTo(
          dots,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: { each: 0.15, repeat: -1, yoyo: true },
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: pulseRef.current,
              start: "top 85%",
              toggleActions: "play pause resume pause",
            },
          }
        );
      }
    }, nodesRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="ai">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
          <span className="h-1 w-1 rounded-full bg-primary animate-pulse-glow" />
          AI Integration
        </span>
        <h2 className="mt-6 mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Intelligence woven into{" "}
          <span className="text-gradient">every layer</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground" style={{ textWrap: "pretty" } as React.CSSProperties}>
          From interview platforms to developer tools, AI isn't bolted on — it's the foundation. I orchestrate LLMs, 
          local models, and multi-provider pipelines to build applications that think.
        </p>
      </div>

      {/* Neural network visual */}
      <div ref={nodesRef} className="relative mt-20">
        {/* Connection lines between nodes */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <svg className="h-full w-full" aria-hidden>
            <defs>
              <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="url(#connectionGrad)" strokeWidth="1" strokeDasharray="6 4" />
            <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="url(#connectionGrad)" strokeWidth="1" strokeDasharray="6 4" />
          </svg>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nodes.map((node) => (
            <div
              key={node.label}
              className="ai-node group relative flex flex-col items-center overflow-hidden rounded-3xl border border-border/30 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_60px_hsla(250,89%,65%,0.12)]"
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${node.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              {/* Glow ring */}
              <div className="absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl border border-primary/20" />
              </div>

              <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_hsla(250,89%,65%,0.25)] group-hover:scale-110">
                <node.icon className="h-7 w-7" />
              </div>
              <h3 className="relative z-10 text-base font-bold tracking-tight">{node.label}</h3>
              <p className="relative z-10 mt-2.5 text-xs leading-relaxed text-muted-foreground">{node.desc}</p>
            </div>
          ))}
        </div>

        {/* Data flow pulse */}
        <div ref={pulseRef} className="mt-14 flex items-center justify-center gap-3">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flow-dot h-2 w-2 rounded-full"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
                boxShadow: "0 0 8px hsla(250, 89%, 65%, 0.4)",
              }}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AIIntegration;
