import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Choose a Web Development Agency in Coventry | Guruji Tech Global',
  description: 'Tips for finding the right development partner for your project. Key factors to consider when selecting a web development agency.',
  keywords: ['web development agency Coventry', 'choose web developer', 'web design company', 'website development tips', 'Coventry web services'],
};

export default function ChooseWebDevelopmentAgencyCoventry() {
  const sections = [
    {
      title: 'Portfolio and Past Work',
      content: 'Review their portfolio to see examples of websites they have built. Look for projects similar to yours in terms of complexity, industry, and design style. A strong portfolio demonstrates their capabilities and gives you confidence in their ability to deliver.',
    },
    {
      title: 'Client Testimonials and Reviews',
      content: 'Check online reviews, Google Business listings, and ask for client references. Honest feedback from past clients reveals their communication style, reliability, and ability to meet deadlines. Positive testimonials indicate a trustworthy partner.',
    },
    {
      title: 'Technical Expertise and Technology Stack',
      content: 'Ensure they have expertise in the technologies you need. For modern websites, look for proficiency in React, Next.js, Node.js, and other relevant frameworks. Ask about their development process and quality assurance practices.',
    },
    {
      title: 'Communication and Project Management',
      content: 'Good communication is essential for project success. Evaluate their responsiveness during initial discussions. Ask about their project management tools, reporting frequency, and how they handle changes or unexpected challenges.',
    },
    {
      title: 'Pricing and Value Proposition',
      content: 'Get detailed quotes from multiple agencies and compare them. Remember, the lowest price does not always mean the best value. Consider what is included: design, development, hosting, maintenance, SEO, and support.',
    },
  ];

  const keyConsiderations = [
    'Portfolio quality and relevance to your industry',
    'Client testimonials and reviews',
    'Technical expertise in required technologies',
    'Clear communication and project management',
    'Transparent pricing with no hidden costs',
    'Post-launch support and maintenance options',
    'SEO and performance optimization included',
    'Responsive design for all devices',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="Web Development Agency Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            How to Choose a Web Development Agency in Coventry
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Tips for finding the right development partner for your project
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: November 15, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>7 min read</span>
          </div>

          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[oklch(0.35_0.12_260)]">
                {section.title}
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>{section.content}</p>
              </div>
            </section>
          ))}

          {/* Key Considerations */}
          <section className="py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Key Considerations Checklist</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyConsiderations.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[oklch(0.5_0.2_25)] flex-shrink-0 mt-0.5" />
                  <span className="text-lg flex-1">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Looking for a Reliable Web Development Partner?</h3>
              <p className="text-lg opacity-90 mb-6">
                Our team in Coventry delivers high-quality websites that drive business results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/web-development"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  View Our Web Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How to Choose a Web Development Agency in Coventry",
            "description": "Tips for finding the right development partner for your project. Key factors to consider when selecting a web development agency.",
            "datePublished": "2024-11-15",
            "author": {
              "@type": "Organization",
              "name": "Guruji Tech Global"
            }
          })
        }}
      />
    </div>
  );
}
