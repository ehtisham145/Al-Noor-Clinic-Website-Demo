import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, Phone, BadgeCheck } from 'lucide-react';
import { doctor, stats } from '../../data/site';
import { getTiming } from '../../data/timings';
import { useToday } from '../../lib/useToday';
import { usePageFocus } from '../../lib/usePageFocus';
import CountUp from '../ui/CountUp';
import doctorImg from '../../assets/doctor-clinic.jpg';

const fromTop = {
  hidden: { opacity: 0, y: -28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

function TodayNote() {
  const today = useToday();
  const t = today && getTiming(today);
  if (!t) return <p className="h-6" aria-hidden="true" />;
  const hours = [t.morning, t.evening].filter(Boolean).join('  ·  ');
  return (
    <p className="flex items-center gap-2 text-[15px]">
      <span className={`h-2 w-2 rounded-full ${hours ? 'bg-primary' : 'bg-accent'}`} aria-hidden="true" />
      {hours ? <>Open today <span className="text-ink">{hours}</span></> : 'Closed today. Book for another day.'}
    </p>
  );
}

export default function Hero() {
  const headingRef = usePageFocus();
  const anim = (i) => ({ variants: fromTop, initial: 'hidden', animate: 'visible', custom: i });

  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid gap-10 pb-14 pt-8 sm:pt-12 lg:grid-cols-12 lg:items-center lg:gap-14 lg:pb-20">
        {/* Text: below the photo on mobile, left on desktop */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <motion.p {...anim(0)} className="eyebrow">{doctor.specialty} · Lahore</motion.p>

          <motion.h1 {...anim(1)} ref={headingRef} tabIndex={-1} className="mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            {doctor.name},
            <span className="mt-2 block text-3xl font-medium text-primary sm:text-4xl lg:text-[2.75rem]">{doctor.credentials.replace(' (Medicine)', '')}</span>
          </motion.h1>

          <motion.p {...anim(2)} className="mt-6 max-w-xl text-lg sm:text-xl">{doctor.tagline}</motion.p>

          <motion.div {...anim(3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/appointment" className="btn-accent">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book appointment
            </Link>
            <a href={doctor.phoneHref} className="btn-outline">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call now
            </a>
          </motion.div>

          <motion.div {...anim(4)} className="mt-6">
            <TodayNote />
          </motion.div>
        </div>

        {/* Photo: arch frame with an offset outline */}
        <div className="relative order-1 mx-auto w-full max-w-[22rem] sm:max-w-sm lg:order-2 lg:col-span-5 lg:max-w-none">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full border-2 border-accent sm:translate-x-5 sm:translate-y-5" aria-hidden="true" />
          <motion.img
            src={doctorImg}
            alt={`${doctor.title} at the clinic desk`}
            width="720"
            height="736"
            fetchpriority="high"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative aspect-[4/5] w-full rounded-t-full bg-primary object-cover object-[58%_center]"
          />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ opacity: { delay: 0.7, duration: 0.5 }, y: { delay: 1.2, duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute -left-2 bottom-8 flex items-center gap-3 rounded-md border border-line bg-white px-4 py-3 shadow-card sm:-left-8"
          >
            <BadgeCheck className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-ink">PMDC registered</span>
              <span className="block text-xs">Reg. {doctor.pmdc}</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-y border-line bg-white">
        <dl className="container-x grid grid-cols-3 divide-x divide-line">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse px-2 py-6 text-center sm:py-8">
              <dt className="mt-1 text-xs sm:text-sm">{s.label}</dt>
              <dd className="font-heading text-2xl font-semibold text-ink sm:text-4xl">
                <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
