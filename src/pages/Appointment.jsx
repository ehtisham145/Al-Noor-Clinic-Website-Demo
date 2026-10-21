import { Phone, Clock } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import AppointmentForm from '../components/sections/AppointmentForm';
import { doctor } from '../data/site';
import { timings, whatToBring } from '../data/timings';

const fmt = (t) => (!t.morning && !t.evening ? 'Closed' : [t.morning, t.evening].filter(Boolean).join(', '));

export default function Appointment() {
  return (
    <>
      <Seo title="Book Appointment" path="/appointment" description={`Book an appointment with ${doctor.title}. Your booking is sent on WhatsApp and confirmed by the clinic team.`} />
      <PageHero
        eyebrow="Book appointment"
        title="Reserve your visit"
        intro="Fill in the form and WhatsApp opens with your details ready to send. The clinic team confirms every booking personally."
      />
      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <AppointmentForm />
          </div>
          <aside className="space-y-6 lg:col-span-4">
            <div className="card p-6">
              <h2 className="flex items-center gap-2 text-xl"><Clock className="h-5 w-5 text-primary" aria-hidden="true" />Clinic hours</h2>
              <dl className="mt-4 space-y-2 text-[15px]">
                {timings.map((t) => (
                  <div key={t.day} className="flex justify-between gap-4">
                    <dt className="font-medium text-ink">{t.day.slice(0, 3)}</dt>
                    <dd className="text-right">{fmt(t)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="card p-6">
              <h2 className="text-xl">Bring with you</h2>
              <ul className="mt-4 space-y-2 text-[15px]">{whatToBring.map((w) => <li key={w}>{w}</li>)}</ul>
            </div>
            <a href={doctor.phoneHref} className="group flex items-center gap-4 rounded-lg bg-primary p-6 text-white transition-colors duration-300 hover:bg-primary-dark">
              <Phone className="h-7 w-7 shrink-0" aria-hidden="true" />
              <span>
                <span className="block text-sm text-white/75">Prefer to call?</span>
                <span className="font-heading text-xl font-semibold">{doctor.phone}</span>
              </span>
            </a>
          </aside>
        </div>
      </Section>
    </>
  );
}
