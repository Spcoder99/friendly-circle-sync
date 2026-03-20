import { useEffect, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { Rocket, Globe, BrainCircuit } from "lucide-react";
import { gsap } from "@/hooks/useGsap";

const milestones = [
  { icon: BrainCircuit, title: "AI-Native Apps", text: "Applications where intelligence is the product, not an afterthought.", number: "01" },
  { icon: Globe, title: "Scalable Systems", text: "Architecture designed for millions of users from the first commit.", number: "02" },
  { icon: Rocket, title: "Real-time Intelligence", text: "Instant AI-powered insights woven into every user interaction.", number: "03" },
];

const FutureVision = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the timeline line growing
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 1,
            },
          }
        );
      }

      // Stagger milestone cards
      const cards = timelineRef.current!.querySelectorAll(".milestone-card");
      cards.forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          { opacity: 0, x: fromLeft ? -60 : 60, filter: "blur(6px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="vision">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Future Vision
        </span>
        <h2 className="mt-6 mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
          Building next-generation AI-powered platforms that{" "}
          <span className="text-gradient">redefine how humans interact with software</span>
        </h2>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative mt-24">
        {/* Animated line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 origin-top lg:block"
          style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.3), transparent)" }}
        />

        <div className="flex flex-col gap-16 lg:gap-0">
          {milestones.map((m, i) => (
            <div
              key={m.title}
              className={`milestone-card relative lg:w-[45%] ${i % 2 === 0 ? "lg:pr-16 lg:self-start" : "lg:pl-16 lg:self-end"}`}
            >
              {/* Dot on line */}
              <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 lg:flex items-center justify-center">
                <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute h-8 w-8 rounded-full border border-primary/20 animate-pulse-glow" />
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-border/30 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_hsla(250,89%,65%,0.1)]">
                {/* Number */}
                <span className="absolute top-6 right-6 font-mono text-4xl font-bold text-foreground/[0.04] group-hover:text-primary/[0.08] transition-colors duration-500">
                  {m.number}
                </span>
                
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_hsla(250,89%,65%,0.2)]">
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FutureVision;
