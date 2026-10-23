import { ArrowUpRight } from 'lucide-react';
import { PROJECT_TYPE_ICON, PROJECT_TYPE_LABEL } from '../constants';
import type { Project } from '../types';

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const image = project.details?.image;
  const Icon = PROJECT_TYPE_ICON[project.type];

  return (
    <article className="group h-full flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl hover:shadow-teal-500/5">
      {image && (
        <div className="overflow-hidden border-b border-slate-800 bg-black">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="w-full aspect-[7/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="font-mono text-xs tracking-widest text-teal-400 uppercase">
            {PROJECT_TYPE_LABEL[project.type]}
          </span>
          <Icon aria-hidden="true" className="w-5 h-5 text-slate-500" />
        </div>
        <h3 className="mb-3 text-2xl md:text-3xl font-bold text-slate-100">{project.title}</h3>
        <p className="mb-6 text-slate-400 leading-relaxed">{project.description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 font-mono text-xs">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-slate-700 px-3 py-1 text-slate-400">
              {tech}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded border border-teal-400/40 px-4 py-2 font-mono text-sm text-teal-400 transition-all hover:border-teal-400 hover:bg-teal-400/10"
          >
            Ver proyecto <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
