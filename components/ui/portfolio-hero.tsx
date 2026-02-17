"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { BlurText } from "@/components/ui/portfolio-shared";

interface PortfolioHeroProps {
  parallax: (speed: number, offset?: number) => string;
  labelText: string;
  tagline: string;
}

export default function PortfolioHero({ parallax, labelText, tagline }: PortfolioHeroProps) {
  return (
    <main className="relative z-10 min-h-screen flex flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#C3E41D]/10 blur-3xl"
        style={{ transform: parallax(0.08) }}
      />
      <div
        className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-white/5 blur-[120px]"
        style={{ transform: parallax(-0.06) }}
      />
      <div
        className="pointer-events-none absolute bottom-[-120px] left-1/3 h-80 w-80 rounded-full bg-[#C3E41D]/10 blur-3xl"
        style={{ transform: parallax(0.05) }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="relative text-center">
          <div style={{ transform: parallax(-0.02) }}>
            <BlurText
              text="Ngene"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
            />
          </div>
          <div style={{ transform: parallax(0.02) }}>
            <BlurText
              text="Daniel"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
            />
          </div>

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ transform: `${parallax(0.1)} translate(-50%, -50%)` }}
          >
            <div className="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-110 hover:-rotate-2 cursor-pointer ring-1 ring-black/5">
              <img
                src="/usrImg.jpg"
                alt="Ngene Daniel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-14 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36 left-1/2 -translate-x-1/2 w-full px-6">
        <div className="flex justify-center">
          <BlurText
            text={tagline}
            delay={150}
            animateBy="words"
            direction="top"
            className={`text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-500 ${labelText} hover:text-black dark:hover:text-white`}
            style={{ fontFamily: "'Antic', sans-serif" }}
          />
        </div>
      </div>

      <button
        type="button"
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300" />
      </button>
    </main>
  );
}