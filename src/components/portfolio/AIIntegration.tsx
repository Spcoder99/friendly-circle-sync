import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Brain, Cpu, Workflow, Zap } from "lucide-react";

const nodes = [
  { icon: Brain, label: "LLM Integration", desc: "OpenAI, Gemini, Cohere, local models via Ollama" },
  { icon: Cpu, label: "Local Models", desc: "On-device inference for privacy-first workflows" },
  { icon: Workflow, label: "API Orchestration", desc: "Chaining multiple AI providers for robust pipelines" },
  { icon: Zap, label: "Real-time AI", desc: "Live AI assistance in interviews & coding sessions" },
];

const AIIntegration = () => (
  <SectionWrapper id="ai">
    <div className="text-center">
      <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">AI Integration</p>
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        Intelligence woven into{" "}
        <span className="text-gradient">every layer</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground" style={{ textWrap: "pretty" } as React.CSSProperties}>
        From interview platforms to developer tools, AI isn't bolted on — it's the foundation. I orchestrate LLMs, 
        local models, and multi-provider pipelines to build applications that think.
      </p>
    </div>

    {/* Neural network visual */}
    <div className="relative mt-20">
      {/* Connection lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(250 89% 65%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(199 89% 48%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col items-center rounded-2xl border border-border/60 bg-card/50 p-8 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_50px_hsla(250,89%,65%,0.1)]"
          >
            {/* Pulse ring */}
            <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-2xl border border-primary/20 animate-pulse-glow" />
            </div>

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:shadow-[0_0_25px_hsla(250,89%,65%,0.2)]">
              <node.icon className="h-7 w-7" />
            </div>
            <h3 className="text-base font-semibold">{node.label}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{node.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Data flow indicators */}
      <div className="mt-12 flex items-center justify-center gap-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AIIntegration;
