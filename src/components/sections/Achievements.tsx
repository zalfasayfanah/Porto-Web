import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { achievementsData } from "@/data/achievements";
import { Trophy, Award, Medal, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function Achievements() {
  const getRankBadgeVariant = (rank: string) => {
    if (rank.includes("1st") || rank.includes("Best Overall")) return "warning";
    if (rank.includes("Finalist") || rank.includes("Best")) return "brand";
    return "default";
  };

  return (
    <section id="achievements" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Honors & Awards"
          title="Achievements & Recognitions"
          subtitle="Apresiasi kompetisi akademik, seleksi program capstone, dan kejuaraan inovasi produk digital."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-gradient-to-br from-white via-white to-slate-50 border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <Badge variant={getRankBadgeVariant(item.rank)} className="font-semibold text-xs">
                    {item.rank}
                  </Badge>
                </div>

                <h3 className="font-heading font-bold text-slate-900 text-lg leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-600 mb-3">
                  {item.competition}
                </p>

                {item.description && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.year}
                </span>
                <span className="text-slate-500 font-medium">Verified Award</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
