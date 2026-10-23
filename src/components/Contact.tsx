import { SOCIALS } from '../constants';
import ContactForm from './ContactForm';
import Reveal from './Reveal';

const Contact = () => (
  <section id="contacto" className="py-32 px-4 md:px-12 bg-slate-950">
    <Reveal className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
      <div>
        <h2 className="text-[12vw] md:text-[8vw] font-black leading-none text-slate-100 tracking-tighter mb-8">
          HABLE
          <br />
          MOS.
        </h2>
        <ul className="flex flex-wrap gap-6 text-slate-400 font-mono text-sm">
          {SOCIALS.map(({ label, href, icon: SocialIcon }) => {
            const isExternal = href.startsWith('http');
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="hover:text-blue-400 flex items-center gap-2 py-2 transition-colors"
                >
                  <SocialIcon className="w-4 h-4" aria-hidden="true" /> {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <ContactForm />
    </Reveal>
  </section>
);

export default Contact;
