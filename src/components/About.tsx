import { SKILLS } from '../constants';
import Reveal from './Reveal';
import SkillChip from './SkillChip';
import { SKILL_LABEL_EN } from '../constants/en';
import { useLang } from '../i18n/context';

const About = () => {
  const { t, lang } = useLang();
  return (
  <section id="sobre-mi" className="py-32 px-4 md:px-12 border-t border-line">
    <Reveal className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4">
      <div className="md:col-span-4">
        <p className="text-sm font-mono tracking-widest text-ink uppercase mb-4">
          {t('( 01. Contexto )', '( 01. Background )')}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-ink">{t('Sobre el desarrollador.', 'About the developer.')}</h2>
      </div>

      <div className="md:col-span-8 md:col-start-6 space-y-8 text-lg md:text-xl text-muted font-light leading-relaxed">
        {lang === 'en' ? (
          <>
            <p>
              My name is <strong className="text-ink uppercase">Matias Delgado</strong>. I'm a{' '}
              <strong className="text-ink font-normal">Full Stack</strong> developer with two years
              of experience building scalable web applications with{' '}
              <strong className="text-ink font-normal">React, Next.js and TypeScript</strong>, and
              I currently lead the frontend of YIPI at Ejesatelital.
            </p>
            <p>
              On the server side I work with Node.js, Java, Supabase and SQL, apply Clean
              Architecture and integrate APIs. I aim to deliver solutions to companies,
              professionals and entrepreneurs with scalable, working code. I'm a Systems Analyst
              and IT Technician, and I'm studying Computer Engineering at UBA.
            </p>
          </>
        ) : (
          <>
            <p>
              Me llamo <strong className="text-ink uppercase">Matias Delgado</strong>. Soy
              desarrollador <strong className="text-ink font-normal">Full Stack</strong> con dos
              años de experiencia construyendo aplicaciones web escalables con{' '}
              <strong className="text-ink font-normal">React, Next.js y TypeScript</strong>, y hoy
              lidero el desarrollo de interfaces de YIPI en Ejesatelital.
            </p>
            <p>
              También trabajo del lado del servidor con Node.js, Java, Supabase y SQL, aplico
              Arquitectura Limpia e integro APIs. Busco brindar soluciones a empresas,
              profesionales y emprendedores con código escalable y funcional. Soy Analista de
              Sistemas y Técnico en Informática, y estudio Ingeniería en Informática en la UBA.
            </p>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12">
          {SKILLS.map(({ label, items }) => (
            <div key={label} className="glass rounded-3xl p-6">
              <h3 className="font-mono text-sm text-ink font-semibold mb-4">{t(label, SKILL_LABEL_EN[label] ?? label)}</h3>
              <ul className="flex flex-wrap gap-3">
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
};

export default About;
