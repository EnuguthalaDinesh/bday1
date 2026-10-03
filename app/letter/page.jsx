import Pager from "@/components/Pager";
import { config } from "@/data/config";

export const metadata = { title: `A letter for ${config.name}` };

export default function Letter() {
  return (
    <div className="page">
      <header className="page-head">
        <div className="eyebrow fade-up">Page one</div>
        <h1 className="fade-up" style={{ animationDelay: ".15s" }}>A letter, just for you</h1>
      </header>

      <article className="letter fade-up" style={{ animationDelay: ".3s" }}>
        <svg className="seal" viewBox="0 0 60 60" aria-hidden="true">
          <circle cx="30" cy="30" r="28" fill="#C2316B" />
          <path className="heartbeat" d="M30 44 C14 33 16 20 23 20 C27 20 30 24 30 24 C30 24 33 20 37 20 C44 20 46 33 30 44 Z" fill="#FFD9E4" />
        </svg>
        <div className="dear script fade-up" style={{ animationDelay: ".6s" }}>Dear {config.name},</div>
        {config.letter.map((p, i) => (
          <p key={i} className="fade-up" style={{ animationDelay: `${1 + i * 0.6}s` }}>{p}</p>
        ))}
        <div className="telugu fade-up" style={{ animationDelay: "2.8s" }}>{config.teluguLine}</div>
        <div className="sign script fade-up" style={{ animationDelay: "3.2s" }}>Always yours, Dinesh</div>
      </article>

      <Pager prev={{ href: "/", label: "Back home" }} next={{ href: "/hangouts", label: "Next: our hangouts" }} />
    </div>
  );
}
