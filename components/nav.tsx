"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/overview", label: "Overview" },
  { href: "/content", label: "Content" },
  { href: "/revenue", label: "Revenue" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/settings", label: "Settings" }
];

export function AppNav() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="nav-inner">
        <strong>CreatorOS</strong>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`nav-link ${active ? "active" : ""}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
