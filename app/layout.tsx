import './globals.css';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://kokoro-ibasho.vercel.app'),
  title: 'こころの居場所 | ひとりで抱えなくていい',
  description:
    '心の調子、人間関係、仕事、家庭環境に悩んでいる方へ。やさしく寄り添う実践情報を届けるコミュニティです。',
  openGraph: {
    title: 'こころの居場所 | ひとりで抱えなくていい',
    description:
      '心の調子、人間関係、仕事、家庭環境に悩んでいる方へ。やさしく寄り添う実践情報を届けるコミュニティです。',
    url: 'https://kokoro-ibasho.vercel.app/',
    siteName: 'こころの居場所',
    images: [
      {
        url: 'https://kokoro-ibasho.vercel.app/threads-card.png',
        width: 1200,
        height: 630,
        alt: 'こころの居場所 | ひとりで抱えなくていい',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'こころの居場所 | ひとりで抱えなくていい',
    description:
      '心の調子、人間関係、仕事、家庭環境に悩んでいる方へ。やさしく寄り添う実践情報を届けるコミュニティです。',
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
