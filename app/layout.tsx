import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl =
  process.env.SITE_URL || "https://mental-site.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAFAF7",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "こころの居場所 | 心・人間関係・発達障害の悩みを話せる相互支援コミュニティ",
  description:
    "心や人間関係の悩み、発達障害の特性による生きづらさを抱える人が、安心できる距離感でつながる月50円の相互支援コミュニティです。",
  openGraph: {
    title: "こころの居場所",
    description:
      "ひとりで抱えなくていい。安心できる距離感でつながる相互支援コミュニティ。",
    url: siteUrl,
    siteName: "こころの居場所",
    images: [
      {
        url: "/threads-card.png",
        width: 1200,
        height: 630,
        alt: "こころの居場所",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
