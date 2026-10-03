"use client";
import { useState } from "react";
import Pager from "@/components/Pager";
import Panda from "@/components/Panda";
import Confetti from "@/components/Confetti";
import { config } from "@/data/config";

const bursts = [
  { x: "18%", y: "26%", c: "#E8528A", d: "0s" },
  { x: "80%", y: "22%", c: "#9C84E8", d: "0.4s" },
  { x: "50%", y: "16%", c: "#FFB38A", d: "0.8s" },
  { x: "28%", y: "52%", c: "#F58FB1", d: "1.2s" },
  { x: "74%", y: "50%", c: "#C2316B", d: "1.6s" },
];

function Burst({ x, y, c, d }) {
  const n = 14;
  return (
    <div className="burst" style={{ left: x, top: y, animationDelay: d }}>
      {Array.from({ length: n }, (_, i) => {
        const a = (i / n) * Math.PI * 2;
        return (
          <b
            key={i}
            style={{ "--dx": `${Math.round(Math.cos(a) * 95)}px`, "--dy": `${Math.round(Math.sin(a) * 95)}px`, background: c, animationDelay: d }}
          />
        );
      })}
    </div>
  );
}

export default function Finale() {
  const [lit, setLit] = useState(true);
  const [round, setRound] = useState(0);

  const toggle = () => {
    if (lit) setRound((r) => r + 1);
    setLit(!lit);
  };

  return (
    <div className="page">
      <header className="page-head">
        <div className="eyebrow fade-up">The last page</div>
        <h1 className="fade-up" style={{ animationDelay: ".15s" }}>Make a wish</h1>
      </header>

      <section className="stage">
        {!lit && (
          <>
            <Confetti count={60} once key={`c${round}`} />
            {bursts.map((b, i) => (
              <Burst key={`${round}-${i}`} {...b} />
            ))}
          </>
        )}

        <svg viewBox="0 0 320 300" width="340" height="318" style={{ maxWidth: "100%" }} role="img" aria-label="Birthday cake with three candles">
          <ellipse cx="160" cy="268" rx="140" ry="18" fill="#EBD3DE" />
          <rect x="50" y="190" width="220" height="74" rx="14" fill="#F58FB1" />
          <rect x="84" y="128" width="152" height="68" rx="14" fill="#FFC9A8" />
          <path d="M50 204 C66 232 86 232 102 204 C118 232 138 232 154 204 C170 232 190 232 206 204 C222 232 242 232 258 204 L270 204 L270 190 L50 190 Z" fill="#fff" />
          <path d="M84 142 C98 164 114 164 128 142 C142 164 160 164 172 142 C186 164 204 164 220 142 L236 142 L236 128 L84 128 Z" fill="#fff" />
          <circle cx="90" cy="236" r="5" fill="#fff" />
          <circle cx="160" cy="244" r="5" fill="#fff" />
          <circle cx="230" cy="236" r="5" fill="#fff" />
          <rect x="120" y="86" width="10" height="44" rx="3" fill="#B9A4F0" />
          <rect x="155" y="78" width="10" height="52" rx="3" fill="#C9B6FF" />
          <rect x="190" y="86" width="10" height="44" rx="3" fill="#B9A4F0" />
          {lit ? (
            <g>
              {[125, 160, 195].map((x, i) => (
                <path key={x} className="flame" style={{ animationDelay: `${i * 0.1}s`, transformOrigin: `${x}px ${i === 1 ? 76 : 84}px` }} d={`M${x} ${i === 1 ? 50 : 58} C${x - 10} ${i === 1 ? 64 : 72} ${x - 8} ${i === 1 ? 76 : 84} ${x} ${i === 1 ? 76 : 84} C${x + 8} ${i === 1 ? 76 : 84} ${x + 10} ${i === 1 ? 64 : 72} ${x} ${i === 1 ? 50 : 58} Z`} fill="#FFB347" />
              ))}
            </g>
          ) : (
            <g stroke="#B9A4B8" strokeWidth="3" strokeLinecap="round" fill="none">
              {[125, 160, 195].map((x, i) => (
                <path key={x} className="smoke" style={{ animationDelay: `${i * 0.3}s` }} d={`M${x} ${i === 1 ? 70 : 78} q-6 -10 0 -18 q6 -8 0 -16`} />
              ))}
            </g>
          )}
        </svg>

        <p className="line" aria-live="polite">
          {lit ? "Close your eyes, think of one thing you want most this year, then blow." : "Wish made. I have a very good feeling about this one."}
        </p>
        <button className="btn btn-primary" onClick={toggle}>
          {lit ? "Blow out the candles" : "Light them again"}
        </button>

        {!lit && (
          <div className="final-card">
            <h2 className="script" style={{ fontSize: 56, color: "#C2316B", lineHeight: 1.1 }}>Happy Birthday, {config.name}!</h2>
            <div className="te-big">{config.teluguLine}</div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
              <Panda size={100} hat label="Panda celebrating" />
            </div>
            <p style={{ marginTop: 8, fontSize: 17, color: "#5A3A58" }}>With all my love, Dinesh</p>
          </div>
        )}
      </section>

      <Pager prev={{ href: "/cards", label: "Back to cards" }} next={{ href: "/", label: "Back to the start" }} />
    </div>
  );
}
