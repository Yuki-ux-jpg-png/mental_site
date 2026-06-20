import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';

const sans = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kokoro-no-ibasho.vercel.app'),
  title: 'こころの居場所 | ひとりで抱えなくていい',
  description:
    '心の調子、人間関係、仕事、家庭環境に悩んでいる方へ。占い・人生相談・コミュニティを通じて、安心してつながれるオンラインの居場所です。',
  openGraph: {
    title: 'こころの居場所 | ひとりで抱えなくていい',
    description:
      '心の調子、人間関係、仕事、家庭環境に悩んでいる方へ。安心してつながれるオンラインの居場所です。',
    url: 'https://kokoro-no-ibasho.vercel.app/',
    siteName: 'こころの居場所',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'こころの居場所 | ひとりで抱えなくていい',
    description:
      '心の調子、人間関係、仕事、家庭環境に悩んでいる方へ。安心してつながれるオンラインの居場所です。',
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
      </body>
    </html>
  );
}
