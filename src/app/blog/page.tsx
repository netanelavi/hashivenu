import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "בלוג השיבנו — יהדות, קהילה וחיבור יהודי | השיבנו",
  description:
    "מאמרים על יהדות חיה, חיבור יהודי אמיתי, לימוד תורה קהילתי ומעגלי שיח. מבית עמותת השיבנו — לומדים באהבה.",
  alternates: {
    canonical: "https://hashivenu.org/blog",
  },
  openGraph: {
    title: "בלוג השיבנו — יהדות, קהילה וחיבור יהודי",
    description:
      "מאמרים על יהדות חיה, חיבור יהודי אמיתי, לימוד תורה קהילתי ומעגלי שיח.",
    url: "https://hashivenu.org/blog",
    type: "website",
    locale: "he_IL",
    siteName: "השיבנו — לומדים באהבה",
  },
};

const posts = [
  {
    href: "/blog/chibbur-yehudi-amiti",
    title: "חיבור יהודי אמיתי — למה שולחן עדיף על יוטיוב",
    description:
      "בעידן שבו שיעורי תורה זמינים בלחיצה, מה מונע מיהודים רבים לחוש חיבור אמיתי ליהדות? התשובה לא נמצאת במסך.",
    image: "/images/gallery-77.png",
    date: "י\"ח באייר תשפ״ו",
    dateTime: "2026-05-18",
    category: "יהדות וקהילה",
    readTime: "8 דקות קריאה",
  },
];

export default function BlogPage() {
  return (
    <section
      style={{
        maxWidth: "900px",
        marginInline: "auto",
        paddingInline: "var(--space-6)",
        paddingBlock: "var(--space-16)",
      }}
    >
      <header style={{ marginBottom: "var(--space-12)", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            marginBottom: "var(--space-4)",
            color: "var(--color-dark)",
          }}
        >
          בלוג השיבנו
        </h1>
        <p
          style={{
            fontSize: "var(--text-h3)",
            color: "var(--color-dark-light)",
            maxWidth: "520px",
            marginInline: "auto",
          }}
        >
          מאמרים על יהדות חיה, חיבור יהודי אמיתי ולימוד תורה קהילתי
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "var(--space-8)",
        }}
      >
        {posts.map((post) => (
          <article
            key={post.href}
            style={{
              backgroundColor: "var(--color-cream)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <Link href={post.href} style={{ textDecoration: "none" }}>
              <div style={{ position: "relative", aspectRatio: "16/9" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "var(--space-5)" }}>
                <p
                  style={{
                    fontSize: "var(--text-small)",
                    color: "var(--color-teal)",
                    fontWeight: 600,
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {post.category}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3)",
                    color: "var(--color-dark)",
                    marginBottom: "var(--space-3)",
                    lineHeight: 1.4,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontSize: "var(--text-small)",
                    color: "var(--color-dark-light)",
                    marginBottom: "var(--space-4)",
                    lineHeight: 1.6,
                  }}
                >
                  {post.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-2)",
                    fontSize: "var(--text-small)",
                    color: "var(--color-dark-light)",
                  }}
                >
                  <time dateTime={post.dateTime}>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
