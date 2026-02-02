"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export interface FloatingShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  style?: React.CSSProperties;
}

export const FloatingShape: React.FC<FloatingShapeProps> = ({
  className,
  delay = 0,
  width = 400,
  height = 120,
  rotate = 0,
  gradient = "from-white/[0.08]",
  style,
}) => {
  return (
    <div className={cn("absolute", className)} style={style}>
      <motion.div
        initial={{ opacity: 0, y: -120, rotate: rotate - 15 }}
        animate={{ opacity: 1, y: 0, rotate }}
        transition={{
          duration: 2.2,
          delay,
          ease: [0.23, 0.86, 0.39, 0.96],
          opacity: { duration: 1.2 },
        }}
        className="relative"
        style={{ width, height }}
      >
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative h-full w-full"
        >
          <div
            className={cn(
              "absolute inset-0 rounded-full bg-gradient-to-r to-transparent",
              gradient,
              "backdrop-blur-[2px] border border-white/[0.12]",
              "shadow-[0_12px_40px_0_rgba(255,255,255,0.12)]",
              "after:absolute after:inset-0 after:rounded-full",
              "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),transparent_70%)]"
            )}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  offset = 24,
  delay = 0,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${offset}px)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
