import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Guide to Backup & Disaster Recovery | Guruji Tech Global',
  description: 'Protect your business data with comprehensive backup and disaster recovery strategies. Learn best practices for UK businesses.',
  keywords: ['backup disaster recovery', 'data protection', 'business continuity', 'backup strategy', 'disaster recovery plan'],
};

export default function BackupDisasterRecoveryGuide() {
  const sections = [
    {
      title: 'Why Data Backup is Essential',
      content: 'Data is one of your most valuable business assets. Data loss can occur from hardware failure, cyber attacks, human error, or natural disasters. Without proper backups, businesses risk losing critical data permanently, which can be catastrophic.',
    },
    {
      title: 'Types of Backup Solutions',
      content: 'Modern backup strategies include: Local backups to external drives or NAS for fast recovery, cloud backups for offsite storage and disaster protection, hybrid backups combining both approaches for optimal protection, and automated backups that run continuously without manual intervention.',
    },
    {
      title: 'Developing a Disaster Recovery Plan',
      content: 'A disaster recovery plan outlines steps to restore operations after data loss. Key components include: identifying critical systems and data, establishing recovery time objectives (RTO) and recovery point objectives (RPO), defining roles and responsibilities during emergencies, and documenting communication procedures.',
    },
    {
      title: 'Testing Your Backups Regularly',
      content: 'Backups are only effective if they work when needed. Regular testing ensures data integrity and validates recovery procedures. We recommend testing backups quarterly and after any major system changes. Many businesses discover backup failures only when it is too late.',
    },
  ];

  const bestPractices = [
    '3-2-1 backup rule (3 copies, 2 media types, 1 offsite)',
    'Automated, scheduled backups',
    'Encrypted backup data for security',
    'Regular backup testing and verification',
    'Documented recovery procedures',
    'Monitoring and alerts for backup failures',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="Backup Disaster Recovery Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Complete Guide to Backup & Disaster Recovery
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Protect your business data with proven backup strategies
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Published: October 28, 2024</span>
            <span className="mx-4">•</span>
            <Clock className="w-4 h-4" />
            <span>9 min read</span>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[oklch(0.35_0.12_260)]">
                {section.title}
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>{section.content}</p>
              </div>
            </div>
          ))}

          {/* Best Practices */}
          <section className="py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Backup Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[oklch(0.5_0.2_25)] flex-shrink-0 mt-0.5" />
                  <span className="text-lg flex-1">{practice}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Protect Your Business Data</h3>
              <p className="text-lg opacity-90 mb-6">
                Our disaster recovery solutions ensure your data is always safe and recoverable
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Get Backup Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/backup-disaster-recovery"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
                >
                  Backup Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Complete Guide to Backup & Disaster Recovery",
            "description": "Protect your business data with comprehensive backup and disaster recovery strategies. Learn best practices for UK businesses.",
            "datePublished": "2024-10-28",
            "author": {
              "@type": "Organization",
              "name": "Guruji Tech Global"
            }
          })
        }}
      />
    </div>
  );
}
