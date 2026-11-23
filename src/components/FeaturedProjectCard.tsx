import { ArrowUpRight } from 'lucide-react';
import { PROJECT_TYPE_ICON, PROJECT_TYPE_LABEL } from '../constants';
import type { Project } from '../types';
import { useLang } from '../i18n/context';

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const { t } = useLang();
  const image = project.details?.image;
  const Icon = PROJECT_TYPE_ICON[project.type];

  return (
    <article className="group h-full flex flex-col glass glass-lift overflow-hidden rounded-3xl">
      {image && (
        <div className="overflow-hidden border-b border-white/70 bg-black">
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
          <span className="font-mono text-xs tracking-widest text-ink uppercase">
            {PROJECT_TYPE_LABEL[project.type]}
          </span>
          <Icon aria-hidden="true" className="w-5 h-5 text-muted" />
        </div>
        <h3 className="mb-3 text-2xl md:text-3xl font-bold text-ink">{project.title}</h3>
        <p className="mb-6 text-muted leading-relaxed">{project.description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 font-mono text-xs">
          {project.stack.map((tech) => (
            <li key={tech} className="bubble rounded-full px-3 py-1 text-muted">
              {tech}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 btn-dark rounded-full px-5 py-2 font-mono text-sm"
          >
            {t('Ver proyecto', 'View project')} <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
