import { useEffect, useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsap";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !innerRef.current) return;

    const ctx = gsap.context(() => {
      // Main section cinematic entrance
      gsap.fromTo(
        innerRef.current,
        { opacity: 0, y: 80, filter: "blur(10px)", scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );

      // Parallax separator lines
      const separator = sectionRef.current?.querySelector(".section-separator");
      if (separator) {
        gsap.fromTo(
          separator,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: separator,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative px-6 py-28 md:py-40 overflow-hidden ${className}`}
    >
      {/* Section separator */}
      <div className="section-separator absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center" />
      
      <div ref={innerRef} className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
