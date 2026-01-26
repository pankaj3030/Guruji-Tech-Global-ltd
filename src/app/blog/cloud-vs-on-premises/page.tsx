import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cloud vs On-Premises: Which is Better for Your Business? | Guruji Tech Global',
  description: 'Compare costs, security, and flexibility of cloud and traditional IT infrastructure. Make an informed decision for your business technology.',
  keywords: ['cloud vs on-premises', 'IT infrastructure', 'cloud computing benefits', 'server hosting', 'business technology decision'],
};

export default function CloudVsOnPremises() {
  const comparison = [
    {
      factor: 'Initial Investment',
      cloud: 'Low upfront costs, pay-as-you-go pricing model',
      onPremises: 'High capital expenditure for hardware and software licenses',
    },
    {
      factor: 'Scalability',
      cloud: 'Easily scale up or down based on business needs',
      onPremises: 'Limited by hardware capacity, requires physical upgrades',
    },
    {
      factor: 'Maintenance',
      cloud: 'Provider handles maintenance, updates, and security patches',
      onPremises: 'Requires in-house IT team for maintenance and updates',
    },
    {
      factor: 'Security',
      cloud: 'Enterprise-grade security with compliance certifications',
      onPremises: 'Full control over security, but requires expertise',
    },
    {
      factor: 'Accessibility',
      cloud: 'Access from anywhere with internet connection',
      onPremises: 'Limited access, typically office-based only',
    },
  ];

  const cloudBenefits = [
    'Lower total cost of ownership',
    'Predictable monthly expenses',
    'Automatic updates and maintenance',
    'Built-in disaster recovery',
    'Access to enterprise technology',
    'Support remote work effectively',
  ];

  const onPremisesBenefits = [
    'Full control over data and infrastructure',
    'No dependency on internet connection',
    'Custom hardware configurations',
    'Data remains on-site',
    'Potential long-term cost savings',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="Cloud vs On-Premises Comparison"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Cloud vs On-Premises Infrastructure
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Which is better for your business technology needs?
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: November 10, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>12 min read</span>
          </div>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[oklch(0.35_0.12_260)]">Head-to-Head Comparison</h2>
            <div className="space-y-6">
              {comparison.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-border">
                  <h3 className="text-2xl font-bold mb-4">{item.factor}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <h4 className="font-bold text-blue-700 mb-2">Cloud</h4>
                      <p className="text-sm">{item.cloud}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="font-bold text-gray-700 mb-2">On-Premises</h4>
                      <p className="text-sm">{item.onPremises}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cloud Benefits */}
          <section className="mb-12 py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Why Choose Cloud Infrastructure?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cloudBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg flex-1">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* On-Premises Benefits */}
          <section className="mb-12 py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">When On-Premises Makes Sense</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {onPremisesBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg flex-1">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help Deciding?</h3>
              <p className="text-lg opacity-90 mb-6">
                Our experts can assess your needs and recommend the best infrastructure approach
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Get Infrastructure Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/cloud-services"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  Cloud Services
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
            "headline": "Cloud vs On-Premises: Which is Better for Your Business?",
            "description": "Compare costs, security, and flexibility of cloud and traditional IT infrastructure. Make an informed decision for your business technology.",
            "datePublished": "2024-11-10",
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
