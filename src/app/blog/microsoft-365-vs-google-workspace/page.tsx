import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Microsoft 365 vs Google Workspace: Which is Right for You? | Guruji Tech Global',
  description: 'Compare features, pricing, and benefits of leading productivity suites. Make an informed decision for your business collaboration tools.',
  keywords: ['Microsoft 365 vs Google Workspace', 'office productivity suite', 'business email', 'collaboration tools', 'productivity software'],
};

export default function Microsoft365VsGoogleWorkspace() {
  const comparison = [
    {
      category: 'Email & Calendar',
      microsoft365: 'Outlook with advanced features, 50GB+ storage, desktop and mobile apps',
      googleWorkspace: 'Gmail with smart features, 30GB storage, web-first interface',
    },
    {
      category: 'Document Collaboration',
      microsoft365: 'Word, Excel, PowerPoint with desktop apps and web versions',
      googleWorkspace: 'Docs, Sheets, Slides with browser-based real-time collaboration',
    },
    {
      category: 'Video Conferencing',
      microsoft365: 'Microsoft Teams integrated with Office apps, recording, transcription',
      googleWorkspace: 'Google Meet with easy scheduling, screen sharing, live captions',
    },
    {
      category: 'Cloud Storage',
      microsoft365: 'OneDrive with 1TB+ storage, version history, offline sync',
      googleWorkspace: 'Google Drive with unlimited storage (business plans), sharing features',
    },
  ];

  const microsoft365Benefits = [
    'Desktop applications for offline work',
    'Advanced Excel features and power users',
    'Better integration with existing Microsoft environments',
    'Strong security and compliance features',
    'Familiar interface for most businesses',
  ];

  const googleWorkspaceBenefits = [
    'Lower cost per user',
    'Excellent real-time collaboration',
    'Simple setup and management',
    'Browser-based access from any device',
    'Regular automatic updates',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="Microsoft 365 vs Google Workspace Comparison"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Microsoft 365 vs Google Workspace
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Which productivity suite is right for your business?
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: November 20, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>10 min read</span>
          </div>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[oklch(0.35_0.12_260)]">Feature Comparison</h2>
            <div className="space-y-6">
              {comparison.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-border">
                  <h3 className="text-2xl font-bold mb-4">{item.category}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <h4 className="font-bold text-blue-700 mb-2">Microsoft 365</h4>
                      <p className="text-sm">{item.microsoft365}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <h4 className="font-bold text-green-700 mb-2">Google Workspace</h4>
                      <p className="text-sm">{item.googleWorkspace}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Microsoft 365 Benefits */}
          <section className="mb-12 py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Why Choose Microsoft 365?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {microsoft365Benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg flex-1">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Google Workspace Benefits */}
          <section className="mb-12 py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Why Choose Google Workspace?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {googleWorkspaceBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg flex-1">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
              <p className="text-lg opacity-90 mb-6">
                Our experts can help you select and implement the right productivity suite for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Get Expert Advice
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/microsoft-365"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  Microsoft 365 Services
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
            "headline": "Microsoft 365 vs Google Workspace: Which is Right for You?",
            "description": "Compare features, pricing, and benefits of leading productivity suites. Make an informed decision for your business collaboration tools.",
            "datePublished": "2024-11-20",
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
