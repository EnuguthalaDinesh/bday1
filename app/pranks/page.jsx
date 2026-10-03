"use client";
import { useEffect, useState } from "react";
import Pager from "@/components/Pager";
import Panda from "@/components/Panda";
import Confetti from "@/components/Confetti";
import { config } from "@/data/config";

/* 1. The button that runs away */
function Runaway() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [tries, setTries] = useState(0);
  const [yes, setYes] = useState(false);
  const caught = tries >= 6;

  const dodge = () => {
    if (caught) return;
    setTries((t) => t + 1);
    setPos({ x: (Math.random() - 0.5) * 200, y: (Math.random() - 0.5) * 90 });
  };

  if (yes) {
    return (
      <>
        <Confetti count={40} once />
        <Panda size={100} hat label="Happy panda" />
        <p className="big">I knew it! Happy Birthday, {config.name}!</p>
      </>
    );
  }
  return (
    <>
      <p className="big">Is today your birthday?</p>
      <div className="dodge-area">
        <button className="btn btn-primary" onClick={() => setYes(true)}>Yes!</button>
        <button
          className="btn btn-ghost dodge"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          onPointerEnter={dodge}
          onClick={() => (caught ? setYes(true) : dodge())}
        >
          {caught ? "Okay fine, yes" : tries >= 3 ? "Are you sure?" : "No"}
        </button>
      </div>
      <p className="hint">{tries === 0 ? "Try pressing No." : caught ? "Got you. The button gave up." : `The No button dodged ${tries} time${tries > 1 ? "s" : ""}.`}</p>
    </>
  );
}

/* 2. The age calculator that gets it very wrong */
const ageSteps = [
  "",
  "Scanning birthday data...",
  "Age detected: 87 years",
  "Hmm, that cannot be right...",
  "Recalculating...",
  "Result: forever young, forever lovely",
];
function AgeCalc() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step > 0 && step < 5) {
      const t = setTimeout(() => setStep((s) => s + 1), step === 2 ? 1900 : 1300);
      return () => clearTimeout(t);
    }
  }, [step]);
  return (
    <>
      {step === 0 && <p className="hint">Let us work out exactly how old you are.</p>}
      {step > 0 && <div className={step === 2 ? "age-num" : "big"}>{step === 2 ? "87" : ageSteps[step]}</div>}
      {step === 2 && <p className="big">{ageSteps[2]}</p>}
      {step === 5 && <Panda size={80} bow label="Panda blushing" />}
      <button className="btn btn-primary" onClick={() => setStep(1)} disabled={step > 0 && step < 5}>
        {step === 0 ? "Calculate my age" : step === 5 ? "Do it again" : "Working..."}
      </button>
    </>
  );
}

/* 3. The friendship that "expired" */
function Expired() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <>
        <div className="hug">
          <div className="a"><Panda size={110} wave={false} /></div>
          <div className="b"><Panda size={110} wave={false} bow /></div>
          {[0, 1, 2].map((i) => (
            <svg key={i} className="heart" viewBox="0 0 40 40" style={{ left: `${42 + i * 8}%`, animationDelay: `${i * 0.7}s` }} aria-hidden="true">
              <path d="M20 34 C4 22 6 8 14 8 C18 8 20 12 20 12 C20 12 22 8 26 8 C34 8 36 22 20 34 Z" fill="#E8528A" />
            </svg>
          ))}
        </div>
        <p className="big">Friendship renewed. Valid forever, no fees.</p>
      </>
    );
  }
  return (
    <div className="expired">
      <div className="bar"><span className="dot" /> System message</div>
      <p className="big" style={{ margin: "14px 0 4px" }}>Your friendship has expired.</p>
      <p className="hint" style={{ marginBottom: 18 }}>Renew now to keep receiving hugs, snacks and terrible jokes.</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <button className="btn btn-primary" onClick={() => setDone(true)}>Renew now</button>
        <button className="btn btn-ghost" onClick={() => setDone(true)}>Renew forever</button>
      </div>
    </div>
  );
}

/* 4. The gift stuck at 99% */
function Loading() {
  const [running, setRunning] = useState(false);
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!running) return;
    const iv = setInterval(() => setPct((p) => (p < 99 ? p + 1 : p)), 45);
    return () => clearInterval(iv);
  }, [running]);

  useEffect(() => {
    if (running && pct === 99) {
      const t = setTimeout(() => {
        setPct(100);
        setDone(true);
      }, 3300);
      return () => clearTimeout(t);
    }
  }, [running, pct]);

  if (done) {
    return (
      <>
        <Confetti count={40} once />
        <p className="big">Gift unlocked: one giant virtual hug, valid for life.</p>
        <Panda size={90} hat label="Panda with arms open" />
      </>
    );
  }
  return (
    <>
      {!running && <button className="btn btn-primary" onClick={() => setRunning(true)}>Open my gift</button>}
      {running && (
        <>
          <div className="progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
            <div style={{ width: `${pct}%` }} />
          </div>
          <p className="big">{pct}%</p>
          <p className="hint">{pct < 99 ? "Wrapping your gift..." : "Stuck at 99%... good things take a moment."}</p>
        </>
      )}
    </>
  );
}

export default function Pranks() {
  return (
    <div className="page">
      <header className="page-head">
        <div className="eyebrow fade-up">Page three</div>
        <h1 className="fade-up" style={{ animationDelay: ".15s" }}>Gentle pranks</h1>
        <p className="fade-up" style={{ animationDelay: ".3s" }}>Four harmless little tricks. Nothing breaks, nothing is scary, and everything ends with a smile.</p>
      </header>

      <div className="prank-grid">
        <section className="prank"><div className="eyebrow">Prank 1</div><h2>The shy button</h2><Runaway /></section>
        <section className="prank"><div className="eyebrow">Prank 2</div><h2>Age calculator</h2><AgeCalc /></section>
        <section className="prank"><div className="eyebrow">Prank 3</div><h2>Important notice</h2><Expired /></section>
        <section className="prank"><div className="eyebrow">Prank 4</div><h2>Your gift is loading</h2><Loading /></section>
      </div>

      <Pager prev={{ href: "/hangouts", label: "Back to hangouts" }} next={{ href: "/wishes", label: "Next: world of wishes" }} />
    </div>
  );
}
