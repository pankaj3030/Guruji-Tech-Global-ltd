import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTracking, GoogleTrackingNoScript } from "@/components/google-tracking";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/ui/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guruji Tech Global | IT Solutions & Services Coventry UK",
  description: "Expert IT solutions in Coventry, UK. Cloud services, web development, cybersecurity, Microsoft 365, DevOps automation, and 24/7 IT support. Transform your business today.",
  keywords: ["IT Solutions Coventry", "Cloud Services UK", "Web Development UK", "Cybersecurity Coventry", "Microsoft 365 Setup", "DevOps Automation", "IT Support UK", "Network Solutions", "Guruji Tech Global"],
  authors: [{ name: "Guruji Tech Global" }],
  icons: {
    icon: "/logo.webp",
  },
  metadataBase: new URL('https://gurujitechglobal.com'),
  openGraph: {
    title: "Guruji Tech Global | IT Solutions & Services Coventry UK",
    description: "Expert IT solutions in Coventry, UK. Cloud services, web development, cybersecurity, and more.",
    url: "https://gurujitechglobal.com",
    siteName: "Guruji Tech Global",
    type: "website",
    locale: "en_GB",
    countryName: "United Kingdom",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guruji Tech Global | IT Solutions & Services Coventry UK",
    description: "Expert IT solutions in Coventry, UK. Cloud services, web development, cybersecurity, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* Google Tracking: Analytics, Ads, Tag Manager & Tag 360 */}
        <GoogleTracking
          gaId="G-EKKVPQMREZ"
          adsId="AW-17768577986"
          gtmId="GT-5TWZTQBR"
          gtmContainerId="GTM-T4X8WB5S"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <GoogleTrackingNoScript gtmContainerId="GTM-T4X8WB5S" />
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Guruji Tech Global",
              "url": "https://gurujitechglobal.com",
              "logo": "https://gurujitechglobal.com/logo.webp",
              "description": "Expert IT solutions in Coventry, UK. Cloud services, web development, cybersecurity, Microsoft 365, DevOps automation, and 24/7 IT support.",
              "telephone": "+44-7488564873",
              "email": "contact@gurujitechglobal.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coventry",
                "addressRegion": "West Midlands",
                "addressCountry": "United Kingdom"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.4068,
                "longitude": -1.5197
              },
              "sameAs": [
                "https://www.linkedin.com/company/guruji-tech-global",
                "https://twitter.com/gurujitechglobal",
                "https://www.facebook.com/gurujitechglobal"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+44-7488564873",
                "email": "contact@gurujitechglobal.com",
                "areaServed": ["GB"],
                "availableLanguage": ["en"]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Guruji Tech Global",
              "image": "https://gurujitechglobal.com/hero-image.webp",
              "description": "Expert IT solutions provider in Coventry, UK",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coventry",
                "addressRegion": "West Midlands",
                "addressCountry": "United Kingdom"
              },
              "telephone": "+44-7488564873",
              "url": "https://gurujitechglobal.com",
              "priceRange": "££",
              "openingHours": ["Mo-Fr 09:00-18:00"],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.4068,
                "longitude": -1.5197
              }
            })
          }}
        />
      </body>
    </html>
  );
}
