import { useLang } from '../i18n/context';

const LangToggle = ({ className = '' }: { className?: string }) => {
  const { lang, setLang, t } = useLang();
  const next = lang === 'es' ? 'en' : 'es';

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={t('Switch to English', 'Cambiar a español')}
      className={`bubble flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-bold uppercase text-ink ${className}`}
    >
      {next}
    </button>
  );
};

export default LangToggle;
