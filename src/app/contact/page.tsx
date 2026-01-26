import { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata: Metadata = {
  title: 'Contact Us | IT Solutions Support Coventry UK',
  description: 'Get in touch with Guruji Tech Global. Expert IT support and services in Coventry, UK. Call +44-7488564873 or email us today.',
  keywords: ['Contact IT Support Coventry', 'IT Services Contact', 'Technology Support UK', 'Cloud Support Contact', 'IT Help Desk'],
  openGraph: {
    title: 'Contact Us | Guruji Tech Global',
    description: 'Expert IT support in Coventry, UK. Get in touch today.',
    type: 'website',
  },
};

export default function Contact() {
  return <ContactClient />;
}
