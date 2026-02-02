"use client";

import React from "react";
import { FloatingShape } from "@/components/ui/portfolio-shared";

interface PortfolioBackgroundProps {
  isDark: boolean;
  parallax: (speed: number, offset?: number) => string;
}

export function PortfolioBackground({ isDark, parallax }: PortfolioBackgroundProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(195, 228, 29, ${
            isDark ? "0.08" : "0.18"
          }) 1px, transparent 1px), linear-gradient(to bottom, rgba(195, 228, 29, ${
            isDark ? "0.08" : "0.18"
          }) 1px, transparent 1px)`,
          backgroundSize: "140px 140px",
          transform: parallax(-0.03),
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 20%, rgba(195, 228, 29, ${
            isDark ? "0.18" : "0.28"
          }), transparent 55%), radial-gradient(circle at 85% 10%, rgba(${
            isDark ? "255, 255, 255, 0.12" : "0, 0, 0, 0.08"
          }), transparent 50%)`,
          transform: parallax(0.02),
        }}
      />
      <FloatingShape
        delay={0.2}
        width={520}
        height={130}
        rotate={12}
        gradient="from-[#C3E41D]/20"
        className="left-[-10%] top-[12%]"
        style={{ transform: parallax(0.06) }}
      />
      <FloatingShape
        delay={0.4}
        width={420}
        height={110}
        rotate={-16}
        gradient="from-white/[0.12]"
        className="right-[-6%] top-[55%]"
        style={{ transform: parallax(-0.05) }}
      />
      <FloatingShape
        delay={0.6}
        width={280}
        height={80}
        rotate={-8}
        gradient="from-amber-500/[0.18]"
        className="left-[5%] bottom-[10%]"
        style={{ transform: parallax(0.04) }}
      />
      <FloatingShape
        delay={0.8}
        width={220}
        height={60}
        rotate={22}
        gradient="from-indigo-500/[0.18]"
        className="right-[10%] top-[18%]"
        style={{ transform: parallax(-0.03) }}
      />
    </div>
  );
}
