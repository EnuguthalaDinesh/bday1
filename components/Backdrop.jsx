const colors = ["#F58FB1", "#B9A4F0", "#FFB38A", "#E8528A", "#FFC9A8", "#C9B6FF", "#F58FB1"];

export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      {colors.map((c, i) => (
        <svg
          key={i}
          viewBox="0 0 120 220"
          className="balloon"
          style={{
            left: `${6 + i * 14}%`,
            width: 60 + (i % 3) * 16,
            animationDuration: `${17 + (i % 4) * 3}s`,
            animationDelay: `-${(i * 2.6).toFixed(1)}s`,
          }}
        >
          <ellipse cx="60" cy="62" rx="44" ry="54" fill={c} />
          <path d="M54 114 L60 124 L66 114 Z" fill={c} />
          <path d="M60 124 C50 150 72 170 58 214" fill="none" stroke="#3B1B3A" strokeWidth="1.5" />
          <ellipse cx="44" cy="42" rx="9" ry="14" fill="#fff" opacity="0.45" />
        </svg>
      ))}
    </div>
  );
}
