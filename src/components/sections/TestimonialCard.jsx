import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUp } from '../ui/Section';

export default function TestimonialCard({ t }) {
  return (
    <motion.div variants={fadeUp}>
      <figure className="card flex h-full flex-col p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-card sm:p-7">
        <div className="flex gap-0.5" role="img" aria-label={`Rated ${t.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'fill-accent text-accent' : 'text-line'}`} aria-hidden="true" />
          ))}
        </div>
        <blockquote className="mt-4 flex-1">
          <p className="font-heading text-lg leading-snug text-ink">&ldquo;{t.text}&rdquo;</p>
        </blockquote>
        <figcaption className="mt-6 border-t border-line pt-4 text-sm">
          <span className="block font-semibold text-ink">{t.name}</span>
          {t.role}
        </figcaption>
      </figure>
    </motion.div>
  );
}
