import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../constants';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';
import { NAV_EN } from '../constants/en';
import { useLang } from '../i18n/context';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  return (
    <>
      <div className="hidden md:flex fixed top-8 right-8 z-50 flex-col items-center gap-3">
        <div className="flex gap-2">
          <ThemeToggle />
          <LangToggle />
        </div>
        <nav aria-label={t('Principal', 'Main')}>
        <ul className="flex flex-col glass rounded-[3rem] px-9 py-6 items-center font-mono text-xs tracking-widest uppercase text-muted">
          {NAV_LINKS.map(({ href, label, hoverColor }) => (
            <li key={href}>
              <a href={href} className={`${hoverColor} transition-colors text-center group block py-2`}>
                <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                  -
                </span>
                {t(label, NAV_EN[href])}
              </a>
            </li>
          ))}
        </ul>
        </nav>
      </div>

      <nav
        aria-label={t('Principal', 'Main')}
        className="md:hidden glass fixed inset-x-0 top-0 z-50 rounded-b-3xl"
      >
        <div className="flex items-center justify-between h-14 px-4">
          <a href="#" className="font-mono text-sm font-semibold text-ink">
            {PROFILE.name}
          </a>
          <div className="ml-auto mr-3 flex gap-2">
            <ThemeToggle className="h-9 w-9" />
            <LangToggle className="h-9 w-9" />
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
            className="flex items-center gap-2 -mr-2 p-2 font-mono text-xs tracking-widest uppercase text-muted"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="w-5 h-5" />
            ) : (
              <Menu aria-hidden="true" className="w-5 h-5" />
            )}
            {isMenuOpen ? t('Cerrar', 'Close') : t('Menú', 'Menu')}
          </button>
        </div>
        <ul
          id="menu-movil"
          hidden={!isMenuOpen}
          className="px-4 pb-2 font-mono text-sm tracking-widest uppercase text-muted"
        >
          {NAV_LINKS.map(({ href, label, hoverColor }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`${hoverColor} block py-3 border-t border-line transition-colors`}
              >
                {t(label, NAV_EN[href])}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
