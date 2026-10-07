import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionReveal from "./components/SectionReveal";
import NotFound from "./components/NotFound";
import EngineeringWorkflow from "./components/EngineeringWorkflow";
import EngineeringToolkit from "./components/EngineeringToolkit";
import WhatIBring from "./components/WhatIBring";

export default function App() {
  const isHome =
    window.location.pathname === "/" ||
    window.location.pathname === "";

  if (!isHome) {
    return <NotFound />;
  }

  return (
    <>
      <a
        href="#main-content"
        aria-label="Skip to main content"
        className="sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex="-1">
        <SectionReveal>
          <Hero />
        </SectionReveal>

        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Skills />
        </SectionReveal>

        <SectionReveal>
          <Experience />
        </SectionReveal>

        <SectionReveal>
          <Projects />
        </SectionReveal>

        <SectionReveal>
          <EngineeringWorkflow />
        </SectionReveal>

        <SectionReveal>
          <EngineeringToolkit />
        </SectionReveal>

        <SectionReveal>
          <Certifications />
        </SectionReveal>

        <SectionReveal>
          <Education />
        </SectionReveal>

        <SectionReveal>
          <WhatIBring />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>

      <Footer />
    </>
  );
}