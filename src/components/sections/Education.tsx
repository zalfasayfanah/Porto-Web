import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { educationData } from "@/data/education";
import { GraduationCap, Award, Calendar, CheckCircle } from "lucide-react";

export function Education() {
  const formal = educationData.filter((item) => !item.isBootcamp);
  const bootcamps = educationData.filter((item) => item.isBootcamp);

  return (
    <section id="education" className="py-20 bg-transparent border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Education & Training"
          title="Formal Education & Technology Bootcamps"
          subtitle="Pendidikan akademis perguruan tinggi dan program pelatihan intensif berbasis proyek industri."
        />

        <div className="space-y-12">
          {/* Formal Education Subsection */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand-600" />
              <span>Pendidikan Formal</span>
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {formal.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-200/90 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-md bg-blue-50 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-2">
                        Perguruan Tinggi
                      </span>
                      <h4 className="text-xl font-heading font-bold text-slate-900">
                        {item.institution}
                      </h4>
                      <p className="text-base font-medium text-brand-600 mt-0.5">
                        {item.degree}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shrink-0 self-start md:self-auto">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}

                  {item.details && (
                    <ul className="space-y-2 mt-4 pt-4 border-t border-slate-200/60 text-sm text-slate-600">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Training & Bootcamps Subsection */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-600" />
              <span>Program Pelatihan & Bootcamp</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bootcamps.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                        Bootcamp Bersertifikat
                      </span>
                      <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-heading font-bold text-slate-900 leading-snug">
                      {item.institution}
                    </h4>
                    <p className="text-sm font-semibold text-brand-600 mt-1 mb-3">
                      {item.degree}
                    </p>

                    {item.description && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    )}

                    {item.details && (
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                        {item.details.map((d, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-1.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

