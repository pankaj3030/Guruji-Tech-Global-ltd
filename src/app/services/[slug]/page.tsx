import Link from 'next/link';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { services, getServiceBySlug } from '@/lib/data/services';
import { notFound } from 'next/navigation';

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
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
            {service.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border mb-12">
                <h2 className="text-3xl font-bold mb-6">About This Service</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {service.detailedDescription}
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border mb-12">
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[oklch(0.35_0.12_260)] flex-shrink-0 mt-0.5" />
                      <span className="text-lg flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
                <h2 className="text-3xl font-bold mb-6">Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[oklch(0.5_0.2_25)] flex-shrink-0 mt-0.5" />
                      <span className="text-lg flex-1">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Get Started</h3>
                <p className="mb-6">
                  Ready to transform your business with {service.title}?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 w-full px-6 py-3 bg-white text-[oklch(0.35_0.12_260)] font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Other Services</h3>
                <div className="space-y-3">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 5)
                    .map((otherService) => (
                      <Link
                        key={otherService.id}
                        href={`/services/${otherService.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                      >
                        <img
                          src={otherService.image}
                          alt={otherService.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <span className="text-sm font-medium group-hover:text-[oklch(0.35_0.12_260)] transition-colors">
                          {otherService.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how {service.title} can help your business achieve its goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-[oklch(0.5_0.2_25)] via-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] text-white font-bold rounded-full flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white border-2 border-[oklch(0.35_0.12_260)] text-[oklch(0.35_0.12_260)] font-semibold rounded-full hover:bg-[oklch(0.35_0.12_260)] hover:text-white transition-all text-lg"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
