'use client';

import { Inter } from "next/font/google";
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";
import { Navigation } from "../components/Navigation";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.variable}>
        <ThemeProvider>
          <PlasmicRootProvider loader={PLASMIC}>
            <Navigation />
            <main className="container py-24">{children}</main>
          </PlasmicRootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 