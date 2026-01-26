import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CCTV Surveillance Guide for UK Businesses | Guruji Tech Global',
  description: 'Complete guide to CCTV and surveillance systems. Protect your premises with modern IP camera solutions and monitoring.',
  keywords: ['CCTV surveillance', 'security cameras', 'IP cameras', 'business security', 'CCTV installation'],
};

export default function CCTVSurveillanceGuide() {
  const sections = [
    {
      title: 'Types of CCTV Cameras',
      content: 'Modern CCTV systems offer various camera types: Dome cameras for wide coverage and discreet installation, bullet cameras for long-range viewing, PTZ (Pan-Tilt-Zoom) cameras for detailed monitoring and tracking, thermal cameras for night vision and perimeter security, and license plate recognition cameras for parking areas.',
    },
    {
      title: 'IP vs Analog CCTV Systems',
      content: 'IP cameras offer superior quality, scalability, and smart features. Benefits include: higher resolution (1080p to 4K), digital zoom without quality loss, remote viewing via apps and web, analytics like motion detection, easier installation with Power over Ethernet (PoE), and better integration with network infrastructure.',
    },
    {
      title: 'CCTV Storage and Recording',
      content: 'Choose the right NVR (Network Video Recorder) based on your needs: Number of cameras and recording quality determines required storage capacity, SSD for faster access and reliability, HDD for cost-effective large capacity storage, and cloud storage for offsite backup and remote access.',
    },
    {
      title: 'Legal Considerations and GDPR',
      content: 'Ensure your CCTV system complies with UK laws: Display clear signage informing people of surveillance, limit cameras to public and work areas only, respect privacy expectations, implement data retention policies (typically 30 days for UK), and secure access to recordings with proper controls.',
    },
  ];

  const benefits = [
    'Deterrence of criminal activity',
    'Evidence collection for investigations',
    'Remote monitoring capabilities',
    'Reduced security staff costs',
    'Improved employee safety',
    'Insurance premium discounts',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="CCTV Surveillance Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            CCTV Surveillance Guide for UK Businesses
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Protect your premises with modern IP camera solutions and monitoring
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: November 12, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>8 min read</span>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[oklch(0.35_0.12_260)]">
                {section.title}
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>{section.content}</p>
              </div>
            </div>
          ))}

          {/* Benefits Section */}
          <section className="py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Key Benefits of CCTV Surveillance</h2>
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
              <h3 className="text-2xl font-bold mb-4">Need CCTV Installation?</h3>
              <p className="text-lg opacity-90 mb-6">
                Our surveillance experts can design and install the perfect CCTV system for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Get Site Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/cctv"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  CCTV Services
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
            "headline": "CCTV Surveillance Guide for UK Businesses",
            "description": "Complete guide to CCTV and surveillance systems. Protect your premises with modern IP camera solutions and monitoring.",
            "datePublished": "2024-11-12",
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
