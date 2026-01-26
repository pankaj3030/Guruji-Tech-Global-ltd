import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Network Solutions Guide for UK Businesses | Guruji Tech Global',
  description: 'Complete guide to network infrastructure, LAN, WAN, and WiFi solutions. Build reliable networks for your business.',
  keywords: ['network solutions', 'network design', 'WiFi installation', 'LAN WAN setup', 'business networking'],
};

export default function NetworkSolutionsGuide() {
  const sections = [
    {
      title: 'LAN (Local Area Network) Design',
      content: 'A LAN connects devices within your office or building. Modern LANs use gigabit Ethernet switches for high-speed data transfer between computers, printers, and servers. Proper network segmentation improves security by isolating different departments or device types.',
    },
    {
      title: 'WAN (Wide Area Network) Connectivity',
      content: 'Connect multiple office locations through VPN, SD-WAN, or dedicated leased lines. WAN solutions allow seamless communication and data sharing between branches. Choose based on bandwidth requirements, reliability needs, and budget considerations.',
    },
    {
      title: 'WiFi Deployment Best Practices',
      content: 'Design WiFi networks for optimal coverage and performance: Conduct site surveys to identify dead zones, use multiple access points for large areas, implement proper channel planning to avoid interference, and secure with WPA3 enterprise encryption. Guest networks should be isolated from main business networks.',
    },
    {
      title: 'Network Security Implementation',
      content: 'Protect your network with layered security: Next-generation firewalls for threat prevention, intrusion detection and prevention systems (IDS/IPS), network access control (NAC) to authenticate devices, and regular security audits to identify vulnerabilities before they are exploited.',
    },
  ];

  const benefits = [
    'Reliable and high-speed connectivity',
    'Secure network infrastructure',
    'Scalable solutions that grow with your business',
    'Proactive monitoring and maintenance',
    'Reduced network downtime',
    'Support for remote and hybrid work',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="Network Solutions Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Network Solutions Guide for UK Businesses
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Build reliable networks with expert design and implementation
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: November 18, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>8 min read</span>
          </div>

          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[oklch(0.35_0.12_260)]">
                {section.title}
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>{section.content}</p>
              </div>
            </section>
          ))}

          {/* Benefits Section */}
          <section className="py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Key Benefits of Professional Network Solutions</h2>
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
              <h3 className="text-2xl font-bold mb-4">Need a Network Upgrade?</h3>
              <p className="text-lg opacity-90 mb-6">
                Our network experts can design and implement the perfect solution for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Get Network Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/network-solutions"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  Network Services
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
            "headline": "Network Solutions Guide for UK Businesses",
            "description": "Complete guide to network infrastructure, LAN, WAN, and WiFi solutions. Build reliable networks for your business.",
            "datePublished": "2024-11-18",
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
