import { Stethoscope, HeartPulse, Activity, Syringe, Baby, ClipboardCheck } from 'lucide-react';

// TODO(client): all service copy below is placeholder
export const services = [
  {
    slug: 'general-consultation',
    icon: Stethoscope,
    title: 'General Consultation',
    short: 'Check-ups, diagnosis and treatment for everyday health concerns.',
    overview: [
      'Fever that will not settle, a cough that has dragged on, stomach trouble, fatigue you cannot explain: a general consultation is the place to start.',
      'Every visit begins with a proper history and examination. If tests are needed, you will know why, and you will get a written plan before you leave.',
    ],
    conditions: ['Fever and infections', 'Cough, cold and flu', 'Stomach and digestive problems', 'Headache and body aches', 'Unexplained weight loss or fatigue', 'Skin rashes and allergies'],
    expect: [
      { title: 'History', text: 'We talk through your symptoms, past illnesses and current medicines.' },
      { title: 'Examination', text: 'A focused physical examination based on your complaint.' },
      { title: 'Plan', text: 'Diagnosis, prescription and any tests, explained in plain language.' },
      { title: 'Follow-up', text: 'A clear date to come back, or reasons to come back sooner.' },
    ],
    preparation: ['Bring all medicines you currently take', 'Bring previous reports and prescriptions', 'Note when your symptoms started'],
    faqs: [
      { q: 'How long does a consultation take?', a: 'Usually 15 to 20 minutes. First visits may take longer.' },
      { q: 'Do I need a referral?', a: 'No. You can book directly.' },
    ],
  },
  {
    slug: 'heart-and-blood-pressure',
    icon: HeartPulse,
    title: 'Heart & Blood Pressure',
    short: 'Hypertension control, cardiac risk checks and lifestyle advice.',
    overview: [
      'High blood pressure often has no symptoms until it causes damage. Regular review keeps it in range and protects your heart, kidneys and brain.',
      'We assess your overall cardiac risk, adjust medicines carefully and refer to a cardiologist when it is needed.',
    ],
    conditions: ['High blood pressure', 'High cholesterol', 'Palpitations', 'Chest discomfort (non-emergency)', 'Swelling of the feet', 'Cardiac risk assessment'],
    expect: [
      { title: 'Readings', text: 'Blood pressure measured properly, seated and rested.' },
      { title: 'Risk review', text: 'Family history, lifestyle, cholesterol and sugar considered together.' },
      { title: 'Tests', text: 'ECG and blood tests where needed.' },
      { title: 'Plan', text: 'Medicine and lifestyle targets you can actually follow.' },
    ],
    preparation: ['Bring your home BP log if you keep one', 'Avoid caffeine 30 minutes before the visit', 'Bring your current medicines'],
    faqs: [
      { q: 'Should I check BP at home?', a: 'Yes, a validated upper-arm machine is recommended. We will show you how to use it.' },
      { q: 'Is chest pain an emergency?', a: 'Sudden or severe chest pain is an emergency. Call 1122 or go to the nearest emergency department.' },
    ],
  },
  {
    slug: 'diabetes-care',
    icon: Activity,
    title: 'Diabetes Care',
    short: 'Sugar control, diet planning and complication screening.',
    overview: [
      'Diabetes is managed over years, not in one visit. We set realistic targets with you and review them regularly.',
      'Care includes medicines and insulin adjustment, diet advice suited to Pakistani home cooking, and yearly screening for eye, kidney and foot complications.',
    ],
    conditions: ['Type 2 diabetes', 'Pre-diabetes', 'Insulin initiation and adjustment', 'Diabetes in pregnancy (with gynaecologist)', 'Diabetic foot checks', 'Kidney and eye screening referrals'],
    expect: [
      { title: 'Review', text: 'Your sugar log, HbA1c and current medicines.' },
      { title: 'Targets', text: 'Personal targets for sugar, weight and blood pressure.' },
      { title: 'Education', text: 'Diet, exercise, and recognising low sugar.' },
      { title: 'Screening', text: 'Feet, kidneys and eyes checked on schedule.' },
    ],
    preparation: ['Bring your glucometer or sugar log', 'Bring your last HbA1c report', 'Come fasting if a fasting test is planned'],
    faqs: [
      { q: 'How often should I visit?', a: 'Every 3 months when stable, more often when medicines are being changed.' },
      { q: 'Can diabetes be reversed?', a: 'Early type 2 diabetes can go into remission with weight loss for some people. We will discuss whether that is realistic for you.' },
    ],
  },
  {
    slug: 'vaccinations',
    icon: Syringe,
    title: 'Vaccinations',
    short: 'Adult immunisations including flu, hepatitis and travel vaccines.',
    overview: [
      'Vaccines are not only for children. Adults need boosters, seasonal flu protection and, before some journeys, travel vaccines.',
      'We review your vaccination history and recommend what you need, nothing more.',
    ],
    conditions: ['Seasonal influenza', 'Hepatitis B', 'Typhoid', 'Tetanus booster', 'Pneumococcal (older adults)', 'Travel and Umrah/Hajj vaccines'],
    expect: [
      { title: 'History', text: 'Previous vaccines, allergies and travel plans.' },
      { title: 'Advice', text: 'Which vaccines you need and when.' },
      { title: 'Vaccination', text: 'Given in clinic with a short observation period.' },
      { title: 'Record', text: 'A written record for your files.' },
    ],
    preparation: ['Bring your vaccination card if you have one', 'Tell us about any past reactions', 'Book 4 to 6 weeks before travel'],
    faqs: [
      { q: 'Can I get a vaccine if I have a cold?', a: 'A mild cold is usually fine. With a high fever we will postpone.' },
      { q: 'Do you provide certificates?', a: 'Yes, a signed record is provided for every vaccine given.' },
    ],
  },
  {
    slug: 'family-medicine',
    icon: Baby,
    title: 'Family Medicine',
    short: 'Continuous care for every age, from teenagers to grandparents.',
    overview: [
      'When one doctor knows the whole family, patterns are noticed early and care stays consistent.',
      'We look after common illnesses across ages and coordinate with specialists when someone needs more.',
    ],
    conditions: ['Teenage health concerns', "Women's general health", 'Elderly care and medicine review', 'Thyroid problems', 'Anaemia', 'Recurring infections'],
    expect: [
      { title: 'One record', text: 'Family history kept together for better decisions.' },
      { title: 'Age-right checks', text: 'Screening suited to each family member.' },
      { title: 'Medicine review', text: 'Especially for elderly patients on many medicines.' },
      { title: 'Referral', text: 'Straightforward referral to trusted specialists.' },
    ],
    preparation: ['Bring medicines for each family member being seen', 'Book one slot per person'],
    faqs: [
      { q: 'Do you see children?', a: 'Older children and teenagers, yes. For infants we recommend a paediatrician.' },
      { q: 'Can I book for my parents?', a: 'Yes. Please come with them for the first visit if possible.' },
    ],
  },
  {
    slug: 'health-screening',
    icon: ClipboardCheck,
    title: 'Health Screening',
    short: 'Preventive check-up packages with lab work.',
    overview: [
      'Screening finds problems before they cause symptoms: high sugar, high cholesterol, early kidney or liver changes.',
      'Packages are chosen by age and risk, and every result is discussed with you in a follow-up visit.',
    ],
    conditions: ['Annual executive check-up', 'Pre-employment medical', 'Pre-marital screening', 'Over-40 heart and sugar screen', 'Liver and kidney function', 'Thyroid screen'],
    expect: [
      { title: 'Consultation', text: 'Short visit to choose the right package.' },
      { title: 'Samples', text: 'Blood and urine samples at our partner lab.' },
      { title: 'Results', text: 'Reports usually ready within 24 to 48 hours.' },
      { title: 'Review', text: 'Results explained and an action plan agreed.' },
    ],
    preparation: ['Fast for 10 to 12 hours (water is fine)', 'Take regular medicines unless told otherwise', 'Bring previous reports for comparison'],
    faqs: [
      { q: 'How much does a package cost?', a: 'It depends on the tests included. Ask on WhatsApp for current package prices.' },
      { q: 'Is the review visit included?', a: 'Yes, one review visit is included with every package.' },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
