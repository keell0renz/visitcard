import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bohdan Agarkov",
  description: "My personal space, lol",

  metadataBase: new URL("https://keellorenz.com"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bohdan Agarkov - @keell0renz",
    description: "Generative AI and full-stack web developer.",
    siteId: "1723373966490849281",
    creator: "@keell0renz",
    creatorId: "1723373966490849281",
    images: ["https://keellorenz.com/lorenz.png"], // Must be an absolute URL
  },

  openGraph: {
    title: "Bohdan Agarkov - @keell0renz",
    description: "Generative AI and full-stack web developer.",
    url: "https://keellorenz.com",
    type: "website",
    images: [
      {
        url: "https://keellorenz.com/lorenz.png",
        width: 700,
        height: 520,
        alt: "Bohdan Agarkov - @keell0renz",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
