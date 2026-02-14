'use client';

import Script from 'next/script';

export default function TinyChat() {
  return (
    <Script
      src="https://tinychat.ai/tinychat.js"
      strategy="afterInteractive"
      data-id=""
      async
      defer
    />
  );
}
