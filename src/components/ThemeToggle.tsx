import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLang } from '../i18n/context';

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const { t } = useLang();
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* storage unavailable: theme just won't persist */
    }
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t('Cambiar a modo claro', 'Switch to light mode') : t('Cambiar a modo oscuro', 'Switch to dark mode')}
      className={`bubble flex h-10 w-10 items-center justify-center rounded-full text-ink ${className}`}
    >
      {isDark ? (
        <Sun aria-hidden="true" className="h-4 w-4" />
      ) : (
        <Moon aria-hidden="true" className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
