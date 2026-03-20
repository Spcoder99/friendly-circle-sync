import { useState, useCallback } from "react";
import { useGsapScrollTrigger } from "@/hooks/useGsap";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import CursorGlow from "@/components/portfolio/CursorGlow";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import TechOrbit from "@/components/portfolio/TechOrbit";
import Projects from "@/components/portfolio/Projects";
import AIIntegration from "@/components/portfolio/AIIntegration";
import FutureVision from "@/components/portfolio/FutureVision";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  useGsapScrollTrigger();

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleComplete} />}
      <CursorGlow />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechOrbit />
        <Projects />
        <AIIntegration />
        <FutureVision />
        <Contact />
      </main>
      <footer className="relative border-t border-border/20 py-10 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} · Crafted with precision & passion
        </p>
      </footer>
    </>
  );
};

export default Index;
