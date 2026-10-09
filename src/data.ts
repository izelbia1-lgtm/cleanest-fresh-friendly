export const business = { phone: '083 440 2603', tel: '+27834402603', whatsapp: 'https://wa.me/27834402603', emails: ['simone@cleanest.co.za', 'jason@cleanest.co.za'], facebook: 'https://www.facebook.com/cleanestsa' };
export const services = [
  { id: 'carpets', name: 'Carpet & upholstery cleaning', image: 'newcarpet1.webp', alt: 'Carpet extraction cleaning, pictured on Cleanest’s existing website', description: 'Care for the fabrics and furnishings in your space, from carpets and rugs to upholstery and leather.', details: ['Carpets and rugs', 'Upholstery and leather', 'Mattresses and headboards', 'Curtains and blinds'] },
  { id: 'windows', name: 'Window & specialist cleaning', image: 'winc1.webp', alt: 'Squeegee cleaning a window, from Cleanest’s existing service gallery', description: 'Interior and exterior cleaning for accessible windows up to the second floor, plus specialist cleaning for your property.', details: ['Window cleaning', 'Solar panel cleaning', 'Flood damage cleaning', 'Pre- and post-occupation cleaning'] },
  { id: 'gardens', name: 'Garden services', image: 'newgarden2.webp', alt: 'Garden maintenance worker trimming a hedge, pictured on Cleanest’s existing website', description: 'Year-round care for residential gardens, complexes, estates and corporate grounds.', details: ['Mowing, edging & pruning', 'Tree felling & site clearing', 'Irrigation installations'] },
];
// Directly supplied by Simone and Jason via client feedback, 9 October 2026.
export const experience = 'Over 30 Years of Experience & Expertise';
export const cleaningServices = services.slice(0, 2).flatMap(service => service.details);
export const areas = [
  { name: 'Johannesburg', label: 'CITY & SURROUNDS', description: 'Cleaning and garden care for homes, offices, complexes and estates across greater Johannesburg.', suburbs: 'Sandton · Randburg · Roodepoort · Midrand · Fourways · Bryanston · Rosebank · Bedfordview · Edenvale' },
];
export const reviews = [
  { quote: 'Incredible service! Our carpets in our Sandton office have never looked better. Highly recommend the team from Cleanest.', name: 'Sarah L.', area: 'Sandton, Johannesburg', source: 'https://www.cleanest.co.za/johannesburgcleanest.html' },
];
// Prepared for the official launch. Deliberately not injected as active business
// JSON-LD on this independent, noindex demo. Confirm details before activation.
export const preparedLocalBusiness = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Cleanest', url: 'https://www.cleanest.co.za/', telephone: business.tel, email: business.emails[0], areaServed: areas.map(area => ({ '@type': 'City', name: area.name })), sameAs: [business.facebook] };
