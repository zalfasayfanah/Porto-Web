"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, Download, Mail, Sparkles, Award, Code2, GraduationCap } from "lucide-react";
import { personalData } from "@/data/personal";
import { achievementsData } from "@/data/achievements";
import { isValidUrl } from "@/lib/utils";

export function Hero() {
  const hasCv = isValidUrl(personalData.cvPdfUrl);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-medium text-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Web Developer & Intern Opportunities</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-600 to-sky-500">
                {personalData.name}
              </span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl font-heading font-medium text-slate-700">
              {personalData.title}
            </p>

            {/* Copy / Bio Summary */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              &ldquo;{personalData.bioHeadline}&rdquo;
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
              {personalData.bioSummary}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              {hasCv && (
                <a
                  href={personalData.cvPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-sm shadow-sm hover:shadow transition-all"
                >
                  <Download className="w-4 h-4 text-slate-500" />
                  <span>Download CV</span>
                </a>
              )}

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Quick Metrics / Highlights */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl font-heading font-bold text-slate-900">1st</p>
                <p className="text-xs text-slate-500 mt-0.5">Capstone Winner</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-slate-900">8+</p>
                <p className="text-xs text-slate-500 mt-0.5">Web Projects</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-slate-900">{achievementsData.length}</p>
                <p className="text-xs text-slate-500 mt-0.5">Achievements</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Avatar & Experience Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-xl border border-slate-200/80">
                {/* Profile Photo */}
                <div className="w-full aspect-square rounded-2xl bg-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden group shadow-inner">
                  {personalData.profilePhoto ? (
                    <img
                      src={personalData.profilePhoto}
                      alt={personalData.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3">
                        <Code2 className="w-12 h-12 text-sky-300" />
                      </div>
                      <span className="relative z-10 font-heading font-semibold text-lg">
                        {personalData.name}
                      </span>
                      <span className="relative z-10 text-xs text-slate-300 mt-0.5">
                        S1 Informatika UNIMUS
                      </span>
                    </>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-brand-500/90 backdrop-blur-md text-[10px] font-semibold text-white tracking-wider uppercase shadow-md">
                    Developer
                  </div>
                </div>

                {/* Floating highlight pills */}
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900">Juara 1 Capstone Project</p>
                      <p className="text-slate-500">Future Innovators Bootcamp 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900">Informatika UNIMUS</p>
                      <p className="text-slate-500">Focus on Web Development & AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

