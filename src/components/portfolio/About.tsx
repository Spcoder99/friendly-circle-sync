import { useEffect, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { Sparkles, Zap, Target } from "lucide-react";
import { gsap } from "@/hooks/useGsap";

const pillars = [
  {
    icon: Sparkles,
    title: "Continuous Learning",
    text: "Every project is a chance to push beyond yesterday's limits — from mastering new frameworks to diving deep into machine learning architectures.",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    icon: Zap,
    title: "Scalable Engineering",
    text: "I design systems that work at scale from day one — clean code, solid architecture, and performance-first decisions that compound over time.",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    icon: Target,
    title: "AI-Native Thinking",
    text: "AI isn't just a feature I add — it's woven into how I approach problems. From LLM orchestration to intelligent automation, AI shapes my craft.",
    gradient: "from-primary/15 to-accent/15",
  },
];

const About = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll(".pillar-card");

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: 60, rotateY: 8, filter: "blur(6px)" },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="about">
      <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
            <span className="h-1 w-1 rounded-full bg-primary" />
            About Me
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
            Engineering the future,{" "}
            <span className="text-gradient">one system at a time</span>
          </h2>
          <div className="mt-8 space-y-5">
            <p className="text-base leading-[1.8] text-muted-foreground" style={{ textWrap: "pretty" } as React.CSSProperties}>
              I'm a full-stack developer who thrives where software engineering meets artificial intelligence. 
              I've spent years building production-grade applications — from real-time video platforms to AI-powered tools — 
              always with a relentless focus on craft, performance, and user experience.
            </p>
            <p className="text-base leading-[1.8] text-muted-foreground" style={{ textWrap: "pretty" } as React.CSSProperties}>
              My work sits at the intersection of modern web development and AI integration — 
              building applications that don't just look exceptional but think intelligently. 
              Whether it's orchestrating LLM pipelines, building collaborative real-time tools, 
              or crafting pixel-perfect interfaces, I bring the same intensity to every layer of the stack.
            </p>
          </div>
          
          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { value: "15+", label: "Projects Built" },
              { value: "5+", label: "AI Integrations" },
              { value: "∞", label: "Lines of Code" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — pillars */}
        <div ref={cardsRef} className="flex flex-col gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="pillar-card group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-7 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_60px_hsla(250,89%,65%,0.08)]"
              style={{ perspective: "1000px" }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_hsla(250,89%,65%,0.2)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
