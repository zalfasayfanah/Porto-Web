import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Professional Experience"
          title="Work & Internship Experience"
          subtitle="Pengalaman praktik kerja lapangan dalam tata kelola sistem informasi dan dukungan teknologi operasional."
        />

        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="relative pl-8 md:pl-10 pb-12 last:pb-0 border-l-2 border-brand-200"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-brand-50 border-4 border-white shadow-sm flex items-center justify-center text-brand-600">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Main Experience Card */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-slate-900">
                      {item.position}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 mt-0.5">
                      <Building2 className="w-4 h-4 text-brand-500" />
                      <span>{item.company}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-5">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                    Tanggung Jawab & Kontribusi:
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                {item.skillsUsed && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 mr-2 block sm:inline mb-2 sm:mb-0">
                      Kompetensi & Tools:
                    </span>
                    <div className="inline-flex flex-wrap gap-1.5">
                      {item.skillsUsed.map((skill, sIdx) => (
                        <Badge key={sIdx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

