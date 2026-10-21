import { doctor } from './site';
import { services } from './services';
import { timings } from './timings';
import { faqGroups } from './faq';

// Rule-based assistant: runs fully in the browser, no API, no key.
// A reply is { text, links?: [{ label, to }], actions?: [{ label, href, kind: 'whatsapp' | 'tel' | 'map' }] }

export const greeting = {
  text: `Assalam-o-Alaikum! I am the clinic assistant for ${doctor.name}. I can help with timings, fees, services, location and booking. You can type in English or Roman Urdu.`,
};

export const quickReplies = ['Timings today', 'Book appointment', 'Fees', 'Services', 'Location', 'Talk to a person'];

const wa = { label: 'Chat on WhatsApp', href: `https://wa.me/${doctor.whatsapp}`, kind: 'whatsapp' };
const call = { label: `Call ${doctor.phone}`, href: doctor.phoneHref, kind: 'tel' };

const fmtDay = (t) =>
  !t.morning && !t.evening
    ? `${t.day}: closed`
    : `${t.day}: ${[t.morning, t.evening].filter(Boolean).join(', ')}`;

const todayName = () => new Date().toLocaleDateString('en-US', { weekday: 'long' });

const intents = [
  {
    id: 'emergency',
    priority: 100,
    keywords: ['emergency', 'chest pain', 'heart attack', 'stroke', 'unconscious', 'behosh', 'bleeding', 'khoon', 'cant breathe', "can't breathe", 'saans', 'fits', 'seizure', 'poison', 'accident', 'suicide'],
    reply: () => ({
      text: 'This sounds urgent. Please call 1122 now or go to the nearest hospital emergency department. Do not wait for an online reply.',
      actions: [{ label: 'Call 1122', href: 'tel:1122', kind: 'tel' }],
    }),
  },
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'salam', 'assalam', 'aoa', 'slam', 'good morning', 'good evening'],
    reply: () => ({ text: 'Wa Alaikum Assalam! How can I help you today? You can ask about timings, fees, services or booking.' }),
  },
  {
    id: 'timings',
    keywords: ['timing', 'timings', 'time', 'hours', 'open', 'close', 'closed', 'today', 'aaj', 'kab', 'waqt', 'schedule', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'jumma', 'itwar'],
    reply: (input) => {
      const asked = timings.find((t) => input.includes(t.day.toLowerCase()));
      const today = timings.find((t) => t.day === todayName());
      const lead = asked ? fmtDay(asked) : today ? `Today (${fmtDay(today)})` : '';
      return {
        text: `${lead}\n\nFull week:\n${timings.map(fmtDay).join('\n')}`,
        links: [{ label: 'See timings page', to: '/timings' }],
      };
    },
  },
  {
    id: 'book',
    keywords: ['book', 'booking', 'appointment', 'slot', 'visit', 'milna', 'mulaqat', 'reserve', 'token', 'checkup karwana'],
    reply: () => ({
      text: 'You can book in under a minute. Fill the booking form and it opens WhatsApp with your details ready, or message us directly.',
      links: [{ label: 'Open booking form', to: '/appointment' }],
      actions: [wa],
    }),
  },
  {
    id: 'fees',
    keywords: ['fee', 'fees', 'charges', 'cost', 'price', 'kitna', 'kitne', 'paise', 'rupees', 'payment', 'insurance', 'panel'],
    reply: () => ({
      text: `${faqGroups[1].items.map((i) => i.a).join(' ')}`,
      links: [{ label: 'Read all FAQs', to: '/faq' }],
    }),
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'address', 'map', 'direction', 'directions', 'kahan', 'kidhar', 'clinic kahan', 'reach', 'parking'],
    reply: () => ({
      text: `${doctor.clinicName}\n${doctor.address}`,
      links: [{ label: 'Contact page', to: '/contact' }],
      actions: [{ label: 'Open in Google Maps', href: doctor.mapLink, kind: 'map' }],
    }),
  },
  {
    id: 'reports',
    keywords: ['report', 'reports', 'lab', 'test', 'tests', 'result', 'blood test', 'sample'],
    reply: () => ({ text: faqGroups[2].items.map((i) => i.a).join(' ') }),
  },
  {
    id: 'online',
    keywords: ['online', 'video', 'tele', 'telemedicine', 'zoom', 'video call'],
    reply: () => ({ text: faqGroups[2].items[2].a, actions: [wa] }),
  },
  {
    id: 'doctor',
    keywords: ['qualification', 'degree', 'experience', 'fcps', 'mbbs', 'who is', 'about doctor', 'doctor kon'],
    reply: () => ({
      text: `${doctor.title} is a ${doctor.specialty.toLowerCase()} with 15 years of experience in Lahore hospitals and clinics.`,
      links: [{ label: 'Read full profile', to: '/about' }],
    }),
  },
  {
    id: 'services',
    keywords: ['service', 'services', 'treat', 'treatment', 'ilaj', 'specialist', 'what do you'],
    reply: () => ({
      text: `${doctor.name} offers:\n${services.map((s) => `- ${s.title}`).join('\n')}`,
      links: [{ label: 'All services', to: '/services' }],
    }),
  },
  {
    id: 'human',
    keywords: ['human', 'person', 'staff', 'talk', 'whatsapp', 'call', 'phone', 'number', 'contact', 'baat', 'receptionist'],
    reply: () => ({ text: `You can reach the clinic team on WhatsApp or by phone at ${doctor.phone}.`, actions: [wa, call] }),
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'thank', 'shukria', 'shukriya', 'jazakallah', 'jazak'],
    reply: () => ({ text: 'You are welcome. Take care, and feel free to ask anything else.' }),
  },
];

