"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personalData } from "@/data/personal";
import { isValidUrl } from "@/lib/utils";
import { 
  Mail, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  MessageSquare, 
  Send 
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Connect and Build Something Great."
          subtitle="I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!"
        />

        <div className="max-w-2xl mx-auto">
          {/* Main Contact Card */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-primary to-slate-900 p-8 sm:p-10 text-white shadow-xl text-center relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <MessageSquare className="w-8 h-8 text-sky-300" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
                Hubungi Langsung
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                Tertarik mendiskusikan peluang magang, proyek web, atau kolaborasi teknologi? Silakan kirimkan pesan melalui email berikut.
              </p>

              {/* Email Pill & Copy Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <a
                  href={`mailto:${personalData.email}`}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4 text-sky-300" />
                  <span className="truncate">{personalData.email}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all shadow-md shrink-0 focus:outline-none"
                  aria-label="Salin Alamat Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
                {isValidUrl(personalData.linkedin) && (
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                )}

                {isValidUrl(personalData.github) && (
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repositories</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

