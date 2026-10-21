import { Info, ClipboardList } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import TimingsTable from '../components/sections/TimingsTable';
import { MapEmbed } from '../components/sections/ContactDetails';
import { timingNotes, whatToBring } from '../data/timings';
import { doctor } from '../data/site';

export default function Timings() {
  return (
    <>
      <Seo title="Clinic Timings" path="/timings" description={`Weekly clinic timings for ${doctor.title} at ${doctor.clinicName}, ${doctor.area}.`} />
      <PageHero eyebrow="Clinic timings" title="Plan your visit" intro="Walk-ins are welcome, but a booked slot means less waiting." />

      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TimingsTable />
          </div>
          <div className="space-y-6 lg:col-span-5">
            <div className="card p-6">
              <h2 className="flex items-center gap-2 text-xl"><Info className="h-5 w-5 text-primary" aria-hidden="true" />Good to know</h2>
              <ul className="mt-4 space-y-3 text-[15px]">{timingNotes.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
            <div className="card p-6">
              <h2 className="flex items-center gap-2 text-xl"><ClipboardList className="h-5 w-5 text-primary" aria-hidden="true" />What to bring</h2>
              <ul className="mt-4 space-y-3 text-[15px]">
                {whatToBring.map((w) => (
                  <li key={w} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Getting here</p>
            <h2 className="text-3xl">{doctor.clinicName}</h2>
            <p className="mt-4 text-lg">{doctor.address}</p>
            <p className="mt-4 text-[15px]">Parking is available in the plaza basement. The clinic is on the first floor, with lift access.</p>
          </div>
          <MapEmbed className="lg:col-span-8" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
