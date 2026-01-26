'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Users, Target, Award } from 'lucide-react';
import { services } from '@/lib/data/services';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-image.png"
            alt="Guruji Tech Global"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="bg-gradient-to-r from-[oklch(0.35_0.12_260)] via-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] bg-clip-text text-transparent">
              Innovative IT Solutions
            </span>
          </h1>
          <p
            className={`text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Transforming businesses through cutting-edge technology solutions
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-[oklch(0.5_0.2_25)] via-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] text-white font-bold rounded-full flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all text-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[oklch(0.35_0.12_260)]">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={`group p-8 bg-card border border-border rounded-3xl hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-2 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[oklch(0.5_0.2_25)]/10 to-[oklch(0.35_0.12_260)]/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[oklch(0.35_0.12_260)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[oklch(0.35_0.12_260)] font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[oklch(0.35_0.12_260)] text-white font-semibold rounded-full hover:bg-[oklch(0.3_0.12_260)] hover:shadow-lg transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-[oklch(0.35_0.12_260)]">Guruji Tech Global</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We are committed to delivering excellence and innovation in every project we undertake.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our certified professionals bring years of experience and deep technical knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Client-Focused Approach</h3>
                    <p className="text-muted-foreground">
                      We understand your unique challenges and deliver customized solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      Successfully delivered solutions to numerous satisfied clients across industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/about-hero.png"
                alt="Our Team"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">13+</div>
              <div className="text-xl opacity-90">IT Services</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-xl opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help your business succeed with our innovative IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-[oklch(0.5_0.2_25)] via-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] text-white font-bold rounded-full flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white border-2 border-[oklch(0.35_0.12_260)] text-[oklch(0.35_0.12_260)] font-semibold rounded-full hover:bg-[oklch(0.35_0.12_260)] hover:text-white transition-all text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
