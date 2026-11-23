import { EDUCATION, EXPERIENCE } from '../constants';
import Reveal from './Reveal';
import { EDUCATION_EN, EXPERIENCE_EN } from '../constants/en';
import { useLang } from '../i18n/context';

const Experience = () => {
  const { t, lang } = useLang();
  const en = lang === 'en';
  return (
  <section id="experiencia" className="py-32 px-4 md:px-12 border-t border-line">
    <Reveal className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4">
      <div className="md:col-span-4">
        <p className="text-sm font-mono tracking-widest text-ink uppercase mb-4">
          {t('( 03. Experiencia )', '( 03. Experience )')}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-ink">{t('Trayectoria.', 'Career.')}</h2>
      </div>

      <div className="md:col-span-8 md:col-start-6">
        <ol className="border-l border-line space-y-8">
          {EXPERIENCE.map((base, i) => {
            const item = en ? { ...base, ...EXPERIENCE_EN[i] } : base;
            return (
            <li key={`${item.company}-${item.role}`} className="relative ml-8 glass rounded-3xl p-6 md:p-8">
              <span
                aria-hidden="true"
                className={`absolute -left-[38px] top-8 w-3 h-3 rounded-full ${
                  item.current ? 'bg-ink ring-4 ring-line shadow-md' : 'bg-neutral-400 ring-4 ring-line'
                }`}
              />
              {item.period && (
                <p className="font-mono text-xs tracking-widest uppercase text-muted mb-2">
                  {item.period}
                </p>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-ink">{item.role}</h3>
              <p className="text-ink font-medium mt-1">{item.company}</p>
              <p className="text-sm text-muted mb-4">{item.project}</p>
              <ul className="list-disc marker:text-ink pl-5 space-y-2 text-muted leading-relaxed mb-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2 font-mono text-xs">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="bubble px-3 py-1 text-ink rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
            );
          })}
        </ol>

        <div className="mt-16 pt-12">
          <h3 className="font-mono text-sm text-muted mb-6">{t('/ FORMACIÓN', '/ EDUCATION')}</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((base, i) => {
              const item = en ? { ...base, ...EDUCATION_EN[i] } : base;
              return (
              <li key={item.title} className="glass rounded-3xl p-5">
                <span
                  className={`inline-block mb-2 rounded-full px-2.5 py-0.5 font-mono text-xs ${
                    base.status === 'En curso'
                      ? 'btn-dark'
                      : 'bubble text-ink'
                  }`}
                >
                  {item.status}
                </span>
                <p className="text-lg font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-muted">
                  {[item.institution, item.period].filter(Boolean).join(' · ')}
                </p>
              </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Reveal>
  </section>
  );
};

export default Experience;
