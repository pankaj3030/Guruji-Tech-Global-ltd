import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="flex-1 pt-20" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="Guruji Tech Global" />
          <link itemProp="url" href="https://gurujitechglobal.com" />
          <meta itemProp="address" content="Coventry, United Kingdom" />
          <meta itemProp="telephone" content="Phone" />
          <meta itemProp="priceRange" content="££" />
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
              "@type": "ITService",
              "name": "Guruji Tech Global",
              "description": "Expert IT solutions in Coventry, UK. Cloud services, web development, cybersecurity, Microsoft 365, DevOps automation, and 24/7 IT support.",
              "url": "https://gurujitechglobal.com",
              "telephone": "+44 XXX XXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coventry",
                "addressCountry": "UK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.4068,
                "longitude": -1.5197
              },
              "openingHours": ["Mo-Fr 09:00-18:00"],
              "priceRange": "££"
            })
          }}
        />
      </body>
    </html>
  );
}
