import { useEffect, useRef } from "react";
import { GitBranch, Cloud, Workflow, Activity, Boxes, Orbit } from "lucide-react";

const layers = [
  { label: "SOURCE", name: "GitHub", Icon: GitBranch, className: "scene-node--source" },
  { label: "PIPELINE", name: "Azure DevOps", Icon: Workflow, className: "scene-node--pipeline" },
  { label: "CONTAINERS", name: "Docker", Icon: Boxes, className: "scene-node--containers" },
  { label: "ORCHESTRATION", name: "Kubernetes", Icon: Orbit, className: "scene-node--kubernetes" },
  { label: "CLOUD", name: "Microsoft Azure", Icon: Cloud, className: "scene-node--cloud" },
  { label: "OBSERVABILITY", name: "Azure Monitor", Icon: Activity, className: "scene-node--monitor" },
];

export default function InfrastructureScene() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduceMotion || !finePointer) return undefined;

    const handleMove = (event) => {
      const rect = scene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      scene.style.setProperty("--tilt-y", `${x * 7}deg`);
      scene.style.setProperty("--tilt-x", `${y * -6}deg`);
    };
    const reset = () => {
      scene.style.setProperty("--tilt-y", "0deg");
      scene.style.setProperty("--tilt-x", "0deg");
    };

    scene.addEventListener("pointermove", handleMove);
    scene.addEventListener("pointerleave", reset);
    return () => {
      scene.removeEventListener("pointermove", handleMove);
      scene.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="infra-scene"
      role="img"
      aria-label="Illustration of a cloud delivery workflow connecting GitHub, Azure DevOps, Docker, Kubernetes, Microsoft Azure and Azure Monitor"
    >
      <div className="infra-scene__topline">
        <span>LIVE SYSTEM MAP</span>
        <span><i /> DELIVERY ARCHITECTURE</span>
      </div>

      <div className="infra-scene__stage" aria-hidden="true">
        <div className="infra-scene__floor" />
        <div className="infra-scene__orbit infra-scene__orbit--one" />
        <div className="infra-scene__orbit infra-scene__orbit--two" />
        <div className="infra-scene__core">
          <div className="infra-scene__core-face">
            <Cloud className="infra-scene__cloud" aria-hidden="true" />
            <strong>AZURE</strong>
            <small>CLOUD PLATFORM</small>
          </div>
          <span className="infra-scene__core-side" />
          <span className="infra-scene__core-bottom" />
        </div>
        {layers.map((item) => (
          <div className={`scene-node ${item.className}`} key={item.label}>
            <span className="scene-node__icon"><item.Icon size={18} strokeWidth={1.8} aria-hidden="true" /></span>
            <span className="scene-node__copy">
              <small>{item.label}</small>
              <strong>{item.name}</strong>
            </span>
          </div>
        ))}
        <span className="infra-scene__connector infra-scene__connector--a" />
        <span className="infra-scene__connector infra-scene__connector--b" />
        <span className="infra-scene__connector infra-scene__connector--c" />
      </div>

      <div className="infra-scene__legend">
        <span><i className="legend-dot legend-dot--cyan" /> AUTOMATION</span>
        <span><i className="legend-dot legend-dot--blue" /> ORCHESTRATION</span>
        <span><i className="legend-dot legend-dot--green" /> MONITORING</span>
      </div>
    </div>
  );
}
