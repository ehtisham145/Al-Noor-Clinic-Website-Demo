import { Helmet } from 'react-helmet-async';
import { SITE_URL, doctor } from '../../data/site';

export default function Seo({ title, description, path = '/', image = '/og-image.jpg', noindex = false, jsonLd }) {
  const fullTitle = title ? `${title} | ${doctor.name}` : `${doctor.title} | ${doctor.specialty} in Lahore`;
  const url = `${SITE_URL}${path}`;
  const img = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={doctor.title} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}

export const physicianJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: doctor.title,
  medicalSpecialty: 'InternalMedicine',
  telephone: '+92 300 3777887',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: doctor.address,
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
};
