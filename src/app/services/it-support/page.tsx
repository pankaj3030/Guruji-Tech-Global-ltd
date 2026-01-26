import type { Metadata } from 'next';
import { ServiceSchema } from '@/components/ServiceSchema';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Headphones, AlertCircle, Clock, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Support & Maintenance | 24/7 Help Desk Coventry | Guruji Tech Global',
  description: 'Proactive system monitoring, issue resolution, and troubleshooting in Coventry, UK. 24/7 IT support and maintenance services for UK businesses.',
  keywords: ['IT support Coventry', 'help desk', 'IT maintenance', 'system monitoring', 'technical support Coventry', '24/7 IT support UK'],
};

export default function ITSupportPage() {
  const features = [
    {
      icon: Headphones,
      title: '24/7 Help Desk',
      description: 'Round-the-clock support with experienced technicians ready to assist',
    },
    {
      icon: AlertCircle,
      title: 'Proactive Monitoring',
      description: 'Continuous monitoring to detect and prevent issues before they occur',
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Fast incident response with defined service level agreements',
    },
    {
      icon: Wrench,
      title: 'Preventive Maintenance',
      description: 'Regular updates, patches, and maintenance to keep systems running optimally',
    },
  ];

  const benefits = [
    'Reduced downtime and improved uptime',
    'Fast resolution of IT issues',
    'Proactive problem prevention',
    'Access to expert technical support',
    'Focus on your core business while we handle IT',
    'Cost-effective support model',
  ];
    
  return (
    <>
      <ServiceSchema
        name="IT Support & Maintenance"
        description="Proactive system monitoring and Issue resolution. Software patching and updates."
        url="https://gurujitechglobal.com/services/it-support"
        imageUrl="https://gurujitechglobal.com/service-it-support.png"
        serviceType="IT Support Services"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service-it-support.png"
            alt="IT Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">
            IT Support
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            24/7 IT support and maintenance solutions in Coventry
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-[oklch(0.35_0.12_260)]">Always-On</span> IT Support
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our IT support and maintenance services ensure your IT infrastructure runs smoothly 24/7. We provide proactive monitoring, rapid incident response, and preventive maintenance to minimize downtime and maximize productivity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you need assistance with technical issues, system maintenance, or strategic IT planning, our help desk is staffed by experienced technicians who can resolve issues quickly.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
                <img
                  src="/about-hero.png"
                  alt="IT Support Team"
                  className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Support <span className="text-[oklch(0.35_0.12_260)]">Capabilities</span>
            </h2>
            <p className="text-xl text-muted- max-w-2xl mx-auto">
              Comprehensive IT support services tailored to your business needs
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
                Why Choose Our <span className="text-[oklch(0.35_0.12_260)]">IT Support?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with customer-focused service to deliver support that exceeds expectations.
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
            Need Reliable IT Support?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how we can keep your IT infrastructure running smoothly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
            >
              Get Support Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border border-white font-semibold rounded-full hover:bg-white/30 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
