import { useState } from "react";
import { PROJECTS } from "../constants";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import Reveal from "./Reveal";
import { useLang } from '../i18n/context';
import { PROJECTS_EN } from '../constants/en';
import type { Project } from '../types';

// Overlays the English copy (keyed by id) on top of the Spanish project.
const toEnglish = (project: Project): Project => {
  const en = PROJECTS_EN[project.id];
  if (!en) return project;
  const { details } = project;
  return {
    ...project,
    title: en.title ?? project.title,
    description: en.description,
    stack: en.stack ?? project.stack,
    details: details && {
      ...details,
      summary: en.summary ?? details.summary,
      image: details.image && { ...details.image, alt: en.alt ?? details.image.alt },
    },
  };
};

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const handleSelect = (id: string) =>
    setOpenProjectId((prev) => (prev === id ? null : id));

  const { t, lang } = useLang();
  const projects = lang === 'en' ? PROJECTS.map(toEnglish) : PROJECTS;
  const FEATURED = projects.filter((project) => project.featured);
  const OTHERS = projects.filter((project) => !project.featured);
  return (
    <section id="proyectos" className="py-32 border-t border-line">
      <Reveal className="px-4 md:px-12 mb-16 max-w-7xl mx-auto">
        <p className="text-sm font-mono tracking-widest text-ink uppercase mb-4">
          {t('( 02. Trabajo )', '( 02. Work )')}
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-ink">
          {t('Proyectos destacados.', 'Featured projects.')}
        </h2>
      </Reveal>

      <div className="px-4 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {FEATURED.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 120} className="h-full">
            <FeaturedProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="px-4 md:px-12 max-w-7xl mx-auto mt-24 mb-8">
        <h3 className="font-mono text-sm tracking-widest text-muted uppercase">
          {t('/ Otros proyectos', '/ Other projects')}
        </h3>
      </Reveal>

      <div className="space-y-4">
        {OTHERS.map((project, index) => (
          <article key={project.id}>
            <ProjectCard
              project={project}
              number={String(index + 1).padStart(2, "0")}
              isOpen={openProjectId === project.id}
              onSelect={handleSelect}
            />
            <ProjectDetails
              project={project}
              open={openProjectId === project.id}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
