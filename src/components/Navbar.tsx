import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav aria-label="Principal" className="hidden md:block fixed top-8 right-8 z-50">
        <ul className="flex flex-col rounded-lg bg-slate-950/80 backdrop-blur-sm px-3 py-1 font-mono text-xs tracking-widest uppercase text-slate-400">
          {NAV_LINKS.map(({ href, label, hoverColor }) => (
            <li key={href}>
              <a href={href} className={`${hoverColor} transition-colors text-right group block py-2`}>
                <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                  -
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        aria-label="Principal"
        className="md:hidden fixed inset-x-0 top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/60"
      >
        <div className="flex items-center justify-between h-14 px-4">
          <a href="#" className="font-mono text-sm text-slate-200">
            {PROFILE.name}
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
            className="flex items-center gap-2 -mr-2 p-2 font-mono text-xs tracking-widest uppercase text-slate-300"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="w-5 h-5" />
            ) : (
              <Menu aria-hidden="true" className="w-5 h-5" />
            )}
            {isMenuOpen ? 'Cerrar' : 'Menú'}
          </button>
        </div>
        <ul
          id="menu-movil"
          hidden={!isMenuOpen}
          className="px-4 pb-2 font-mono text-sm tracking-widest uppercase text-slate-300"
        >
          {NAV_LINKS.map(({ href, label, hoverColor }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`${hoverColor} block py-3 border-t border-slate-800/60 transition-colors`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
