import { motion } from 'framer-motion';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section, { stagger } from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import TestimonialCard from '../components/sections/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { doctor } from '../data/site';
import { waLink } from '../lib/whatsapp';

export default function Testimonials() {
  return (
    <>
      <Seo title="Patient Reviews" path="/testimonials" description={`What patients say about their care with ${doctor.title}.`} />
      <PageHero eyebrow="Patient reviews" title="In their own words" intro="Shared with permission. Individual experiences vary." />
      <Section>
        <div className="container-x">
          <motion.div variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => <TestimonialCard key={t.name} t={t} />)}
          </motion.div>
          <p className="mt-12 text-center">
            Been to the clinic?{' '}
            <a href={waLink('I would like to share feedback about my visit.')} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-4">
              Share your experience
            </a>
          </p>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
