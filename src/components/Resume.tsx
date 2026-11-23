import { Download } from 'lucide-react';
import { CV } from '../constants';
import Reveal from './Reveal';
import { useLang } from '../i18n/context';

// Placed after the projects on purpose: visitors see the work first, then take the CV.
const Resume = () => {
  const { t } = useLang();
  return (
  <section
    id="cv"
    aria-labelledby="cv-title"
    className="py-24 md:py-32 px-4 md:px-12 border-t border-line"
  >
    <Reveal className="glass max-w-7xl mx-auto rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
      <div>
        <p className="text-sm font-mono tracking-widest text-ink uppercase mb-4">
          {t('( 04. Currículum )', '( 04. Résumé )')}
        </p>
        <h2 id="cv-title" className="text-4xl md:text-5xl font-bold text-ink mb-4">
          {t('¿Te gustó lo que viste?', 'Liked what you saw?')}
        </h2>
        <p className="text-muted text-lg md:text-xl font-light max-w-xl">
          {t(
            'Llévate mi CV con la experiencia, formación y tecnologías completas.',
            'Grab my résumé with my full experience, education and tech stack.',
          )}
        </p>
      </div>

      <a
        href={CV.url}
        download={CV.fileName}
        className="group inline-flex items-center gap-4 btn-dark self-start md:self-auto px-7 py-4 rounded-full"
      >
        <Download
          aria-hidden="true"
          className="w-6 h-6 group-hover:translate-y-0.5 transition-transform"
        />
        <span className="flex flex-col">
          <span className="text-lg font-bold">{t('Descargar CV', 'Download résumé')}</span>
          <span className="font-mono text-xs opacity-70">PDF</span>
        </span>
      </a>
    </Reveal>
  </section>
  );
};

export default Resume;
