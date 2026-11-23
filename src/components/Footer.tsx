import { CURRENT_YEAR } from '../constants';
import { useLang } from '../i18n/context';

const Footer = () => {
  const { t } = useLang();
  return (
  <footer className="glass mx-4 md:mx-12 mb-6 rounded-3xl py-6 px-6 md:px-10 font-mono text-xs text-muted flex justify-between items-center">
    <p>© {CURRENT_YEAR} Matias Delgado</p>
    <p>{t('Gracias por tu visita.', 'Thanks for visiting.')}</p>
  </footer>
  );
};

export default Footer;
