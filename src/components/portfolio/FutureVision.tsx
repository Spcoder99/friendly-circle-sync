import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Rocket, Globe, BrainCircuit } from "lucide-react";

const milestones = [
  { icon: BrainCircuit, title: "AI-Native Apps", text: "Applications where intelligence is the product, not an afterthought." },
  { icon: Globe, title: "Scalable Systems", text: "Architecture designed for millions of users from the first commit." },
  { icon: Rocket, title: "Real-time Intelligence", text: "Instant AI-powered insights woven into every user interaction." },
];

const FutureVision = () => (
  <SectionWrapper id="vision">
    <div className="text-center">
      <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">Vision</p>
      <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl" style={{ lineHeight: 1.15 }}>
        Building next-generation AI-powered platforms that{" "}
        <span className="text-gradient">redefine how humans interact with software</span>
      </h2>
    </div>

    {/* Roadmap */}
    <div className="relative mt-20">
      {/* Line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-accent/30 to-transparent lg:block" />

      <div className="flex flex-col gap-12 lg:gap-0">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`relative lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:self-start" : "lg:pl-16 lg:self-end"}`}
          >
            {/* Dot on line */}
            <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background lg:block" />

            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_hsla(250,89%,65%,0.06)]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default FutureVision;
