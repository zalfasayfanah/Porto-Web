import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillsData } from "@/data/skills";
import { 
  Code2, 
  Globe, 
  Database, 
  Wrench, 
  Layers, 
  CheckCircle2 
} from "lucide-react";

export function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming Languages":
        return Code2;
      case "Web Technologies":
        return Globe;
      case "Database":
        return Database;
      case "Development Tools":
        return Wrench;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="Keterampilan teknis yang dikuasai dan diterapkan secara konsisten dalam berbagai proyek nyata."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => {
            const Icon = getCategoryIcon(category.title);
            const isWide = idx === skillsData.length - 1; // Additional skills can span or fit nicely

            return (
              <div
                key={idx}
                className={`rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                  isWide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-slate-900 text-lg">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {category.skills.length} competencies
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid / Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100/90 text-slate-800 border border-slate-200/80 text-sm font-medium transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100/80 text-[11px] text-slate-400">
                  Terverifikasi melalui implementasi proyek & pelatihan
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

