import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Virtualization Benefits for UK Businesses | Guruji Tech Global',
  description: 'Reduce costs and improve efficiency with server and desktop virtualization. Learn how virtualization can transform your IT infrastructure.',
  keywords: ['virtualization benefits', 'server virtualization', 'VDI', 'VMware', 'Hyper-V', 'IT cost reduction'],
};

export default function VirtualizationBenefits() {
  const benefits = [
    {
      title: 'Reduced Hardware and Energy Costs',
      content: 'Virtualization allows multiple virtual servers to run on a single physical server. This consolidation can reduce hardware costs by 50-70%. Fewer physical servers also means lower power consumption and cooling requirements, leading to significant energy savings.',
    },
    {
      title: 'Improved Resource Utilization',
      content: 'Physical servers often run at 10-20% capacity, wasting resources. Virtualization dynamically allocates resources to virtual machines based on demand. This increases utilization rates to 60-80%, getting more value from your existing hardware.',
    },
    {
      title: 'Faster Provisioning and Scaling',
      content: 'Deploy new virtual servers in minutes instead of weeks. No need to order hardware, wait for delivery, or perform physical installation. Clone existing VM templates for consistent, rapid deployment of new workloads.',
    },
    {
      title: 'Enhanced Disaster Recovery',
      content: 'Virtual machines can be backed up as simple files and restored to any hardware. Failover capabilities allow automatic migration to other physical hosts if a server fails. This dramatically reduces recovery time and improves business continuity.',
    },
    {
      title: 'Simplified IT Management',
      content: 'Manage multiple workloads through centralized management consoles. Monitor performance, allocate resources, and apply patches across all virtual machines from a single interface. Reduce administrative overhead and improve IT efficiency.',
    },
  ];

  const features = [
    'Server consolidation',
    'Desktop virtualization (VDI)',
    'High availability solutions',
    'Automated backups and snapshots',
    'Dynamic resource allocation',
    'Reduced physical footprint',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="Virtualization Benefits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Virtualization Benefits for UK Businesses
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Reduce costs and improve efficiency with server and desktop virtualization
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: October 20, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>7 min read</span>
          </div>

          {benefits.map((benefit, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[oklch(0.35_0.12_260)]">
                {benefit.title}
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>{benefit.content}</p>
              </div>
            </section>
          ))}

          {/* Features List */}
          <section className="py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Key Virtualization Features</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Virtualize Your Infrastructure?</h3>
              <p className="text-lg opacity-90 mb-6">
                Our virtualization experts can design and implement the optimal solution for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Get Virtualization Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/virtualization"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  Virtualization Services
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
            "headline": "Virtualization Benefits for UK Businesses",
            "description": "Reduce costs and improve efficiency with server and desktop virtualization. Learn how virtualization can transform your IT infrastructure.",
            "datePublished": "2024-10-20",
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
