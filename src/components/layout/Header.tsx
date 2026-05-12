"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/about", label: "מי אנחנו" },
  { href: "/activities", label: "פעילויות" },
  { href: "/booths", label: "דוכנים" },
  { href: "/shuk", label: "קוש" },
  { href: "/gallery", label: "גלריה" },
  { href: "/stories", label: "סיפורים" },
  { href: "/contact", label: "יצירת קשר" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--color-cream)",
        borderBottom: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div
        className="container-max"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBlock: "var(--space-3)",
          paddingInline: "var(--space-6)",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/images/logo.png"
            alt="השיבנו — לומדים באהבה"
            width={160}
            height={60}
            style={{ height: "48px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                fontWeight: 400,
                color: "var(--color-dark-mid)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-dark)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-dark-mid)")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}
          className="hidden-mobile"
        >
          <Link href="/join" className="btn-secondary" style={{ padding: "var(--space-2) var(--space-6)", fontSize: "0.875rem" }}>
            הצטרף
          </Link>
          <Link href="/donate" className="btn-primary" style={{ padding: "var(--space-2) var(--space-6)", fontSize: "0.875rem" }}>
            תרום
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="פתח תפריט"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "var(--space-2)",
            color: "var(--color-dark)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="show-mobile"
          style={{
            backgroundColor: "var(--color-cream)",
            borderTop: "1px solid var(--color-border)",
            padding: "var(--space-4) var(--space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                color: "var(--color-dark-mid)",
                textDecoration: "none",
                paddingBlock: "var(--space-2)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: "var(--space-3)", paddingTop: "var(--space-2)" }}>
            <Link href="/join" className="btn-secondary" style={{ flex: 1, justifyContent: "center", fontSize: "0.875rem" }}>
              הצטרף
            </Link>
            <Link href="/donate" className="btn-primary" style={{ flex: 1, justifyContent: "center", fontSize: "0.875rem" }}>
              תרום
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
