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

const featuredCategories = [
  {
    title: 'Cloud Computing',
    description: 'Learn about cloud infrastructure, migration, and optimization',
    slug: 'cloud',
    icon: 'Cloud',
  },
  {
    title: 'Cybersecurity',
    description: 'Stay secure with the latest threat protection tips and best practices',
    slug: 'cybersecurity',
    icon: 'Shield',
  },
  {
    title: 'Web Development',
    description: 'Expert advice on building modern, fast, and SEO-friendly websites',
    slug: 'web-development',
    icon: 'Code',
  },
  {
    title: 'Microsoft 365',
    description: 'Maximize productivity with Microsoft 365 setup, tips, and troubleshooting',
    slug: 'microsoft-365',
    icon: 'FileText',
  },
];

const recentPosts = [
  {
    title: 'What is Cloud Migration? A Complete Guide for UK Businesses',
    excerpt: 'Everything you need to know about moving to cloud infrastructure',
    date: '2024-12-01',
    readTime: '8 min read',
    category: 'Cloud Computing',
    image: '/blog-hero.png',
  },
  {
    title: '5 Signs Your Business Needs Cybersecurity Audit',
    excerpt: 'Identify security vulnerabilities before they become problems',
    date: '2024-11-28',
    readTime: '6 min read',
    category: 'Cybersecurity',
    image: '/blog-hero.png',
  },
  {
    title: 'Microsoft 365 vs Google Workspace: Which is Right for You?',
    excerpt: 'Compare features, pricing, and benefits of leading productivity suites',
    date: '2024-11-20',
    readTime: '10 min read',
    category: 'Microsoft 365',
    image: '/blog-hero.png',
  },
  {
    title: 'How to Choose a Web Development Agency in Coventry',
    excerpt: 'Tips for finding the right development partner for your project',
    date: '2024-11-15',
    readTime: '7 min read',
    category: 'Web Development',
    image: '/blog-hero.png',
  },
  {
    title: 'Cloud vs On-Premises: Which is Better for Your Business?',
    excerpt: 'Compare costs, security, and flexibility of cloud and traditional IT',
    date: '2024-11-10',
    readTime: '12 min read',
    category: 'Cloud Computing',
    image: '/blog-hero.png',
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
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert insights on cloud services, cybersecurity, web development, and Microsoft 365
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore by <span className="text-[oklch(0.35_0.12_260)]">Category</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find articles specific to your IT needs and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.slug}`}
                className="bg-white p-8 rounded-3xl shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[oklch(0.5_0.2_25)]/10 to-[oklch(0.35_0.12_260)]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-[oklch(0.35_0.12_260)]">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[oklch(0.35_0.12_260)] transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex items-center gap-2 text-[oklch(0.35_0.12_260)] font-semibold group-hover:gap-3 transition-all">
                  Explore Articles
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
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
            <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-border">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search articles..."
                className="flex-1 bg-transparent outline-none text-base px-2"
              />
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
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Get expert IT insights delivered to your inbox weekly
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
          >
            Subscribe Now
            <ArrowRight className="w-5 h-5" />
          </Link>
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
