// TODO(client): real clinic hours. null = closed for that session.
export const timings = [
  { day: 'Monday', morning: '10:00 AM - 1:00 PM', evening: '5:00 PM - 9:00 PM' },
  { day: 'Tuesday', morning: '10:00 AM - 1:00 PM', evening: '5:00 PM - 9:00 PM' },
  { day: 'Wednesday', morning: '10:00 AM - 1:00 PM', evening: '5:00 PM - 9:00 PM' },
  { day: 'Thursday', morning: '10:00 AM - 1:00 PM', evening: '5:00 PM - 9:00 PM' },
  { day: 'Friday', morning: '10:00 AM - 12:30 PM', evening: '5:00 PM - 9:00 PM' },
  { day: 'Saturday', morning: '11:00 AM - 2:00 PM', evening: null },
  { day: 'Sunday', morning: null, evening: null },
];

export const timingNotes = [
  'Timings may change on public holidays and during Ramadan. Changes are announced on WhatsApp.',
  'Last appointment is taken 30 minutes before closing.',
  'Please arrive 10 minutes early on your first visit.',
];

export const whatToBring = [
  'CNIC or any photo ID',
  'All medicines you are currently taking',
  'Previous prescriptions, lab reports and scans',
  'Your sugar or blood pressure log, if you keep one',
];

export const getTiming = (day) => timings.find((t) => t.day === day);
