import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      }`}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant="brand" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

