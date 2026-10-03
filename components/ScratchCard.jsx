"use client";
import { useEffect, useRef, useState } from "react";

// Scratch-to-reveal card. Children sit underneath a canvas the user scratches away.
export default function ScratchCard({ kind, children, tone = 0 }) {
  const wrap = useRef(null);
  const canvas = useRef(null);
  const drawing = useRef(false);
  const [done, setDone] = useState(false);

  const tones = [
    ["#F58FB1", "#E8528A"],
    ["#C9B6FF", "#9C84E8"],
    ["#FFB38A", "#F58F6B"],
  ];

  useEffect(() => {
    const c = canvas.current;
    const w = wrap.current;
    if (!c || !w) return;
    const paint = () => {
      const { width, height } = w.getBoundingClientRect();
      c.width = Math.max(1, Math.floor(width));
      c.height = Math.max(1, Math.floor(height));
      const ctx = c.getContext("2d");
      const [a, b] = tones[tone % tones.length];
      const g = ctx.createLinearGradient(0, 0, c.width, c.height);
      g.addColorStop(0, a);
      g.addColorStop(1, b);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = "rgba(255,255,255,.9)";
      ctx.font = "600 20px Jost, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Scratch me", c.width / 2, c.height / 2 - 4);
      ctx.font = "400 14px Jost, sans-serif";
      ctx.fillText(kind, c.width / 2, c.height / 2 + 20);
    };
    paint();
    const ro = new ResizeObserver(() => {
      if (!done) paint();
    });
    ro.observe(w);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scratch = (e) => {
    if (!drawing.current || done) return;
    const c = canvas.current;
    const r = c.getBoundingClientRect();
    const ctx = c.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(e.clientX - r.left, e.clientY - r.top, 22, 0, Math.PI * 2);
    ctx.fill();
  };

  const check = () => {
    drawing.current = false;
    const c = canvas.current;
    const ctx = c.getContext("2d");
    const data = ctx.getImageData(0, 0, c.width, c.height).data;
    let clear = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 4 * 24) {
      total++;
      if (data[i] === 0) clear++;
    }
    if (clear / total > 0.5) setDone(true);
  };

  return (
    <div className="scratch" ref={wrap}>
      <div className="scratch-under">
        <span className="scratch-kind">{kind}</span>
        {children}
      </div>
      <canvas
        ref={canvas}
        className={`scratch-top ${done ? "gone" : ""}`}
        onPointerDown={(e) => {
          drawing.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          scratch(e);
        }}
        onPointerMove={scratch}
        onPointerUp={check}
        onPointerCancel={check}
        aria-label={`Scratch card: ${kind}`}
      />
    </div>
  );
}
