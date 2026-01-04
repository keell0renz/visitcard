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
  description:
    'Software Engineer, focused on generative AI and full-stack development. I am interested in SWE, AI, economics and sentience.',
  openGraph: {
    title: 'Bohdan Agarkov',
    description:
      'Software Engineer, focused on generative AI and full-stack development. I am interested in SWE, AI, economics and sentience.',
    url: baseUrl,
    siteName: 'Bohdan Agarkov',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Bohdan Agarkov - Software Engineer',
      },
    ],
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

const cx = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ');

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
