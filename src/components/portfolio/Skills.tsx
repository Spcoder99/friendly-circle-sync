import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const categories = [
  {
    title: "Core Skills",
    items: [
      "Web Development", "Software Development", "Full-Stack Development",
      "Machine Learning", "Artificial Intelligence (AI)", "AIML", "Communication",
    ],
  },
  {
    title: "Technologies",
    items: [
      "React.js", "Next.js", "Node.js", "MongoDB", "MySQL", "JavaScript",
      "Java", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "GitHub",
    ],
  },
  {
    title: "AI & Tools",
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

const Skills = () => (
  <SectionWrapper id="skills">
    <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">Skills</p>
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
      Tools & <span className="text-gradient">technologies</span>
    </h2>

    {/* Skill categories */}
    <div className="mt-14 grid gap-10 md:grid-cols-3">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="mb-4 text-lg font-semibold">{cat.title}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className="group cursor-default rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-foreground hover:shadow-[0_0_20px_hsla(250,89%,65%,0.08)]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Learning progress */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="mt-16"
    >
      <h3 className="mb-6 text-lg font-semibold">Currently Learning</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learning.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{item.progress}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, hsl(250 89% 65%), hsl(199 89% 48%))`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default Skills;
