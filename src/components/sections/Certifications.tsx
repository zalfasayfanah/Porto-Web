import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certificationsData } from "@/data/certifications";
import { isValidUrl } from "@/lib/utils";
import { Award, ExternalLink, Calendar, Clock, ShieldCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-transparent border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Credentials"
          title="Certifications & Verified Credentials"
          subtitle="Sertifikasi resmi dalam bidang pemrograman web, kecerdasan buatan, dan fundamental software engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => {
            const hasValidLink = isValidUrl(cert.certificateUrl);

            return (
              <div
                key={cert.id}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-base leading-snug mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-brand-600 mb-3">
                    {cert.organizer}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-500 mb-4">
                    {cert.duration && (
                      <p className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{cert.duration}</span>
                      </p>
                    )}
                    {cert.certificateNumber && (
                      <p className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="font-mono text-[11px] text-slate-600">
                          No: {cert.certificateNumber}
                        </span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {hasValidLink ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100/80 px-3.5 py-2 rounded-xl transition-colors"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">
                      Dokumen Terverifikasi
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

