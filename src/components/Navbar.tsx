import { NAV_LINKS } from '../constants';

const Navbar = () => (
  <nav aria-label="Principal" className="fixed top-4 right-3 md:top-8 md:right-8 z-50">
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
);

export default Navbar;
