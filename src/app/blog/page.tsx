import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Blog | Cloud, Cybersecurity & Web Development Insights | Guruji Tech Global',
  description: 'Expert insights on cloud services, cybersecurity, web development, and Microsoft 365. Stay updated with the latest IT trends and best practices.',
  keywords: ['IT blog', 'technology insights', 'cloud computing blog', 'cybersecurity tips', 'web development guides', 'Microsoft 365 help', 'IT tutorials Coventry'],
  openGraph: {
    title: 'IT Blog | Guruji Tech Global',
    description: 'Expert insights on cloud, cybersecurity, web development, and IT solutions.',
    type: 'website',
  },
};

const recentPosts = [
  {
    title: 'What is Cloud Migration? A Complete Guide for UK Businesses',
    excerpt: 'Everything you need to know about moving to cloud infrastructure',
    date: '2024-12-01',
    readTime: '8 min read',
    category: 'Cloud Computing',
    image: '/blog-hero.webp',
    slug: 'what-is-cloud-migration',
  },
  {
    title: '5 Signs Your Business Needs Cybersecurity Audit',
    excerpt: 'Identify security vulnerabilities before they become problems',
    date: '2024-11-28',
    readTime: '6 min read',
    category: 'Cybersecurity',
    image: '/blog-hero.webp',
    slug: 'cybersecurity-audit-signs',
  },
  {
    title: 'Microsoft 365 vs Google Workspace: Which is Right for You?',
    excerpt: 'Compare features, pricing, and benefits of leading productivity suites',
    date: '2024-11-20',
    readTime: '10 min read',
    category: 'Microsoft 365',
    image: '/blog-hero.webp',
    slug: 'microsoft-365-vs-google-workspace',
  },
  {
    title: 'How to Choose a Web Development Agency in Coventry',
    excerpt: 'Tips for finding the right development partner for your project',
    date: '2024-11-15',
    readTime: '7 min read',
    category: 'Web Development',
    image: '/blog-hero.webp',
    slug: 'choose-web-development-agency-coventry',
  },
  {
    title: 'Cloud vs On-Premises: Which is Better for Your Business?',
    excerpt: 'Compare costs, security, and flexibility of cloud and traditional IT',
    date: '2024-11-10',
    readTime: '12 min read',
    category: 'Cloud Computing',
    image: '/blog-hero.webp',
    slug: 'cloud-vs-on-premises',
  },
  {
    title: '5 Benefits of IP Telephony for UK Businesses',
    excerpt: 'Discover how VoIP and IP telephony can reduce costs and improve communication',
    date: '2024-11-08',
    readTime: '6 min read',
    category: 'IT Support',
    image: '/blog-hero.webp',
    slug: '5-benefits-ip-telephony',
  },
  {
    title: 'IT Consulting Strategies for Business Growth',
    excerpt: 'Align technology investments with your business objectives',
    date: '2024-10-15',
    readTime: '7 min read',
    category: 'IT Support',
    image: '/blog-hero.webp',
    slug: 'it-consulting-strategies',
  },
  {
    title: 'Complete Guide to Backup & Disaster Recovery',
    excerpt: 'Protect your business data with comprehensive backup strategies',
    date: '2024-10-28',
    readTime: '9 min read',
    category: 'IT Support',
    image: '/blog-hero.webp',
    slug: 'backup-disaster-recovery-guide',
  },
  {
    title: 'Endpoint Management Best Practices for UK Businesses',
    excerpt: 'Secure and manage all devices on your network efficiently',
    date: '2024-11-05',
    readTime: '8 min read',
    category: 'IT Support',
    image: '/blog-hero.webp',
    slug: 'endpoint-management-best-practices',
  },
  {
    title: 'Virtualization Benefits for UK Businesses',
    excerpt: 'Reduce costs and improve efficiency with server and desktop virtualization',
    date: '2024-10-20',
    readTime: '7 min read',
    category: 'Cloud Computing',
    image: '/blog-hero.webp',
    slug: 'virtualization-benefits',
  },
  {
    title: 'CCTV Surveillance Guide for UK Businesses',
    excerpt: 'Protect your premises with modern IP camera solutions and monitoring',
    date: '2024-11-12',
    readTime: '8 min read',
    category: 'Cybersecurity',
    image: '/blog-hero.webp',
    slug: 'cctv-surveillance-guide',
  },
  {
    title: 'Network Solutions Guide for UK Businesses',
    excerpt: 'Build reliable networks with expert design and implementation',
    date: '2024-11-18',
    readTime: '8 min read',
    category: 'IT Support',
    image: '/blog-hero.webp',
    slug: 'network-solutions-guide',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/blog-hero.webp"
            alt="IT Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            IT <span className="text-[oklch(0.5_0.2_25)]">Blog</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Expert insights on cloud services, cybersecurity, web development, and Microsoft 365
          </p>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Latest <span className="text-[oklch(0.35_0.12_260)]">Articles</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Stay updated with expert insights and IT best practices
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-3xl shadow-lg border border-border overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[oklch(0.35_0.12_260)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block"
                  >
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[oklch(0.35_0.12_260)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[oklch(0.35_0.12_260)] font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Get expert IT insights delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@gurujitechglobal.com?subject=Newsletter%20Subscription&body=Please%20subscribe%20me%20to%20your%20newsletter"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
            >
              Subscribe Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white font-semibold rounded-full hover:bg-white/30 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Guruji Tech Global IT Blog",
            "description": "Expert insights on cloud services, cybersecurity, web development, and Microsoft 365.",
            "url": "https://gurujitechglobal.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Guruji Tech Global",
              "logo": "https://gurujitechglobal.com/logo.webp"
            }
          })
        }}
      />
    </>
  );
}
