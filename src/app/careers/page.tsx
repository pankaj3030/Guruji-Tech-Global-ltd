import { Metadata } from 'next';
import CareersClient from './careers-client';

export const metadata: Metadata = {
  title: 'IT Careers & Job Vacancies | Join Guruji Tech Global Team',
  description: 'Explore IT career opportunities at Guruji Tech Global in Coventry, UK. Cloud, cybersecurity, web development, and technical roles available.',
  keywords: ['IT Jobs Coventry', 'Technology Careers UK', 'Cloud Engineer Jobs', 'Cybersecurity Careers', 'Web Developer Jobs'],
  alternates: {
    canonical: 'https://gurujitechglobal.com/careers',
  },
  openGraph: {
    title: 'IT Careers & Job Vacancies | Guruji Tech Global',
    description: 'Join our team of IT professionals in Coventry, UK.',
    type: 'website',
    url: 'https://gurujitechglobal.com/careers',
  },
};

export default function Careers() {
  return <CareersClient />;
}
