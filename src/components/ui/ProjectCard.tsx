"use client";

import React from "react";
import { ProjectItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { isValidUrl } from "@/lib/utils";
import { ExternalLink, Sparkles, Layers, ArrowRight, Laptop } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onViewDetails: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const hasLiveDemo = isValidUrl(project.deploymentUrl);

  return (
    <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-brand-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Project Thumbnail / Screenshot Banner */}
        <div
          className="relative w-full h-52 bg-slate-900 overflow-hidden cursor-pointer"
          onClick={() => onViewDetails(project)}
        >
          <img
            src={project.thumbnailUrl}
            alt={project.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/projects/placeholder.svg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <Badge variant="accent" className="bg-sky-600/90 text-white border-none shadow-md backdrop-blur-sm">
              {project.category}
            </Badge>
          </div>

          {project.featured && (
            <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/95 text-white text-[11px] font-semibold shadow-md backdrop-blur-sm z-10">
              <Sparkles className="w-3 h-3" />
              <span>Featured</span>
            </div>
          )}

          {/* Project Title Banner at bottom of screenshot */}
          <div className="absolute bottom-3 left-4 right-4 z-10">
            <h4 className="font-heading font-bold text-lg text-white drop-shadow">
              {project.name}
            </h4>
            <p className="text-xs text-slate-200 drop-shadow">
              {project.role}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>{project.year}</span>
            {project.achievement && (
              <span className="text-amber-600 font-semibold truncate max-w-[200px]" title={project.achievement}>
                ★ {project.achievement}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-100 mt-2">
        <button
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 group/btn transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {hasLiveDemo && (
          <a
            href={project.deploymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-slate-700 text-xs font-medium transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

