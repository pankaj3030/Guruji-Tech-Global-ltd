import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, Trash2, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | GDPR Compliance | Guruji Tech Global',
  description: 'Guruji Tech Global privacy policy. Learn how we collect, use, and protect your personal data in compliance with GDPR and UK data protection laws.',
  alternates: {
    canonical: 'https://gurujitechglobal.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Guruji Tech Global',
    description: 'How we collect, use, and protect your personal data in compliance with GDPR.',
    type: 'website',
    url: 'https://gurujitechglobal.com/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-[oklch(0.35_0.12_260)]" />
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Guruji Tech Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website gurujitechglobal.com and use our services.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <p><strong>Personal Information:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact details (email, phone number)</li>
                <li>Job application information (CV, cover letter)</li>
                <li>Business contact information</li>
                <li>Communication preferences</li>
              </ul>
              <p className="mt-4"><strong>Technical Information:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Referring website and pages visited</li>
                <li>Time and date of visit</li>
              </ul>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-[oklch(0.35_0.12_260)]" />
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>To provide and improve our IT services</li>
              <li>To respond to your inquiries and service requests</li>
              <li>To process job applications</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Data Sharing & Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share your data only with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
              <li><strong>Service Providers:</strong> Third-party partners who assist in operating our website (e.g., email services)</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Trash2 className="w-6 h-6 text-[oklch(0.35_0.12_260)]" />
              Data Retention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only as long as necessary for the purposes outlined in this policy. Job applications are retained for 12 months. Contact form submissions are retained for 2 years for service continuity.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Cookies & Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to improve your browsing experience, analyze traffic, and personalize content. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Under GDPR and UK data protection laws, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">GDPR Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are fully committed to GDPR compliance. Our lawful bases for processing personal information include: consent, legitimate interests, and contract necessity. We conduct regular data protection impact assessments and maintain strict security measures.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Security Measures</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures including SSL/TLS encryption, secure data storage, regular security audits, and access controls to protect your information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6 text-[oklch(0.35_0.12_260)]" />
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-6 bg-muted/50 rounded-xl border">
              <p className="font-semibold">Email: privacy@gurujitechglobal.com</p>
              <p className="font-semibold mt-2">Address: Coventry, United Kingdom</p>
              <p className="text-sm text-muted-foreground mt-4">
                We will respond to your inquiry within 30 days as required by GDPR.
              </p>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-[oklch(0.5_0.2_25)]/10 to-[oklch(0.35_0.12_260)]/10 rounded-xl border">
          <p className="text-sm text-muted-foreground">
            By using our website and services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] text-white font-semibold rounded-full hover:shadow-lg transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
