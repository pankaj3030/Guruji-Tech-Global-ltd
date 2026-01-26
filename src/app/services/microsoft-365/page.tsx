import type { Metadata } from 'next';
import { ServiceSchema } from '@/components/ServiceSchema';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Users, Calendar, FileText, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Microsoft 365 | Setup & Migration Coventry | Guruji Tech Global',
  description: 'Microsoft 365 setup, migration, and management services in Coventry, UK. Exchange, SharePoint, OneDrive, and Teams deployment for UK businesses.',
  keywords: ['Microsoft 365 setup Coventry', 'Office 365 Coventry', 'Exchange Online', 'SharePoint', 'OneDrive', 'Teams Coventry'],
};

export default function Microsoft365Page() {
  const features = [
    {
      icon: Users,
      title: 'User Management',
      description: 'Efficient user provisioning, licensing management, and access control',
    },
    {
      icon: Calendar,
      title: 'Exchange & Email',
      description: 'Professional email setup with spam protection and archiving',
    },
    {
      icon: FileText,
      title: 'SharePoint & OneDrive',
      description: 'Document management and cloud storage for collaboration',
    },
    {
      icon: MessageSquare,
      title: 'Microsoft Teams',
      description: 'Unified communications and collaboration platform setup',
    },
  ];

  const benefits = [
    'Enhanced team collaboration with integrated productivity suite',
    'Improved productivity with cloud-based tools',
    'Seamless email and calendar management',
    'Access to enterprise-grade security and compliance',
    'Reduced IT maintenance overhead',
    'Seamless integration with existing Microsoft infrastructure',
  ];

  return (
    <>
      <ServiceSchema
        name="Microsoft 365"
        description="Microsoft 365 setup and migration. Exchange, SharePoint, OneDrive, and Teams management."
        url="https://gurujitechglobal.com/services/microsoft-365"
        imageUrl="https://gurujitechglobal.com/service-microsoft-365.webp"
        serviceType="Microsoft 365 Services"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service-microsoft-365.webp"
            alt="Microsoft 365"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left text-white">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">
            Microsoft 365
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Setup, migration, and management solutions in Coventry
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Empower Your Team with <span className="text-[oklch(0.35_0.12_260)]">Microsoft 365</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Microsoft 365 services help organizations leverage the full power of Microsoft's productivity suite. From initial planning and migration to ongoing management and optimization, we ensure your team can collaborate effectively and securely. We specialize in seamless migrations from on-premises Exchange and legacy systems to Microsoft 365.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that productivity is essential for business success. Our 365 services include Exchange Online, SharePoint, OneDrive, Microsoft Teams, and more. We help UK businesses enable remote work, improve collaboration, and boost productivity with Microsoft's leading business applications.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/about-hero.webp"
                alt="Microsoft 365 Setup"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Microsoft 365 <span className="text-[oklch(0.35_0.12_260)]">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end Microsoft 365 solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-border">
                <div className="w-16 h-16 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our <span className="text-[oklch(0.35_0.12_260)]">Microsoft 365 Services?</span>
              </h2>
              <p className="text-lg text-muted-mb-8">
                We combine deep Microsoft expertise with proven methodologies to deliver migration that exceeds expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[oklch(0.5_0.2_25)] flex-shrink-0 mt-0.5" />
                    <span className="text-lg flex-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Enhance Your Team Productivity?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how Microsoft 365 can transform your workspace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
