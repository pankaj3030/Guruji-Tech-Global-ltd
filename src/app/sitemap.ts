import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.gurujitechglobal.com';

    // 1. Service Slugs
    const services = [
        'cloud-services',
        'microsoft-365',
        'web-development',
        'devops-automation',
        'network-solutions',
        'cyber-security',
        'it-support',
        'ip-telephony',
        'it-consulting',
        'backup-disaster-recovery',
        'endpoint-management',
        'virtualization',
        'cctv'
    ];

    // 2. Blog Post Slugs (Extracted from your list)
    const blogPosts = [
        'what-is-cloud-migration',
        'cybersecurity-audit-signs',
        'microsoft-365-vs-google-workspace',
        'choose-web-development-agency-coventry',
        'cloud-vs-on-premises',
        '5-benefits-ip-telephony',
        'it-consulting-strategies',
        'backup-disaster-recovery-guide',
        'endpoint-management-best-practices',
        'virtualization-benefits',
        'cctv-surveillance-guide',
        'network-solutions-guide'
    ];

    // Generate URLs for Services
    const serviceUrls = services.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Generate URLs for Blog Posts
    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6, // Blog posts usually have slightly lower priority than main service pages
    }));

    // 3. Main Static Pages
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`, // Main Blog Index Page
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...serviceUrls, // Spreads all service URLs here
        ...blogUrls,    // Spreads all blog post URLs here
    ];
}