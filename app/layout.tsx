import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ngene Daniel — Web3 Engineer (Solana-Focused)",
  description:
    "Web3 engineer building production-grade Solana applications across smart contracts, protocol tooling, indexing infrastructure, and Web3 frontends.",
  openGraph: {
    title: "Ngene Daniel — Web3 Engineer (Solana-Focused)",
    description:
      "Web3 engineer building production-grade Solana applications across smart contracts, protocol tooling, indexing infrastructure, and Web3 frontends.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngene Daniel — Web3 Engineer (Solana-Focused)",
    description:
      "Web3 engineer building production-grade Solana applications across smart contracts, protocol tooling, indexing infrastructure, and Web3 frontends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
