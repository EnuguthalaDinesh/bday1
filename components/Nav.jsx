"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { config } from "@/data/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/letter", label: "Letter" },
  { href: "/hangouts", label: "Hangouts" },
  { href: "/pranks", label: "Pranks" },
  { href: "/wishes", label: "Wishes" },
  { href: "/cards", label: "Cards" },
  { href: "/finale", label: "Finale" },
];

export default function Nav() {
  const path = (usePathname() || "/").replace(/\/$/, "") || "/";
  return (
    <header className="nav">
      <Link href="/" className="nav-logo script">
        for {config.name}
      </Link>
      <nav className="nav-links" aria-label="Pages">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={path === l.href ? "active" : ""} aria-current={path === l.href ? "page" : undefined}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
