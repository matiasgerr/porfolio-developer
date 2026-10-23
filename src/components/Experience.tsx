import { EDUCATION, EXPERIENCE } from '../constants';
import Reveal from './Reveal';

const Experience = () => (
  <section id="experiencia" className="py-32 px-4 md:px-12 border-t border-slate-800">
    <Reveal className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4">
      <div className="md:col-span-4">
        <p className="text-sm font-mono tracking-widest text-teal-400 uppercase mb-4">
          ( 02. Experiencia )
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Trayectoria.</h2>
      </div>

      <div className="md:col-span-8 md:col-start-6">
        <ol className="border-l border-slate-800 space-y-14">
          {EXPERIENCE.map((item) => (
            <li key={`${item.company}-${item.role}`} className="relative pl-8">
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${
                  item.current ? 'bg-teal-400 ring-4 ring-teal-400/20' : 'bg-slate-600'
                }`}
              />
              {item.period && (
                <p className="font-mono text-xs tracking-widest uppercase text-slate-400 mb-2">
                  {item.period}
                </p>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100">{item.role}</h3>
              <p className="text-blue-400 font-medium mt-1">{item.company}</p>
              <p className="text-sm text-slate-400 mb-4">{item.project}</p>
              <ul className="list-disc marker:text-teal-400 pl-5 space-y-2 text-slate-400 leading-relaxed mb-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2 font-mono text-xs">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 border border-slate-700 text-slate-400 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-16 pt-12 border-t border-slate-800">
          <h3 className="font-mono text-sm text-slate-400 mb-6">/ FORMACIÓN</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((item) => (
              <li key={item.title}>
                <p className="text-lg font-semibold text-slate-100">{item.title}</p>
                <p className="text-sm text-slate-400">
                  {item.institution}
                  {item.period && ` · ${item.period}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  </section>
);

export default Experience;
