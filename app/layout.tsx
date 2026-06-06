import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';

const sans = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-sans' });
const serif = Noto_Serif_JP({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'こころの居場所 | オンラインコミュニティ',
  description: 'ひとりで抱えなくていい。安心してつながれるオンラインコミュニティ。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${sans.variable} ${serif.variable} font-sans`}>{children}</body>
    </html>
  );
}
