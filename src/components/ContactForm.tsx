import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const EMPTY_FORM = { name: '', email: '', message: '' };

const FIELD_CLASS =
  'w-full bg-transparent border-b border-slate-700 px-0 py-4 text-2xl md:text-3xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors';

const ContactForm = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch(import.meta.env.VITE_FORM_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setFormStatus('success');
      setFormData(EMPTY_FORM);
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12 justify-center">
      {[
        { type: 'text', name: 'name', placeholder: 'Nombre completo', autoComplete: 'name' },
        { type: 'email', name: 'email', placeholder: 'Correo electrónico', autoComplete: 'email' },
      ].map((field) => (
        <div key={field.name}>
          <label htmlFor={`contact-${field.name}`} className="sr-only">
            {field.placeholder}
          </label>
          <input
            id={`contact-${field.name}`}
            type={field.type}
            name={field.name}
            autoComplete={field.autoComplete}
            required
            value={formData[field.name as 'name' | 'email']}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            className={FIELD_CLASS}
          />
        </div>
      ))}

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Háblame de tu idea..."
          className={`${FIELD_CLASS} resize-none`}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={formStatus === 'sending'}
          className="group flex items-center gap-4 text-2xl font-bold text-slate-300 hover:text-teal-400 transition-colors disabled:opacity-50"
        >
          {formStatus === 'sending' ? 'PROCESANDO...' : 'ENVIAR MENSAJE'}
          {formStatus !== 'sending' && (
            <Send
              aria-hidden="true"
              className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
            />
          )}
        </button>

        <div role="status" aria-live="polite">
          {formStatus === 'success' && (
            <p className="mt-6 font-mono text-teal-400 text-sm">
              {'>'} Sistema: Mensaje recibido con éxito.
            </p>
          )}
          {formStatus === 'error' && (
            <p className="mt-6 font-mono text-red-400 text-sm">
              {'>'} Error: no se pudo enviar el mensaje. Intenta de nuevo o escríbeme a{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-red-300">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
