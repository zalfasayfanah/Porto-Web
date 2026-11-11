import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { organizationsData } from "@/data/organizations";
import { Users2, Calendar, Award, CheckCircle } from "lucide-react";

export function Organizations() {
  return (
    <section id="organizations" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Leadership & Collaboration"
          title="Organizational Experience"
          subtitle="Pengalaman berorganisasi, kepemimpinan divisi, dan koordinasi tim riset pengabdian masyarakat."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {organizationsData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 leading-snug">
                  {item.organization}
                </h3>
                <p className="text-sm font-semibold text-brand-600 mt-1 mb-4">
                  {item.role}
                </p>

                <ul className="space-y-2.5 text-sm text-slate-600">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.organization.includes("AKSAWATRA") && (
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pencapaian: Finalis PIMNAS 37 Nasional</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

