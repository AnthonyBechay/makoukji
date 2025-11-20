const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutomotiveBusiness'],
  name: 'Ets. Georges Makoukji for Auto Glass',
  description:
    'Professional auto glass and windshield repair service in Dora, Beirut, Lebanon. Windshield replacement, chip repair, window tinting, and mobile glass service.',
  url: 'https://www.makoukji.com',
  telephone: '+9613897157',
  priceRange: '$$',
  image: 'https://www.makoukji.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dora Trade Center, Dora Highway',
    addressLocality: 'Beirut',
    addressRegion: 'Mount Lebanon',
    postalCode: '1200',
    addressCountry: 'LB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.89542024416916,
    longitude: 35.546435767802386,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/makoukjiautoglass/',
    'https://www.instagram.com/makoukjiautoglass/',
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Lebanon',
  },
};

export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
}


