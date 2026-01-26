import { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata: Metadata = {
  title: 'About Us | Expert IT Solutions Provider Coventry UK',
  description: 'Learn about Guruji Tech Global, your trusted IT solutions partner in Coventry, UK. Over 10 years experience delivering cloud, cybersecurity, and web development.',
  keywords: ['About Guruji Tech Global', 'IT Solutions Coventry', 'Technology Company UK', 'Cloud Services Coventry'],
  openGraph: {
    title: 'About Us | Guruji Tech Global',
    description: 'Your trusted IT solutions partner in Coventry, UK with over 10 years of experience.',
    type: 'website',
  },
};

export default function About() {
  return <AboutClient />;
}
