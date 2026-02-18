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

const portfolioMode = (process.env.NEXT_PUBLIC_PORTFOLIO_MODE ?? "web3").toLowerCase();
const isWeb3 = !["js", "javascript", "software", "fullstack"].includes(portfolioMode);

const metadataBase: Metadata = isWeb3
  ? {
      title: "Ngene Daniel — Web3 Engineer (Solana-Focused)",
      description:
        "Web3 engineer building production-grade Solana applications across smart contracts, protocol tooling, indexing infrastructure, and Web3 frontends.",
      keywords: [
        "Ngene Daniel",
        "Web3",
        "Solana",
        "Anchor",
        "blockchain",
        "smart contracts",
        "Lagos",
        "Nigeria",
      ],
      authors: [{ name: "Ngene Daniel", url: "https://github.com/DanielChristLight1999" }],
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
    }
  : {
      title: "Ngene Daniel — Software Engineer",
      description:
        "Full-stack software engineer building production-grade web apps, internal tools, and scalable systems. JavaScript, Node.js, React, and Solana.",
      keywords: [
        "Ngene Daniel",
        "Software Engineer",
        "JavaScript",
        "React",
        "Node.js",
        "full-stack",
        "Lagos",
        "Nigeria",
      ],
      authors: [{ name: "Ngene Daniel", url: "https://github.com/DanielChristLight1999" }],
      openGraph: {
        title: "Ngene Daniel — Software Engineer",
        description:
          "Full-stack software engineer building production-grade web apps, internal tools, and scalable systems. JavaScript, Node.js, React, and Solana.",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Ngene Daniel — Software Engineer",
        description:
          "Full-stack software engineer building production-grade web apps, internal tools, and scalable systems. JavaScript, Node.js, React, and Solana.",
      },
    };

export const metadata: Metadata = metadataBase;

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
