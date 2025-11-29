import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'katex/dist/katex.min.css';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://keellorenz.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Bohdan Agarkov',
    template: '%s | Bohdan Agarkov',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Bohdan Agarkov',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'Bohdan Agarkov',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx('scroll-smooth', inter.className)}>
      <body className="bg-[#050505] text-neutral-400 antialiased min-h-screen">
        <main className="flex-auto min-w-0 flex flex-col">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
