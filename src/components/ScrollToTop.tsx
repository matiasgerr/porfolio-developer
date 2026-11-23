import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLang } from '../i18n/context';

// Floating bottom-right button, shown once the visitor has scrolled past the hero.
const ScrollToTop = () => {
  const { t } = useLang();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label={t('Volver arriba', 'Back to top')}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`bubble fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full text-ink transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <ChevronUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
