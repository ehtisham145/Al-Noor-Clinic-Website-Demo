// TODO(client): placeholder articles. Each body block is { type: 'p' | 'h2' | 'ul', text | items }.
export const posts = [
  {
    slug: 'understanding-your-hba1c',
    title: 'Understanding your HbA1c report',
    date: '2026-09-12',
    readTime: '4 min read',
    category: 'Diabetes',
    excerpt: 'One number tells us how your sugar has behaved for three months. Here is how to read it.',
    body: [
      { type: 'p', text: 'HbA1c measures how much sugar has attached to your red blood cells. Because those cells live about three months, the result reflects your average sugar over that time, not just this morning.' },
      { type: 'h2', text: 'What the numbers mean' },
      { type: 'ul', items: ['Below 5.7%: normal', '5.7% to 6.4%: pre-diabetes', '6.5% or above: diabetes', 'For most people with diabetes, the target is below 7%'] },
      { type: 'p', text: 'Targets are personal. Older patients or those prone to low sugar may aim a little higher. Discuss your own target at your next visit.' },
      { type: 'h2', text: 'How often to test' },
      { type: 'p', text: 'Every three months while treatment is being adjusted, and every six months once your sugar is stable.' },
    ],
  },
  {
    slug: 'measuring-blood-pressure-at-home',
    title: 'How to measure blood pressure at home',
    date: '2026-08-28',
    readTime: '3 min read',
    category: 'Heart',
    excerpt: 'Small mistakes can add 10 points to a reading. A simple routine gives numbers you can trust.',
    body: [
      { type: 'p', text: 'Home readings help us see your real blood pressure away from the stress of a clinic. They only help if they are taken the right way.' },
      { type: 'h2', text: 'A simple routine' },
      { type: 'ul', items: ['Sit quietly for five minutes first', 'Back supported, feet flat, arm resting at heart level', 'Use an upper-arm cuff, not a wrist device', 'Take two readings one minute apart and write both down'] },
      { type: 'p', text: 'Bring your log to every visit. A week of morning and evening readings is more useful than any single clinic measurement.' },
    ],
  },
  {
    slug: 'when-is-a-fever-serious',
    title: 'When is a fever serious?',
    date: '2026-08-05',
    readTime: '3 min read',
    category: 'General',
    excerpt: 'Most fevers settle on their own. These warning signs mean you should be seen promptly.',
    body: [
      { type: 'p', text: 'Fever is the body fighting infection, and most fevers in adults settle within three days with rest, fluids and paracetamol.' },
      { type: 'h2', text: 'See a doctor promptly if' },
      { type: 'ul', items: ['Fever lasts more than three days', 'You have a rash, severe headache or stiff neck', 'You feel confused or very drowsy', 'You cannot keep fluids down', 'You are pregnant, elderly, or have diabetes or a weak immune system'] },
      { type: 'p', text: 'During dengue season, avoid painkillers such as ibuprofen and aspirin unless a doctor advises them.' },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
