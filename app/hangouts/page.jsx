import Pager from "@/components/Pager";
import Panda from "@/components/Panda";
import { config } from "@/data/config";

export const metadata = { title: `Hangouts with ${config.name}` };

export default function Hangouts() {
  return (
    <div className="page">
      <header className="page-head">
        <div className="eyebrow fade-up">Page two</div>
        <h1 className="fade-up" style={{ animationDelay: ".15s" }}>Our hangouts</h1>
        <p className="fade-up" style={{ animationDelay: ".3s" }}>
          Every outing, every plan that went sideways, every laugh we could not stop. Hover a photo to hold it still.
        </p>
      </header>

      <div className="hang-wrap">
        <div className="hang-row">
          {config.photos.map((p, i) => (
            <figure
              key={p.src}
              className="hang fade-up"
              style={{ "--d": `${i * -0.9}s`, "--r": `${i % 2 ? 2.6 : 2}deg`, animationDelay: `${0.3 + i * 0.15}s` }}
            >
              {i === 0 && (
                <div className="rope-panda">
                  <Panda size={64} hat label="A panda sitting on the rope" />
                </div>
              )}
              <div className="swing">
                <span className="pin" />
                <div className="frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" />
                  <div className="tag-row">
                    <span className="tag">
                      <svg viewBox="0 0 40 40" width="16" height="16" aria-hidden="true">
                        <path d="M20 34 C4 22 6 8 14 8 C18 8 20 12 20 12 C20 12 22 8 26 8 C34 8 36 22 20 34 Z" fill="#C2316B" />
                      </svg>
                      {config.name}
                    </span>
                    <span className="place">{p.place}</span>
                  </div>
                  <blockquote className="quote">&ldquo;{p.quote}&rdquo;</blockquote>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <Pager prev={{ href: "/letter", label: "Back to the letter" }} next={{ href: "/pranks", label: "Next: gentle pranks" }} />
    </div>
  );
}