// Service-specific keywords, so "sugar" or "bp" links straight to the right page
const serviceKeywords = {
  'diabetes-care': ['diabetes', 'sugar', 'insulin', 'hba1c', 'glucose'],
  'heart-and-blood-pressure': ['blood pressure', 'bp', 'hypertension', 'heart', 'cholesterol', 'palpitation'],
  vaccinations: ['vaccine', 'vaccination', 'injection', 'teeka', 'flu shot', 'hepatitis', 'typhoid', 'umrah', 'hajj'],
  'health-screening': ['screening', 'full checkup', 'full body', 'medical test', 'pre-employment', 'executive'],
  'family-medicine': ['family', 'elderly', 'parents', 'thyroid', 'anaemia', 'anemia'],
  'general-consultation': ['fever', 'bukhar', 'cough', 'khansi', 'flu', 'zukam', 'stomach', 'pait', 'headache', 'sar dard', 'allergy', 'rash'],
};

const normalize = (s) =>
  ` ${s.toLowerCase().replace(/[^a-z0-9'\s-]/g, ' ').replace(/\s+/g, ' ').trim()} `;

const hits = (text, keywords) =>
  keywords.reduce((n, k) => (text.includes(` ${k} `) || (k.includes(' ') && text.includes(k)) ? n + 1 : n), 0);

export function getReply(raw) {
  const text = normalize(raw);

  const ranked = intents
    .map((i) => ({ i, score: hits(text, i.keywords) * (i.priority ?? 1) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked[0]?.i.id === 'emergency') return ranked[0].i.reply(text);

  const serviceSlug = Object.keys(serviceKeywords).find((slug) => hits(text, serviceKeywords[slug]) > 0);
  if (serviceSlug && (!ranked.length || ['services', 'book'].includes(ranked[0].i.id))) {
    const s = services.find((x) => x.slug === serviceSlug);
    return {
      text: `${s.title}: ${s.short}\n\nThis is general information, not a diagnosis. For your symptoms, please book a consultation.`,
      links: [
        { label: `About ${s.title}`, to: `/services/${s.slug}` },
        { label: 'Book this service', to: `/appointment?service=${s.slug}` },
      ],
    };
  }

  if (ranked.length) return ranked[0].i.reply(text);

  return {
    text: 'Sorry, I did not quite get that. I can answer questions about timings, fees, services, location and booking. For anything else, the clinic team can help on WhatsApp.',
    actions: [wa],
  };
}
