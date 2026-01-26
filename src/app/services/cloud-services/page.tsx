import type { Metadata } from 'next';
import ServiceSchema from '@/components/ServiceSchema';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Cloud, Server, Database, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cloud Services | Infrastructure Design & Deployment | Guruji Tech Global',
  description: 'Cloud infrastructure design, deployment, and management. Public, private, and hybrid cloud solutions tailored for UK businesses. AWS, Azure, Google Cloud expertise.',
  keywords: ['cloud services', 'cloud infrastructure', 'AWS', 'Azure', 'Google Cloud', 'cloud migration', 'cloud deployment'],
};

export default function CloudServicesPage() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Design',
      description: 'Custom cloud architectures designed for scalability, performance, and cost-efficiency',
    },
    {
      icon: Server,
      title: 'Deployment Solutions',
      description: 'Seamless deployment of applications and workloads to public, private, or hybrid clouds',
    },
    {
      icon: Database,
      title: 'Migration Services',
      description: 'Expert cloud migration from on-premises to cloud environments with minimal disruption',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance management for cloud resources',
    },
  ];

  const benefits = [
    'Reduced IT infrastructure costs with pay-as-you-go model',
    'Enhanced scalability to grow with your business',
    'Improved disaster recovery and business continuity',
    'Access to enterprise-grade security and compliance',
    'Faster deployment of applications and services',
    '24/7 monitoring and support',
  ];

  return (
    <>
      <ServiceSchema
        name="Cloud Services"
        description="Cloud infrastructure design and deployment. Public, private, and hybrid cloud solutions."
        url="https://gurujitechglobal.com/services/cloud-services"
        imageUrl="https://gurujitechglobal.com/service-cloud-services.png"
        serviceType="Cloud Infrastructure"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service-cloud-services.png"
            alt="Cloud Services"
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
            Cloud Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive cloud infrastructure design, deployment, and management solutions
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Transform Your Business with <span className="text-[oklch(0.35_0.12_260)]">Cloud Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Guruji Tech Global, we provide comprehensive cloud services that help businesses transform their IT infrastructure. Our cloud solutions enable organizations to scale resources on-demand, reduce capital expenditures, and improve operational efficiency. We work with leading cloud providers including AWS, Azure, and Google Cloud to deliver tailored solutions that meet your specific business requirements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to migrate existing applications, build new cloud-native solutions, or optimize your current cloud setup, our experts have the knowledge and experience to guide you through every step of your cloud journey.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/hero-image.png"
                alt="Cloud Infrastructure"
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
              Our Cloud <span className="text-[oklch(0.35_0.12_260)]">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end cloud services tailored to your needs
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
                Why Choose Our <span className="text-[oklch(0.35_0.12_260)]">Cloud Services?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our cloud services are designed to help UK businesses leverage the power of cloud computing while maintaining security, compliance, and cost-efficiency.
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how our cloud solutions can transform your business
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
