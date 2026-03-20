import { useState, useCallback } from "react";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import CursorGlow from "@/components/portfolio/CursorGlow";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import AIIntegration from "@/components/portfolio/AIIntegration";
import FutureVision from "@/components/portfolio/FutureVision";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleComplete} />}
      <CursorGlow />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIIntegration />
        <FutureVision />
        <Contact />
      </main>
      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Built with precision & passion
        </p>
      </footer>
    </>
  );
};

export default Index;
