import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "השיבנו — לומדים באהבה",
  description: "עמותת השיבנו — חיבור יהודי חי, בגובה העיניים. מעגלי שיח, דוכנים, שיעורים. מבית הרב דוד ג'יאמי.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
