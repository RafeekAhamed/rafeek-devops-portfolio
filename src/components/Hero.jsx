import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import InfrastructureScene from "./InfrastructureScene.jsx";

const RESUME_PATH = "/Rafeek%20Ahamed%20M.pdf";
const stack = ["Microsoft Azure", "Azure DevOps", "Kubernetes", "Docker", "Terraform", "CI/CD"];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero-premium relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container relative z-10">
        <div className="hero-topline">
          <span><span className="availability-dot" /> AVAILABLE FOR DEVOPS &amp; CLOUD OPPORTUNITIES</span>
          <span className="hero-location"><MapPin size={14} /> Tirunelveli, Tamil Nadu, India</span>
        </div>

        <div className="hero-premium-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow"><Sparkles size={15} /> DEVOPS ENGINEER / AZURE CLOUD ENGINEER</div>
            <h1 id="hero-heading">Building reliable<br /><span>cloud infrastructure.</span></h1>
            <p className="hero-summary">
              I work across enterprise release management, Azure cloud operations, CI/CD deployment validation, and Kubernetes monitoring. I also build hands-on solutions with Docker, Terraform, and cloud infrastructure automation.
            </p>
            <div className="hero-stack" aria-label="Core technologies">
              {stack.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="hero-actions">
              <a className="hero-primary-action" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">View Resume <ArrowUpRight size={17} /></a>
              <button className="hero-secondary-action" type="button" onClick={() => scrollTo("contact")}><Mail size={16} /> Contact Me</button>
            </div>
            <div className="hero-proof-row">
              <div><strong>6</strong><span>Enterprise client environments</span></div>
              <div><strong>Azure</strong><span>Cloud &amp; operations focus</span></div>
              <div><strong>Hands-on</strong><span>Cloud &amp; DevOps projects</span></div>
            </div>
          </div>

          <div className="hero-art-column">
            <div className="portrait-frame">
              <div className="portrait-frame-glow" />
              <img src="/profile.jpg" alt="Professional portrait of Rafeek Ahamed M" width="1100" height="1400" fetchPriority="high" />
              <div className="portrait-caption"><span>RAFEek AHAMED M.</span><small>DEVOPS / AZURE CLOUD</small></div>
            </div>
            <div className="hero-floating-label"><span className="availability-dot" /> IMMEDIATE JOINER</div>
            <div className="hero-3d-panel">
              <div className="hero-3d-heading"><span>01 / CLOUD TOOLCHAIN</span><span>LIVE SYSTEM MAP</span></div>
              <InfrastructureScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
