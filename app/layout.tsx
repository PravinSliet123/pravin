import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pravin Kumar | Fullstack Developer Portfolio",
  description: "Portfolio of Pravin Kumar, a Fullstack Developer specializing in React, Next.js, and Node.js. Building scalable & high-performance applications for India and Europe.",
  keywords: ["Fullstack Developer", "React Developer", "Next.js", "Node.js", "Pravin Kumar", "Portfolio"],
  authors: [{ name: "Pravin Kumar" }],
  openGraph: {
    title: "Pravin Kumar | Fullstack Developer Portfolio",
    description: "Building scalable & high-performance applications.",
    url: "https://yourportfolio.com", // User should update this
    siteName: "Pravin Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravin Kumar | Fullstack Developer",
    description: "Building scalable & high-performance applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
