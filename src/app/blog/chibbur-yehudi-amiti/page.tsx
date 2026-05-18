import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "חיבור יהודי אמיתי — למה שולחן עדיף על יוטיוב | השיבנו",
  description:
    "מחפשים יהדות חיה שלא מסתכמת בסרטונים? גלו למה חיבור יהודי אמיתי מתחיל בשולחן — מעגלי שיח, דוכנים, ושיעורי שוק ברחבי ישראל.",
  alternates: {
    canonical: "https://hashivenu.org/blog/chibbur-yehudi-amiti",
  },
  openGraph: {
    title: "חיבור יהודי אמיתי — למה שולחן עדיף על יוטיוב",
    description:
      "מחפשים יהדות חיה שלא מסתכמת בסרטונים? גלו למה חיבור יהודי אמיתי מתחיל בשולחן.",
    url: "https://hashivenu.org/blog/chibbur-yehudi-amiti",
    type: "article",
    images: [
      {
        url: "https://hashivenu.org/images/gallery-77.png",
        width: 1200,
        height: 630,
        alt: "מעגל שיח של עמותת השיבנו — חיבור יהודי אמיתי",
      },
    ],
    locale: "he_IL",
    publishedTime: "2026-05-18T00:00:00Z",
    authors: ["הרב דוד ג'יאמי"],
    siteName: "השיבנו — לומדים באהבה",
  },
  twitter: {
    card: "summary_large_image",
    title: "חיבור יהודי אמיתי — למה שולחן עדיף על יוטיוב",
    description:
      "מחפשים יהדות חיה שלא מסתכמת בסרטונים? גלו למה חיבור יהודי אמיתי מתחיל בשולחן.",
    images: ["https://hashivenu.org/images/gallery-77.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "חיבור יהודי אמיתי — למה שולחן עדיף על יוטיוב",
  description:
    "מחקר ומאמר על החשיבות של חיבור יהודי פנים אל פנים לעומת תוכן דיגיטלי, מנקודת מבטה של עמותת השיבנו.",
  image: "https://hashivenu.org/images/gallery-77.png",
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  author: {
    "@type": "Person",
    name: "הרב דוד ג'יאמי",
    url: "https://hashivenu.org/about",
  },
  publisher: {
    "@type": "Organization",
    name: "עמותת השיבנו",
    logo: {
      "@type": "ImageObject",
      url: "https://hashivenu.org/favicon.ico",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://hashivenu.org/blog/chibbur-yehudi-amiti",
  },
  keywords:
    "חיבור יהודי אמיתי, יהדות חיה, לימוד תורה קהילתי, מעגלי שיח, חזרה בתשובה, עמותה יהודית ישראל",
  articleSection: "יהדות וקהילה",
  inLanguage: "he",
  about: {
    "@type": "Thing",
    name: "יהדות ישראלית",
  },
  isPartOf: {
    "@type": "WebSite",
    name: "השיבנו — לומדים באהבה",
    url: "https://hashivenu.org",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "מה ההבדל בין ללמוד יהדות ביוטיוב לבין מעגל שיח?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ביוטיוב אתם צופים לבד, בלי אפשרות לשאול, להתנגד, או לחוש שייכות. במעגל שיח אתם יושבים עם אנשים אמיתיים, שואלים שאלות אמיתיות ויוצאים עם תחושת קהילה.",
      },
    },
    {
      "@type": "Question",
      name: "האם תוכנית יבנה מתאימה לכל אחד?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "תוכנית יבנה מיועדת לאנשים שמבקשים ללמוד את שפת היהדות לעומק — שנה שלמה של לימוד, קהילה ותהליך אישי. אין דרישות קדם — רק רצון.",
      },
    },
    {
      "@type": "Question",
      name: "היכן פועלים דוכני השיבנו?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "דוכני השיבנו פועלים ב-7 מיקומים ברחבי ישראל, כולל שווקים מרכזיים. מדי שבוע פוגשים כ-70 איש בשוק, ויוצרים חיבור יהודי פנים אל פנים.",
      },
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article
        style={{
          maxWidth: "720px",
          marginInline: "auto",
          paddingInline: "var(--space-6)",
          paddingBlock: "var(--space-16)",
          color: "var(--color-dark)",
          fontFamily: "var(--font-body)",
          lineHeight: 1.8,
        }}
      >
        {/* Breadcrumb */}
        <nav
          aria-label="ניווט ארכיון"
          style={{ fontSize: "var(--text-small)", marginBottom: "var(--space-8)", color: "var(--color-dark-light)" }}
        >
          <Link href="/" style={{ color: "var(--color-teal)" }}>דף הבית</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--color-teal)" }}>בלוג</Link>
          {" › "}
          <span>חיבור יהודי אמיתי</span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: "var(--space-10)" }}>
          <p style={{ fontSize: "var(--text-small)", color: "var(--color-teal)", fontWeight: 600, marginBottom: "var(--space-3)" }}>
            יהדות וקהילה
          </p>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              lineHeight: 1.3,
              marginBottom: "var(--space-4)",
              fontFamily: "var(--font-display)",
            }}
          >
            חיבור יהודי אמיתי — למה שולחן עדיף על יוטיוב
          </h1>
          <p
            style={{
              fontSize: "var(--text-h3)",
              color: "var(--color-dark-light)",
              marginBottom: "var(--space-6)",
              maxWidth: "600px",
            }}
          >
            בעידן שבו שיעורי תורה זמינים בלחיצה, מה מונע מיהודים רבים לחוש
            חיבור אמיתי ליהדות? והתשובה, מסתבר, לא נמצאת במסך.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              fontSize: "var(--text-small)",
              color: "var(--color-dark-light)",
              borderTop: "1px solid var(--color-border)",
              borderBottom: "1px solid var(--color-border)",
              paddingBlock: "var(--space-3)",
            }}
          >
            <span>מאת <strong style={{ color: "var(--color-dark)" }}>הרב דוד ג&apos;יאמי</strong></span>
            <span>·</span>
            <time dateTime="2026-05-18">י&quot;ח באייר תשפ״ו</time>
            <span>·</span>
            <span>8 דקות קריאה</span>
          </div>
        </header>

        {/* Hero image */}
        <div
          style={{
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            marginBottom: "var(--space-10)",
            aspectRatio: "16/9",
            position: "relative",
          }}
        >
          <Image
            src="/images/gallery-77.png"
            alt="מעגל שיח של עמותת השיבנו — חיבור יהודי אמיתי סביב שולחן"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Body */}
        <div
          style={{
            fontSize: "var(--text-body)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
          }}
        >
          {/* Lead paragraph */}
          <p>
            <strong>חיבור יהודי אמיתי</strong> הוא לא משהו שמורידים מהאינטרנט.
            לפי נתוני הלשכה המרכזית לסטטיסטיקה, יותר ממחצית מהיהודים בישראל
            מגדירים עצמם חילונים — אבל 78% מהם אומרים שהיהדות חשובה להם. הפער
            הזה בין מה שאנשים מרגישים לבין מה שהם חווים הוא בדיוק הבעיה שאנחנו
            בעמותת השיבנו באנו לפתור.
          </p>

          <p>
            בשנים האחרונות צמחה תשתית עצומה של תוכן יהודי דיגיטלי: שיעורי
            תורה ביוטיוב, פודקאסטים על פרשת השבוע, אינסטגרם של רבנים, סרטונים
            ויראליים על הלכה. הכול נגיש, הכול חינמי, הכול עכשיו. ובכל זאת —
            אנשים לא מרגישים יותר מחוברים.
          </p>

          {/* Section 1 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontFamily: "var(--font-display)",
              marginTop: "var(--space-4)",
              marginBottom: "var(--space-2)",
            }}
          >
            המסך יודע הכול — ועדיין לא מספיק
          </h2>

          <p>
            דמיינו שאתם לומדים לנגן גיטרה מסרטוני יוטיוב. אפשרי. יש אנשים
            שהצליחו. אבל רוב הנגנים הגדולים גדלו ביחד עם מורה, עם חברים,
            בחדר שבו מישהו תיקן את אחיזת האצבעות בזמן אמת. יהדות עובדת
            אותו דבר.
          </p>

          <p>
            לימוד תורה קהילתי — זה שמתרחש בין אנשים — מייצר מה שהמחקר
            הפסיכולוגי קורא לו &quot;למידה חברתית&quot;: אנחנו לומדים טוב יותר כשאנחנו
            רואים את הרגשות בפנים של האחר, כשמישהו מסכים איתנו, כשמישהו
            חולק. הסרטון לא יכול לתת את זה.
          </p>

          <blockquote
            style={{
              borderInlineEnd: "4px solid var(--color-teal)",
              paddingInlineEnd: "var(--space-6)",
              paddingBlock: "var(--space-2)",
              marginBlock: "var(--space-2)",
              color: "var(--color-dark-light)",
              fontStyle: "italic",
              fontSize: "1.15em",
            }}
          >
            &quot;לא יוטיוב — שולחן אמיתי. לא מסך — אנשים אמיתיים.
            זו לא סיסמה. זו מסקנה מחמש שנות עבודה בשטח.&quot;
          </blockquote>

          {/* Section 2 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontFamily: "var(--font-display)",
              marginTop: "var(--space-4)",
              marginBottom: "var(--space-2)",
            }}
          >
            מה זה בכלל חיבור יהודי — ולמה הוא מתחיל בשאלה
          </h2>

          <p>
            כשאנחנו מדברים על <strong>חיבור יהודי אמיתי</strong>, אנחנו לא מדברים
            על ידע. ידע אפשר לצבור ממאמרים ומסרטונים. אנחנו מדברים על משהו
            שקורה כשאדם שואל שאלה — ומישהו אמיתי, בשר ודם, עוצר ומסתכל עליו
            ואומר: &quot;שאלה מצוינת. בוא נחשוב על זה יחד.&quot;
          </p>

          <p>
            זה המודל שאנחנו עובדים לפיו ב<strong>עמותת השיבנו</strong>. לא הרצאה
            שאתם צופים בה, אלא שיחה שאתם חלק ממנה. כל מעגל שיח שאנחנו מקיימים
            — כל חמישי בערב — מתחיל בשאלה אחת פתוחה. ומשם יוצא דיון שמשנה
            אנשים.
          </p>

          {/* Section 3 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontFamily: "var(--font-display)",
              marginTop: "var(--space-4)",
              marginBottom: "var(--space-2)",
            }}
          >
            מעגלי שיח: הדמוקרטיה של לימוד התורה
          </h2>

          <p>
            <strong>מעגלי שיח</strong> הם פגישות קבוצתיות שמתקיימות בסלון, בחדר
            קהילתי, או בכל מרחב שיש בו שולחן וכמה כסאות. הפורמט פשוט: אין
            כיסא בראש, אין מרצה עם מצגת, אין מקום ל&quot;אני יודע יותר ממך&quot;.
          </p>

          <p>
            כולם יושבים במעגל. כולם שואלים. המנחה מכווין, אבל לא מוביל לתשובה
            אחת ונכונה. זה מרחב שמזמין כל אחד — מי שלא היה מעולם בבית כנסת ומי
            שגדל בבית שומר מצוות — לבוא כמות שהוא.
          </p>

          <p>
            250 אנשים השתתפו בסדר הגדול השבועי שלנו בחודש האחרון. הם לא באו
            כי שכרנו אולם יפה. הם באו כי שמעו מחבר שבא שבוע קודם ואמר:
            &quot;שווה לנסות.&quot;
          </p>

          {/* Image */}
          <div
            style={{
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              aspectRatio: "16/9",
              position: "relative",
              marginBlock: "var(--space-2)",
            }}
          >
            <Image
              src="/images/gallery-79.png"
              alt="ערב לימוד של השיבנו — מעגל שיח יהודי קהילתי"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Section 4 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontFamily: "var(--font-display)",
              marginTop: "var(--space-4)",
              marginBottom: "var(--space-2)",
            }}
          >
            יהדות חיה בלב השוק: הדוכן כנקודת מפגש
          </h2>

          <p>
            הרבה עמותות מחכות שאנשים יבואו אליהן. אנחנו לא. שבעת הדוכנים של
            השיבנו פרוסים ברחבי הארץ בשווקים מרכזיים — שם שבו אנשים קונים
            ירקות, פוגשים שכנים, חיים את חייהם. הדוכן הוא לא קיוסק של דת.
            הוא נקודת מפגש.
          </p>

          <p>
            70 אנשים עוצרים בדוכן שלנו בשוק כל שבוע. חלקם עוצרים בגלל
            סקרנות. חלקם בגלל שמישהו קרא להם. חלקם בגלל שהם מחפשים זה
            שנים — ומעולם לא ידעו שמותר לשאול את השאלה שהם נושאים.
          </p>

          <p>
            <strong>שיעורי השוק</strong> הם ביטוי לאותה פילוסופיה: תורה לא
            שמורה לבית הכנסת. היא חיה בין הדוכנים, בין הקולות, בין האנשים.
            כשרב עומד ליד דוכן הבשר ומסביר את הכשרות — זה לא שיעור. זה שיחה.
          </p>

          {/* Section 5 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontFamily: "var(--font-display)",
              marginTop: "var(--space-4)",
              marginBottom: "var(--space-2)",
            }}
          >
            תוכנית יבנה: שנה שלמה של חיבור יהודי עמוק
          </h2>

          <p>
            למי שרוצה לצלול עמוק יותר — יש את <strong>תוכנית יבנה</strong>.
            שנה שלמה של לימוד, קהילה ותהליך אישי, מיועדת לאנשים שמבקשים
            לא רק ללמוד מידע אלא לשנות את הדרך שבה הם חיים את יהדותם.
          </p>

          <p>
            אין מבחנים. אין לחץ. אין ציפייה שתגיעו מוכנים. תוכנית יבנה
            מיועדת לאנשים בכל נקודת פתיחה — מי שגדל חילוני לגמרי, מי שהיה
            מסורתי ואיבד את הקשר, מי שחוזר מחו&quot;ל ומחפש שורשים.
          </p>

          <p>
            הכלי המרכזי בתוכנית הוא לא ספר לימוד — הוא קהילה. הבוגרים של
            יבנה מספרים שמה שנשאר איתם אחרי השנה הוא לא מה שלמדו, אלא
            עם מי למדו.
          </p>

          {/* Section 6 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontFamily: "var(--font-display)",
              marginTop: "var(--space-4)",
              marginBottom: "var(--space-2)",
            }}
          >
            למה &quot;בגובה העיניים&quot; זה לא סיסמה — זה מתודולוגיה
          </h2>

          <p>
            המונח &quot;בגובה העיניים&quot; מוכר בחינוך. אבל אנחנו לא מדברים על
            פדגוגיה — אנחנו מדברים על יחס. כשאדם בא לפגישה ראשונה בדוכן
            או במעגל שיח, הוא לא יקבל סדר יום, לא יתבקש להתחייב לכלום, לא
            יישפט על מה שהוא יודע או לא יודע.
          </p>

          <p>
            הוא פשוט יוזמן לשבת. ולשאול.
          </p>

          <p>
            זו הסיבה שאנשים חוזרים. לא כי שכנענו אותם. כי הם הרגישו שמישהו
            רואה אותם — לא את הרמה שלהם, לא את הרקע שלהם, אלא אותם.
          </p>

          {/* FAQ Section */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontFamily: "var(--font-display)",
              marginTop: "var(--space-4)",
              marginBottom: "var(--space-4)",
            }}
          >
            שאלות נפוצות על חיבור יהודי ופעילות השיבנו
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-5)",
              backgroundColor: "var(--color-cream-alt)",
              borderRadius: "var(--radius-md)",
              padding: "var(--space-6)",
            }}
          >
            {[
              {
                q: "מה ההבדל בין ללמוד יהדות ביוטיוב לבין מעגל שיח?",
                a: "ביוטיוב אתם צופים לבד, בלי אפשרות לשאול, להתנגד, או לחוש שייכות. במעגל שיח אתם יושבים עם אנשים אמיתיים, שואלים שאלות אמיתיות ויוצאים עם תחושת קהילה.",
              },
              {
                q: "האם תוכנית יבנה מתאימה לכל אחד?",
                a: "תוכנית יבנה מיועדת לאנשים שמבקשים ללמוד את שפת היהדות לעומק — שנה שלמה של לימוד, קהילה ותהליך אישי. אין דרישות קדם — רק רצון.",
              },
              {
                q: "היכן פועלים דוכני השיבנו?",
                a: "דוכני השיבנו פועלים ב-7 מיקומים ברחבי ישראל, כולל שווקים מרכזיים. מדי שבוע פוגשים כ-70 איש בשוק, ויוצרים חיבור יהודי פנים אל פנים.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3
                  style={{
                    fontSize: "var(--text-body)",
                    fontWeight: 700,
                    marginBottom: "var(--space-2)",
                    color: "var(--color-dark)",
                  }}
                >
                  {q}
                </h3>
                <p style={{ margin: 0, color: "var(--color-dark-light)" }}>{a}</p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontFamily: "var(--font-display)",
              marginTop: "var(--space-4)",
              marginBottom: "var(--space-2)",
            }}
          >
            לסיכום: חיבור יהודי אמיתי דורש נוכחות
          </h2>

          <p>
            אנחנו חיים בעידן שבו כל מידע נגיש. אבל מידע הוא לא חיבור.
            קהילה אי אפשר להוריד. שיחה אמיתית לא קורית בצ&apos;ט. הרגשה שמישהו
            רואה אותך — זה מתרחש כשיש שולחן, ויש פנים, ויש זמן.
          </p>

          <p>
            עמותת השיבנו נוסדה מתוך אמונה אחת פשוטה: יהדות חיה קורית בין
            אנשים — לא מעל ראשיהם, לא דרך מסך, ולא ברמה שמרחיקה. בגובה
            העיניים. בשולחן אמיתי.
          </p>

          <p>
            אם גם אתם מחפשים את החיבור הזה — בואו לראות אותנו בשוק,
            בואו למעגל שיח, בואו לשאול.
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "var(--space-12)",
            backgroundColor: "var(--color-teal)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-8)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "white",
              fontFamily: "var(--font-display)",
              marginBottom: "var(--space-3)",
              fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            }}
          >
            רוצים חיבור יהודי אמיתי?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "var(--space-6)" }}>
            בואו למעגל שיח, בקרו בדוכן הקרוב, או הצטרפו לתוכנית יבנה.
            השולחן פתוח.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/activities" className="btn-primary" style={{ backgroundColor: "white", color: "var(--color-teal)" }}>
              לכל הפעילויות
            </Link>
            <Link href="/join" className="btn-secondary" style={{ color: "white", borderColor: "white" }}>
              הצטרפו אלינו
            </Link>
          </div>
        </div>

        {/* Internal links */}
        <aside
          style={{
            marginTop: "var(--space-12)",
            paddingTop: "var(--space-8)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-body)",
              marginBottom: "var(--space-4)",
              fontWeight: 700,
            }}
          >
            קראו עוד
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "var(--space-3)",
            }}
          >
            {[
              { href: "/activities", label: "כל הפעילויות שלנו" },
              { href: "/booths", label: "הדוכנים — 7 מיקומים" },
              { href: "/yavne", label: "תוכנית יבנה" },
              { href: "/about", label: "מי אנחנו" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  padding: "var(--space-3) var(--space-4)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--color-teal)",
                  textDecoration: "none",
                  fontSize: "var(--text-small)",
                  fontWeight: 600,
                }}
              >
                {label} →
              </Link>
            ))}
          </div>
        </aside>
      </article>
    </>
  );
}
