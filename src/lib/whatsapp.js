import { doctor } from '../data/site';

export const waLink = (text = '') =>
  `https://wa.me/${doctor.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
