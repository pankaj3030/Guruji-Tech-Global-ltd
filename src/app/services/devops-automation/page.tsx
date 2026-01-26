import type { Metadata } from 'next';
import { ServiceSchema } from '@/components/ServiceSchema';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, GitBranch, Rocket, Cpu, Layers, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DevOps & Automation | CI/CD Pipelines Coventry | Guruji Tech Global',
  description: 'CI/CD pipeline implementation, infrastructure as code, and automation services in Coventry, UK. Automated deployments and system monitoring solutions.',
  keywords: ['DevOps services Coventry', 'CI/CD pipeline', 'Infrastructure as code', 'automated deployment', 'system monitoring Coventry', 'IT automation UK'],
};

export default function DevOpsPage() {
  const features = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline',
      description: 'Automated build, test, and deployment pipelines for faster releases',
    },
    {
      icon: Layers,
      title: 'Infrastructure as Code',
      description: 'Terraform and Ansible for consistent, reproducible infrastructure',
    },
    {
      icon: Rocket,
      title: 'Automated Deployments',
      description: 'Zero-downtime deployments with rollback capabilities',
    },
    {
      icon: Cpu,
      title: 'System Monitoring',
      description: 'Real-time monitoring and alerting for proactive issue resolution',
    },
  ];

  const benefits = [
    'Faster release cycles with automated pipelines',
    'Improved software quality with automated testing',
    'Reduced manual errors through automation',
    'Better collaboration between development and operations',
    'Scalable and repeatable deployments',
    'Infrastructure version control and disaster recovery',
  ];

  return (
    <>
      <ServiceSchema
        name="DevOps & Automation"
        description="CI/CD pipeline implementation and Infrastructure as code. Automated deployments and System monitoring."
        url="https://gurujitechglobal.com/services/devops-automation"
        imageUrl="https://gurujitechglobal.com/service-devops-automation.webp"
        serviceType="DevOps Services"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service-devops-automation.webp"
            alt="DevOps Automation"
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
            DevOps & Automation
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            CI/CD pipeline implementation, infrastructure as code, and automated deployments in Coventry
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Streamline Your <span className="text-[oklch(0.35_0.12_260)]">Development Workflow</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our DevOps and automation services help organizations streamline their software development and deployment processes. We implement industry-standard CI/CD pipelines, containerization with Docker and Kubernetes, and infrastructure-as-code using Terraform and Ansible. This results in faster time-to-market and improved software quality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help UK businesses adopt DevOps best practices to achieve continuous integration, delivery, and deployment. Our services scale from initial setup to full DevOps transformation, ensuring your development workflow becomes more efficient, reliable, and scalable.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/20 to-[oklch(0.35_0.12_260)]/20 rounded-3xl blur-3xl" />
              <img
                src="/about-hero.webp"
                alt="DevOps Automation"
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
              Our DevOps <span className="text-[oklch(0.35_0.12_260)]">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end automation for modern development teams
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
                Why Choose Our <span className="text-[oklch(0.35_0.12_260)]">DevOps Services?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep expertise with proven methodologies to deliver DevOps transformation that accelerates your delivery pipeline.
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
            Ready to Accelerate Development?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how DevOps can transform your development process
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
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
