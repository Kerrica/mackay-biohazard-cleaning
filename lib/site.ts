
export function formatAustralianPhone(input: string) {
  const digits = input.replace(/\D/g, '');
  if (digits.length === 10) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  return input;
}

const rawPhone = process.env.NEXT_PUBLIC_PHONE || '0405450705';

export const siteConfig = {
  name: 'Mackay Biohazard Cleaning',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mackaybiohazardcleaning.com.au',
  phone: rawPhone.replace(/\D/g, ''),
  formattedPhone: formatAustralianPhone(rawPhone),
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/XXXXXXXX',
  abn: 'ABN available on request',
  serviceRegion: 'Mackay, Whitsundays, Bowen Basin and surrounding regions',
  description:
    'Biohazard, trauma, decluttering, crisis navigation and complex property recovery services for Mackay and surrounding regions. Fully insured, discreet and available 24/7 for urgent response.',
};

export const baseKeywords = [
  'biohazard cleaning Mackay',
  'crime scene cleaning Mackay',
  'trauma cleaning Mackay',
  'hoarding cleaning Mackay',
  'decluttering Mackay',
  'crisis navigation Mackay',
  'emergency cleaning services Mackay',
];
