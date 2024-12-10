import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter, Inconsolata, Roboto } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
const inconsol = Inconsolata({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['cyrillic'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
