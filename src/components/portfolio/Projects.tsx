import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MERN AI Video Calling Interview Platform",
    description:
      "Real-time video interviews with collaborative coding, AI-powered assistance, and intelligent evaluation — built end-to-end with MERN stack and modern AI APIs.",
    tech: ["MERN Stack", "Stream Video SDK", "Stream Chat", "OpenAI API", "Gemini API", "Cohere", "Ollama"],
    features: ["Real-time video interviews", "Collaborative coding", "AI assistance"],
  },
  {
    title: "AI Background Remover",
    description:
      "An AI-powered image processing tool that removes backgrounds with high precision, delivering clean cutouts with a fast and intuitive interface.",
    tech: ["AI", "Image Processing", "React", "Node.js"],
    features: ["AI-based processing", "Clean UI", "Fast response"],
  },
  {
    title: "Developer Portfolio",
    description:
      "A 3D, animation-rich portfolio that doubles as a personal brand showcase — featuring immersive visuals and interactive storytelling.",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    features: ["3D visuals", "Scroll animations", "Personal branding"],
  },
  {
    title: "GitHub Clone 2.0",
    description:
      "A full-stack recreation of GitHub's core functionality — repositories, branching, and a realistic developer workflow simulation.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    features: ["Full-stack architecture", "Repository system", "Developer workflow"],
  },
];

const Projects = () => (
  <SectionWrapper id="projects">
    <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">Projects</p>
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
      Selected <span className="text-gradient">work</span>
    </h2>

    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {projects.map((project, i) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_50px_hsla(250,89%,65%,0.08)]"
        >
          {/* Glow accent */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          {/* Features */}
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {project.features.map((f) => (
              <li key={f} className="text-xs text-muted-foreground before:mr-1.5 before:text-primary before:content-['▹']">
                {f}
              </li>
            ))}
          </ul>

          {/* Tech */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-secondary/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
