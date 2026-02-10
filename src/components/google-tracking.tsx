'use client';

import Script from 'next/script';

interface GoogleTrackingProps {
  gaId: string;
  adsId: string;
  gtmId: string;
}

export function GoogleTracking({ gaId, adsId, gtmId }: GoogleTrackingProps) {
  return (
    <>
      {/* Google Consent Configuration - Must Load First */}
      <Script
        id="google-consent"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500,
            });
            gtag('js', new Date());
          `,
        }}
      />

      {/* Google Analytics 4 */}
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', '${gaId}');
          `,
        }}
      />

      {/* Google Ads */}
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', '${adsId}');
          `,
        }}
      />

      {/* Google Tag Manager Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />

      {/* Google Tag 360 */}
      <Script
        id="google-tag-360-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', '${gtmId}');
            dataLayer.push({'gtm.start': new Date().getTime(), 'event': 'gtm.js'});
          `,
        }}
      />
    </>
  );
}
