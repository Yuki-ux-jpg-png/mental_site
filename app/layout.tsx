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
  metadataBase: new URL('https://mental-site.vercel.app'),
  title: 'こころの居場所 | 占い・人生相談・安心できるコミュニティ',
  description:
    '550名以上が参加。心の不調や生きづらさを抱える方が、占い・人生相談・コミュニティを通じて安心してつながれる場所です。',
  openGraph: {
    title: 'こころの居場所 | ひとりで抱えなくていい',
    description:
      '550名以上が参加。占い・人生相談・コミュニティを通じて、安心してつながれるオンラインの居場所です。',
    url: 'https://mental-site.vercel.app/',
    siteName: 'こころの居場所',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'こころの居場所 | 占い・人生相談・安心できるコミュニティ',
    description:
      '550名以上が参加。占い・人生相談・コミュニティを通じて、安心してつながれるオンラインの居場所です。',
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
