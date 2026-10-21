import { Terminal } from 'lucide-react';
import { CURRENT_YEAR } from '../constants';

const Hero = () => (
  <header className="min-h-screen flex flex-col justify-center px-4 md:px-12 relative pt-20">
    <div className="absolute top-10 left-4 md:left-12 font-mono text-sm text-slate-400">
      Portfolio // {CURRENT_YEAR}
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-2">
      <h1 className="flex flex-col gap-2">
        <span className="sr-only">Matias Delgado, </span>
        <span className="text-[15vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter text-transparent [-webkit-text-stroke:1px_var(--color-slate-500)] hover:[-webkit-text-stroke:2px_var(--color-slate-400)] transition-all duration-500 cursor-default">
          SOFTWARE
        </span>
        <span className="text-[15vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-teal-400 to-slate-200">
          ENGINEER.
        </span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 border-t border-slate-800 pt-8">
        <p className="font-mono text-slate-400 max-w-md text-sm md:text-base mb-6 md:mb-0">
          Especializado en arquitecturas escalables. Transformando lógicas complejas en interfaces
          minimalistas.
        </p>
        <div className="flex gap-4" aria-hidden="true">
          <Terminal className="w-8 h-8 text-slate-700" />
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
