'use client';

import { useState, useEffect } from 'react';
import { Target, Users, Award, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function AboutClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-hero.webp"
            alt="About Guruji Tech Global"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            About <span className="text-[oklch(0.5_0.2_25)]">Guruji Tech Global</span>
          </h1>
          <p
            className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Transforming businesses through innovative technology solutions
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-[oklch(0.35_0.12_260)]">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Guruji Tech Global was founded with a vision to transform how businesses leverage technology.
                Based in Coventry, United Kingdom, we have grown from a small startup to a leading IT
                solutions provider, serving clients across various industries.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our journey began with a simple belief: that technology should empower businesses,
                not complicate them. Over the years, we have stayed true to this principle,
                delivering solutions that are innovative, reliable, and tailored to our clients' needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we are proud to be a trusted technology partner for organizations worldwide,
                helping them navigate the digital landscape and achieve their business goals.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/hero-image.webp"
                alt="Our Team at Work"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth,
                enhance efficiency, and create lasting value. We are committed to delivering
                excellence in every project, building long-term partnerships based on trust and results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most trusted and innovative IT solutions provider globally,
                recognized for our expertise, integrity, and commitment to helping businesses
                succeed in the digital age. We aim to set the standard for excellence in technology services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[oklch(0.35_0.12_260)]">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for the highest quality in everything we deliver, ensuring superior results for our clients.',
                icon: Award,
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and creative approaches to solve complex business challenges.',
                icon: Lightbulb,
              },
              {
                title: 'Integrity',
                description: 'We operate with transparency, honesty, and ethical practices in all our interactions.',
                icon: CheckCircle2,
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork, both within our company and with our clients.',
                icon: Users,
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className={`p-6 bg-white rounded-3xl shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-2 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-2xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-[oklch(0.35_0.12_260)]">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The experienced professionals driving our success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO & Founder',
                description: 'Visionary leader with over 15 years of experience in IT and business strategy.',
              },
              {
                name: 'Sarah Johnson',
                role: 'Chief Technology Officer',
                description: 'Technology expert specializing in cloud architecture and digital transformation.',
              },
              {
                name: 'Michael Brown',
                role: 'Head of Operations',
                description: 'Operations strategist ensuring efficient delivery of all our services.',
              },
            ].map((member, index) => (
              <div
                key={member.name}
                className={`bg-white p-6 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-all ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-[oklch(0.35_0.12_260)] font-semibold text-center mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
