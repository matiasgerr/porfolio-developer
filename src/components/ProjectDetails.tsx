import { ArrowUpRight } from "lucide-react";
import { PROJECT_TYPE_LABEL } from "../constants";
import type { Project } from "../types";

interface ProjectDetailsProps {
  project: Project;
  open: boolean;
}

const ProjectDetails = ({ project, open }: ProjectDetailsProps) => {
  const { details } = project;
  if (!details) return null;
  const { image } = details;

  return (
    <div
      id={`proyecto-${project.id}-detalle`}
      inert={!open}
      className={`grid transition-all duration-500 ease-in-out ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className="bg-slate-900/60 border-b border-slate-700 px-4 md:px-12 py-8 md:py-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
            <div className={`${image ? "md:w-1/2" : ""} flex flex-col justify-center`}>
              <span className="font-mono text-xs tracking-widest text-teal-400 uppercase mb-4">
                {PROJECT_TYPE_LABEL[project.type]}
              </span>
              <h5 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                {project.title}
              </h5>
              <p
                className={`text-slate-400 text-sm md:text-base leading-relaxed mb-6 ${image ? "" : "max-w-4xl"}`}
              >
                {details.summary}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 border border-slate-700 text-slate-400 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-mono text-teal-400 border border-teal-400/40 hover:border-teal-400 hover:bg-teal-400/10 px-4 py-2 rounded transition-all w-fit"
                >
                  Ver proyecto <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>
            {image && (
              <div className="md:w-1/2">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-xl border border-slate-700 object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
