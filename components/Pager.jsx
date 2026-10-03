import Link from "next/link";

export default function Pager({ prev, next }) {
  return (
    <div className="pager">
      {prev ? (
        <Link className="btn btn-ghost" href={prev.href}>
          {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link className="btn btn-primary" href={next.href}>
          {next.label}
        </Link>
      )}
    </div>
  );
}
