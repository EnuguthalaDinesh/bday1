"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Panda from "@/components/Panda";
import Confetti from "@/components/Confetti";
import { config } from "@/data/config";

const tiles = [
  { href: "/letter", title: "A letter for you", text: "Words from the heart, unfolding line by line." },
  { href: "/hangouts", title: "Our hangouts", text: "Your photos, hanging on a rope with a little quote each." },
  { href: "/pranks", title: "Gentle pranks", text: "A few harmless tricks. Nothing scary, promise." },
  { href: "/wishes", title: "World of wishes", text: "Your name in the middle, wishes in Indian languages around it." },
  { href: "/cards", title: "Scratch cards", text: "Six wishes in six styles. Scratch to reveal." },
  { href: "/finale", title: "The grand finale", text: "Cake, candles and fireworks. Save this for last." },
];

const sparkles = [
  { l: "6%", t: "8%", s: 22, d: "0s" },
  { l: "88%", t: "14%", s: 28, d: "0.6s" },
  { l: "14%", t: "82%", s: 18, d: "1.1s" },
  { l: "92%", t: "78%", s: 24, d: "0.3s" },
  { l: "50%", t: "-6%", s: 16, d: "1.5s" },
  { l: "74%", t: "96%", s: 14, d: "0.9s" },
];

/*
  phase 0: envelope closed (waiting for a tap)
  phase 1: seal breaks, flap opens
  phase 2: the letter rises out + confetti
  phase 3: the letter zooms toward you
  phase 4: the website is revealed
*/
export default function Home() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase === 0 || phase >= 4) return;
    const wait = [0, 950, 1500, 800][phase];
    const t = setTimeout(() => setPhase((p) => p + 1), wait);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <>
      {phase >= 2 && <Confetti count={60} once />}

      {phase < 4 ? (
        <section className="gate">
          <div className={`gate-text ${phase >= 3 ? "out" : ""}`}>
            <div className="eyebrow fade-up">A special delivery for {config.name}</div>
            <h1 className="fade-up" style={{ animationDelay: ".2s" }}>
              You have got a letter.
            </h1>
          </div>

          <div className={`env-scene phase${phase} ${phase >= 3 ? "zoom" : ""}`}>
            {sparkles.map((s, i) => (
              <svg key={i} className="sparkle" viewBox="0 0 40 40" width={s.s} height={s.s} style={{ left: s.l, top: s.t, animationDelay: s.d }} aria-hidden="true">
                <path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="#E8528A" />
              </svg>
            ))}

            <div className="env-panda" aria-hidden="true">
              <Panda size={96} hat />
            </div>

            <button className="env-btn" onClick={() => phase === 0 && setPhase(1)} disabled={phase !== 0} aria-label={`Open the envelope for ${config.name}`}>
              <span className="env-back" />
              <span className="env-letter">
                <span className="env-letter-small">Happy birthday</span>
                <span className="env-letter-name script">{config.name}</span>
                <svg viewBox="0 0 40 40" width="22" height="22" aria-hidden="true">
                  <path d="M20 34 C4 22 6 8 14 8 C18 8 20 12 20 12 C20 12 22 8 26 8 C34 8 36 22 20 34 Z" fill="#E8528A" />
                </svg>
              </span>
              <span className="env-pocket">
                <i className="pl" />
                <i className="pr" />
                <i className="pb" />
              </span>
              <span className="env-flap">
                <i className="flap-f" />
                <i className="flap-b" />
              </span>
              <span className="env-seal" aria-hidden="true">
                <svg viewBox="0 0 60 60" width="100%" height="100%">
                  <circle cx="30" cy="30" r="28" fill="#B3194F" />
                  <circle cx="30" cy="30" r="22" fill="none" stroke="#E99AB6" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M30 43 C15 33 17 21 24 21 C27.5 21 30 25 30 25 C30 25 32.5 21 36 21 C43 21 45 33 30 43 Z" fill="#FFD9E4" />
                </svg>
              </span>
            </button>
          </div>

          <p className={`env-hint ${phase > 0 ? "out" : ""}`}>
            <span>Tap the envelope to open</span>
          </p>
        </section>
      ) : (
        <div className="page fade-up">
          <section className="hero">
            <div className="hero-pill">Made with love, just for you</div>
            <h1 className="hero-title script">Happy Birthday</h1>
            <div className="hero-name">{config.name}</div>
            <Panda size={110} hat label="A panda in a party hat waving hello" />
            <p>Six little pages, a few gentle surprises, and wishes in the languages closest to your heart. Start anywhere.</p>
            <Link href="/letter" className="btn btn-primary" style={{ marginTop: 8, animation: "fadeUp 1s ease .8s both" }}>
              Begin with your letter
            </Link>
          </section>

          <section className="tiles">
            {tiles.map((t, i) => (
              <Link key={t.href} href={t.href} className="tile" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                <div className="num">0{i + 1}</div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Link>
            ))}
          </section>
        </div>
      )}
    </>
  );
}
