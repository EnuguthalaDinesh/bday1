"use client";
import { useState } from "react";
import Pager from "@/components/Pager";
import { config } from "@/data/config";

export default function Wishes() {
  const [active, setActive] = useState(0);
  const list = config.wishes;
  const w = list[active];

  return (
    <div className="page">
      <header className="page-head">
        <div className="eyebrow fade-up">Page four</div>
        <h1 className="fade-up" style={{ animationDelay: ".15s" }}>World of wishes</h1>
        <p className="fade-up" style={{ animationDelay: ".3s" }}>
          Happy birthday in the languages of India. Tap any wish to see how it sounds.
        </p>
      </header>

      {/* Orbit (wide screens) */}
      <div className="orbit fade-up" style={{ animationDelay: ".4s" }}>
        <div className="ring">
          {list.map((x, i) => (
            <div key={x.lang} className="chip-pos" style={{ "--a": `${(360 / list.length) * i}deg` }}>
              <div className="chip-in">
                <button className={`chip ${i === active ? "on" : ""}`} style={{ fontFamily: `${x.font}, sans-serif` }} onClick={() => setActive(i)} aria-label={`${x.lang}: ${x.text}`}>
                  {x.text}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="orbit-center">
          <div className="small">Happy birthday</div>
          <div className="name script">{config.name}</div>
        </div>
      </div>

      {/* Chips (small screens) */}
      <div className="small-name">
        <div className="eyebrow">Happy birthday</div>
        <div className="name script">{config.name}</div>
      </div>
      <div className="chips">
        {list.map((x, i) => (
          <button key={x.lang} className={`chip ${i === active ? "on" : ""}`} onClick={() => setActive(i)}>
            {x.lang}
          </button>
        ))}
      </div>

      <div className="wish-detail" aria-live="polite">
        <div className="lang">{w.lang}</div>
        <div className="text" style={{ fontFamily: `${w.font}, sans-serif` }}>{w.text}</div>
        <div className="roman">{w.roman}</div>
      </div>

      <Pager prev={{ href: "/pranks", label: "Back to pranks" }} next={{ href: "/cards", label: "Next: scratch cards" }} />
    </div>
  );
}
