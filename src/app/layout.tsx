import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eugen Aronskiy',
  description:
    'Frontend developer crafting fast, scalable, and visually refined web experiences.',

  keywords: [
    'Eugen Aronskiy',
    'Frontend Developer',
    'Web Developer',
    'React',
    'Next.js',
    'UI/UX',
  ],

  authors: [{ name: 'Eugen Aronskiy' }],

  openGraph: {
    title: 'Eugen Aronskiy',
    description:
      'Frontend developer crafting fast, scalable, and visually refined web experiences.',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative min-w-93.75">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased **:font-mono`}>
        {children}
      </body>
    </html>
  );
}
