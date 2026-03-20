import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Github, Twitter } from "lucide-react";

const Contact = () => (
  <SectionWrapper id="contact" className="pb-32">
    <div className="mx-auto max-w-lg text-center">
      <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">Contact</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Let's <span className="text-gradient">connect</span>
      </h2>
      <p className="mt-4 text-sm text-muted-foreground">
        Open to collaborations, opportunities, and conversations about building the future.
      </p>

      <motion.a
        href="mailto:hello@example.com"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-shadow duration-200 hover:shadow-[0_0_30px_hsla(250,89%,65%,0.4)]"
      >
        <Mail className="h-4 w-4" /> Get in Touch
      </motion.a>

      <div className="mt-8 flex items-center justify-center gap-4">
        {[
          { icon: Github, href: "https://github.com", label: "GitHub" },
          { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-foreground hover:shadow-[0_0_20px_hsla(250,89%,65%,0.1)] active:scale-95"
            aria-label={s.label}
          >
            <s.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Contact;
