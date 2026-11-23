import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';
import { useLang } from '../i18n/context';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const EMPTY_FORM = { name: '', email: '', message: '' };

const FIELD_CLASS =
  'glass-inset w-full rounded-2xl px-5 py-4 text-xl md:text-2xl text-ink placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700/40 transition-shadow';

const ContactForm = () => {
  const { t } = useLang();
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
    <form onSubmit={handleSubmit} className="glass rounded-[2rem] p-6 md:p-10 flex flex-col gap-6 justify-center">
      {[
        { type: 'text', name: 'name', placeholder: t('Nombre completo', 'Full name'), autoComplete: 'name' },
        { type: 'email', name: 'email', placeholder: t('Correo electrónico', 'Email address'), autoComplete: 'email' },
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
          {t('Mensaje', 'Message')}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          placeholder={t('Háblame de tu idea...', 'Tell me about your idea...')}
          className={`${FIELD_CLASS} min-h-32 resize-none`}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={formStatus === 'sending'}
          className="btn-dark group flex items-center gap-4 rounded-full px-7 py-4 text-lg font-bold disabled:opacity-50"
        >
          {formStatus === 'sending' ? t('ENVIANDO...', 'SENDING...') : t('ENVIAR MENSAJE', 'SEND MESSAGE')}
          {formStatus !== 'sending' && (
            <Send
              aria-hidden="true"
              className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
            />
          )}
        </button>

        <div role="status" aria-live="polite">
          {formStatus === 'success' && (
            <p className="mt-6 font-mono text-ink text-sm">
              {'>'} {t('Mensaje Enviado con éxito.', 'Message sended successfully.')}
            </p>
          )}
          {formStatus === 'error' && (
            <p className="mt-6 font-mono text-red-600 text-sm">
              {'>'} {t('Error: no se pudo enviar el mensaje. Intenta de nuevo o escríbeme a', 'Error: the message could not be sent. Try again or email me at')}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-red-800">
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
