"use client";

import Link from "next/link";
import Image from "next/image";

const navColumns = [
  {
    title: "האתר",
    links: [
      { href: "/", label: "דף הבית" },
      { href: "/about", label: "מי אנחנו" },
      { href: "/activities", label: "פעילויות" },
      { href: "/faq", label: "שאלות נפוצות" },
    ],
  },
  {
    title: "פעילויות",
    links: [
      { href: "/booths", label: "דוכנים" },
      { href: "/shuk", label: "קוש" },
      { href: "/yavne", label: "תוכנית יבנה" },
      { href: "/stories", label: "סיפורים מהשטח" },
    ],
  },
  {
    title: "מדיה",
    links: [
      { href: "/gallery", label: "גלריה" },
      { href: "/stories", label: "בלוג" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "פייסבוק",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "אינסטגרם",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com",
    label: "יוטיוב",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-dark)",
        color: "var(--color-cream)",
        paddingBlock: "var(--space-16)",
        paddingInline: "var(--space-6)",
        marginTop: "auto",
      }}
    >
      <div className="container-max">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-12)",
            marginBottom: "var(--space-12)",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "var(--space-3)" }}>
              <Image
                src="/images/logo.png"
                alt="השיבנו — לומדים באהבה"
                width={160}
                height={60}
                style={{ height: "52px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                color: "var(--color-dark-light)",
                marginBottom: "var(--space-6)",
                lineHeight: 1.75,
              }}
            >
              לומדים באהבה
              <br />
              יהדות חיה, בגובה העיניים.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <a
                href="tel:+972501234567"
                style={{ color: "var(--color-dark-light)", textDecoration: "none", fontSize: "var(--text-body)", fontFamily: "var(--font-body)" }}
              >
                📞 050-123-4567
              </a>
              <a
                href="mailto:info@hashivenu.org"
                style={{ color: "var(--color-dark-light)", textDecoration: "none", fontSize: "var(--text-body)", fontFamily: "var(--font-body)" }}
              >
                ✉️ info@hashivenu.org
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-small)",
                  fontWeight: 700,
                  color: "var(--color-cream)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-4)",
                }}
              >
                {col.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        color: "var(--color-dark-light)",
                        textDecoration: "none",
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body)",
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cream)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-dark-light)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Join column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-small)",
                fontWeight: 700,
                color: "var(--color-cream)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "var(--space-4)",
              }}
            >
              הצטרף אלינו
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ justifyContent: "center", fontSize: "0.875rem" }}
              >
                💬 WhatsApp
              </a>
              <Link
                href="/donate"
                className="btn-secondary"
                style={{ justifyContent: "center", fontSize: "0.875rem" }}
              >
                תרום ותהיה שותף
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid rgba(250, 247, 242, 0.1)",
            paddingTop: "var(--space-6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-small)",
              color: "var(--color-dark-light)",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} עמותת השיבנו. כל הזכויות שמורות.
          </p>

          {/* Social */}
          <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  color: "var(--color-dark-light)",
                  transition: "color 0.15s ease",
                  display: "flex",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-dark-light)")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
