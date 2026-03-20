import { useEffect, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { gsap } from "@/hooks/useGsap";

const orbitTechs = [
  // Inner ring
  { name: "React", ring: 1, color: "61 209 215" },
  { name: "Node.js", ring: 1, color: "83 158 67" },
  { name: "MongoDB", ring: 1, color: "77 175 80" },
  { name: "Express", ring: 1, color: "200 200 200" },
  { name: "Next.js", ring: 1, color: "200 200 200" },
  { name: "TypeScript", ring: 1, color: "49 120 198" },
  // Middle ring
  { name: "OpenAI", ring: 2, color: "116 192 170" },
  { name: "Gemini", ring: 2, color: "66 133 244" },
  { name: "Tailwind", ring: 2, color: "56 189 248" },
  { name: "Three.js", ring: 2, color: "200 200 200" },
  { name: "GSAP", ring: 2, color: "136 204 51" },
  { name: "Redux", ring: 2, color: "118 74 188" },
  { name: "Ollama", ring: 2, color: "200 200 200" },
  { name: "Cohere", ring: 2, color: "209 97 97" },
  // Outer ring
  { name: "AWS", ring: 3, color: "255 153 0" },
  { name: "MySQL", ring: 3, color: "0 117 143" },
  { name: "Java", ring: 3, color: "244 67 54" },
  { name: "GitHub", ring: 3, color: "200 200 200" },
  { name: "Docker", ring: 3, color: "36 150 237" },
  { name: "LangChain", ring: 3, color: "38 166 91" },
  { name: "Clerk", ring: 3, color: "107 99 255" },
  { name: "Stream", ring: 3, color: "0 136 255" },
];

const ringConfig = [
  { radius: 120, speed: 40, items: orbitTechs.filter((t) => t.ring === 1) },
  { radius: 200, speed: 55, items: orbitTechs.filter((t) => t.ring === 2) },
  { radius: 280, speed: 70, items: orbitTechs.filter((t) => t.ring === 3) },
];

const TechOrbit = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbitRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each ring group
      ringConfig.forEach((ring, ringIndex) => {
        const ringEl = orbitRef.current!.querySelector(`.ring-${ringIndex}`);
        if (!ringEl) return;

        gsap.to(ringEl, {
          rotation: ringIndex % 2 === 0 ? 360 : -360,
          duration: ring.speed,
          repeat: -1,
          ease: "none",
        });

        // Counter-rotate each tech node so text stays upright
        const nodes = ringEl.querySelectorAll(".orbit-node");
        nodes.forEach((node) => {
          gsap.to(node, {
            rotation: ringIndex % 2 === 0 ? -360 : 360,
            duration: ring.speed,
            repeat: -1,
            ease: "none",
          });
        });
      });

      // Entrance animation
      gsap.fromTo(
        orbitRef.current,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="tech">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Tech Universe
        </span>
        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Technologies in <span className="text-gradient">orbit</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
          The ecosystem of tools, frameworks, and platforms I work with daily.
        </p>
      </div>

      <div ref={containerRef} className="mt-16 flex items-center justify-center">
        <div
          ref={orbitRef}
          className="relative"
          style={{ width: 600, height: 600 }}
        >
          {/* Center core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-card/60 backdrop-blur-md shadow-[0_0_60px_hsla(250,89%,65%,0.2)]">
              <span className="font-mono text-xs font-bold text-gradient tracking-wider">
                {"</>"}
              </span>
            </div>
          </div>

          {/* Orbit rings (visual) */}
          {ringConfig.map((ring, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/10"
              style={{
                width: ring.radius * 2,
                height: ring.radius * 2,
              }}
            />
          ))}

          {/* Orbit groups */}
          {ringConfig.map((ring, ringIndex) => (
            <div
              key={ringIndex}
              className={`ring-${ringIndex} absolute left-1/2 top-1/2`}
              style={{
                width: 0,
                height: 0,
              }}
            >
              {ring.items.map((tech, i) => {
                const angle = (360 / ring.items.length) * i;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * ring.radius;
                const y = Math.sin(rad) * ring.radius;

                return (
                  <div
                    key={tech.name}
                    className="orbit-node absolute group"
                    style={{
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full border border-border/30 bg-card/70 backdrop-blur-sm px-3 py-1.5 transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:shadow-[0_0_20px_hsla(250,89%,65%,0.15)] cursor-default whitespace-nowrap"
                    >
                      <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechOrbit;
