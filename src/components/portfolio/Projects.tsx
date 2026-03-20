import { useEffect, useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { gsap } from "@/hooks/useGsap";

const projects = [
  {
    title: "SKILL_IQ — AI Video Interview Platform",
    description:
      "A full-stack MERN-based real-time interview platform with live video calling, collaborative coding environment (Monaco Editor), and AI-powered hints & solutions. Supports public/private sessions, real-time chat, and multi-LLM integration.",
    tech: [
      "React.js (Vite)", "Tailwind CSS", "DaisyUI", "ShadCN UI",
      "TanStack Query", "Monaco Editor", "Node.js", "Express.js",
      "MongoDB", "Mongoose", "Inngest", "Clerk",
      "Stream Video SDK", "Stream Chat",
      "OpenAI API", "Gemini API", "Cohere AI", "Ollama",
    ],
    features: [
      "Real-time video interviews",
      "Live code execution",
      "AI hints & optimal solutions",
      "Private sessions with invite codes",
    ],
    accent: "from-primary to-accent",
    number: "01",
  },
  {
    title: "GitHub Clone 2.0",
    description:
      "A full-stack MERN recreation of GitHub with repository management, branching, file handling via AWS S3, JWT authentication, Redux state management, and industry-level architecture. Deployed on Render with MongoDB Atlas.",
    tech: [
      "React.js", "Tailwind CSS", "ShadCN UI", "Material UI",
      "Redux", "React Router DOM", "Lucide React", "Font Awesome",
      "Node.js", "Express.js", "MongoDB", "Mongoose",
      "JWT", "bcrypt", "Axios", "AWS S3",
    ],
    features: [
      "Full repository system",
      "AWS S3 file storage",
      "JWT auth & security",
      "Industry-level architecture",
    ],
    accent: "from-accent to-primary",
    number: "02",
  },
  {
    title: "AI Background Remover",
    description:
      "An AI-powered image processing tool that removes backgrounds with high precision, delivering clean cutouts with a fast and intuitive interface.",
    tech: ["AI", "Image Processing", "React", "Node.js"],
    features: ["AI-based processing", "Clean UI", "Fast response"],
    accent: "from-primary/80 to-accent/80",
    number: "03",
  },
  {
    title: "Developer Portfolio",
    description:
      "A 3D, animation-rich portfolio featuring React Three Fiber, GSAP ScrollTrigger animations, and immersive visual storytelling — the site you're viewing right now.",
    tech: ["React", "Three.js", "GSAP", "Framer Motion", "Tailwind CSS"],
    features: ["3D visuals", "Scroll animations", "Personal branding"],
    accent: "from-accent/80 to-primary/80",
    number: "04",
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current!.querySelectorAll(".project-card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, rotateX: 4, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="projects">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Featured Work
        </span>
        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Selected <span className="text-gradient">projects</span>
        </h2>
      </div>

      <div ref={containerRef} className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.title}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="project-card group relative overflow-hidden rounded-3xl border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_80px_hsla(250,89%,65%,0.1)]"
            style={{ perspective: "1200px" }}
          >
            {/* Number watermark */}
            <div className="absolute top-6 right-6 font-mono text-6xl font-bold text-foreground/[0.03] transition-all duration-500 group-hover:text-primary/[0.08]">
              {project.number}
            </div>

            {/* Top gradient bar */}
            <div className={`h-px w-full bg-gradient-to-r ${project.accent} opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />

            <div className="p-8">
              <div className="flex items-start justify-between">
                <h3 className="max-w-[80%] text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {project.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Features */}
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border/30 bg-secondary/30 px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-colors duration-200 group-hover:border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:text-primary"
                >
                  <Github className="h-3.5 w-3.5" /> Source Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
