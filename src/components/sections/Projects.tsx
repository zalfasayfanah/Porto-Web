"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projectsData } from "@/data/projects";
import { ProjectItem } from "@/types/portfolio";
import { Sparkles, Filter } from "lucide-react";

const CATEGORIES = [
  "All",
  "Web Development",
  "Healthcare Application",
  "Mobile Development",
  "Machine Learning",
] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Filter projects based on selected tab
  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  // Sort featured projects to the top
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-20 bg-transparent border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Projects"
          title="Project Showcase & Portofolio"
          subtitle="Koleksi proyek pengembangan web, aplikasi kesehatan, dan sistem teruji yang telah di-deploy dan dapat diakses."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            const count =
              category === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-brand-600 text-white shadow-sm shadow-brand-500/30 scale-105"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-100"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[11px] ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Modal Dialog for Project Details */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}

