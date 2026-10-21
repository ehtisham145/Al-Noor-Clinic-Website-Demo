import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { doctor } from '../../data/site';
import { services, getService } from '../../data/services';
import { getTiming } from '../../data/timings';
import { todayISO } from '../../lib/useToday';
import { waLink } from '../../lib/whatsapp';

const empty = { name: '', phone: '', date: '', slot: '', service: '', message: '', consent: false };

const dayName = (iso) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { weekday: 'long' });

function validate(v) {
  const e = {};
  const name = v.name.trim();
  if (name.length < 3) e.name = 'Please enter your full name (at least 3 letters).';
  else if (!/^[a-zA-Z\s.'-]+$/.test(name)) e.name = 'Name can only contain letters.';

  const phone = v.phone.replace(/[\s-]/g, '');
  if (!phone) e.phone = 'Phone number is required.';
  else if (!/^(\+92|0)3\d{9}$/.test(phone)) e.phone = 'Enter a valid mobile number, e.g. 03001234567.';

  if (!v.date) e.date = 'Please choose a date.';
  else if (v.date < todayISO()) e.date = 'Date cannot be in the past.';
  else {
    const t = getTiming(dayName(v.date));
    if (t && !t.morning && !t.evening) e.date = `The clinic is closed on ${t.day}s. Please pick another day.`;
    else if (t && v.slot && !t[v.slot]) e.slot = `There is no ${v.slot} session on ${t.day}.`;
  }

  if (!v.slot && !e.slot) e.slot = 'Please choose a time slot.';
  if (!v.service) e.service = 'Please select a service.';
  if (v.message.length > 500) e.message = 'Message must be under 500 characters.';
  if (!v.consent) e.consent = 'Please agree so we can contact you on WhatsApp.';
  return e;
}

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {optional ? <span className="ml-1 font-normal text-muted">(optional)</span> : <span className="ml-0.5 text-accent" aria-hidden="true">*</span>}
      </label>
      {children}
      <ErrorText id={id} error={error} />
    </div>
  );
}

function ErrorText({ id, error }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.p
          id={`${id}-error`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1.5 flex items-center gap-1.5 text-sm text-accent-dark"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function AppointmentForm() {
  const [params] = useSearchParams();
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const [minDate, setMinDate] = useState(undefined);

  // Pre-select a service from ?service=<slug> (e.g. coming from a service page)
  useEffect(() => {
    const slug = params.get('service');
    if (slug && getService(slug)) setValues((v) => ({ ...v, service: slug }));
  }, [params]);

  useEffect(() => setMinDate(todayISO()), []);

  const update = (name, value) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  };

  const onChange = (e) => update(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value);

  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const show = (name) => (touched[name] ? errors[name] : undefined);
  const aria = (name) => ({
    'aria-invalid': Boolean(show(name)),
    'aria-describedby': show(name) ? `${name}-error` : undefined,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched(Object.keys(empty).reduce((a, k) => ({ ...a, [k]: true }), {}));
    const first = Object.keys(empty).find((k) => errs[k]);
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }

    const date = new Date(`${values.date}T00:00:00`).toLocaleDateString('en-GB', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
    const text = [
      `Assalam-o-Alaikum ${doctor.name},`,
      'I would like to book an appointment.',
      '',
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Date: ${date}`,
      `Slot: ${values.slot === 'morning' ? 'Morning' : 'Evening'}`,
      `Service: ${getService(values.service).title}`,
      values.message.trim() ? `Note: ${values.message.trim()}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n');

    window.open(waLink(text), '_blank', 'noopener');
    setSent(true);
    setValues(empty);
    setTouched({});
    setErrors({});
  };

  return (
    <form noValidate onSubmit={onSubmit} aria-label="Appointment booking form" className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
      <Field id="name" label="Full name" error={show('name')}>
        <input id="name" name="name" type="text" autoComplete="name" className="input" placeholder="e.g. Ali Ahmed"
          value={values.name} onChange={onChange} onBlur={onBlur} {...aria('name')} />
      </Field>

      <Field id="phone" label="Mobile number" error={show('phone')}>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="input" placeholder="03001234567"
          value={values.phone} onChange={onChange} onBlur={onBlur} {...aria('phone')} />
      </Field>

      <Field id="date" label="Preferred date" error={show('date')}>
        <input id="date" name="date" type="date" min={minDate} className="input"
          value={values.date} onChange={onChange} onBlur={onBlur} {...aria('date')} />
      </Field>

      <Field id="slot" label="Time slot" error={show('slot')}>
        <select id="slot" name="slot" className="input" value={values.slot} onChange={onChange} onBlur={onBlur} {...aria('slot')}>
          <option value="">Select a slot</option>
          <option value="morning">Morning</option>
          <option value="evening">Evening</option>
        </select>
      </Field>

      <div className="sm:col-span-2">
        <Field id="service" label="Service" error={show('service')}>
          <select id="service" name="service" className="input" value={values.service} onChange={onChange} onBlur={onBlur} {...aria('service')}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Field id="message" label="Message" optional error={show('message')}>
          <textarea id="message" name="message" rows="4" maxLength={500} className="input resize-none"
            placeholder="Briefly describe your symptoms or reason for visit"
            value={values.message} onChange={onChange} onBlur={onBlur} {...aria('message')} />
        </Field>
        <p className="mt-1 text-right text-xs">{values.message.length}/500</p>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="consent" className="flex items-start gap-3 text-sm">
          <input id="consent" name="consent" type="checkbox" checked={values.consent} onChange={onChange} onBlur={onBlur}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-line accent-primary" {...aria('consent')} />
          <span>
            I agree to be contacted on WhatsApp about this appointment, and I have read the{' '}
            <Link to="/privacy-policy" className="font-medium text-primary underline underline-offset-4">privacy policy</Link>.
          </span>
        </label>
        <ErrorText id="consent" error={show('consent')} />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn-accent w-full">
          <WhatsAppIcon className="h-5 w-5" />
          Send booking on WhatsApp
        </button>
        <AnimatePresence>
          {sent && (
            <motion.p
              role="status"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-primary"
            >
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              WhatsApp opened. Press send there to confirm your request.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
