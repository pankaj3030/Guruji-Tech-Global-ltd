import type { Metadata } from 'next';
import FAQClient from './faq-client';

export const metadata: Metadata = {
  title: 'IT FAQ | Common Questions About Cloud, Cybersecurity & Web Services | Guruji Tech Global',
  description: 'Find answers to common IT questions. Learn about cloud services, cybersecurity, Microsoft 365, and more from Coventry IT experts.',
  keywords: ['IT FAQ', 'IT questions', 'cloud computing explained', 'cybersecurity FAQ', 'Microsoft 365 help', 'IT support FAQ Coventry'],
  alternates: {
    canonical: 'https://gurujitechglobal.com/faq',
  },
  openGraph: {
    title: 'IT FAQ | Guruji Tech Global',
    description: 'Answers to common IT questions about cloud, cybersecurity, and web services.',
    type: 'website',
    url: 'https://gurujitechglobal.com/faq',
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
