import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Set Content Security Policy to allow Google Tag Manager and Google Analytics
  response.headers.set(
    'Content-Security-Policy',
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googleapis.com https://*.gstatic.com https://www.googletagmanager.com https://*.googletagmanager.com; " +
    "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com; " +
    "img-src 'self' data: https: blob:; " +
    "font-src 'self' data: https://*.gstatic.com; " +
    "style-src 'self' 'unsafe-inline' https://*.googleapis.com; " +
    "frame-src 'self' https://www.googletagmanager.com;"
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
