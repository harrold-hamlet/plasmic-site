import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Site Name",
  description: "Your site description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlasmicRootProvider loader={PLASMIC}>
          <Header />
          <main>{children}</main>
          <Footer />
        </PlasmicRootProvider>
      </body>
    </html>
  );
}
