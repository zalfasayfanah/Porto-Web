"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/types/portfolio";
import { isValidUrl } from "@/lib/utils";
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  UserCheck, 
  Target, 
  Calendar 
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasLiveDemo = isValidUrl(project.deploymentUrl);
  const hasGithub = isValidUrl(project.githubUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="relative bg-gradient-to-r from-slate-900 via-primary to-slate-900 px-6 sm:px-8 py-6 text-white shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="accent" className="bg-sky-500 text-white border-none">
                  {project.category}
                </Badge>
                {project.featured && (
                  <Badge variant="warning" className="bg-amber-500 text-white border-none flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured</span>
                  </Badge>
                )}
                <span className="text-xs text-slate-300 flex items-center gap-1 ml-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                {project.name}
              </h3>
              <p className="text-sm text-sky-200 mt-1 font-medium">
                Peran: {project.role}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Tutup Detail Proyek"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {/* Achievement Callout if exists */}
          {project.achievement && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-amber-900 text-sm">
                  Prestasi / Penghargaan Proyek
                </h5>
                <p className="text-xs sm:text-sm text-amber-800 mt-0.5">
                  {project.achievement}
                </p>
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 text-base mb-2">
              Deskripsi Proyek
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem Statement & Objectives */}
          {(project.problemStatement || (project.objectives && project.objectives.length > 0)) && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              {project.problemStatement && (
                <div>
                  <h5 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-1">
                    Problem Statement:
                  </h5>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    {project.problemStatement}
                  </p>
                </div>
              )}
              {project.objectives && project.objectives.length > 0 && (
                <div>
                  <h5 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-brand-600" />
                    <span>Project Objectives:</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {project.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-1.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-600" />
              <span>Fitur Utama</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Contributions */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 text-base mb-3 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-brand-600" />
              <span>Kontribusi Pribadi (Personal Contributions)</span>
            </h4>
            <ul className="space-y-2">
              {project.personalContributions.map((contrib, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 bg-blue-50/40 p-3 rounded-xl border border-blue-100/60"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-600 shrink-0 mt-1.5" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 text-base mb-2">
              Teknologi yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-medium transition-colors"
          >
            Tutup
          </button>

          <div className="flex items-center gap-3">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium shadow-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            {hasLiveDemo && (
              <a
                href={project.deploymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium shadow-sm hover:shadow transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
