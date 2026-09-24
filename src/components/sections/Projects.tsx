"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { projects, type Project, type ProjectSize } from "@/lib/data";

const sizeClasses: Record<ProjectSize, string> = {
  large: "md:col-span-2",
  medium: "md:col-span-1",
  small: "md:col-span-2",
};

const cardDelays = [0, 0.05, 0.1, 0.15] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn
      as="article"
      delay={cardDelays[index] ?? 0}
      className={`${sizeClasses[project.size]} group relative`}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-[border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-border-hover sm:p-8">
        {/* decorative glow removed to eliminate reserved photo space */}

        <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
          <span className="font-mono text-xs text-muted-dim">
            {String(index + 1).padStart(2, "0")}
          </span>
          <ArrowUpRightIcon className="size-5 shrink-0 text-muted-dim transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </div>

        <div className="relative z-10">
          <h3
            className={`font-semibold tracking-tight text-foreground ${
              project.size === "large"
                ? "text-2xl sm:text-3xl"
                : project.size === "medium"
                  ? "text-xl sm:text-2xl"
                  : "text-lg sm:text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-3 leading-relaxed text-muted-dim ${
              project.size === "large"
                ? "max-w-lg text-base"
                : project.size === "small"
                  ? "max-w-3xl text-sm"
                  : "text-sm"
            }`}
          >
            {project.description}
          </p>
          <ul
            className="mt-5 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="content-auto px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.2em] text-muted-dim uppercase">
              Operations
            </p>
            <h2
              id="work-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Infrastructure & Operations
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-dim">
            Systems administration work: deployments, maintenance, monitoring, and backups.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 auto-rows-max">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
