import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Sparkles, Zap, Target } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Continuous Learning",
    text: "Every project is a chance to push beyond yesterday's limits — from mastering new frameworks to diving deep into machine learning architectures.",
  },
  {
    icon: Zap,
    title: "Scalable Engineering",
    text: "I design systems that work at scale from day one — clean code, solid architecture, and performance-first decisions that compound over time.",
  },
  {
    icon: Target,
    title: "AI-Native Thinking",
    text: "AI isn't just a feature I add — it's woven into how I approach problems. From LLM orchestration to intelligent automation, AI shapes my craft.",
  },
];

const About = () => (
  <SectionWrapper id="about">
    <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
      {/* Left */}
      <div>
        <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">About</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ lineHeight: 1.15 }}>
          Engineering the future,{" "}
          <span className="text-gradient">one system at a time</span>
        </h2>
        <p className="mt-6 leading-relaxed text-muted-foreground" style={{ textWrap: "pretty" } as React.CSSProperties}>
          I'm a full-stack developer who thrives where software engineering meets artificial intelligence. 
          I've spent years building production-grade applications — from real-time video platforms to AI-powered tools — 
          always with a relentless focus on craft, performance, and user experience. I believe the best developers aren't 
          just coders; they're systems thinkers who can architect solutions that evolve with the technology landscape.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground" style={{ textWrap: "pretty" } as React.CSSProperties}>
          My work sits at the intersection of modern web development and AI integration — 
          building applications that don't just look exceptional but think intelligently. 
          Whether it's orchestrating LLM pipelines, building collaborative real-time tools, 
          or crafting pixel-perfect interfaces, I bring the same intensity to every layer of the stack.
        </p>
      </div>

      {/* Right — pillars */}
      <div className="flex flex-col gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_hsla(250,89%,65%,0.06)]"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default About;
