'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Function to update Google consent
  const updateGoogleConsent = (consentSettings: {
    ad_user_data?: string;
    ad_personalization?: string;
    ad_storage?: string;
    analytics_storage?: string;
  }) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', consentSettings);
    }
  };

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      // Restore previous consent choice
      const consentChoice = hasConsented;
      if (consentChoice === 'accepted') {
        updateGoogleConsent({
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          ad_storage: 'granted',
          analytics_storage: 'granted',
        });
      } else if (consentChoice === 'essential') {
        updateGoogleConsent({
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          ad_storage: 'denied',
          analytics_storage: 'granted',
        });
      }
      // declined keeps all denied (default state)
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Update Google consent - grant all
    updateGoogleConsent({
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });

    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Update Google consent - grant analytics only
    updateGoogleConsent({
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'granted',
    });

    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Update Google consent - deny all
    updateGoogleConsent({
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${isMinimized ? 'pb-16' : 'pb-24'}`}
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-[oklch(0.35_0.12_260)] p-6 relative">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-start gap-3">
              <Cookie className="w-6 h-6 text-[oklch(0.35_0.12_260)] flex-shrink-0 mt-1" />
              <div>
                <h3 id="cookie-title" className="text-lg font-bold mb-1">
                  We Use Cookies to Improve Your Experience
                </h3>
                <p id="cookie-description" className="text-sm text-muted-foreground">
                  Your privacy matters to us. We use cookies to personalize content and ads, provide social media features, and analyze our traffic.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <input type="checkbox" disabled checked className="w-4 h-4 text-[oklch(0.35_0.12_260)]" />
                Essential Cookies
              </h4>
              <p className="text-sm text-muted-foreground">
                Required for the website to function properly. These include authentication cookies, security cookies, and session management.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-[oklch(0.35_0.12_260)]" />
                Analytics & Performance Cookies
              </h4>
              <p className="text-sm text-muted-foreground">
                Help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-[oklch(0.35_0.12_260)]" />
                Functionality & Advertising Cookies
              </h4>
              <p className="text-sm text-muted-foreground">
                Enable us to deliver personalized content and remember your preferences. May be used to serve targeted ads.
              </p>
            </div>
          </div>

          {/* Minimize Toggle (optional) */}
          {isMinimized && (
            <button
              onClick={() => setIsMinimized(false)}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] text-white rounded-t-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Cookie className="w-4 h-4" />
              <span className="text-sm font-semibold">Cookie Settings</span>
            </button>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptEssential}
              className="flex-1 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-xl transition-all text-sm"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[oklch(0.5_0.2_25)] to-[oklch(0.35_0.12_260)] text-white font-semibold rounded-xl hover:shadow-lg transition-all text-sm hover:scale-105"
            >
              Accept All Cookies
            </button>
          </div>

          {/* Footer Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pt-4 border-t border-border">
            <div className="text-xs text-muted-foreground">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:text-foreground transition-colors flex items-center gap-1"
              >
                {isMinimized ? 'Show More' : 'Show Less'}
              </button>
              <span className="mx-2">•</span>
              <Link href="/privacy" className="hover:text-foreground transition-colors hover:underline">
                Read our Privacy Policy
              </Link>
            </div>
            <button
              onClick={handleDecline}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline"
            >
              Decline All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
