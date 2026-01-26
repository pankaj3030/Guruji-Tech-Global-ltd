import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Consulting Strategies for Business Growth | Guruji Tech Global',
  description: 'Learn how strategic IT consulting can align technology with business goals, drive digital transformation, and maximize ROI.',
  keywords: ['IT consulting', 'digital transformation', 'IT strategy', 'technology roadmap', 'business IT alignment'],
};

export default function ITConsultingStrategies() {
  const strategies = [
    {
      title: 'Align Technology with Business Objectives',
      content: 'Effective IT consulting starts with understanding your business goals. We analyze your current technology, identify gaps, and create a roadmap that directly supports your business strategy. This ensures every IT investment delivers measurable business value.',
    },
    {
      title: 'Optimize IT Operations and Costs',
      content: 'Many businesses overspend on IT without realizing it. Our consultants identify inefficiencies, recommend cost-effective solutions, and help you negotiate better vendor contracts. Typical savings include 20-30% reduction in IT operational costs.',
    },
    {
      title: 'Plan Digital Transformation',
      content: 'Digital transformation is more than just implementing new technology. It involves people, processes, and culture. We guide you through change management, training, and adoption strategies to ensure successful digital initiatives.',
    },
    {
      title: 'Implement Technology Governance',
      content: 'Establish clear policies and procedures for technology management. This includes security protocols, data handling practices, software standards, and compliance requirements. Good governance reduces risk and improves consistency.',
    },
  ];

  const benefits = [
    'Clear IT strategy aligned with business goals',
    'Improved decision-making for technology investments',
    'Reduced operational costs',
    'Faster adoption of new technologies',
    'Better risk management and compliance',
    'Competitive advantage through innovation',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="IT Consulting Strategies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            IT Consulting Strategies for Business Growth
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Align technology investments with your business objectives
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: October 15, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>7 min read</span>
          </div>

          {strategies.map((strategy, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[oklch(0.35_0.12_260)]">
                {strategy.title}
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>{strategy.content}</p>
              </div>
            </section>
          ))}

          {/* Benefits Section */}
          <section className="py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Key Benefits of IT Consulting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[oklch(0.5_0.2_25)] flex-shrink-0 mt-0.5" />
                  <span className="text-lg flex-1">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Need Strategic IT Guidance?</h3>
              <p className="text-lg opacity-90 mb-6">
                Our IT consultants can help align your technology with business goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Request IT Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/it-consulting"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  IT Consulting Services
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
            "headline": "IT Consulting Strategies for Business Growth",
            "description": "Learn how strategic IT consulting can align technology with business goals, drive digital transformation, and maximize ROI.",
            "datePublished": "2024-10-15",
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
