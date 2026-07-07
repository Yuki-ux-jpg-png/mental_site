import './globals.css';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

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

const siteUrl = 'https://mental-ibasho.vercel.app';

const siteTitle =
  'こころの居場所 | 心・人間関係・発達障害の悩みを話せる相互支援コミュニティ';

const siteDescription =
  'こころの居場所は、心や人間関係の悩み、発達障害の特性による生きづらさを抱える人たちが安心できる距離感でつながれる月50円の相互支援コミュニティです。読むだけ参加もでき、ニックネームで安心して参加できます。';

const ogImageUrl = `${siteUrl}/threads-card.png`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F8F3EA',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: siteTitle,

  description: siteDescription,

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: siteTitle,

    description: siteDescription,

    url: siteUrl,

    siteName: 'こころの居場所',

    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteTitle,
        type: 'image/png',
      },
    ],

    locale: 'ja_JP',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: siteTitle,

    description: siteDescription,

    images: [ogImageUrl],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
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
