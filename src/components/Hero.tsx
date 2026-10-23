import { ArrowDown, MapPin } from 'lucide-react';
import { CURRENT_YEAR, METRICS, PROFILE } from '../constants';

const Hero = () => (
  <header className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 pt-24 pb-16 overflow-hidden">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="hero-grid absolute inset-0" />
      <div className="animate-drift absolute -top-48 right-[-15%] h-[38rem] w-[38rem] rounded-full bg-teal-500/15 blur-3xl" />
      <div className="animate-drift-slow absolute bottom-[-25%] left-[-15%] h-[32rem] w-[32rem] rounded-full bg-blue-600/15 blur-3xl" />
    </div>

    <div className="hidden md:block absolute top-10 left-12 font-mono text-sm text-slate-400">
      Portfolio // {CURRENT_YEAR}
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-2">
      <p className="font-mono text-sm md:text-lg text-slate-400 mb-6">
        <span aria-hidden="true" className="text-teal-400">
          {'> '}
        </span>
        Hola, soy <span className="text-slate-100 font-semibold">{PROFILE.name}</span>
      </p>

      <h1 className="flex flex-col gap-2">
        <span className="sr-only">{PROFILE.name}, </span>
        <span className="text-[14vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter text-transparent [-webkit-text-stroke:1px_var(--color-slate-500)] hover:[-webkit-text-stroke:2px_var(--color-slate-400)] transition-all duration-500 cursor-default">
          FRONTEND
        </span>
        <span className="text-[14vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-teal-400 to-slate-200">
          DEVELOPER.
        </span>
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12 border-t border-slate-800 pt-8">
        <div className="max-w-md space-y-4">
          <p className="font-mono text-slate-400 text-sm md:text-base">
            Dos años construyendo interfaces web y móviles escalables con {PROFILE.tagline}
          </p>
          <p className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <MapPin aria-hidden="true" className="w-4 h-4 text-teal-400" />
            {PROFILE.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded hover:bg-teal-300 transition-colors"
          >
            Ver proyectos
            <ArrowDown
              aria-hidden="true"
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-slate-700 text-slate-200 font-bold px-6 py-3 rounded hover:border-teal-400 hover:text-teal-400 transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800">
        {METRICS.map(({ value, label }) => (
          <div key={label} className="flex flex-col-reverse gap-1 bg-slate-950/90 px-5 py-4">
            <dt className="font-mono text-xs text-slate-400">{label}</dt>
            <dd className="text-xl md:text-3xl font-bold text-slate-100">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </header>
);

export default Hero;
