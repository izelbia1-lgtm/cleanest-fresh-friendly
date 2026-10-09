export const business = { phone: '083 440 2603', tel: '+27834402603', whatsapp: 'https://wa.me/27834402603', emails: ['simone@cleanest.co.za', 'jason@cleanest.co.za'], facebook: 'https://www.facebook.com/cleanestsa' };
export const services = [
  { id: 'carpets', name: 'Carpets & Rugs', group: 'fabrics', description: 'Cleaning for carpets and rugs in your home or workplace.' },
  { id: 'upholstery', name: 'Upholstery & Leather', group: 'fabrics', description: 'Cleaning care for upholstery and leather furnishings.' },
  { id: 'mattresses', name: 'Mattresses & Headboards', group: 'fabrics', description: 'Cleaning for mattresses and headboards.' },
  { id: 'curtains', name: 'Curtains & Blinds', group: 'fabrics', description: 'Cleaning care for curtains and blinds.' },
  { id: 'flood-damage', name: 'Flood Damage', group: 'specialist', description: 'Cleaning for spaces affected by flood damage.' },
  { id: 'windows', name: 'Windows & Solar Panels', group: 'specialist', description: 'Window and solar panel cleaning for your property.' },
  { id: 'occupation-clean', name: 'Pre & Post Occupation Clean', group: 'specialist', description: 'Cleaning before or after occupation of a property.' },
  { id: 'gardens', name: 'Garden Services', group: 'gardens', description: 'Year-round care for residential gardens, complexes, estates and corporate grounds.' },
];
export const servicePanels = [
  { id: 'fabrics', name: 'Fabric & furnishing care', image: 'newcarpet1.webp', alt: 'Carpet extraction cleaning, pictured on Cleanest’s existing website', description: 'Cleaning care for the fabrics and furnishings in your space.', details: [] },
  { id: 'specialist', name: 'Specialist cleaning', image: 'winc1.webp', alt: 'Squeegee cleaning a window, from Cleanest’s existing service gallery', description: 'Cleaning for your property, inside and out.', details: [] },
  { id: 'gardens', name: services[7].name, image: 'newgarden2.webp', alt: 'Garden maintenance worker trimming a hedge, pictured on Cleanest’s existing website', description: services[7].description, details: ['Mowing, edging & pruning', 'Tree felling & site clearing', 'Irrigation installations'] },
];
// Directly supplied by Simone and Jason via client feedback, 9 October 2026.
export const experience = 'Over 30 Years of Experience & Expertise';
export const cleaningServices = services.filter(service => service.group !== 'gardens').map(service => service.name);
export const areas = [
  { name: 'Johannesburg', label: 'CITY & SURROUNDS', description: 'Cleaning and garden care for homes, offices, complexes and estates across greater Johannesburg.', suburbs: 'Sandton · Randburg · Roodepoort · Midrand · Fourways · Bryanston · Rosebank · Bedfordview · Edenvale' },
];
export const reviews = [
  { quote: 'Incredible service! Our carpets in our Sandton office have never looked better. Highly recommend the team from Cleanest.', name: 'Sarah L.', area: 'Sandton, Johannesburg', source: 'https://www.cleanest.co.za/johannesburgcleanest.html' },
];
// Prepared for the official launch. Deliberately not injected as active business
// JSON-LD on this independent, noindex demo. Confirm details before activation.
export const preparedLocalBusiness = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Cleanest', url: 'https://www.cleanest.co.za/', telephone: business.tel, email: business.emails[0], areaServed: areas.map(area => ({ '@type': 'City', name: area.name })), sameAs: [business.facebook] };
