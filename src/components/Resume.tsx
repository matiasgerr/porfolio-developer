import { Download } from 'lucide-react';
import { CV } from '../constants';
import Reveal from './Reveal';

// Placed after the projects on purpose: visitors see the work first, then take the CV.
const Resume = () => (
  <section
    id="cv"
    aria-labelledby="cv-title"
    className="py-24 md:py-32 px-4 md:px-12 border-t border-slate-800 bg-slate-900/20"
  >
    <Reveal className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
      <div>
        <p className="text-sm font-mono tracking-widest text-teal-400 uppercase mb-4">
          ( 04. Currículum )
        </p>
        <h2 id="cv-title" className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          ¿Te gustó lo que viste?
        </h2>
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-xl">
          Llévate mi CV con la experiencia, formación y stack completos.
        </p>
      </div>

      <a
        href={CV.url}
        download={CV.fileName}
        className="group inline-flex items-center gap-4 self-start md:self-auto border border-teal-400/40 hover:border-teal-400 hover:bg-teal-400/10 text-teal-400 px-6 py-4 rounded transition-all"
      >
        <Download
          aria-hidden="true"
          className="w-6 h-6 group-hover:translate-y-0.5 transition-transform"
        />
        <span className="flex flex-col">
          <span className="text-lg font-bold">Descargar CV</span>
          <span className="font-mono text-xs text-slate-400">PDF</span>
        </span>
      </a>
    </Reveal>
  </section>
);

export default Resume;
