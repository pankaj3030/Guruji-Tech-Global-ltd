import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guruji Tech Global | Innovative IT Solutions",
  description: "Transforming businesses through cutting-edge technology solutions. Web development, mobile apps, cloud services, AI & ML, and cybersecurity.",
  keywords: ["Guruji Tech Global", "IT Solutions", "Web Development", "Mobile Apps", "Cloud Services", "AI", "Cybersecurity", "Microsoft 365", "DevOps"],
  authors: [{ name: "Guruji Tech Global" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Guruji Tech Global | Innovative IT Solutions",
    description: "Transforming businesses through cutting-edge technology solutions",
    url: "https://gurujitechglobal.com",
    siteName: "Guruji Tech Global",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guruji Tech Global | Innovative IT Solutions",
    description: "Transforming businesses through cutting-edge technology solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
