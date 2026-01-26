import type { Metadata } from 'next';
import { ServiceSchema } from '@/components/ServiceSchema';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Lightbulb, Target, TrendingUp, BookOpen, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Consulting | Strategy & Digital Transformation Coventry | Guruji Tech Global',
  description: 'IT strategy and roadmap planning in Coventry, UK. Digital transformation advisory and technology optimization.',
  keywords: ['IT consulting Coventry', 'digital transformation UK', 'IT strategy planning', 'technology advisory'],
  openGraph: {
    title: 'IT Consulting | Guruji Tech Global',
    description: 'IT strategy and digital transformation advisory.',
    type: 'website',
  },
};

export default function ITConsultingPage() {
  const features = [
    {
      icon: Lightbulb,
      title: 'IT Strategy',
      description: 'Strategic IT planning aligned with business objectives',
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Complete digital transformation advisory and implementation',
    },
    {
      icon: TrendingUp,
      title: 'Technology Optimization',
      description: 'Optimizing technology investments and operations',
    },
    {
      icon: BookOpen,
      title: 'Infrastructure Assessment',
      description: 'Comprehensive IT infrastructure evaluation',
    },
  ];

  const benefits = [
    'Clear IT strategy aligned with business objectives',
    'Improved decision-making for technology investments',
    'Successful digital transformation',
    'Optimized IT operations',
    'Competitive advantage through technology',
  ];

  return (
    <>
      <ServiceSchema
        name="IT Consulting"
        description="IT strategy and roadmap planning and Digital transformation advisory."
        url="https://gurujitechglobal.com/services/it-consulting"
        imageUrl="https://gurujitechglobal.com/service-it-consulting.webp"
        serviceType="IT Consulting"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service-it-consulting.webp"
            alt="IT Consulting"
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
            IT Consulting
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Strategic IT planning and digital transformation advisory in Coventry
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-[oklch(0.35_0.12_260)]">IT Consulting</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our IT consulting services help organizations align their technology investments with business goals. We provide strategic guidance on digital transformation, technology modernization, and IT governance. Our consultants bring decades of experience across various industries to help you make informed decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that every business faces unique technology challenges. Our experts work closely with you to assess your needs, design tailored strategies, and ensure your technology investments deliver maximum value. From initial assessment to implementation and ongoing management, we're your trusted partner for digital transformation.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/hero-image.webp"
                alt="IT Consulting"
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
              Our IT Consulting <span className="text-[oklch(0.35_0.12_260)]">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic advisory for technology-driven growth
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
                Why Choose Our <span className="text-[oklch(0.35_0.12_260)]">IT Consulting</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep expertise with proven methodologies to deliver strategic IT guidance that accelerates your business growth.
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how IT consulting can help your business succeed
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
