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

interface CapabilityItem {
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
  primaryCategory: "web3" | "other";
  aboutTitle: string;
  aboutBody: string;
  aboutTags: string[];
  coreStrengths: string[];
  buildHeading: string;
  projectsHeading: string;
  projectsIntro: string;
  experienceHeading: string;
  experienceBody: string;
  capabilities: CapabilityItem[];
  techStackIntro: string;
  howIWorkHeading: string;
  howIWorkBody: string;
  contactHeading: string;
  contactBody: string;
  otherProjectsHeading: string;
  otherProjectsIntro: string;
  parallax: (speed: number, offset?: number) => string;
  onViewProjects?: () => void;
}

export function PortfolioSections({
  tokens,
  whatIBuild,
  projects,
  techStack,
  workPrinciples,
  primaryCategory,
  aboutTitle,
  aboutBody,
  aboutTags,
  coreStrengths,
  buildHeading,
  projectsHeading,
  projectsIntro,
  experienceHeading,
  experienceBody,
  capabilities,
  techStackIntro,
  howIWorkHeading,
  howIWorkBody,
  contactHeading,
  contactBody,
  otherProjectsHeading,
  otherProjectsIntro,
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

  const primaryProjects = projects.filter((project) => project.category === primaryCategory);
  const otherProjects = projects.filter((project) => project.category !== primaryCategory);

  return (
    <>
      <section id="about" className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className={`max-w-6xl mx-auto border-t ${borderToneSoft} pt-24 md:pt-32`}>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            <Reveal>
              <div>
                <p className={`text-sm uppercase tracking-[0.25em] ${labelText}`}>About</p>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
                  {aboutTitle}
                </h2>
                <p className={`mt-6 text-base sm:text-lg ${mutedText} leading-relaxed max-w-2xl`}>
                  {aboutBody}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  {aboutTags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border ${chipBorder} px-4 py-1.5 text-sm ${bodyText} transition-all duration-500 hover:-translate-y-1 hover:border-[#C3E41D]/60 hover:text-[#C3E41D]`}
                    >
                      {tag}
                    </span>
                  ))}
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
                  {coreStrengths.map((item) => (
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
                  {buildHeading}
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
                  {projectsHeading}
                </h2>
              </div>
              <p className={`${mutedText} max-w-md text-sm sm:text-base`}>{projectsIntro}</p>
            </div>
          </Reveal>
          <div className="mt-14 md:mt-16 grid lg:grid-cols-2 gap-7 md:gap-9">
            {primaryProjects.map((project, index) => (
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
                    {otherProjectsHeading}
                  </p>
                  <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    {otherProjectsIntro}
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
                  {experienceHeading}
                </h2>
                <p className={`mt-6 text-base sm:text-lg ${mutedText} leading-relaxed max-w-xl`}>
                  {experienceBody}
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
                  {capabilities.map((item, index) => (
                    <div
                      key={item.label}
                      className={`flex items-start justify-between gap-4 ${index < capabilities.length - 1 ? `border-b ${borderToneSoft} pb-4` : ""}`}
                    >
                      <span>{item.label}</span>
                      <span className={`text-sm ${labelText}`}>{item.value}</span>
                    </div>
                  ))}
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
              <div className={`${mutedText} max-w-md text-sm sm:text-base`}>{techStackIntro}</div>
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
                  {howIWorkHeading}
                </h2>
                <p className={`mt-6 text-base sm:text-lg ${mutedText} leading-relaxed max-w-xl`}>
                  {howIWorkBody}
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
                <h3 className="mt-4 text-2xl font-semibold">{contactHeading}</h3>
                <p className={`mt-4 ${mutedText}`}>{contactBody}</p>
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
