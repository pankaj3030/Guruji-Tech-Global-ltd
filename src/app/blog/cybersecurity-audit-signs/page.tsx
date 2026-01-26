import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Share2, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '5 Signs Your Business Needs Cybersecurity Audit | Guruji Tech Global',
  description: 'Identify security vulnerabilities before they become problems. Learn the key indicators that your business needs a professional cybersecurity audit.',
  keywords: ['cybersecurity audit', 'security assessment', 'vulnerability scanning', 'business security', 'IT security Coventry'],
};

export default function CybersecurityAuditSigns() {
  const sections = [
    {
      title: '1. Unusual Network Activity or Traffic Patterns',
      content: 'If you notice strange network behavior like unexpected data spikes, unusual login attempts, or devices connecting at odd hours, it could indicate a security breach. Advanced threats often hide in normal-looking traffic but leave subtle patterns that professional monitoring tools can detect.',
    },
    {
      title: '2. Slow System Performance or Frequent Crashes',
      content: 'Malware and unauthorized software often consume system resources, causing performance degradation. If your systems suddenly become sluggish, crash frequently, or behave unpredictably, it may be due to hidden malicious processes running in the background.',
    },
    {
      title: '3. Suspicious User Account Activities',
      content: 'Watch for unauthorized password reset attempts, strange password changes, or accounts being locked repeatedly. Also be alert if you see users accessing systems at unusual times or from unexpected locations. These are strong indicators of account compromise attempts.',
    },
    {
      title: '4. Ransomware or Phishing Attacks',
      content: 'If you have experienced ransomware attacks, employees reporting suspicious emails, or data being held hostage, you need immediate security assessment. These are clear signs that your current security measures are insufficient and need professional review.',
    },
    {
      title: '5. Compliance or Regulatory Requirements',
      content: 'Many industries (GDPR, HIPAA, PCI-DSS) require regular security audits and penetration testing. Even if you have not been attacked, compliance requirements make professional cybersecurity audits mandatory for your business operations.',
    },
  ];

  const benefits = [
    'Identify vulnerabilities before hackers exploit them',
    'Ensure compliance with industry regulations',
    'Protect sensitive business data and customer information',
    'Reduce risk of costly security breaches',
    'Gain peace of mind with professional assessment',
    'Improve overall security posture',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="Cybersecurity Audit Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            5 Signs Your Business Needs Cybersecurity Audit
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Identify security vulnerabilities before they become problems
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: November 28, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>6 min read</span>
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

          {/* Benefits Section */}
          <section className="py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Key Benefits of Cybersecurity Audits</h2>
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
              <h3 className="text-2xl font-bold mb-4">Secure Your Business Today</h3>
              <p className="text-lg opacity-90 mb-6">
                Our cybersecurity experts in Coventry can protect your business from threats
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Request Security Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/cyber-security"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  Learn About Security Services
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
            "headline": "5 Signs Your Business Needs Cybersecurity Audit",
            "description": "Identify security vulnerabilities before they become problems. Learn the key indicators that your business needs a professional cybersecurity audit.",
            "datePublished": "2024-11-28",
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
