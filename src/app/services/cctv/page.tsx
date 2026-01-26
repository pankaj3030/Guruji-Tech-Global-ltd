import type { Metadata } from 'next';
import { ServiceSchema } from '@/components/ServiceSchema';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Shield, Video, Camera, Eye, Users, Monitor } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CCTV Configuration & Maintenance | Security Surveillance Coventry | Guruji Tech Global',
  description: 'CCTV system design and configuration in Coventry, UK. Installation and setup of IP cameras and monitoring and access management.',
  keywords: ['CCTV Coventry', 'security surveillance UK', 'IP cameras', 'CCTV installation'],
  openGraph: {
    title: 'CCTV Configuration & Maintenance | Guruji Tech Global',
    description: 'CCTV system design, installation, and monitoring.',
    type: 'website',
  },
};

export default function CCTVPage() {
  const features = [
    {
      icon: Video,
      title: 'CCTV System Design',
      description: 'Custom surveillance system design and configuration',
    },
    {
      icon: Camera,
      title: 'IP Camera Installation',
      description: 'High-definition IP camera installation and setup',
    },
    {
      icon: Monitor,
      title: 'Monitoring & Access',
      description: 'Remote monitoring and access management',
    },
    {
      icon: Eye,
      title: 'Advanced Video Analytics',
      description: 'Smart video analytics for security insights',
    },
  ];

  const benefits = [
    'Enhanced security and surveillance',
    'Deterrence of criminal activity',
    'Remote monitoring capabilities',
    'Evidence collection for investigations',
    'Peace of mind for property owners',
  ];

  return (
    <>
      <ServiceSchema
        name="CCTV Configuration & Maintenance"
        description="CCTV system design and configuration and Installation and setup of IP cameras and Monitoring and access management."
        url="https://gurujitechglobal.com/services/cctv"
        imageUrl="https://gurujitechglobal.com/service-cctv.webp"
        serviceType="CCTV Configuration & Maintenance"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service-cctv.webp"
            alt="CCTV Configuration & Maintenance"
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
            CCTV Configuration & Maintenance
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Security surveillance solutions in Coventry
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-[oklch(0.35_0.12_260)]">CCTV Configuration & Maintenance</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our CCTV and surveillance solutions help protect your premises, assets, and people. We design and install comprehensive surveillance systems using high-definition IP cameras, network video recorders, and advanced video management software. From small retail shops to large industrial facilities, we have solutions for every need.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that every business faces unique technology challenges. Our experts work closely with you to assess your needs, design tailored strategies, and ensure your technology investments deliver maximum value. From initial assessment to implementation and ongoing management, we're your trusted partner for digital transformation.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/service-cctv.webp"
                alt="CCTV Systems"
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
              Our CCTV & Surveillance <span className="text-[oklch(0.35_0.12_260)]">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced security and monitoring systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border-border">
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
                Why Choose Our <span className="text-[okl0.35_0.12_260)]">CCTV</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep expertise with proven methodologies to deliver surveillance solutions that protect your entire premises.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-border">
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
            Ready to Secure Your Premises?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how CCTV can protect your property
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
