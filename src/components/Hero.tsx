import { ArrowDown, MapPin } from 'lucide-react';
import { METRICS, PROFILE } from '../constants';
import { METRICS_EN } from '../constants/en';
import { useLang } from '../i18n/context';

const Hero = () => {
  const { t } = useLang();
  return (
  <header className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 pt-24 pb-16 overflow-hidden">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="hero-grid absolute inset-0" />
      <div className="animate-drift absolute -top-48 right-[-15%] h-[38rem] w-[38rem] rounded-full bg-white dark:bg-blue-500/15 blur-3xl" />
      <div className="animate-drift-slow absolute bottom-[-25%] left-[-15%] h-[32rem] w-[32rem] rounded-full bg-neutral-300/50 dark:bg-teal-500/10 blur-3xl" />
    </div>

  

    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-2">
      <p className="font-mono text-sm md:text-lg text-muted mb-6">
        <span aria-hidden="true" className="text-ink">
          {'> '}
        </span>
        {t('Hola, soy', "Hi, I'm")} <span className="text-ink font-semibold">{PROFILE.name}</span>
      </p>

      <h1 className="flex flex-col gap-2">
        <span className="sr-only">{PROFILE.name}, </span>
        <span className="text-[14vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter text-transparent [-webkit-text-stroke:1.5px_var(--color-ink)] hover:[-webkit-text-stroke:2.5px_var(--color-ink)] transition-all duration-500 cursor-default">
          SOFTWARE
        </span>
        <span className="text-[14vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-neutral-900 via-neutral-700 to-neutral-400 dark:from-white dark:via-slate-300 dark:to-slate-500">
          DEVELOPER.
        </span>
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12 border-t border-line pt-8">
        <div className="max-w-md space-y-4">
          <p className="font-mono text-muted text-sm md:text-base">
            {t(
              `Dos años construyendo aplicaciones web y móviles escalables, del frontend al backend: ${PROFILE.tagline}`,
              'Two years building scalable web and mobile apps, from frontend to backend: React, Next.js and TypeScript, plus Node.js, Java and SQL.',
            )}
          </p>
          <p className="flex items-center gap-2 font-mono text-xs text-muted">
            <MapPin aria-hidden="true" className="w-4 h-4 text-ink" />
            {t(PROFILE.location, 'Buenos Aires, Argentina · Remote')}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 btn-dark font-bold px-7 py-3 rounded-full"
          >
            {t('Ver proyectos', 'View projects')}
            <ArrowDown
              aria-hidden="true"
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 glass glass-lift text-ink font-bold px-7 py-3 rounded-full"
          >
            {t('Contactar', 'Get in touch')}
          </a>
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {METRICS.map(({ value, label }, i) => (
          <div key={label} className="flex flex-col-reverse gap-1 glass rounded-3xl px-5 py-4">
            <dt className="font-mono text-xs text-muted">{t(label, METRICS_EN[i].label)}</dt>
            <dd className="text-xl md:text-3xl font-bold text-ink">{t(value, METRICS_EN[i].value ?? value)}</dd>
          </div>
        ))}
      </dl>
    </div>
  </header>
  );
};

export default Hero;
