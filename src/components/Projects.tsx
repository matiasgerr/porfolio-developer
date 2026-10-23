import { useState } from "react";
import { PROJECTS } from "../constants";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import Reveal from "./Reveal";

const FEATURED = PROJECTS.filter((project) => project.featured);
const OTHERS = PROJECTS.filter((project) => !project.featured);

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const handleSelect = (id: string) =>
    setOpenProjectId((prev) => (prev === id ? null : id));

  return (
    <section id="proyectos" className="py-32 border-t border-slate-800">
      <Reveal className="px-4 md:px-12 mb-16 max-w-7xl mx-auto">
        <p className="text-sm font-mono tracking-widest text-teal-400 uppercase mb-4">
          ( 03. Trabajo )
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-100">
          Proyectos destacados.
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
        <h3 className="font-mono text-sm tracking-widest text-slate-400 uppercase">
          / Otros proyectos
        </h3>
      </Reveal>

      <div className="border-t border-slate-800">
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
