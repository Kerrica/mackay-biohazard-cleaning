export type Location = {
  slug: string;
  name: string;
  seoTitle: string;
  intro: string;
  responseTime: string;
  nearby: string[];
  areaServed: string[];
  summary: string;
};

export const locations: Location[] = [
  {
    slug: 'mackay',
    name: 'Mackay',
    seoTitle: 'Biohazard Cleaning Mackay | Mackay Biohazard Cleaning',
    intro: 'Mackay is the operational hub for Mackay Biohazard Cleaning. From the city centre through outer suburbs and industrial precincts, the service supports families, property managers, accommodation providers, workplaces and agencies needing a controlled specialist response. Being based in Mackay allows faster deployment, stronger local familiarity and direct coordination for urgent work.',
    responseTime: 'Typically on-site within 1 hour in Mackay metro for urgent callouts when access is available.',
    nearby: ['Mount Pleasant', 'Andergrove', 'North Mackay', 'South Mackay', 'Walkerston'],
    areaServed: ['Mackay', 'Paget', 'Rural View', 'Ooralea'],
    summary: 'Biohazard cleaning in Mackay is supported from the main hub, enabling the fastest response window across metro areas and nearby suburbs.'
  },
  {
    slug: 'sarina',
    name: 'Sarina',
    seoTitle: 'Biohazard Cleaning Sarina | Mackay Biohazard Cleaning',
    intro: 'Sarina clients need the same level of specialist care as larger regional centres, but with dependable access from a Mackay-based team. Mackay Biohazard Cleaning supports Sarina homes, rentals, workplaces and accommodation sites with discreet biohazard, trauma and hoarding cleanup services tailored to the site conditions and urgency of each job.',
    responseTime: 'Typically on-site within 1.5 to 2 hours from Mackay, subject to traffic and weather.',
    nearby: ['Alligator Creek', 'Campwin Beach', 'Hay Point', 'Koumala'],
    areaServed: ['Sarina', 'Sarina Beach', 'Hay Point'],
    summary: 'Biohazard cleaning in Sarina is delivered from Mackay with structured mobilisation for urgent and scheduled remediation work.'
  },
  {
    slug: 'proserpine',
    name: 'Proserpine',
    seoTitle: 'Biohazard Cleaning Proserpine | Mackay Biohazard Cleaning',
    intro: 'Proserpine is a key service location for properties, tenancy providers and agencies requiring professional remediation north of Mackay. Mackay Biohazard Cleaning services Proserpine with controlled cleanup planning, respectful communication and practical support for sensitive situations where ordinary cleaners are not suitable.',
    responseTime: 'Typically on-site within 2.5 to 3 hours from Mackay for urgent response jobs.',
    nearby: ['Cannon Valley', 'Palm Grove', 'Myrtlevale', 'Conway'],
    areaServed: ['Proserpine', 'Cannonvale corridor support', 'Whitsunday hinterland'],
    summary: 'Biohazard cleaning in Proserpine is delivered through a regionally mobile response model with clear communication and reliable mobilisation.'
  },
  {
    slug: 'airlie-beach',
    name: 'Airlie Beach',
    seoTitle: 'Biohazard Cleaning Airlie Beach | Mackay Biohazard Cleaning',
    intro: 'Airlie Beach presents a mix of residential, accommodation and tourism-related environments where discretion is especially important. Mackay Biohazard Cleaning provides specialist response for Airlie Beach with careful handling, minimal disruption and remediation plans suited to apartments, holiday accommodation, hospitality back-of-house and private homes.',
    responseTime: 'Typically on-site within 3 hours from Mackay, with urgent deployments prioritised where practical.',
    nearby: ['Cannonvale', 'Jubilee Pocket', 'Shute Harbour', 'Mandalay'],
    areaServed: ['Airlie Beach', 'Cannonvale', 'Jubilee Pocket'],
    summary: 'Biohazard cleaning in Airlie Beach is managed with an emphasis on discretion, accommodation sensitivity and timely regional response.'
  },
  {
    slug: 'bowen',
    name: 'Bowen',
    seoTitle: 'Biohazard Cleaning Bowen | Mackay Biohazard Cleaning',
    intro: 'Bowen requires dependable regional coverage for homes, worker accommodation, commercial sites and public-facing properties. Mackay Biohazard Cleaning attends Bowen for trauma cleaning, biohazard remediation and hoarding-related cleanup where a professional, documented and discreet service is required.',
    responseTime: 'Typically on-site within 3.5 to 4 hours from Mackay depending on mobilisation timing.',
    nearby: ['Merinda', 'Queens Beach', 'Mount Gordon', 'Gumlu'],
    areaServed: ['Bowen', 'Queens Beach', 'Merinda'],
    summary: 'Biohazard cleaning in Bowen is supported through regional deployment for time-sensitive and specialist remediation work.'
  },
  {
    slug: 'moranbah',
    name: 'Moranbah',
    seoTitle: 'Biohazard Cleaning Moranbah | Mackay Biohazard Cleaning',
    intro: 'Moranbah sites often involve accommodation assets, workforce housing and remote-response logistics. Mackay Biohazard Cleaning supports Moranbah with specialist cleanup for biohazard contamination, traumatic incidents and severe property reset situations where stakeholders need a professional team that can mobilise with clear scope and minimal confusion.',
    responseTime: 'Typically on-site within 3.5 to 4.5 hours from Mackay, with scheduling planned around site urgency and access.',
    nearby: ['Dysart corridor support', 'Nebo', 'Coppabella', 'Peak Downs region'],
    areaServed: ['Moranbah', 'surrounding mining accommodation areas', 'regional worksites'],
    summary: 'Biohazard cleaning in Moranbah is delivered with remote-response planning suited to workforce accommodation and regional site logistics.'
  },
  {
    slug: 'clermont',
    name: 'Clermont',
    seoTitle: 'Biohazard Cleaning Clermont | Mackay Biohazard Cleaning',
    intro: 'Clermont clients often need a contractor who can respond capably without the delays and uncertainty that come from trying to source metropolitan providers. Mackay Biohazard Cleaning services Clermont with a regionally oriented deployment model for specialist situations requiring compliant cleanup, practical reporting and dependable communication from first call to handover.',
    responseTime: 'Typically on-site within 5 to 6 hours from Mackay or by planned next-available deployment depending on urgency.',
    nearby: ['Capella corridor support', 'Kilcummin', 'Rubyvale access routes'],
    areaServed: ['Clermont', 'surrounding rural properties', 'regional support corridors'],
    summary: 'Biohazard cleaning in Clermont is available through planned regional deployment for complex specialist remediation jobs.'
  },
  {
    slug: 'collinsville',
    name: 'Collinsville',
    seoTitle: 'Biohazard Cleaning Collinsville | Mackay Biohazard Cleaning',
    intro: 'Collinsville properties, worker housing and local assets benefit from access to a Mackay-based specialist team when serious contamination or traumatic events occur. Mackay Biohazard Cleaning provides Collinsville with discreet biohazard, trauma and hoarding cleanup services delivered through a structured and professional regional response model.',
    responseTime: 'Typically on-site within 4 to 4.5 hours from Mackay depending on road and access conditions.',
    nearby: ['Scottville', 'Bowen corridor', 'Merinda access route'],
    areaServed: ['Collinsville', 'Scottville', 'nearby workforce accommodation zones'],
    summary: 'Biohazard cleaning in Collinsville is supported by a mobile specialist team operating out of Mackay for urgent and scheduled work.'
  }
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
