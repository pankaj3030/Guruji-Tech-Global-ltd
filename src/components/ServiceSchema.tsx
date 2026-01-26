import type { ReactNode } from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  serviceType: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  imageUrl,
  serviceType,
}: ServiceSchemaProps): ReactNode {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "Guruji Tech Global",
      "url": "https://gurujitechglobal.com",
      "telephone": "+44-7488564873",
      "image": "https://gurujitechglobal.com/logo.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "image": imageUrl,
    "serviceType": serviceType,
    "priceRange": "££"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
