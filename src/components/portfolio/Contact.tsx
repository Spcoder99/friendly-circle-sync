import { useEffect, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { Mail, Github, Twitter, ArrowUpRight } from "lucide-react";
import { gsap } from "@/hooks/useGsap";

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const els = contentRef.current!.querySelectorAll("[data-animate]");
      gsap.fromTo(
        els,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="contact" className="pb-32">
      <div ref={contentRef} className="mx-auto max-w-lg text-center">
        <div data-animate>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
            <span className="h-1 w-1 rounded-full bg-primary" />
            Get In Touch
          </span>
        </div>
        
        <h2 data-animate className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p data-animate className="mt-5 text-base text-muted-foreground">
          Open to collaborations, opportunities, and conversations about building the future of software.
        </p>

        <div data-animate className="mt-10">
          <a
            href="mailto:hello@example.com"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-10 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_50px_hsla(250,89%,65%,0.5)] active:scale-[0.97]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Mail className="h-4 w-4" /> Get in Touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div data-animate className="mt-10 flex items-center justify-center gap-4">
          {[
            { icon: Github, href: "https://github.com/dev-portfolio", label: "GitHub" },
            { icon: Twitter, href: "https://twitter.com/dev_portfolio", label: "Twitter" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-border/30 bg-card/30 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_25px_hsla(250,89%,65%,0.15)] hover:bg-primary/5 active:scale-95"
              aria-label={s.label}
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
