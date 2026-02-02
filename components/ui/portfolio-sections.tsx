"use client";

import React from "react";
import { Button, Reveal } from "@/components/ui/portfolio-shared";

export interface ProjectItem {
  category: "web3" | "other";
  title: string;
  summary: string;
  links?: {
    demo?: string;
    repo?: string;
  };
  highlights: string[];
  focus: string[];
}

export interface TechStackItem {
  label: string;
  value: string;
}

interface ToneTokens {
  labelText: string;
  mutedText: string;
  bodyText: string;
  borderTone: string;
  borderToneSoft: string;
  panelBg: string;
  panelBgStrong: string;
  chipBorder: string;
  bulletTone: string;
}

interface PortfolioSectionsProps {
  tokens: ToneTokens;
  whatIBuild: string[];
  projects: ProjectItem[];
  techStack: TechStackItem[];
  workPrinciples: string[];
  parallax: (speed: number, offset?: number) => string;
  onViewProjects?: () => void;
}

export function PortfolioSections({
  tokens,
  whatIBuild,
  projects,
  techStack,
  workPrinciples,
  parallax,
  onViewProjects,
}: PortfolioSectionsProps) {
  const {
    labelText,
    mutedText,
    bodyText,
    borderTone,
    borderToneSoft,
    panelBg,
    panelBgStrong,
    chipBorder,
    bulletTone,
  } = tokens;

  const web3Projects = projects.filter((project) => project.category === "web3");
  const otherProjects = projects.filter((project) => project.category === "other");

  return (
    <>
      <section id="about" className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className={`max-w-6xl mx-auto border-t ${borderToneSoft} pt-24 md:pt-32`}>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            <Reveal>
              <div>
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>About</p>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
                  Web3 engineer focused on secure Solana systems.
                </h2>
                <p className={`mt-6 text-base sm:text-lg ${mutedText} leading-relaxed max-w-2xl`}>
                  I&apos;m a Web3 engineer building production-grade Solana applications across smart
                  contracts, protocol tooling, indexing infrastructure, and Web3 frontends. I ship
                  systems that are secure, scalable, and actually usable by real users.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  {["Security-first", "Product-minded", "Systems builder", "Operational UX"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border ${chipBorder} px-4 py-1.5 text-sm ${bodyText} transition-all duration-500 hover:-translate-y-1 hover:border-[#C3E41D]/60 hover:text-[#C3E41D]`}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div
                className={`rounded-3xl border ${borderTone} p-8 ${panelBgStrong} transition-transform duration-700 hover:-translate-y-2`}
                style={{ transform: parallax(-0.03) }}
              >
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>Core Strengths</p>
                <ul className={`mt-6 space-y-4 ${bodyText}`}>
                  {[
                    "Solana programs with PDA validation and safe authority models",
                    "Protocol tooling for markets, fees, and treasury flows",
                    "Indexing pipelines for analytics and protocol state",
                    "Web3 UX with reliable transaction handling",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C3E41D]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="build" className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className={`max-w-6xl mx-auto border-t ${borderToneSoft} pt-24 md:pt-32`}>
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div className="max-w-2xl">
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>What I Build</p>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
                  End-to-end Web3 systems for real users.
                </h2>
              </div>
              <Button
                type="button"
                onClick={onViewProjects}
                className="bg-[#C3E41D] text-black hover:bg-[#d3f046] transition-transform duration-500 hover:-translate-y-1"
              >
                View Projects
              </Button>
            </div>
          </Reveal>
          <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {whatIBuild.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <div
                  className={`rounded-2xl border ${borderTone} ${panelBg} p-6 ${bodyText} transition-all duration-700 hover:-translate-y-2 hover:border-[#C3E41D]/40 hover:bg-neutral-950/60`}
                >
                  <p className="text-base sm:text-lg leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className={`max-w-6xl mx-auto border-t ${borderToneSoft} pt-24 md:pt-32`}>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>Key Projects</p>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
                  Solana projects built for safety and scale.
                </h2>
              </div>
              <p className={`${mutedText} max-w-md text-sm sm:text-base`}>
                Highlighted Web3 projects plus other production systems built across security,
                analytics, and real-world operations.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 md:mt-16 grid lg:grid-cols-2 gap-7 md:gap-9">
            {web3Projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 90}>
                <article
                  className={`rounded-3xl border ${borderTone} ${panelBg} p-8 transition-all duration-700 hover:-translate-y-2 hover:border-[#C3E41D]/40`}
                  style={{ transform: parallax(-0.015) }}
                >
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className={`mt-3 ${mutedText} leading-relaxed text-sm sm:text-base`}>
                    {project.summary}
                  </p>
                  {project.links?.demo && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={project.links.demo}
                        className={`inline-flex items-center gap-2 rounded-full border ${borderTone} px-4 py-2 text-xs uppercase tracking-wide ${bodyText} transition-all duration-500 hover:-translate-y-0.5 hover:border-[#C3E41D]/60 hover:text-[#C3E41D]`}
                      >
                        Live Demo
                      </a>
                    </div>
                  )}
                  <div className="mt-6">
                    <p className={`text-sm uppercase tracking-[0.2em] ${labelText}`}>Highlights</p>
                    <ul className={`mt-3 space-y-2 ${bodyText}`}>
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full ${bulletTone}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.focus.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border ${chipBorder} px-3 py-1 text-xs uppercase tracking-wide ${mutedText}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>
                    Other Projects
                  </p>
                  <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Additional systems shipped across security, analytics, and commerce.
                  </h3>
                </div>
              </div>
            </Reveal>
            <div className="mt-10 grid lg:grid-cols-2 gap-7 md:gap-9">
              {otherProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                  <article
                    className={`rounded-3xl border ${borderTone} ${panelBg} p-8 transition-all duration-700 hover:-translate-y-2 hover:border-[#C3E41D]/40`}
                    style={{ transform: parallax(-0.01) }}
                  >
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className={`mt-3 ${mutedText} leading-relaxed text-sm sm:text-base`}>
                      {project.summary}
                    </p>
                    <div className="mt-6">
                      <p className={`text-sm uppercase tracking-[0.2em] ${labelText}`}>Highlights</p>
                      <ul className={`mt-3 space-y-2 ${bodyText}`}>
                        {project.highlights.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className={`mt-2 h-1.5 w-1.5 rounded-full ${bulletTone}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.focus.map((item) => (
                        <span
                          key={item}
                          className={`rounded-full border ${chipBorder} px-3 py-1 text-xs uppercase tracking-wide ${mutedText}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className={`max-w-6xl mx-auto border-t ${borderToneSoft} pt-24 md:pt-32`}>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start">
            <Reveal>
              <div>
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>
                  Experience Focus
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
                  Reliability across on-chain and off-chain systems.
                </h2>
                <p className={`mt-6 text-base sm:text-lg ${mutedText} leading-relaxed max-w-xl`}>
                  I build and operate Solana programs, protocol tooling, and indexing services with
                  production-grade reliability. The focus stays on invariants, safety, and clean UX.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div
                className={`rounded-3xl border ${borderTone} p-8 ${panelBg} transition-transform duration-700 hover:-translate-y-2`}
                style={{ transform: parallax(0.02) }}
              >
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>Capabilities</p>
                <div className={`mt-6 space-y-4 ${bodyText}`}>
                  <div
                    className={`flex items-start justify-between gap-4 border-b ${borderToneSoft} pb-4`}
                  >
                    <span>Solana program architecture</span>
                    <span className={`text-sm ${labelText}`}>Safety & logic</span>
                  </div>
                  <div
                    className={`flex items-start justify-between gap-4 border-b ${borderToneSoft} pb-4`}
                  >
                    <span>Indexing + analytics</span>
                    <span className={`text-sm ${labelText}`}>Data pipelines</span>
                  </div>
                  <div
                    className={`flex items-start justify-between gap-4 border-b ${borderToneSoft} pb-4`}
                  >
                    <span>Wallet auth + sessions</span>
                    <span className={`text-sm ${labelText}`}>Security & UX</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span>Web3 frontends</span>
                    <span className={`text-sm ${labelText}`}>Transaction UX</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="writing" className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className={`max-w-6xl mx-auto border-t ${borderToneSoft} pt-24 md:pt-32`}>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>Tech Stack</p>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
                  Tooling optimized for fast iteration and reliability.
                </h2>
              </div>
              <div className={`${mutedText} max-w-md text-sm sm:text-base`}>
                Writing on Solana engineering, system design, and Web3 UX soon. Here&apos;s the stack
                behind my recent work.
              </div>
            </div>
          </Reveal>
          <div className="mt-12 md:mt-14 grid sm:grid-cols-2 gap-5 md:gap-6">
            {techStack.map((item, index) => (
              <Reveal key={item.label} delay={index * 80}>
                <div
                  className={`rounded-2xl border ${borderTone} ${panelBg} p-6 transition-all duration-700 hover:-translate-y-2 hover:border-[#C3E41D]/40`}
                >
                  <p className={`text-sm uppercase tracking-[0.2em] ${labelText}`}>{item.label}</p>
                  <p className={`mt-3 text-base sm:text-lg ${bodyText}`}>{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-4 sm:px-6 lg:px-8 pb-28 md:pb-36">
        <div className={`max-w-6xl mx-auto border-t ${borderToneSoft} pt-24 md:pt-32`}>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            <Reveal>
              <div>
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>How I Work</p>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
                  Web3 execution with a reliability mindset.
                </h2>
                <p className={`mt-6 text-base sm:text-lg ${mutedText} leading-relaxed max-w-xl`}>
                  I treat Web3 infrastructure as financial infrastructure. That means explicit
                  invariants, safe authority models, and transaction UX that users can trust.
                </p>
                <div className="mt-10 grid sm:grid-cols-2 gap-4">
                  {workPrinciples.map((item, index) => (
                    <Reveal key={item} delay={index * 80}>
                      <div
                        className={`rounded-2xl border ${borderTone} ${panelBg} p-5 ${bodyText} transition-all duration-700 hover:-translate-y-2 hover:border-[#C3E41D]/40`}
                      >
                        {item}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div
                className={`rounded-3xl border ${borderTone} p-8 ${panelBgStrong} transition-transform duration-700 hover:-translate-y-2`}
                style={{ transform: parallax(-0.02) }}
              >
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>Let&apos;s Talk</p>
                <h3 className="mt-4 text-2xl font-semibold">Open to Web3 collaborations.</h3>
                <p className={`mt-4 ${mutedText}`}>
                  Reach out for Solana programs, protocol tooling, or Web3 product work.
                </p>
                <div className={`mt-6 space-y-3 ${bodyText}`}>
                  <div
                    className={`flex items-center justify-between border-b ${borderToneSoft} pb-3`}
                  >
                    <span>Email</span>
                    <span className={labelText}>ngenedaniel16@gmail.com</span>
                  </div>
                  <div
                    className={`flex items-center justify-between border-b ${borderToneSoft} pb-3`}
                  >
                    <span>Phone</span>
                    <span className={labelText}>+2349066666515</span>
                  </div>
                  <div
                    className={`flex items-center justify-between border-b ${borderToneSoft} pb-3`}
                  >
                    <span>Location</span>
                    <span className={labelText}>Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Availability</span>
                    <span className={labelText}>2026 Q1</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:ngenedaniel16@gmail.com"
                    className={`inline-flex items-center gap-2 rounded-full border ${borderTone} px-4 py-2 text-xs uppercase tracking-wide ${bodyText} transition-all duration-500 hover:-translate-y-0.5 hover:border-[#C3E41D]/60 hover:text-[#C3E41D]`}
                  >
                    Email
                  </a>
                  <a
                    href="tel:+2349066666515"
                    className={`inline-flex items-center gap-2 rounded-full border ${borderTone} px-4 py-2 text-xs uppercase tracking-wide ${bodyText} transition-all duration-500 hover:-translate-y-0.5 hover:border-[#C3E41D]/60 hover:text-[#C3E41D]`}
                  >
                    Call
                  </a>
                  <a
                    href="https://github.com/DanielChristLight1999"
                    className={`inline-flex items-center gap-2 rounded-full border ${borderTone} px-4 py-2 text-xs uppercase tracking-wide ${bodyText} transition-all duration-500 hover:-translate-y-0.5 hover:border-[#C3E41D]/60 hover:text-[#C3E41D]`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
