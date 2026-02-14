'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function CanonicalTag() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Remove any existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create and append new canonical link
    const canonicalUrl = `https://gurujitechglobal.com${pathname === '/' ? '/' : pathname}`;
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalUrl;
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.remove();
      }
    };
  }, [pathname]);

  return null;
}
