import './globals.css';
import type { Metadata, Viewport } from 'next';

import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';

const sans = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F8F3EA',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mental-ibasho.vercel.app'),

  title:
    'こころの居場所 | 心・人間関係・発達障害の悩みを話せる相互支援コミュニティ',

  description:
    'こころの居場所は、心や人間関係の悩み、発達障害の特性による生きづらさを抱える人たちが安心できる距離感でつながれる月50円の相互支援コミュニティです。役立つ記事や、精神科・薬に関する参考情報もお届けします。',

  openGraph: {
    title:
      'こころの居場所 | 心・人間関係・発達障害の悩みを話せる相互支援コミュニティ',

    description:
      '心や人間関係の悩み、発達障害の特性による生きづらさを抱える人たちが、安心できる距離感でつながれる月50円の相互支援コミュニティです。',

    url: 'https://mental-ibasho.vercel.app/',

    siteName: 'こころの居場所',

    images: [
      {
        url: 'https://mental-ibasho.vercel.app/threads-card.png',
        width: 1200,
        height: 630,
        alt: 'こころの居場所 | 心・人間関係・発達障害の悩みを話せる相互支援コミュニティ',
      },
    ],

    locale: 'ja_JP',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'こころの居場所 | 心・人間関係・発達障害の悩みを話せる相互支援コミュニティ',

    description:
      '心や人間関係の悩み、発達障害の特性による生きづらさを抱える人たちが、安心できる距離感でつながれる月50円の相互支援コミュニティです。',

    images: ['https://mental-ibasho.vercel.app/threads-card.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${sans.variable} ${serif.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
