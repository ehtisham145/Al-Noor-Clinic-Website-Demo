import { motion } from 'framer-motion';
import { GraduationCap, Users, Mic } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section, { SectionHeading, fadeUp, stagger } from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import { doctor } from '../data/site';
import { bio, philosophy, qualifications, timeline, memberships, highlights } from '../data/about';
import gradImg from '../assets/doctor-graduation.jpg';
import clinicImg from '../assets/doctor-clinic.jpg';

export default function About() {
  return (
    <>
      <Seo title="About" path="/about" description={`Biography, qualifications and experience of ${doctor.title}, ${doctor.specialty.toLowerCase()} in Lahore.`} />
      <PageHero eyebrow="About the doctor" title={`Meet ${doctor.name}`} intro={`${doctor.credentials}. ${doctor.specialty} at ${doctor.clinicName}.`} />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-28">
              <img src={gradImg} alt={`${doctor.name} in graduation cap and gown`} width="640" height="640" className="col-span-2 aspect-[4/3] w-full rounded-lg object-cover object-top" />
              <img src={clinicImg} alt={`${doctor.name} at the consultation desk`} width="720" height="736" loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
              <div className="flex flex-col justify-end rounded-lg bg-primary p-5 text-white">
                <p className="font-heading text-4xl font-semibold">15</p>
                <p className="text-sm text-white/80">years in practice</p>
              </div>
            </div>
          </div>
          <div className="space-y-5 text-lg lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl">Biography</h2>
            {bio.map((p) => <p key={p}>{p}</p>)}
            <blockquote className="!mt-10 border-l-2 border-accent pl-6">
              <p className="font-heading text-2xl italic leading-snug text-ink">&ldquo;{philosophy}&rdquo;</p>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Education" title="Qualifications" />
            <motion.ul variants={stagger} className="divide-y divide-line border-y border-line">
              {qualifications.map((q) => (
                <motion.li key={q.title} variants={fadeUp} className="flex gap-4 py-5">
                  <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="font-semibold text-ink">{q.title}</p>
                    <p className="text-[15px]">{q.place}</p>
                  </div>
                  <span className="font-heading text-ink">{q.year}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div>
            <SectionHeading eyebrow="Career" title="Experience" />
            <ol className="relative ml-2 border-l border-primary/30">
              {timeline.map((t) => (
                <li key={t.year} className="relative pb-8 pl-8 last:pb-0">
                  <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-surface bg-primary" aria-hidden="true" />
                  <span className="font-heading text-lg font-semibold text-accent">{t.year}</span>
                  <p className="font-semibold text-ink">{t.title}</p>
                  <p className="text-[15px]">{t.place}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="card p-7">
            <Users className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-2xl">Memberships</h2>
            <ul className="mt-4 space-y-2">{memberships.map((m) => <li key={m}>{m}</li>)}</ul>
          </div>
          <div className="card p-7">
            <Mic className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-2xl">Talks, research & community</h2>
            <ul className="mt-4 space-y-2">{highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
