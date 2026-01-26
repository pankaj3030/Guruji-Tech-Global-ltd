import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, Cloud, Shield, Code, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Services Coventry | Cloud, Cybersecurity & Web Solutions | Guruji Tech Global',
  description: 'Expert IT services in Coventry, UK. Local provider offering cloud services, cybersecurity, web development, Microsoft 365, and 24/7 IT support.',
  keywords: ['IT services Coventry', 'IT solutions Coventry UK', 'cloud services Coventry', 'web development Coventry', 'cybersecurity services Coventry', 'Microsoft 365 Coventry', 'managed IT services Coventry', 'IT support Coventry'],
  openGraph: {
    title: 'IT Services Coventry | Guruji Tech Global',
    description: 'Local IT services provider in Coventry, UK. Cloud, cybersecurity, web development, and more.',
    type: 'website',
  },
};

const serviceAreas = [
  {
    title: 'Coventry City Centre',
    description: 'Full range of IT services available to businesses in Coventry city centre',
  },
  {
    title: 'Earlsdon',
    description: 'Supporting businesses in Earlsdon and surrounding areas',
  },
  {
    title: 'Canley',
    description: 'IT solutions for Canley business park and enterprises',
  },
  {
    title: 'Bishop\'s Tachbrook',
    description: 'Comprehensive IT services for businesses near University of Warwick',
  },
  {
    title: 'Tile Hill',
    description: 'Supporting local businesses in Tile Hill area',
  },
  {
    title: 'Whitley',
    description: 'IT solutions for Whitley village and surrounding areas',
  },
];

const services = [
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'AWS, Azure, Google Cloud infrastructure design, migration, and management for Coventry businesses',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive threat protection, endpoint security, and GDPR compliance services',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites, web applications, and e-commerce solutions built in Coventry',
  },
  {
    icon: Users,
    title: 'Managed IT Services',
    description: '24/7 support, proactive monitoring, and complete IT management',
  },
];

const benefits = [
  {
    title: 'Local Expertise',
    description: 'Deep understanding of Coventry business landscape and local IT infrastructure needs',
  },
  {
    title: 'Rapid Response',
    description: 'On-site support available across Coventry with fast response times',
  },
  {
    title: 'Personal Service',
    description: 'Tailored IT solutions for Coventry businesses with dedicated account management',
  },
  {
    title: 'Competitive Pricing',
    description: 'Affordable IT services designed for Coventry small and medium businesses',
  },
  {
    title: 'Proven Track Record',
    description: 'Trusted by hundreds of businesses across Coventry and Warwickshire',
  },
  {
    title: '24/7 Availability',
    description: 'Round-the-clock support for critical IT issues and emergencies',
  },
];

export default function CoventryServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-image.png"
            alt="IT Services Coventry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            IT Services in <span className="text-[oklch(0.5_0.2_25)]">Coventry</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your local expert IT solutions provider. Cloud, cybersecurity, web development, and 24/7 support.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Serving <span className="text-[oklch(0.35_0.12_260)]">Coventry & Warwickshire</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Local IT support across all areas of Coventry and surrounding regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-[oklch(0.35_0.12_260)] flex-shrink-0" />
                  <h3 className="text-xl font-bold">{area.title}</h3>
                </div>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] p-8 rounded-3xl text-white mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-3">Available Across Coventry</h3>
              <p className="text-lg opacity-90">
                From city centre to surrounding villages, we provide comprehensive IT coverage throughout Coventry and Warwickshire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[oklch(0.35_0.12_260)]">IT Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete technology solutions for Coventry businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="bg-white p-8 rounded-3xl shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-2xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-[oklch(0.35_0.12_260)] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-[oklch(0.35_0.12_260)] font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Guruji Tech Global in <span className="text-[oklch(0.35_0.12_260)]">Coventry</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                As your local IT services provider, we understand the unique needs of Coventry businesses and deliver solutions that drive real results.
              </p>
            </div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] text-white">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-lg opacity-90 mb-8">
                  Ready to discuss your IT needs with our local team
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+44-7488564873" className="hover:underline">
                        +44-7488564873
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:contact@gurujitechglobal.com" className="hover:underline">
                        contact@gurujitechglobal.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Business Hours</div>
                      <div>
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <MapPin className="w-6 h-6 text-[oklch(0.35_0.12_260)] mb-3 inline-block" />
                  <h3 className="text-2xl font-bold mb-4 inline-block">Location</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Guruji Tech Global<br />
                  Coventry<br />
                  United Kingdom<br />
                  West Midlands
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[oklch(0.5_0.2_25)] via-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] text-white font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Guruji Tech Global - IT Services Coventry",
            "description": "Expert IT services provider in Coventry, UK. Cloud services, cybersecurity, web development, Microsoft 365, and 24/7 IT support.",
            "url": "https://gurujitechglobal.com/it-services-coventry",
            "telephone": "+44-7488564873",
            "email": "contact@gurujitechglobal.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coventry",
              "addressRegion": "West Midlands",
              "postalCode": "",
              "addressCountry": "UK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.4068,
              "longitude": -1.5197
            },
            "areaServed": [
              "Coventry",
              "Warwickshire",
              "West Midlands"
            ],
            "openingHours": "Mo-Fr 09:00-18:00 Sa 10:00-16:00",
            "priceRange": "££",
            "sameAs": "https://gurujitechglobal.com"
          })
        }}
      />
    </>
  );
}
