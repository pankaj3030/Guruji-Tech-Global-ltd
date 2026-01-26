import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Guruji Tech Global"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions. We help companies
              scale, innovate, and succeed in the digital age.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[oklch(0.5_0.2_25)] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold mb-1">Email</div>
                  <Link
                    href="mailto:contact@gurujitechglobal.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    contact@gurujitechglobal.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[oklch(0.5_0.2_25)] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold mb-1">Phone</div>
                  <Link
                    href="tel:+44-7488564873"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +44-7488564873
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[oklch(0.5_0.2_25)] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold mb-1">Location</div>
                  <p className="text-muted-foreground">
                    Coventry
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#team"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/cloud-services"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/microsoft-365"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Microsoft 365
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cyber-security"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[oklch(0.5_0.2_25)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground text-sm">
              © 2026 Guruji Tech Global. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/gurujitechglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[oklch(0.5_0.2_25)] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/gurujitechglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[oklch(0.5_0.2_25)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/gurujitechglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[oklch(0.5_0.2_25)] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
