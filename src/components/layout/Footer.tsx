import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalData } from "@/data/personal";
import { isValidUrl } from "@/lib/utils";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Summary */}
          <div className="text-center md:text-left">
            <Link
              href="#hero"
              className="text-white font-heading font-bold text-lg tracking-tight hover:text-brand-500 transition-colors"
            >
              {personalData.name}
            </Link>
            <p className="text-sm text-slate-400 mt-1">
              {personalData.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {isValidUrl(personalData.github) && (
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            )}

            {isValidUrl(personalData.linkedin) && (
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}

            {isValidUrl(`mailto:${personalData.email}`) && (
              <a
                href={`mailto:${personalData.email}`}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}

            <a
              href="#hero"
              className="w-10 h-10 rounded-full bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>
          <p className="mt-1">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

