export type Service = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  included: string[];
  process: string[];
  audience: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: 'biohazard-cleaning',
    name: 'Biohazard Cleaning',
    shortName: 'Biohazard Cleaning',
    title: 'Professional Biohazard Cleaning — Mackay Region',
    seoTitle: 'Biohazard Cleaning Mackay | Professional Hazard Cleaning',
    description:
      'Biohazard cleaning for properties, workplaces and public settings across Mackay and surrounding regions.',
    summary:
      'Mackay Biohazard Cleaning provides biohazard cleaning across Mackay and nearby regions for contaminated environments requiring controlled remediation, documentation and discreet handling.',
    heroImage: '/images/biohazard-cleanup-mackay-active-remediation.jpg',
    heroAlt: 'Biohazard cleaning team suited up Mackay',
    intro: [
      'Biohazard cleaning in Mackay requires more than a standard cleaning response. It demands trained technicians, compliant handling of contaminated materials, correct personal protective equipment and a calm, methodical process that protects people, property and privacy. Mackay Biohazard Cleaning provides controlled remediation for environments affected by blood, bodily fluids, infectious risk, sharps, waste contamination and other hazardous conditions.',
      'Each site is assessed individually. The team isolates the affected area, identifies porous and non-porous materials, determines what can be cleaned versus what must be removed, and completes remediation using hospital-grade products and documented procedures. Whether the setting is a home, tenancy, accommodation site, workplace, vehicle or government-managed property, the service is structured to reduce risk, restore usability and keep communication clear for families, asset managers and agencies.'
    ],
    included: [
      'Initial site risk assessment and containment planning',
      'PPE-based entry and controlled decontamination procedures',
      'Removal and disposal coordination for contaminated materials',
      'Surface cleaning, disinfection and odour management',
      'Documentation for insurers, landlords, agencies or internal records',
      'Discreet arrival and respectful communication throughout the job'
    ],
    process: [
      'Call intake and immediate triage of risk, timing and access requirements.',
      'On-site assessment to confirm hazards, containment needs and scope of work.',
      'Controlled remediation using PPE, approved products and safe waste handling pathways.',
      'Final quality check, reporting notes and handover for next-stage repairs if required.'
    ],
    audience: ['Residential clients', 'Commercial sites', 'Industrial facilities', 'Government and community housing providers'],
    faqs: [
      { question: 'What is classed as biohazard cleaning?', answer: 'Biohazard cleaning covers environments contaminated by blood, bodily fluids, sharps, infectious waste or other hazardous biological matter that cannot be safely addressed through ordinary cleaning.' },
      { question: 'Can you attend after hours?', answer: 'Yes. Emergency response is available 24/7 for urgent matters across the Mackay region.' },
      { question: 'Do you remove contaminated materials?', answer: 'Yes. Where materials cannot be safely restored, removal and compliant disposal pathways are arranged as part of the remediation scope.' },
      { question: 'Is the service discreet?', answer: 'Yes. Attendance, communication and site handling are managed as discreetly as possible, recognising the sensitivity of these situations.' },
      { question: 'Can you work with agencies or insurers?', answer: 'Yes. The service can support property managers, agencies, insurers and government stakeholders with clear scope notes and documentation.' }
    ]
  },
  {
    slug: 'trauma-crime-scene-cleaning',
    name: 'Trauma & Crime Scene Cleaning',
    shortName: 'Trauma & Crime Scene',
    title: 'Trauma & Crime Scene Cleaning Mackay',
    seoTitle: 'Trauma & Crime Scene Cleaning Mackay | Compassionate & Professional',
    description:
      'Compassionate, discreet trauma and crime scene cleaning services across Mackay and surrounding regions.',
    summary:
      'Mackay Biohazard Cleaning provides trauma and crime scene cleaning in Mackay with a clinical process, discreet handling and an approach designed to reduce burden on families, property managers and responding agencies.',
    heroImage: '/images/trauma-cleaning-mackay-ppe-doorway.jpg',
    heroAlt: 'Compassionate trauma cleaning specialists',
    intro: [
      'Trauma and crime scene cleaning requires technical skill, emotional restraint and absolute professionalism. Families, landlords, employers and agencies should not be left to manage these environments alone. Mackay Biohazard Cleaning responds with respectful communication, secure scene remediation and a process designed to restore the affected space while protecting everyone involved from unnecessary exposure and additional distress.',
      'The focus is clinical, not graphic. The team manages contamination, affected materials, odour issues and site restoration requirements without sensational language or intrusive handling. Jobs may follow unattended death, serious medical events, incidents under investigation, self-harm, violence-related events or other traumatic circumstances where specialist cleaning is required after emergency services have released the scene.'
    ],
    included: [
      'Sensitive intake and discreet coordination with the caller',
      'Controlled remediation of affected rooms and surfaces',
      'Removal of unsalvageable contaminated materials where required',
      'Odour reduction and environmental cleaning',
      'Coordination support for property stakeholders and next trades',
      'Professional communication designed to reduce burden during a difficult time'
    ],
    process: [
      'Immediate response call to understand the event type, site access and urgency.',
      'Private on-site assessment once the location is released for remediation.',
      'Specialist cleaning, containment and safe material handling using documented procedures.',
      'Handover with practical next steps for repair, clearance or property return.'
    ],
    audience: ['Families and next of kin', 'Property managers and landlords', 'Hotels and accommodation operators', 'Government, health and support services'],
    faqs: [
      { question: 'Do families need to clean anything before you arrive?', answer: 'No. Families should not attempt trauma cleaning. The site should be left untouched until a trained professional can assess it.' },
      { question: 'Will unmarked vehicles attend?', answer: 'Where practical, discreet attendance arrangements can be discussed during intake.' },
      { question: 'Can you liaise with property managers?', answer: 'Yes. The service regularly supports property stakeholders to coordinate access, reporting and next steps.' },
      { question: 'Do you describe what happened on site?', answer: 'No. Communication stays professional, minimal and focused on the remediation scope.' },
      { question: 'Can you help with odour after an unattended death?', answer: 'Yes. Odour management is commonly built into the remediation plan where relevant.' }
    ]
  },
  {
    slug: 'hoarding-cleaning',
    name: 'Hoarding Cleaning',
    shortName: 'Hoarding Cleaning',
    title: 'Hoarding Cleanup Services — Mackay & Surrounds',
    seoTitle: 'Hoarding Cleaning Mackay | Non-Judgmental Professional Service',
    description:
      'Professional hoarding cleanup with a non-judgmental, structured approach for clients, families and agencies.',
    summary:
      'Mackay Biohazard Cleaning provides hoarding cleanup services in Mackay and surrounding areas using a respectful, non-judgmental process that balances safety, restoration and practical progress.',
    heroImage: '/images/hoarded-room-mackay-before.jpg',
    heroAlt: 'Professional hoarding cleanup Mackay',
    intro: [
      'Hoarding cleanup is not ordinary cleaning. It requires structure, patience, safety controls and an approach that respects the person as much as the environment. Mackay Biohazard Cleaning delivers practical hoarding cleanup for homes, rentals, supported accommodation and agency-managed properties across Mackay and surrounding regions.',
      'The service can support severe clutter, contamination, restricted access, waste accumulation, pest-affected conditions and complex property reset work. Plans are scaled according to the site and the client context. Some jobs require staged progress. Others need a rapid intervention to restore basic function, access and safety. In every case, the approach stays professional, measured and non-judgmental.'
    ],
    included: [
      'Structured site assessment and safety-based cleanup planning',
      'Sorting, bagging, removal coordination and hazard identification',
      'Deep cleaning of recoverable areas and surfaces',
      'Odour, waste and contamination management where required',
      'Support for families, support coordinators, landlords and agencies',
      'Respectful, non-shaming communication throughout the process'
    ],
    process: [
      'Initial conversation to understand urgency, occupancy, access and support needs.',
      'On-site assessment of clutter volume, contamination, risk level and staging options.',
      'Progressive cleanup and restoration, with priorities set around safety and function.',
      'Final review, practical maintenance advice and next-step coordination if needed.'
    ],
    audience: ['Private households', 'Families supporting a loved one', 'NDIS and community support teams', 'Housing providers and tenancy managers'],
    faqs: [
      { question: 'Is the service judgmental?', answer: 'No. The process is designed to be calm, respectful and focused on practical progress rather than criticism.' },
      { question: 'Can cleanup be staged over time?', answer: 'Yes. Many hoarding jobs are completed in structured stages depending on client capacity, site conditions and budget.' },
      { question: 'Do you work with support teams?', answer: 'Yes. The service can coordinate with support workers, coordinators, housing teams and other stakeholders where required.' },
      { question: 'What if there is contamination as well as clutter?', answer: 'The cleanup plan can incorporate contamination control, PPE use and more intensive remediation where the environment requires it.' },
      { question: 'Can you help when a property must be made safe quickly?', answer: 'Yes. Priority-based interventions can be arranged where urgent access, hygiene or tenancy issues exist.' }
    ]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
