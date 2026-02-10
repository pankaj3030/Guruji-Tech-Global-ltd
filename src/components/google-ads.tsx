'use client';

import Script from 'next/script';

interface GoogleAdsProps {
  adsId: string;
}

export function GoogleAds({ adsId }: GoogleAdsProps) {
  return (
    <>
      <Script
        id="google-ads"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
      />
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${adsId}');
          `,
        }}
      />
    </>
  );
}
