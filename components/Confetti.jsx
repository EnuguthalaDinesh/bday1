const colors = ["#F58FB1", "#B9A4F0", "#FFB38A", "#E8528A", "#FFC9A8", "#C9B6FF"];

// Deterministic confetti (no Math.random) so server and client render the same HTML.
export default function Confetti({ count = 40, once = false }) {
  return (
    <div className={`confetti ${once ? "once" : ""}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            background: colors[i % colors.length],
            width: 6 + (i % 3) * 3,
            height: 10 + (i % 4) * 3,
            animationDuration: `${(once ? 3 : 5) + (i % 5)}s`,
            animationDelay: once ? `${((i * 0.07) % 1.2).toFixed(2)}s` : `-${((i * 0.43) % 6).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}
