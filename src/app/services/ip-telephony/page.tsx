import type { Metadata } from 'next';
import { ServiceSchema } from '@/components/ServiceSchema';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, MessageSquare, Share2, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IP Telephony | VoIP Solutions Coventry | Guruji Tech Global',
  description: 'VoIP and IP telephony solutions in Coventry, UK. Unified communications and call routing management.',
  keywords: ['IP telephony Coventry', 'VoIP UK', 'unified communications', 'call management UK'],
  openGraph: {
    title: 'IP Telephony | Guruji Tech Global',
    description: 'VoIP and IP telephony solutions with unified communications.',
    type: 'website',
  },
};

export default function IPTelephonyPage() {
  const features = [
    {
      icon: Phone,
      title: 'VoIP Systems',
      description: 'Cloud-based VoIP systems that reduce costs while improving call quality',
    },
    {
      icon: Users,
      title: 'Unified Communications',
      description: 'Integrated voice, video, and messaging solutions',
    },
    {
      icon: Clock,
      title: 'Call Routing',
      description: 'Intelligent call routing and management for efficiency',
    },
    {
      icon: MessageSquare,
      title: 'Mobile Integration',
      description: 'Seamless mobile and remote work capabilities',
    },
  ];

  const benefits = [
    'Significant cost savings on phone bills',
    'Advanced features like voicemail-to-email',
    'Seamless remote work capabilities',
    'Scalable solutions for growing teams',
    'Professional call handling and routing',
  ];

  return (
    <>
      <ServiceSchema
        name="IP Telephony"
        description="VoIP and IP telephony solutions and unified communications."
        url="https://gurujitechglobal.com/services/ip-telephony"
        imageUrl="https://gurujitechglobal.com/service-ip-telephony.webp"
        serviceType="IP Telephony"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service-ip-telephony.webp"
            alt="IP Telephony"
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
            IP Telephony
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Unified communications and VoIP solutions in Coventry
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-[oklch(0.35_0.12_260)]">IP Telephony</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our IP telephony solutions help businesses modernize their communication infrastructure. We implement VoIP systems that reduce costs while improving call quality and features. From call centers to small businesses, we have solutions that enhance team collaboration and customer experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that every business faces unique technology challenges. Our experts work closely with you to assess your needs, design tailored strategies, and ensure your technology investments deliver maximum value. From initial assessment to implementation and ongoing management, we're your trusted partner for digital transformation.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/hero-image.webp"
                alt="VoIP Systems"
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
              Our IP Telephony <span className="text-[oklch(0.35_0.12_260)]">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end VoIP and IP telephony solutions
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
                Why Choose Our <span className="text-[oklch(0.35_0.12_260)]">IP Telephony</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep expertise with proven methodologies to deliver IP telephony solutions that accelerate your business communications.
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
            Ready to Upgrade Your Communications?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how VoIP can transform your business
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
