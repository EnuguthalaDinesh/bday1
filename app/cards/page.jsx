import Pager from "@/components/Pager";
import ScratchCard from "@/components/ScratchCard";
import { config } from "@/data/config";

export const metadata = { title: `Scratch cards for ${config.name}` };

export default function Cards() {
  return (
    <div className="page">
      <header className="page-head">
        <div className="eyebrow fade-up">Page five</div>
        <h1 className="fade-up" style={{ animationDelay: ".15s" }}>Scratch cards</h1>
        <p className="fade-up" style={{ animationDelay: ".3s" }}>Six wishes in six different moods. Use your finger or mouse to scratch each one open.</p>
      </header>

      <div className="card-grid">
        {config.cards.map((c, i) => (
          <div key={c.kind} className="card-slot fade-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
            <ScratchCard kind={c.kind} tone={i}>
              <span className={c.kind === "In Telugu" ? "te" : ""}>{c.text}</span>
              {c.note && <small>{c.note}</small>}
            </ScratchCard>
          </div>
        ))}
      </div>

      <Pager prev={{ href: "/wishes", label: "Back to wishes" }} next={{ href: "/finale", label: "Next: the finale" }} />
    </div>
  );
}
