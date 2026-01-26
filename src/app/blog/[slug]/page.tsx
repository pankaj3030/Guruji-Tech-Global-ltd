import Link from 'next/link';
import { ArrowRight, ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '@/lib/data/blog';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('##')) {
        return <h3 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h3>;
      }
      if (paragraph.startsWith('- ')) {
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-4">
            {paragraph.split('\n').map((item, i) => (
              <li key={i} className="text-muted-foreground">{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      return <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-white/90 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-border">
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>

            <div className="border-t border-border mt-12 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <button className="flex items-center gap-2 text-[oklch(0.35_0.12_260)] hover:text-[oklch(0.5_0.2_25)] transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 4)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group flex gap-4 p-4 bg-white rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold mb-2 group-hover:text-[oklch(0.35_0.12_260)] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] p-8 md:p-12 rounded-3xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help your business succeed with our innovative IT solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.12_260)] font-bold rounded-full hover:shadow-lg transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
