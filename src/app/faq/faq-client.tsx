'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: 'Cloud Services',
    questions: [
      {
        q: 'What is cloud migration and how long does it take?',
        a: 'Cloud migration is the process of moving your data, applications, and IT infrastructure from on-premises servers to cloud environments. The timeline varies based on complexity, but most migrations can be completed in 2-4 weeks with proper planning. We ensure minimal disruption to your business operations during the migration process.',
      },
      {
        q: 'What are the benefits of cloud computing for small businesses?',
        a: 'Cloud computing offers small businesses reduced capital expenditure, enhanced scalability, improved disaster recovery, and access to enterprise-grade security. You can scale resources up or down based on demand, paying only for what you use. This makes enterprise-level technology accessible to businesses of all sizes.',
      },
      {
        q: 'What is the difference between public, private, and hybrid cloud?',
        a: 'Public cloud is shared infrastructure offered by providers like AWS, Azure, and Google Cloud. Private cloud is dedicated infrastructure used exclusively by one organization. Hybrid cloud combines both, allowing you to keep sensitive data on-premises while leveraging public cloud for other workloads. The best choice depends on your security, compliance, and performance requirements.',
      },
    ],
  },
  {
    category: 'Cybersecurity',
    questions: [
      {
        q: 'What is penetration testing and why does my business need it?',
        a: 'Penetration testing (pen testing) is a simulated cyberattack on your IT systems to identify vulnerabilities before hackers can exploit them. Regular pen testing is essential for GDPR compliance, protecting customer data, and preventing costly data breaches. We perform both automated and manual testing to find and fix security weaknesses.',
      },
      {
        q: 'How can we improve our cybersecurity on a budget?',
        a: 'You can significantly improve cybersecurity without breaking the budget by: implementing multi-factor authentication (MFA), keeping software updated, training employees on security awareness, using strong password policies, and investing in reliable endpoint protection. Start with the basics and layer additional security as you grow. We offer cost-effective security packages for businesses of all sizes.',
      },
      {
        q: 'What are the signs that my business has been compromised?',
        a: 'Watch for these warning signs: unexpected slow computer performance, unauthorized transactions, emails sent from your account that you didn\'t send, files modified or deleted without your knowledge, frequent pop-ups or redirects, and disabled security software. If you notice any of these signs, contact IT support immediately. We offer emergency incident response services.',
      },
    ],
  },
  {
    category: 'Microsoft 365',
    questions: [
      {
        q: 'How long does Microsoft 365 migration take?',
        a: 'Microsoft 365 migration typically takes 1-4 weeks depending on the complexity of your current setup. Small businesses with simple email needs can migrate in 1-2 weeks, while larger organizations with legacy systems may take 3-4 weeks. We use proven migration methodologies to ensure zero data loss and minimal downtime.',
      },
      {
        q: 'What\'s the difference between Office 365 and Microsoft 365?',
        a: 'Microsoft 365 is the modern branding for Office 365. While both refer to Microsoft\'s cloud productivity suite, Microsoft 365 emphasizes cloud-first approach and includes additional services like Microsoft Teams, Intune for device management, and security features. Both terms are often used interchangeably in the industry.',
      },
      {
        q: 'Can I keep using on-premises Exchange with Microsoft 365?',
        a: 'Yes, you can use a hybrid approach where some users stay on-premises while others move to the cloud. This is ideal during transition periods or for businesses with specific compliance requirements. We help design hybrid architectures that provide flexibility while maintaining security and manageability.',
      },
    ],
  },
  {
    category: 'IT Support',
    questions: [
      {
        q: 'What is included in 24/7 IT support?',
        a: 'Our 24/7 IT support includes: round-the-clock help desk access, remote troubleshooting, proactive system monitoring, incident response, software patch management, and emergency support. We have defined service level agreements (SLAs) ensuring specific response times for different issue priorities. You get comprehensive coverage whenever you need it.',
      },
      {
        q: 'How quickly do you respond to IT issues?',
        a: 'Our response times are defined in our service level agreements (SLAs): Critical issues (system down) within 1 hour, High priority (major business impact) within 2 hours, Medium priority (limited impact) within 4 hours, Low priority (minor issues) within 8 hours. We consistently meet or exceed these response times.',
      },
      {
        q: 'What is the difference between break-fix and managed IT services?',
        a: 'Break-fix IT services charge per hour or per incident when something breaks. Managed IT services provide comprehensive, ongoing support for a flat monthly fee, covering everything from maintenance to strategic planning. Managed services are typically more cost-effective and proactive, preventing issues before they occur.',
      },
    ],
  },
  {
    category: 'Web Development',
    questions: [
      {
        q: 'How long does it take to build a custom website?',
        a: 'The timeline depends on complexity: A simple informational website can be built in 2-4 weeks, while complex web applications may take 8-16 weeks. We follow agile development processes with regular updates and milestones. E-commerce sites typically take longer due to payment integration and security requirements.',
      },
      {
        q: 'What makes a website SEO-friendly?',
        a: 'An SEO-friendly website includes: fast loading speed (under 3 seconds), mobile-responsive design, proper heading structure (H1-H6), descriptive meta tags, alt text for images, clean URL structure, XML sitemap, and high-quality, relevant content. We build SEO optimization into every website from the start.',
      },
      {
        q: 'Should I choose a custom website or a template-based site?',
        a: 'Choose a custom website if: you need unique functionality, you have specific business requirements, you want complete control over design, or you\'re building for growth. Templates are suitable for: tight budgets, simple projects, temporary sites, or non-critical pages. We offer both options and help you make the right choice for your business goals.',
      },
    ],
  },
];

export default function FAQClient() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-hero.png"
            alt="IT FAQ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            IT <span className="text-[oklch(0.5_0.2_25)]">FAQ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about cloud services, cybersecurity, Microsoft 365, and web development
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[oklch(0.35_0.12_260)]">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const id = `${categoryIndex}-${index}`;
                  const isOpen = openItems[id];
                  return (
                    <div key={id} className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-muted/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold pr-4 flex-1">
                          {faq.q}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[oklch(0.35_0.12_260)] flex-shrink-0 mt-0.5" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[oklch(0.35_0.12_260)] flex-shrink-0 mt-0.5" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border">
                          <p className="pt-4">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Our IT experts are ready to help you find the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+44-7488564873"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
            >
              Call Us
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.flatMap(category =>
              category.questions.map((faq, index) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            )
          })
        }}
      />
    </div>
  );
}
