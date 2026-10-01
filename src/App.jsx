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

function Portfolio() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex="-1">
        <Hero />

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
          <Certifications />
        </SectionReveal>

        <SectionReveal>
          <Education />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>

      <Footer />
    </>
  );
}

function App() {
  const path = window.location.pathname;

  const isHome = path === "/" || path === "";

  if (!isHome) {
    return <NotFound />;
  }

  return <Portfolio />;
}

export default App;