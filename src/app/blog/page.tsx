import { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'IT Blog & Technology Insights | Cloud, Security, Digital Transformation',
  description: 'Expert insights on cloud services, cybersecurity, web development, and digital transformation. Stay updated with Guruji Tech Global blog.',
  keywords: ['IT Blog Coventry', 'Technology Insights UK', 'Cloud Computing Blog', 'Cybersecurity Tips', 'Digital Transformation'],
  openGraph: {
    title: 'IT Blog & Technology Insights | Guruji Tech Global',
    description: 'Expert insights on cloud, cybersecurity, and digital transformation.',
    type: 'website',
  },
};

export default function Blog() {
  return <BlogClient />;
}
