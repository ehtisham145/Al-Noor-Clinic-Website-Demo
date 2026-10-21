import { doctor } from './site';

// TODO(client): confirm answers, especially fees and policies
export const faqGroups = [
  {
    title: 'Booking',
    items: [
      { q: 'How do I book an appointment?', a: 'Use the booking form on this site, which sends your details to us on WhatsApp, or message us directly on WhatsApp at ' + doctor.phone + '.' },
      { q: 'Do you accept walk-ins?', a: 'Yes, but booked patients are seen first. Booking ahead saves you waiting.' },
      { q: 'How do I cancel or reschedule?', a: 'Send us a WhatsApp message at least two hours before your slot.' },
    ],
  },
  {
    title: 'Fees & payment',
    items: [
      { q: 'What is the consultation fee?', a: `The consultation fee is ${doctor.fee}. Follow-up visits within 10 days are charged at half fee.` },
      { q: 'Which payment methods do you accept?', a: 'Cash, debit card, and bank transfer.' },
      { q: 'Do you accept insurance or panels?', a: 'Selected corporate panels are accepted. Please ask on WhatsApp before your visit.' },
    ],
  },
  {
    title: 'Reports & follow-up',
    items: [
      { q: 'Can I show my reports on WhatsApp?', a: 'You can send reports so they are ready at your visit, but they are only interpreted during a consultation.' },
      { q: 'Where do I get lab tests done?', a: 'Samples can be given at our partner lab in the same building. Reports come straight to the clinic too.' },
      { q: 'Do you offer online consultations?', a: 'Video follow-ups are available for existing patients. New patients are seen in person.' },
    ],
  },
  {
    title: 'Emergencies',
    items: [
      { q: 'What should I do in an emergency?', a: 'Call 1122 or go to the nearest hospital emergency department. Do not wait for a reply on WhatsApp or this website.' },
    ],
  },
];
