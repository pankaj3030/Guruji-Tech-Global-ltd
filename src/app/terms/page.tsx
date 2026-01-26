import Link from 'next/link';
import { FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the Guruji Tech Global website (&quot;Website&quot;) and services (&quot;Services&quot;), you accept and agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Website or Services.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Guruji Tech Global provides the following IT services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Cloud Services & Solutions</li>
              <li>Web Development & Design</li>
              <li>DevOps & Automation</li>
              <li>Network Solutions</li>
              <li>Cybersecurity Services</li>
              <li>IT Support & Maintenance</li>
              <li>Microsoft 365 Services</li>
              <li>IP Telephony</li>
              <li>IT Consulting</li>
              <li>Backup & Disaster Recovery</li>
              <li>Virtualization</li>
              <li>CCTV Solutions</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-[oklch(0.35_0.12_260)]" />
              User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Provide accurate and complete information when using our services</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not transmit viruses or malicious code through our services</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-[oklch(0.35_0.12_260)]" />
              Service Availability & Warranties
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We strive to maintain high service availability (99.9% uptime SLA). However, we do not guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Uninterrupted or error-free service</li>
                <li>That defects will be corrected</li>
                <li>That the Website or its servers are free of viruses</li>
                <li>The accuracy, reliability, or completeness of content</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied.
              </p>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Guruji Tech Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
              <li>Your access to or use of or inability to access or use our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              In no event shall our total liability to you for all claims exceed the amount you paid to us for the services that gave rise to the claim.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                All content on our Website, including text, graphics, logos, images, software, and other materials, is the property of Guruji Tech Global or its licensors and is protected by UK and international copyright laws.
              </p>
              <p className="leading-relaxed">
                You may not reproduce, modify, create derivative works, distribute, or publicly display any content from our Website without our prior written consent.
              </p>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Service fees are as quoted and agreed upon in writing</li>
              <li>Payment terms: 30 days from invoice date for ongoing services</li>
              <li>50% deposit required for new project engagements</li>
              <li>Prices are exclusive of VAT unless otherwise stated</li>
              <li>Late payments may incur interest at 8% above the Bank of England base rate</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Cancellation & Termination</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Monthly Services:</strong> 30 days written notice required</li>
              <li><strong>Annual Contracts:</strong> 60 days written notice required</li>
              <li><strong>Projects:</strong> Cancellation fees may apply based on work completed</li>
              <li>We reserve the right to terminate services for breach of these Terms</li>
              <li>Upon termination, you remain liable for all outstanding fees</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Scale className="w-6 h-6 text-[oklch(0.35_0.12_260)]" />
              Dispute Resolution
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Any disputes arising from these Terms shall be governed by and construed in accordance with the laws of England and Wales. We aim to resolve disputes amicably through:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
              <li>Direct negotiation between parties</li>
              <li>Mediation with a neutral third-party mediator</li>
              <li>As a last resort, litigation in UK courts</li>
            </ol>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of our Services is also subject to our Privacy Policy, which describes how we collect, use, and protect your personal data. We comply with GDPR and UK data protection laws.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless Guruji Tech Global, its officers, directors, employees, and agents from any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
              <li>Your use of and access to our Services</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of our Services after such modifications constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in the United Kingdom.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="p-6 bg-muted/50 rounded-xl border">
              <p className="font-semibold">Guruji Tech Global</p>
              <p className="text-muted-foreground mt-2">Email: legal@gurujitechglobal.com</p>
              <p className="text-muted-foreground">Address: Coventry, United Kingdom</p>
              <p className="text-sm text-muted-foreground mt-4">
                For questions about these Terms, please contact us using the details above.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-[oklch(0.5_0.2_25)]/10 to-[oklch(0.35_0.12_260)]/10 rounded-xl border">
          <p className="text-sm text-muted-foreground">
            By using our website and services, you acknowledge that you have read, understood, and agree to these Terms of Service.
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
