import type { Metadata } from 'next';
import { ServiceSchema } from '@/components/ServiceSchema';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Code, Smartphone, Layout, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Development | Custom Websites & Applications Coventry | Guruji Tech Global',
  description: 'Custom website and web application development in Coventry, UK. Responsive design, SEO optimization, and high-performance web solutions for UK businesses.',
  keywords: ['web development Coventry', 'custom websites Coventry', 'web applications UK', 'responsive design', 'SEO optimization'],
};

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored web applications built with modern frameworks like React, Next.js, and Node.js',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that work perfectly across all devices and screen sizes',
    },
    {
      icon: Layout,
      title: 'UX/UI Excellence',
      description: 'Intuitive user interfaces with seamless navigation and engaging interactions',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast-loading pages optimized for speed, accessibility, and search engines',
    },
  ];

  const benefits = [
    'Modern, responsive designs that work on all devices',
    'Fast-loading pages for better user experience',
    'SEO-optimized to improve search rankings',
    'Secure and scalable architecture',
    'Custom solutions tailored to your business needs',
    'Ongoing maintenance and support',
  ];

  return (
    <>
      <ServiceSchema
        name="Web Development"
        description="Custom website and web application development. Responsive UI/UX design and SEO and performance optimization."
        url="https://gurujitechglobal.com/services/web-development"
        imageUrl="https://gurujitechglobal.com/service-web-development.webp"
        serviceType="Web Development"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service-web-development.webp"
            alt="Web Development"
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
            Web Development
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Custom websites and web applications built for performance and user experience
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Building <span className="text-[oklch(0.35_0.12_260)]">Exceptional Web Experiences</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our web development team creates stunning, high-performance websites and web applications that drive business results. We use modern frameworks and technologies including React, Next.js, Node.js, and more to build scalable, maintainable solutions. From corporate websites to complex web applications, we deliver excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We focus on creating solutions that not only look great but also perform exceptionally. Our development process emphasizes code quality, security, and scalability to ensure your web presence can grow with your business.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/about-hero.webp"
                alt="Web Development Team"
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
              Our Web <span className="text-[oklch(0.35_0.12_260)]">Development Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web solutions from design to deployment
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
                Why Choose Our <span className="text-[oklch(0.35_0.12_260)]">Web Services?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine cutting-edge technology with deep understanding of user needs to deliver web solutions that exceed expectations.
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
            Ready to Build Your Web Presence?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how we can create the perfect web solution for your business
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
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
