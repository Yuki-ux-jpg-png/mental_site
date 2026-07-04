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
  metadataBase: new URL('https://kokoro-ibasho.vercel.app'),

  title: 'こころの居場所 | こころの悩みを解決する総合ケアサービス',

  description:
    'こころの悩みを解決する総合ケアサービス。相談、つながり、ケアを通じて、あなたのこころを支えます。',

  openGraph: {
    title: 'こころの居場所 | こころの悩みを解決する総合ケアサービス',

    description:
      'こころの悩みを解決する総合ケアサービス。相談、つながり、ケアを通じて、あなたのこころを支えます。',

    url: 'https://kokoro-ibasho.vercel.app/',

    siteName: 'こころの居場所',

    images: [
      {
        url: 'https://kokoro-ibasho.vercel.app/threads-card.png',

        width: 1200,

        height: 630,

        alt: 'こころの居場所 | こころの悩みを解決する総合ケアサービス',
      },
    ],

    locale: 'ja_JP',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'こころの居場所 | こころの悩みを解決する総合ケアサービス',

    description:
      'こころの悩みを解決する総合ケアサービス。相談、つながり、ケアを通じて、あなたのこころを支えます。',

    images: ['https://kokoro-ibasho.vercel.app/threads-card.png'],
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
