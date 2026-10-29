import { SKILLS } from '../constants';
import Reveal from './Reveal';
import SkillChip from './SkillChip';

const About = () => (
  <section id="sobre-mi" className="py-32 px-4 md:px-12 border-t border-slate-800 bg-slate-900/20">
    <Reveal className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4">
      <div className="md:col-span-4">
        <p className="text-sm font-mono tracking-widest text-blue-400 uppercase mb-4">
          ( 01. Contexto )
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Sobre el desarrollador.</h2>
      </div>

      <div className="md:col-span-8 md:col-start-6 space-y-8 text-lg md:text-xl text-slate-400 font-light leading-relaxed">
        <p>
          Me llamo <strong className="text-blue-400 uppercase">Matias Delgado</strong>. Soy
          desarrollador <strong className="text-blue-400 font-normal">Frontend</strong> con dos
          años de experiencia construyendo aplicaciones web escalables con{' '}
          <strong className="text-slate-200 font-normal">React, Next.js y TypeScript</strong>, y hoy
          lidero el frontend de YIPI en Ejesatelital.
        </p>
        <p>
          También trabajo del lado del servidor con Node.js, Supabase y SQL, aplico Clean
          Architecture e integro APIs. Busco brindar soluciones a empresas, profesionales y
          emprendedores con código escalable y funcional. Soy Analista de Sistemas y Técnico en
          Informática, y estudio Ingeniería en Informática en la UBA.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-slate-800">
          {SKILLS.map(({ label, items }) => (
            <div key={label}>
              <h3 className="font-mono text-sm text-slate-400 mb-3">{label}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <SkillChip item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export default About;
