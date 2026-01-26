'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase, Users } from 'lucide-react';
import { jobs } from '@/lib/data/jobs';

export default function CareersClient() {
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
            src="/careers-hero.png"
            alt="Careers at Guruji Tech Global"
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
            Join Our <span className="text-[oklch(0.5_0.2_25)]">Team</span>
          </h1>
          <p
            className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Build your career with a team that's transforming businesses through technology
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Work With <span className="text-[oklch(0.35_0.12_260)]">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a team where innovation, collaboration, and growth are part of our DNA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and professional development programs to help you advance your career.',
                icon: Users,
              },
              {
                title: 'Innovative Projects',
                description: 'Work on cutting-edge technologies and challenging projects that make a real impact.',
                icon: Briefcase,
              },
              {
                title: 'Collaborative Culture',
                description: 'Be part of a supportive team that values collaboration and knowledge sharing.',
                icon: Users,
              },
              {
                title: 'Flexible Work',
                description: 'Enjoy flexible working arrangements and a healthy work-life balance.',
                icon: Clock,
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className={`p-6 bg-white rounded-3xl shadow-lg border border-border hover:shadow-xl transition-all ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open <span className="text-[oklch(0.35_0.12_260)]">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover your next career opportunity with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className={`bg-white p-8 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-all group ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-[oklch(0.35_0.12_260)]/10 text-[oklch(0.35_0.12_260)] rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[oklch(0.35_0.12_260)] transition-colors">
                  {job.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {job.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-[oklch(0.5_0.2_25)]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Link
                  href={`/careers/${job.id}`}
                  className="inline-flex items-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[oklch(0.5_0.2_25)] via-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] text-white font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[oklch(0.5_0.2_25)] via-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all text-lg"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
