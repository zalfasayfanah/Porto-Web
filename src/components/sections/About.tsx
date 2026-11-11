import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personalData } from "@/data/personal";
import { Users, Code, Target, Lightbulb, Compass, Award } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Berpengalaman memimpin tim proyek web kesehatan dan organisasi kampus dengan pendekatan kolaboratif.",
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Terbiasa mengembangkan aplikasi menggunakan Next.js, TypeScript, Tailwind CSS, PHP, dan Supabase.",
    },
    {
      icon: Lightbulb,
      title: "AI-Assisted Development",
      description: "Memanfaatkan AI coding tools secara terarah untuk meningkatkan efisiensi dan kualitas pengkodean.",
    },
    {
      icon: Target,
      title: "Career Orientation",
      description: "Berfokus pada peran Full Stack, Frontend, maupun Backend Development.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Background & Engineering Journey"
          subtitle="Membangun solusi digital yang fungsional, teruji, dan berorientasi pada pemecahan masalah nyata."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            {personalData.aboutText.map((paragraph, index) => (
              <p key={index} className="text-justify sm:text-left">
                {paragraph}
              </p>
            ))}

            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100/80 mt-6">
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-slate-900 block mb-1">
                    Komitmen Profesional:
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Menjunjung tinggi penulisan kode yang bersih, terdokumentasi, serta siap beradaptasi dengan ritme kerja tim software engineering industri.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-brand-200 shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-brand-50 border border-slate-200 group-hover:border-brand-200 text-brand-600 flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-slate-900 text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

