import { Award, Clock, ShieldCheck, Users, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

// TODO(client): set the real production domain (used for canonical URLs, Open Graph and sitemap.xml)
export const SITE_URL = 'https://drkhalil.vercel.app';

export const doctor = {
  name: 'Dr Khalil',
  title: 'Dr Khalil, MBBS, FCPS',
  credentials: 'MBBS, FCPS (Medicine)',
  specialty: 'Consultant Physician', // TODO(client)
  tagline:
    'Unhurried consultations, clear answers and steady follow-up, for everyday illness and long-term conditions alike.', // TODO(client)
  phone: '0300 3777887',
  phoneHref: 'tel:+923003777887',
  whatsapp: '923003777887', // international format, no + or spaces
  email: 'appointments@drkhalil.pk', // TODO(client)
  clinicName: 'Health Plaza Clinic', // TODO(client)
  area: 'Ittefaq Town, Lahore',
  address: 'F7Q2+XPX, Ittefaq Town, Lahore, Punjab, Pakistan', // Google Plus Code
  mapEmbed: 'https://www.google.com/maps?q=F7Q2%2BXPX%2C%20Ittefaq%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan&z=17&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=F7Q2%2BXPX%2C%20Ittefaq%20Town%2C%20Lahore',
  pmdc: '00000-P', // TODO(client): PMDC registration number
  fee: 'Rs. 2,000', // TODO(client)
};

export const mainNav = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Timings', to: '/timings' },
  { label: 'Reviews', to: '/testimonials' },
  { label: 'Health Tips', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export const moreNav = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Gallery', to: '/gallery' },
];

export const legalNav = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Medical Disclaimer', to: '/disclaimer' },
];

// TODO(client): confirm every number before launch
export const stats = [
  { value: 12000, suffix: '+', label: 'Patients seen' },
  { value: 15, suffix: ' yrs', label: 'In practice' },
  { value: 4.9, suffix: '/5', label: 'Average rating', decimals: 1 },
];

export const features = [
  { icon: Award, title: 'Trained for complex cases', text: 'Fellowship-level training in internal medicine and years of hospital ward experience.' },
  { icon: Clock, title: 'Seen at your booked time', text: 'Appointments are spaced so the waiting room stays short and calm.' },
  { icon: ShieldCheck, title: 'Clean, careful clinic', text: 'Single-use consumables and a strict cleaning routine between patients.' },
  { icon: Users, title: 'Time for your questions', text: 'You leave knowing what is wrong, what to take and when to come back.' },
];

// TODO(client): real profile URLs
export const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
];
