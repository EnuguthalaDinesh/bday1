"use client";
import { useEffect, useState } from "react";
import Panda from "./Panda";

// A panda that strolls to a new random spot every few seconds.
export default function WanderPanda({ size = 70, every = 6000, startX = 8, startY = 70, hat = false, bow = false }) {
  const [pos, setPos] = useState({ x: startX, y: startY, flip: false });

  useEffect(() => {
    const move = () =>
      setPos((p) => {
        const x = 4 + Math.random() * 84;
        const y = 18 + Math.random() * 70;
        return { x, y, flip: x < p.x };
      });
    const first = setTimeout(move, 800);
    const timer = setInterval(move, every);
    return () => {
      clearTimeout(first);
      clearInterval(timer);
    };
  }, [every]);

  return (
    <div
      className="wander"
      style={{ left: `${pos.x}%`, top: `${pos.y}%`, transitionDuration: `${Math.round(every * 0.92)}ms` }}
    >
      <div style={{ transform: pos.flip ? "scaleX(-1)" : "none", transition: "transform .4s" }}>
        <Panda size={size} hat={hat} bow={bow} />
      </div>
    </div>
  );
}
