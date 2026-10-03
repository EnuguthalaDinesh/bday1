// A cute, hand-built SVG panda. No external assets needed.
export default function Panda({
  size = 100,
  hat = false,
  bow = false,
  wave = true,
  className = "",
  style,
  label,
}) {
  const black = "#2B2230";
  const edge = "#E8D8E2";
  return (
    <svg
      viewBox="0 -18 120 158"
      width={size}
      height={(size * 158) / 120}
      className={`panda ${className}`}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {/* legs */}
      <ellipse cx="42" cy="126" rx="14" ry="11" fill={black} />
      <ellipse cx="78" cy="126" rx="14" ry="11" fill={black} />
      {/* body */}
      <ellipse cx="60" cy="94" rx="34" ry="34" fill="#fff" stroke={edge} strokeWidth="1.5" />
      <ellipse cx="60" cy="98" rx="20" ry="22" fill="#FFF4F6" />
      {/* left arm */}
      <ellipse cx="26" cy="92" rx="10" ry="20" transform="rotate(25 26 92)" fill={black} />
      {/* right arm (waves) */}
      <g className={wave ? "panda-wave" : ""}>
        <ellipse cx="96" cy="88" rx="10" ry="20" transform="rotate(-25 96 88)" fill={black} />
      </g>
      {/* ears */}
      <circle cx="31" cy="21" r="12" fill={black} />
      <circle cx="89" cy="21" r="12" fill={black} />
      {/* head */}
      <circle cx="60" cy="48" r="35" fill="#fff" stroke={edge} strokeWidth="1.5" />
      {/* eye patches */}
      <ellipse cx="45" cy="47" rx="9" ry="12" transform="rotate(22 45 47)" fill={black} />
      <ellipse cx="75" cy="47" rx="9" ry="12" transform="rotate(-22 75 47)" fill={black} />
      {/* eyes */}
      <g className="panda-blink">
        <circle cx="46" cy="46" r="4" fill="#fff" />
        <circle cx="74" cy="46" r="4" fill="#fff" />
        <circle cx="46.5" cy="46.5" r="2.2" fill={black} />
        <circle cx="73.5" cy="46.5" r="2.2" fill={black} />
        <circle cx="47.2" cy="45.6" r="0.8" fill="#fff" />
        <circle cx="74.2" cy="45.6" r="0.8" fill="#fff" />
      </g>
      {/* cheeks */}
      <circle cx="36" cy="62" r="5" fill="#F58FB1" opacity="0.55" />
      <circle cx="84" cy="62" r="5" fill="#F58FB1" opacity="0.55" />
      {/* nose + smile */}
      <ellipse cx="60" cy="58" rx="5.5" ry="3.6" fill={black} />
      <path d="M52 64 Q60 72 68 64" fill="none" stroke={black} strokeWidth="2" strokeLinecap="round" />
      {hat && (
        <g>
          <polygon points="46,18 74,18 60,-14" fill="#C2316B" />
          <polygon points="52,10 68,10 60,-6" fill="#F58FB1" opacity="0.8" />
          <circle cx="60" cy="-14" r="4.5" fill="#FFD9C7" />
        </g>
      )}
      {bow && (
        <g>
          <polygon points="80,8 98,-2 98,18" fill="#E8528A" />
          <polygon points="80,8 62,-2 62,18" fill="#E8528A" />
          <circle cx="80" cy="8" r="5" fill="#C2316B" />
        </g>
      )}
    </svg>
  );
}
