import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}


export default function ProjectCard({ project, className }: ProjectCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = project.image && !imgFailed;

  return (
    <a
      href={project.href ?? "#"}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/30 transition-colors hover:border-sky-400/40 hover:bg-slate-900/50",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="aspect-video w-full overflow-hidden bg-slate-800/50">
        {showImage ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800/60 to-slate-900/60">
            <span className="font-mono text-2xl font-semibold text-slate-600">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-sky-400">
          {project.category}
        </p>
        <h3 className="mt-1 text-lg font-medium text-slate-100 transition-colors group-hover:text-sky-300">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700/60 px-2.5 py-1 font-mono text-[11px] text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}