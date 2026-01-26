import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '5 Benefits of IP Telephony for UK Businesses | Guruji Tech Global',
  description: 'Discover how VoIP and IP telephony can reduce costs, improve communication, and enable remote work for your business.',
  keywords: ['IP telephony benefits', 'VoIP advantages', 'business phone systems', 'cloud calling', 'unified communications'],
};

export default function IPTelephonyBenefits() {
  const benefits = [
    {
      title: 'Significant Cost Savings',
      content: 'Traditional phone lines can be expensive with line rentals, long-distance charges, and maintenance fees. IP telephony reduces these costs by using your existing internet connection. UK businesses can save 30-50% on monthly phone bills with VoIP solutions.',
    },
    {
      title: 'Enhanced Flexibility and Scalability',
      content: 'Add or remove phone lines easily as your business grows. No waiting for engineers or physical installations. Scale up during busy periods and down during quiet times with just a few clicks.',
    },
    {
      title: 'Advanced Features Included',
      content: 'Enjoy enterprise features that were once only available to large corporations: voicemail-to-email, call recording, auto-attendant, call forwarding, and detailed call analytics. Most features are included at no extra cost.',
    },
    {
      title: 'Remote Work Enablement',
      content: 'Your team can make and receive calls from anywhere with internet access. Use softphones on computers, mobile apps, or IP phones at home. Perfect for hybrid work environments and distributed teams.',
    },
    {
      title: 'Improved Business Continuity',
      content: 'Built-in redundancy and failover ensure your phones keep working during outages. Forward calls to mobile phones, other offices, or voicemail if your internet or primary line goes down.',
    },
  ];

  const features = [
    'HD voice quality',
    'Voicemail to email integration',
    'Call recording and analytics',
    'Auto-attendant and IVR',
    'Mobile and desktop apps',
    'Conference calling and video',
    'Integration with CRM systems',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="IP Telephony Benefits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            5 Benefits of IP Telephony
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Transform your business communication with modern VoIP solutions
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: November 8, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>6 min read</span>
          </div>

          {benefits.map((benefit, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[oklch(0.35_0.12_260)]">
                {benefit.index}. {benefit.title}
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>{benefit.content}</p>
              </div>
            </section>
          ))}

          {/* Features List */}
          <section className="py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Key Features of IP Telephony</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[oklch(0.5_0.2_25)] flex-shrink-0 mt-0.5" />
                  <span className="text-lg flex-1">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Upgrade Your Phone System?</h3>
              <p className="text-lg opacity-90 mb-6">
                Our IP telephony experts in Coventry can design and implement the perfect solution for your business
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
                  href="/services/ip-telephony"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  IP Telephony Services
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
            "headline": "5 Benefits of IP Telephony for UK Businesses",
            "description": "Discover how VoIP and IP telephony can reduce costs, improve communication, and enable remote work for your business.",
            "datePublished": "2024-11-08",
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
