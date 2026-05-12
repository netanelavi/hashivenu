import Image from "next/image";
import Link from "next/link";

/* ─── Section A: Hero ─── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/hero-bg.png"
        alt="מעגל שיח של השיבנו"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(28, 24, 18, 0.55)" }} />
      <div
        className="container-max"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          paddingInline: "var(--space-6)",
          paddingBlock: "var(--space-20)",
        }}
      >
        <h1 style={{ color: "var(--color-cream)", marginBottom: "var(--space-6)", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
          השיבנו — לומדים באהבה
        </h1>
        <p style={{ color: "rgba(250,247,242,0.85)", fontSize: "var(--text-h3)", fontFamily: "var(--font-body)", marginBottom: "var(--space-12)", maxWidth: "560px", marginInline: "auto", lineHeight: 1.6 }}>
          יהדות חיה, בגובה העיניים.
          <br />
          לא יוטיוב — שולחן אמיתי.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/join" className="btn-primary">הצטרף אלינו</Link>
          <Link href="/donate" className="btn-secondary" style={{ color: "var(--color-gold)", borderColor: "var(--color-gold)" }}>
            תרום ותהיה שותף
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Section B: Stats ─── */
const stats = [
  { number: "7", label: "דוכנים ברחבי הארץ" },
  { number: "250", label: "משתתפים בסדר גדול שבועי" },
  { number: "70", label: "בשוק כל שבוע" },
  { number: "פורים תשפ״ה", label: "הדוכן הראשון" },
];

function Stats() {
  return (
    <section style={{ backgroundColor: "var(--color-teal)", paddingBlock: "var(--space-12)", paddingInline: "var(--space-6)" }}>
      <div className="container-max" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-8)" }}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "white", lineHeight: 1.1, marginBottom: "var(--space-2)" }}>
              {s.number}
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-small)", color: "rgba(255,255,255,0.85)" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Section C: About teaser ─── */
function AboutTeaser() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="container-max" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-12)", alignItems: "center" }}>
        <div>
          <h2 style={{ marginBottom: "var(--space-4)" }}>מי אנחנו?</h2>
          <p style={{ marginBottom: "var(--space-4)", maxWidth: "520px" }}>
            עמותת "השיבנו — לומדים באהבה" נוסדה מבית הרב דוד ג'יאמי. אנחנו מחברים יהודים לתורה — לא דרך מסך, אלא בשולחן אמיתי, עם אנשים אמיתיים, בגובה העיניים.
          </p>
          <p style={{ marginBottom: "var(--space-8)", maxWidth: "520px" }}>
            מדוכנים בשוק ועד מעגלי שיח בסלון — כל פגישה היא הזדמנות לחיבור אמיתי.
          </p>
          <Link href="/about" className="btn-primary">קרא עוד על השיבנו ←</Link>
        </div>
        <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
          <Image src="/images/rabbi.png" alt="הרב דוד ג'יאמי" width={600} height={450} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </div>
    </section>
  );
}

/* ─── Section D: Activities teaser ─── */
const activities = [
  { img: "/images/activity-circles.png", title: "מעגלי שיח", desc: "כל חמישי — חיבור אמיתי סביב שולחן", href: "/activities" },
  { img: "/images/activity-shuk.png",   title: "דוכנים",     desc: "7 מיקומים ברחבי הארץ",             href: "/booths" },
  { img: "/images/gallery-80.png",      title: "שיעורי שוק", desc: "תורה חיה — בין הדוכנים, בין האנשים", href: "/shuk" },
  { img: "/images/activity-yavne.png",  title: "תוכנית יבנה",desc: "שנה שלמה לחוזרים בתשובה",          href: "/yavne" },
];

function ActivitiesTeaser() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-cream-alt)" }}>
      <div className="container-max">
        <h2 style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>מה עושים אצלנו?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-6)", marginBottom: "var(--space-12)" }}>
          {activities.map((a) => (
            <Link key={a.title} href={a.href} style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: "var(--color-cream)", borderRadius: "var(--radius-sm)", overflow: "hidden", boxShadow: "var(--shadow-sm)", border: "1px solid var(--color-border)" }}>
                <div style={{ position: "relative", aspectRatio: "16/9" }}>
                  <Image src={a.img} alt={a.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "var(--space-4)" }}>
                  <h3 style={{ marginBottom: "var(--space-1)", fontWeight: 700, fontSize: "var(--text-body)", color: "var(--color-dark)" }}>{a.title}</h3>
                  <p style={{ fontSize: "var(--text-small)", margin: 0 }}>{a.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/activities" className="btn-primary">לכל הפעילויות ←</Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Section E: Gallery teaser ─── */
const galleryImages = [
  { src: "/images/gallery-77.png", alt: "מעגל שיח" },
  { src: "/images/gallery-79.png", alt: "ערב לימוד" },
  { src: "/images/gallery-80.png", alt: "דוכן בשוק" },
  { src: "/images/gallery-81.png", alt: "סעודת שבת" },
];

function GalleryTeaser() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="container-max">
        <h2 style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>אצלנו בשטח</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-4)", marginBottom: "var(--space-12)" }}>
          {galleryImages.map((img) => (
            <div key={img.src} style={{ borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "4/3", position: "relative", boxShadow: "var(--shadow-md)" }}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/gallery" className="btn-primary">לגלריה המלאה ←</Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Section F: CTA final ─── */
function CTAFinal() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-dark)", position: "relative", overflow: "hidden" }}>
      <Image src="/images/cta-bg.png" alt="" fill style={{ objectFit: "cover", opacity: 0.15 }} />
      <div className="container-max" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-8)", position: "relative", zIndex: 1 }}>
        <div style={{ backgroundColor: "rgba(42,157,143,0.15)", border: "1px solid var(--color-teal)", borderRadius: "var(--radius-sm)", padding: "var(--space-8)", textAlign: "center" }}>
          <h2 style={{ color: "var(--color-cream)", marginBottom: "var(--space-4)" }}>הצטרף אלינו</h2>
          <p style={{ color: "var(--color-dark-light)", marginBottom: "var(--space-6)" }}>בוא לשולחן. בוא לשמוע. בוא להיות חלק.</p>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="btn-primary">💬 WhatsApp</a>
            <Link href="/join" className="btn-secondary" style={{ color: "var(--color-gold)", borderColor: "var(--color-gold)" }}>הרשמה לניוזלטר</Link>
          </div>
        </div>
        <div style={{ backgroundColor: "rgba(233,196,106,0.1)", border: "1px solid var(--color-gold)", borderRadius: "var(--radius-sm)", padding: "var(--space-8)", textAlign: "center" }}>
          <h2 style={{ color: "var(--color-cream)", marginBottom: "var(--space-4)" }}>תרום ותהיה שותף</h2>
          <p style={{ color: "var(--color-dark-light)", marginBottom: "var(--space-6)" }}>
            תרומתך מחזיקה שולחן, דוכן, ולב.
            <br />7 דוכנים, 250 אנשים בשבוע — בזכותך.
          </p>
          <Link href="/donate" className="btn-primary" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-dark)" }}>לדף התרומות</Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutTeaser />
      <ActivitiesTeaser />
      <GalleryTeaser />
      <CTAFinal />
    </>
  );
}
