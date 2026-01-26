import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Share2, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What is Cloud Migration? A Complete Guide for UK Businesses | Guruji Tech Global',
  description: 'Everything you need to know about moving to cloud infrastructure. Benefits, challenges, and best practices for UK businesses.',
  keywords: ['cloud migration services', 'cloud computing explained', 'cloud migration guide', 'benefits of cloud computing'],
};

export default function CloudMigrationGuide() {
  const sections = [
    {
      title: 'What is Cloud Migration?',
      content: 'Cloud migration is the process of moving your data, applications, and IT infrastructure from on-premises servers to cloud environments like AWS, Azure, or Google Cloud. It involves transferring data, applications, and workloads while ensuring minimal disruption to business operations.',
    },
    {
      title: 'How Long Does Cloud Migration Take?',
      content: 'The timeline varies based on complexity: Simple email migration can be completed in 1-2 weeks. Complex application migrations may take 8-16 weeks. Most migrations can be completed in 2-4 weeks with proper planning. We ensure minimal disruption to your business operations during the migration process.',
    },
    {
      title: 'Benefits of Cloud Migration for UK Businesses',
      content: 'Cloud computing offers significant advantages: Reduced capital expenditure with pay-as-you-go model, enhanced scalability to grow with your business needs, improved disaster recovery capabilities, access to enterprise-grade security and compliance, faster deployment of new applications and services. Small businesses can access enterprise-level technology that was previously unaffordable.',
    },
    {
      title: 'Cloud Migration Best Practices',
      content: 'Successful cloud migration requires: Comprehensive assessment of current infrastructure, detailed migration planning, phased approach to minimize disruption, thorough testing before going live, training for IT staff on new systems, ongoing support after migration, and clear rollback plans. We follow proven methodologies to ensure zero data loss and minimal downtime.',
    },
  ];

  const benefits = [
    'Cost savings on hardware and maintenance',
    'Improved security and compliance',
    'Enhanced disaster recovery',
    'Scalability to grow with your business',
    'Access to enterprise technology',
    'Remote work enablement',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.png"
            alt="Cloud Migration Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            What is Cloud Migration?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Complete guide for UK businesses moving to the cloud
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: December 1, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>8 min read</span>
          </div>

          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[oklch(0.35_0.12_260)]">
                {section.title}
              </h2>
              <div className="prose prose prose-lg text-muted-foreground leading-relaxed">
                <p>{section.content}</p>
              </div>
            </section>
          ))}

          {/* Benefits Section */}
          <section className="py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Key Benefits of Cloud Migration</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Migrate to the Cloud?</h3>
              <p className="text-lg opacity-90 mb-6">
                Our expert team in Coventry is ready to guide you through your cloud journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Get a Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  Learn About Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="py-12">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="space-y-4">
              <Link href="/blog/5-signs-business-needs-cybersecurity-audit" className="block p-4 bg-white rounded-xl border border-border hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-[oklch(0.35_0.12_260)]" />
                    <span className="font-semibold">5 Signs Your Business Needs Cybersecurity Audit</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </Link>
              <Link href="/blog/microsoft-365-vs-google-workspace" className="block p-4 bg-white rounded-xl border border-border hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-[oklch(0.35_0.12_260)]" />
                    <span className="font-semibold">Microsoft 365 vs Google Workspace: Which is Right for You?</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </Link>
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
            "headline": "What is Cloud Migration? A Complete Guide for UK Businesses",
            "description": "Everything you need to know about moving to cloud infrastructure. Benefits, challenges, and best practices.",
            "datePublished": "2024-12-01",
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
