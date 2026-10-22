import { useState } from "react";
import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const handleSelect = (id: string) =>
    setOpenProjectId((prev) => (prev === id ? null : id));

  return (
    <section id="proyectos" className="py-32 border-t border-slate-800">
      <div className="px-4 md:px-12 mb-20 max-w-7xl mx-auto">
        <p className="text-sm font-mono tracking-widest text-teal-400 uppercase mb-4">
          ( 03. Trabajo )
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-100">
          Colección de Proyectos.
        </h2>
      </div>

      <div className="border-t border-slate-800">
        {PROJECTS.map((project) => (
          <article key={project.id}>
            <ProjectCard
              project={project}
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
