"use client";

import React from "react";
import { Menu, X } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
  highlight?: boolean;
}

interface PortfolioHeaderProps {
  isDark: boolean;
  isMenuOpen: boolean;
  menuItems: MenuItem[];
  menuRef: React.RefObject<HTMLDivElement | null>;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onToggleTheme: () => void;
}

export function PortfolioHeader({
  isDark,
  isMenuOpen,
  menuItems,
  menuRef,
  buttonRef,
  onToggleMenu,
  onCloseMenu,
  onToggleTheme,
}: PortfolioHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            className="p-2 transition-colors duration-300 z-50 text-neutral-500 hover:text-black dark:hover:text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={onToggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
            ) : (
              <Menu className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
            )}
          </button>

          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-full left-0 w-[200px] md:w-[240px] border-none shadow-2xl mt-2 ml-4 p-4 rounded-lg z-[100]"
              style={{
                backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
              }}
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-lg md:text-xl font-bold tracking-tight py-1.5 px-2 cursor-pointer transition-colors duration-300"
                  style={{
                    color: item.highlight
                      ? "#C3E41D"
                      : isDark
                      ? "hsl(0 0% 100%)"
                      : "hsl(0 0% 10%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C3E41D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = item.highlight
                      ? "#C3E41D"
                      : isDark
                      ? "hsl(0 0% 100%)"
                      : "hsl(0 0% 10%)";
                  }}
                  onClick={onCloseMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div
          className="text-4xl"
          style={{
            color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
            fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
          }}
        >
          N.D.
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          className="relative w-16 h-8 rounded-full hover:opacity-80 transition-opacity"
          style={{ backgroundColor: isDark ? "hsl(0 0% 15%)" : "hsl(0 0% 90%)" }}
          aria-label="Toggle theme"
        >
          <div
            className="absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300"
            style={{
              backgroundColor: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
              transform: isDark ? "translateX(2rem)" : "translateX(0)",
            }}
          />
        </button>
      </nav>
    </header>
  );
}
