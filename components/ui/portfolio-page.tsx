"use client";

import React, { useEffect, useRef, useState } from "react";
import PortfolioHero from "@/components/ui/portfolio-hero";
import { PortfolioBackground } from "@/components/ui/portfolio-background";
import { PortfolioHeader } from "@/components/ui/portfolio-header";
import { PortfolioSections } from "@/components/ui/portfolio-sections";
import type { ProjectItem, TechStackItem } from "@/components/ui/portfolio-sections";

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = 0;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const parallax = (speed: number, offset = 0) =>
    `translateY(${scrollY * speed + offset}px)`;

  const menuItems = [
    { label: "HOME", href: "#top", highlight: true },
    { label: "ABOUT", href: "#about" },
    { label: "WHAT I BUILD", href: "#build" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "WRITING", href: "#writing" },
    { label: "CONTACT", href: "#contact" },
  ];

  const whatIBuild = [
    "Solana programs with deterministic PDA structures and safe upgrades",
    "Protocol tooling for treasury, fees, and market lifecycle management",
    "Indexing and analytics pipelines for on-chain state + user positions",
    "Web3 frontends with clear transaction states and wallet UX",
    "Operational infrastructure for high-volume token distributions",
  ];

  const projects: ProjectItem[] = [
    {
      category: "web3",
      title: "On-Chain Prediction Markets — WHEN",
      summary:
        "Solana-based prediction platform for live on-chain events with deterministic PDAs and safe upgrades.",
      links: {
        demo: "https://when.markets/",
      },
      highlights: [
        "Market creation + resolution logic",
        "Treasury and fee flows",
        "Upgradeable Anchor programs",
      ],
      focus: ["Economic correctness", "Invariants", "Program safety"],
    },
    {
      category: "web3",
      title: "Airdrop Infrastructure — dogl.fun",
      summary:
        "High-volume token distribution with batching, retries, and cost-aware execution.",
      links: {
        demo: "https://dogl.fun/",
      },
      highlights: [
        "Large recipient lists + batching",
        "Failure handling + retry logic",
        "Auditable and transparent flows",
      ],
      focus: ["Operational reliability", "Tooling", "Scalability"],
    },
    {
      category: "web3",
      title: "Wallets, Identity & Auth",
      summary:
        "Wallet-based auth with secure session handling and minimal UX friction.",
      links: {
        demo: "#",
      },
      highlights: [
        "Privy wallet auth integration",
        "Signing-based verification",
        "Session persistence without webhook reliance",
      ],
      focus: ["Security", "Auth UX", "Web3 onboarding"],
    },
    {
      category: "web3",
      title: "Web3 Backend & Indexing",
      summary:
        "Indexing services for on-chain activity, user positions, and protocol analytics.",
      highlights: [
        "On-chain event indexing + state tracking",
        "Analytics APIs for dashboards",
        "Linux + NGINX + PM2 deployment",
      ],
      focus: ["Data pipelines", "Infra", "Observability"],
    },
    {
      category: "web3",
      title: "Web3 Frontend Engineering",
      summary:
        "Next.js dashboards with transaction states, confirmations, and error handling.",

      highlights: [
        "Multi-subdomain routing for protocol tools",
        "Wallet UX for confirmations and errors",
        "UX built for real user behavior",
      ],
      focus: ["Product UX", "Reliability", "Front-end systems"],
    },
    {
      category: "other",
      title: "Encrypted Notes & Data Systems",
      summary:
        "Encrypted notes with secure sharing, cross-device sync, and access validation.",
      links: {
        demo: "https://anzora.app/",
      },
      highlights: [
        "AES-GCM encryption with session keys",
        "Master key + optional password access",
        "CryptoService + encrypted local storage + Prisma sync",
      ],
      focus: ["Security", "Cryptography", "Data integrity", "UX constraints"],
    },
    {
      category: "other",
      title: "Advanced Admin Dashboards & Reporting",
      summary:
        "Dynamic report generators with filters, previews, and CSV/PDF exports across business data.",
      links: {
        demo: "https://themannafood.com/",
      },
      highlights: [
        "Sales, inventory, products, customers, affiliates",
        "Date, location, payment method, report-type filters",
        "Custom DataTables with export controls",
      ],
      focus: ["Business intelligence", "Performance", "Data modeling"],
    },
    {
      category: "other",
      title: "eCommerce & POS Systems",
      summary:
        "Food & pastry commerce platform with inventory, reporting, and real-world operations.",
      links: {
        demo: "https://themannafood.com/",
      },
      highlights: [
        "Online + in-store sales",
        "Inventory management and reports",
        "Admin product management",
      ],
      focus: ["Real-world commerce", "Reliability", "Operator UX"],
    },
    {
      category: "other",
      title: "Affiliate & Referral Platforms",
      summary:
        "Dedicated affiliate dashboard with attribution, analytics, and payout logic.",
      links: {
        demo: "https://themannafood.com/",
      },
      highlights: [
        "Referral links + click/conversion tracking",
        "Earnings calculations",
        "Attribution + payout pipelines",
      ],
      focus: ["Tracking accuracy", "Analytics", "Scalability"],
    },
    {
      category: "other",
      title: "Temporary Email Platform",
      summary: "Temporary inbox service with alias routing and mailbox resolution.",
      highlights: [
        "Custom Prisma schema for aliases and messages",
        "Postfix lookup logic for subdomains",
        "Mailbox routing + alias resolution",
      ],
      focus: ["Email infra", "Backend architecture"],
    },
    {
      category: "other",
      title: "Payments & Scheduling (Church App)",
      summary: "Recurring and one-time payments with reminders and user history.",
      links: {
        demo: "https://spiritcityglobal.com/",
      },
      highlights: [
        "Scheduled + one-time payments",
        "Automated email reminders",
        "Payment status tracking",
      ],
      focus: ["Payments", "Scheduling", "Reliability"],
    },
  ];

  const techStack: TechStackItem[] = [
    { label: "Blockchain", value: "Solana, Anchor" },
    { label: "Frontend", value: "Next.js, React, Tailwind" },
    { label: "Backend", value: "Node.js, NestJS, Prisma" },
    { label: "Infra", value: "Linux, NGINX, PM2" },
    { label: "Auth", value: "Wallet adapters, Privy" },
    { label: "Tooling", value: "Custom Solana scripts & services" },
  ];

  const workPrinciples = [
    "Treat Web3 infra like financial infrastructure",
    "Prioritize safety, invariants, and clear failure modes",
    "Ship usable UX with reliable transaction flows",
    "Build for long-term maintainability and upgrades",
  ];

  const tokens = {
    labelText: isDark ? "text-neutral-500" : "text-neutral-700",
    mutedText: isDark ? "text-neutral-400" : "text-neutral-600",
    bodyText: isDark ? "text-neutral-300" : "text-neutral-700",
    borderTone: isDark ? "border-neutral-800/70" : "border-neutral-200",
    borderToneSoft: isDark ? "border-neutral-800/60" : "border-neutral-200/70",
    panelBg: isDark ? "bg-neutral-950/40" : "bg-white/80",
    panelBgStrong: isDark ? "bg-neutral-950/50" : "bg-white/90",
    chipBorder: isDark ? "border-neutral-700/80" : "border-neutral-300",
    bulletTone: isDark ? "bg-neutral-500" : "bg-neutral-400",
  };

  const handleViewProjects = () => {
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen text-foreground transition-colors relative isolate"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(60 12% 96%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <PortfolioBackground isDark={isDark} parallax={parallax} />
      <PortfolioHeader
        isDark={isDark}
        isMenuOpen={isMenuOpen}
        menuItems={menuItems}
        menuRef={menuRef}
        buttonRef={buttonRef}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onCloseMenu={() => setIsMenuOpen(false)}
        onToggleTheme={toggleTheme}
      />
      <PortfolioHero parallax={parallax} labelText={tokens.labelText} />
      <PortfolioSections
        tokens={tokens}
        whatIBuild={whatIBuild}
        projects={projects}
        techStack={techStack}
        workPrinciples={workPrinciples}
        parallax={parallax}
        onViewProjects={handleViewProjects}
      />
      <footer className="relative z-10 px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-6xl mx-auto border-t border-neutral-200/70 dark:border-neutral-800/60 pt-8">
          <p className={`${tokens.mutedText} text-sm`}>
            Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
