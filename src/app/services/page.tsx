import { Metadata } from 'next';
import ServicesClient from './services-client';

export const metadata: Metadata = {
  title: 'IT Services & Solutions Coventry UK | Cloud, Cyber Security, Web Development',
  description: 'Expert IT services in Coventry, UK. Cloud services, Microsoft 365, web development, cybersecurity, IT support, and more. Transform your business today.',
  keywords: ['IT Services Coventry', 'Cloud Services UK', 'Cybersecurity Coventry', 'Web Development UK', 'Microsoft 365 Setup', 'IT Support UK'],
  alternates: {
    canonical: 'https://gurujitechglobal.com/services',
  },
  openGraph: {
    title: 'IT Services & Solutions Coventry UK | Guruji Tech Global',
    description: 'Expert IT services in Coventry, UK. Cloud, cybersecurity, web development, and 24/7 IT support.',
    type: 'website',
    url: 'https://gurujitechglobal.com/services',
  },
};

export default function Services() {
  return <ServicesClient />;
}
