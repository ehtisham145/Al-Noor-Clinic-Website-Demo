import { doctor } from './site';

// TODO(client): have these reviewed before launch. Placeholder text, not legal advice.
export const privacy = {
  updated: '2026-10-21',
  sections: [
    { h: 'What we collect', p: 'When you use the booking or contact form, you enter your name, phone number, preferred date and an optional message. This website does not store that information. It is placed into a WhatsApp message that you choose to send.' },
    { h: 'How it is used', p: 'Details you send on WhatsApp are used only to arrange and confirm your appointment and to contact you about your care.' },
    { h: 'WhatsApp', p: 'Messages are delivered through WhatsApp, which has its own privacy policy. Please avoid sending sensitive medical details before your consultation.' },
    { h: 'Chat assistant', p: 'The chat assistant on this site runs entirely in your browser. Your questions are not sent to any server or third-party AI service.' },
    { h: 'Cookies', p: 'This site does not use advertising or tracking cookies.' },
    { h: 'Contact', p: `For any privacy question, email ${doctor.email}.` },
  ],
};

export const disclaimer = {
  updated: '2026-10-21',
  sections: [
    { h: 'General information only', p: 'Content on this website, including health tips and chat assistant replies, is for general information. It is not a diagnosis and does not replace an in-person consultation.' },
    { h: 'Emergencies', p: 'If you think you have a medical emergency, call 1122 or go to the nearest emergency department immediately.' },
    { h: 'No doctor-patient relationship', p: 'Reading this website or messaging us does not by itself create a doctor-patient relationship. That begins at your consultation.' },
    { h: 'Reviews', p: 'Patient reviews reflect individual experiences. Results vary from person to person.' },
  ],
};
