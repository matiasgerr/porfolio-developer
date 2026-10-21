import { Globe, Smartphone, Server, ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project, ProjectType } from "../types";

interface ProjectCardProps {
  project: Project;
  isOpen?: boolean;
  onSelect: (id: string) => void;
}

const TYPE_ICON: Record<ProjectType, typeof Globe> = {
  web: Globe,
  mobile: Smartphone,
  backend: Server,
};

const TYPE_ICON_HOVER: Record<ProjectType, string> = {
  web: "group-hover:text-blue-400",
  mobile: "group-hover:text-teal-400",
  backend: "group-hover:text-blue-400",
};

// The title's button/link stretches over the whole row (::after), so the row stays
// clickable without nesting headings inside a <button>.
const STRETCHED_TARGET =
  "after:absolute after:inset-0 after:z-20 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-teal-400";

const ProjectCard = ({
  project,
  isOpen = false,
  onSelect,
}: ProjectCardProps) => {
  const Icon = TYPE_ICON[project.type];
  const isExpandable = Boolean(project.details);

  let title = <>{project.title}</>;
  if (isExpandable) {
    title = (
      <button
        type="button"
        onClick={() => onSelect(project.id)}
        aria-expanded={isOpen}
        aria-controls={`proyecto-${project.id}-detalle`}
        className={`text-left ${STRETCHED_TARGET}`}
      >
        {project.title}
      </button>
    );
  } else if (project.link) {
    title = (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={STRETCHED_TARGET}
      >
        {project.title}
      </a>
    );
  }

  return (
    <div className="group relative border-b border-slate-800 hover:bg-slate-900 focus-within:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="flex items-start md:items-center gap-6 md:gap-12 w-full md:w-auto z-10">
          <span
            aria-hidden="true"
            className="font-mono text-2xl md:text-4xl text-slate-700 group-hover:text-blue-500 transition-colors"
          >
            {project.id}
          </span>
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-200 mb-2">
              {title}
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-md">
              {project.description}
            </p>
            <p className="md:hidden mt-3 font-mono text-xs text-slate-400">
              {project.stack.join(" · ")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto justify-between md:justify-end mt-4 md:mt-0 z-10 pointer-events-none">
          <ul className="hidden md:flex flex-col gap-1 font-mono text-xs text-slate-400 text-right">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="flex items-center gap-6" aria-hidden="true">
            <Icon
              className={`w-8 h-8 md:w-12 md:h-12 text-slate-500 ${TYPE_ICON_HOVER[project.type]} transition-colors`}
            />
            {(isExpandable || project.link) && (
              <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-teal-400 group-hover:bg-teal-400/10 transition-all">
                {isExpandable ? (
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-all duration-300 ${isOpen ? "rotate-180 text-teal-400" : ""}`}
                  />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-colors" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
