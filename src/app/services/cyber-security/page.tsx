import type { Metadata } from 'next';
import { ServiceSchema } from '@/components/ServiceSchema';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Shield, Lock, AlertTriangle, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cyber Security | Threat Detection & Prevention Coventry | Guruji Tech Global',
  description: 'Comprehensive cybersecurity services in Coventry, UK. Threat detection, endpoint protection, network security, and vulnerability assessments for UK businesses.',
  keywords: ['cybersecurity services Coventry', 'threat detection', 'endpoint security Coventry', 'network security UK', 'vulnerability assessment UK'],
};

export default function CyberSecurityPage() {
  const features = [
    {
      icon: Shield,
      title: 'Threat Detection & Prevention',
      description: 'Advanced threat detection systems that identify and neutralize attacks before they cause damage',
    },
    {
      icon: Lock,
      title: 'Endpoint Security',
      description: 'Comprehensive protection for all devices connected to your network including laptops and servers',
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Assessments',
      description: 'Regular security audits and penetration testing to identify and fix security weaknesses',
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and alerting to detect and respond to security incidents instantly',
    },
  ];

  const benefits = [
    'Protection against cyber threats and attacks',
    'Compliance with industry regulations like GDPR and ISO',
    'Reduced risk of data breaches and data loss',
    'Quick incident response and recovery',
    'Peace of mind for your business and customers',
    'Security awareness training for your team',
  ];

  return (
    <>
      <ServiceSchema
        name="Cyber Security"
        description="Threat detection and prevention. Endpoint and network security and Vulnerability assessments."
        url="https://gurujitechglobal.com/services/cyber-security"
        imageUrl="https://gurujitechglobal.com/service-cyber-security.png"
        serviceType="Cyber Security"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service-cyber-security.png"
            alt="Cyber Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">
            Cyber Security
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Protect your business with comprehensive cybersecurity solutions
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Secure Your Digital <span className="text-[oklch(0.35_0.12_260)]">Assets</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Cyber security is at the core of everything we do. Our comprehensive security services protect your organization from cyber threats, data breaches, and compliance violations. We implement multi-layered security strategies including firewalls, endpoint protection, security awareness training, and incident response planning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that every business faces unique security challenges. Our experts work closely with you to assess your risks, design tailored security solutions, and ensure your organization remains protected against evolving threats.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/hero-image.png"
                alt="Cyber Security"
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
              Our Security <span className="text-[oklch(0.35_0.12_260)]">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection for your entire digital infrastructure
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
                Why Choose Our <span className="text-[oklch(0.35_0.12_260)]">Cyber Security?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine cutting-edge technology with proven security frameworks to deliver comprehensive protection that evolves with the threat landscape.
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
            Secure Your Business Today
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how we can protect your organization from cyber threats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
            >
              Get Security Assessment
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
