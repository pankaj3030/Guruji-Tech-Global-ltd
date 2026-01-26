import { services } from './services';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = services.map((service, index) => ({
  id: `blog-${service.id}`,
  title: service.title,
  slug: service.slug,
  excerpt: service.description,
  image: service.image,
  content: `${service.detailedDescription}\n\n\n## Key Features\n\n${service.features.map(feature => `- ${feature}`).join('\n')}\n\n\n## Benefits\n\n${service.benefits.map(benefit => `- ${benefit}`).join('\n')}\n\n\nAt Guruji Tech Global, we are committed to delivering excellence in every project. Our team of experts brings years of experience and deep technical knowledge to ensure your success. Contact us today to learn more about how we can help your business leverage ${service.title} to achieve your goals.\n\n\n## Why Choose Guruji Tech Global?\n\n- **Expert Team**: Our certified professionals have extensive experience in ${service.title}\n- **Customized Solutions**: We tailor our approach to meet your specific business needs\n- **Proven Track Record**: We have successfully delivered ${service.title} solutions to numerous clients\n- **Ongoing Support**: We provide continuous support and maintenance to ensure long-term success\n- **Competitive Pricing**: We offer competitive rates without compromising on quality\n\n\nReady to transform your business with ${service.title}? Get in touch with us today to schedule a consultation.`,
  date: new Date(2025, 0, 1 + index).toISOString().split('T')[0],
  readTime: "5 min read",
  category: "Technology"
}));

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
