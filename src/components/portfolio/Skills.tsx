import { useEffect, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { gsap } from "@/hooks/useGsap";

const categories = [
  {
    title: "Core Skills",
    emoji: "🔹",
    items: [
      "Web Development", "Software Development", "Full-Stack Development",
      "Machine Learning", "Artificial Intelligence (AI)", "AIML", "Communication",
    ],
  },
  {
    title: "Technologies",
    emoji: "⚡",
    items: [
      "React.js", "Next.js", "Node.js", "MongoDB", "MySQL", "JavaScript",
      "Java", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "GitHub",
    ],
  },
  {
    title: "AI & Tools",
    emoji: "🤖",
    items: [
      "OpenAI API", "Google Gemini API", "Cohere AI", "Ollama (Local LLMs)", "IBM WatsonX",
    ],
  },
];

const learning = [
  { name: "Three.js", progress: 65 },
  { name: "GSAP", progress: 55 },
  { name: "React Three Fiber", progress: 60 },
  { name: "DSA", progress: 50 },
  { name: "System Design", progress: 45 },
  { name: "AI & ML", progress: 70 },
  { name: "AI Implementation", progress: 72 },
  { name: "Deep Learning", progress: 40 },
  { name: "LangChain", progress: 55 },
  { name: "LLMs", progress: 68 },
  { name: "Web3", progress: 30 },
];

const Skills = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger skill tags
      const tags = gridRef.current!.querySelectorAll(".skill-tag");
      gsap.fromTo(
        tags,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.03,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate progress bars
      if (barsRef.current) {
        const bars = barsRef.current.querySelectorAll(".progress-fill");
        bars.forEach((bar) => {
          const width = bar.getAttribute("data-width") || "0%";
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="skills">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Skills & Expertise
        </span>
        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Tools & <span className="text-gradient">technologies</span> I work with
        </h2>
      </div>

      {/* Skill categories */}
      <div ref={gridRef} className="mt-16 grid gap-10 md:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
              <span>{cat.emoji}</span>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="skill-tag group cursor-default rounded-xl border border-border/40 bg-card/40 px-3.5 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:text-foreground hover:bg-primary/5 hover:shadow-[0_4px_20px_hsla(250,89%,65%,0.1)] active:scale-95"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Learning progress */}
      <div ref={barsRef} className="mt-20">
        <h3 className="mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
          Currently Learning
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learning.map((item) => (
            <div key={item.name} className="group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="font-mono text-[10px] text-muted-foreground tabular-nums">{item.progress}%</span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/60">
                <div
                  className="progress-fill absolute inset-y-0 left-0 rounded-full"
                  data-width={`${item.progress}%`}
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
                    boxShadow: "0 0 12px hsla(250, 89%, 65%, 0.3)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
