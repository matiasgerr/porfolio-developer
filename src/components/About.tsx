import { SKILLS } from '../constants';

const About = () => (
  <section id="sobre-mi" className="py-32 px-4 md:px-12 border-t border-slate-800 bg-slate-900/20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4">
      <div className="md:col-span-4">
        <p className="text-sm font-mono tracking-widest text-blue-400 uppercase mb-4">
          ( 01. Contexto )
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Sobre el desarrollador.</h2>
      </div>

      <div className="md:col-span-8 md:col-start-6 space-y-8 text-lg md:text-xl text-slate-400 font-light leading-relaxed">
        <p>
          Me llamo <strong className="text-blue-400 uppercase">Matias Delgado</strong>. Busco brindar
          soluciones a empresas, profesionales y emprendedores mediante la programación, con un
          código escalable y funcional. En el <strong className="text-blue-400 font-normal">front</strong>{' '}
          busco la fluidez de las interfaces modernas{' '}
          <strong className="text-slate-200 font-normal">(React & React Native)</strong>.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 pt-12 border-t border-slate-800 font-mono text-sm">
          {SKILLS.map(({ label, items }) => (
            <div key={label}>
              <h3 className="block text-slate-400 mb-2">{label}</h3>
              <ul className="text-slate-200 space-y-1">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
