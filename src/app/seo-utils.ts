// SEO Utilities for Guruji Tech Global

export const SEO_CONFIG = {
  siteName: 'Guruji Tech Global',
  siteUrl: 'https://www.gurujitechglobal.com',
  domain: 'gurujitechglobal.com',
  phone: '+44-7488564873',
  email: 'contact@gurujitechglobal.com',
  address: {
    locality: 'Coventry',
    region: 'West Midlands',
    country: 'United Kingdom',
    postalCode: 'CV1 5FB',
    streetAddress: 'Coventry, West Midlands',
  },
  geo: {
    latitude: 52.4068,
    longitude: -1.5197,
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/guruji-tech-global',
    twitter: 'https://twitter.com/gurujitechglobal',
    facebook: 'https://www.facebook.com/gurujitechglobal',
  },
  organization: {
    name: 'Guruji Tech Global',
    description: 'Expert IT solutions in Coventry, UK. Cloud services, web development, cybersecurity, Microsoft 365, DevOps automation, and 24/7 IT support.',
    foundingDate: '2015',
    contactType: 'Customer Service',
    areaServed: ['GB'],
    availableLanguage: ['en'],
  },
};

export const generateSeoMetadata = (
  title: string,
  description: string,
  keywords: string[],
  path: string = '',
  ogImage?: string
) => {
  const url = `${SEO_CONFIG.siteUrl}${path}`;
  const imageUrl = ogImage || `${SEO_CONFIG.siteUrl}/hero-image.webp`;

  return {
    title: `${title} | ${SEO_CONFIG.siteName}`,
    description,
    keywords: [...keywords, 'IT Solutions Coventry', 'IT Support UK', 'Cloud Services UK'],
    authors: [{ name: SEO_CONFIG.siteName }],
    openGraph: {
      title: `${title} | ${SEO_CONFIG.siteName}`,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SEO_CONFIG.siteName}`,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.organization.name,
    description: SEO_CONFIG.organization.description,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/logo.webp`,
    foundingDate: SEO_CONFIG.organization.foundingDate,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: SEO_CONFIG.organization.contactType,
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
      areaServed: SEO_CONFIG.organization.areaServed,
      availableLanguage: SEO_CONFIG.organization.availableLanguage,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SEO_CONFIG.address.locality,
      addressRegion: SEO_CONFIG.address.region,
      addressCountry: SEO_CONFIG.address.country,
      postalCode: SEO_CONFIG.address.postalCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SEO_CONFIG.geo.latitude,
      longitude: SEO_CONFIG.geo.longitude,
    },
    sameAs: Object.values(SEO_CONFIG.social),
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ITService',
    name: SEO_CONFIG.siteName,
    image: `${SEO_CONFIG.siteUrl}/hero-image.webp`,
    description: SEO_CONFIG.organization.description,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONFIG.address.streetAddress,
      addressLocality: SEO_CONFIG.address.locality,
      addressRegion: SEO_CONFIG.address.region,
      postalCode: SEO_CONFIG.address.postalCode,
      addressCountry: SEO_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SEO_CONFIG.geo.latitude,
      longitude: SEO_CONFIG.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '££',
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateServiceSchema = (
  serviceName: string,
  description: string,
  provider?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SEO_CONFIG.geo.latitude,
        longitude: SEO_CONFIG.geo.longitude,
      },
      geoRadius: '100 km',
    },
  };
};
