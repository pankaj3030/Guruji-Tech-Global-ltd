import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                // If you want to block specific folders, add them here like this:
                // disallow: '/api/',
                // disallow: '/private/',
            },
        ],
        sitemap: 'https://gurujitechglobal.com/sitemap.xml',
    };
}
