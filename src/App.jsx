import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SectionReveal from "./components/SectionReveal.jsx";
import NotFound from "./components/NotFound.jsx";
import EngineeringWorkflow from "./components/EngineeringWorkflow.jsx";
import EngineeringToolkit from "./components/EngineeringToolkit.jsx";
import WhatIBring from "./components/WhatIBring.jsx";

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isHome = currentPath === "/" || currentPath === "/index.html";

  if (!isHome) {
    return <NotFound />;
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
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