/**
 * Google Analytics and Google Tag Manager utilities
 * for tracking custom events and page views
 */

export interface AnalyticsEvent {
  event_name?: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}

/**
 * Track a custom event using Google Analytics
 * @param eventName - The name of the event
 * @param parameters - Additional event parameters
 */
export function trackEvent(eventName: string, parameters?: AnalyticsEvent) {
  if (typeof window === 'undefined' || !(window as any).gtag) {
    return;
  }

  (window as any).gtag('event', eventName, parameters);
}

/**
 * Track page view (GA4 handles this automatically, but you can use this for manual tracking)
 * @param pagePath - The path of the page
 * @param pageTitle - The title of the page
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window === 'undefined' || !(window as any).gtag) {
    return;
  }

  (window as any).gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
}

/**
 * Track custom dimensions (for GA4 custom parameters)
 * @param eventName - The name of the event
 * @param customParams - Custom parameters to send
 */
export function trackCustomEvent(eventName: string, customParams: Record<string, any>) {
  if (typeof window === 'undefined' || !(window as any).gtag) {
    return;
  }

  (window as any).gtag('event', eventName, customParams);
}

/**
 * Track user engagement events
 */
export const engagementEvents = {
  trackClick: (elementName: string, location: string) => {
    trackEvent('click', {
      element_name: elementName,
      location: location,
    });
  },

  trackFormSubmit: (formName: string) => {
    trackEvent('form_submit', {
      form_name: formName,
    });
  },

  trackScrollDepth: (depth: number) => {
    trackEvent('scroll', {
      scroll_depth: `${depth}%`,
    });
  },

  trackDownload: (fileType: string, fileName: string) => {
    trackEvent('download', {
      file_type: fileType,
      file_name: fileName,
    });
  },

  trackVideoPlay: (videoTitle: string) => {
    trackEvent('video_play', {
      video_title: videoTitle,
    });
  },

  trackSearch: (searchTerm: string, resultsCount: number) => {
    trackEvent('search', {
      search_term: searchTerm,
      results_count: resultsCount,
    });
  },
};

/**
 * Push data to Google Tag Manager data layer
 * @param data - Data object to push to dataLayer
 */
export function pushToDataLayer(data: Record<string, any>) {
  if (typeof window === 'undefined') {
    return;
  }

  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(data);
}

/**
 * Track user authentication events
 */
export const authEvents = {
  trackLogin: (method: string) => {
    trackEvent('login', {
      method: method,
    });
  },

  trackSignUp: (method: string) => {
    trackEvent('sign_up', {
      method: method,
    });
  },

  trackLogout: () => {
    trackEvent('logout');
  },
};

/**
 * Track ecommerce events
 */
export const ecommerceEvents = {
  trackViewItem: (itemName: string, itemId: string, price: number, category?: string) => {
    trackEvent('view_item', {
      item_name: itemName,
      item_id: itemId,
      price: price,
      item_category: category,
    });
  },

  trackAddToCart: (itemName: string, itemId: string, price: number, quantity: number = 1) => {
    trackEvent('add_to_cart', {
      item_name: itemName,
      item_id: itemId,
      price: price,
      quantity: quantity,
    });
  },

  trackBeginCheckout: (totalValue: number, items: any[]) => {
    trackEvent('begin_checkout', {
      value: totalValue,
      items: items,
    });
  },

  trackPurchase: (transactionId: string, totalValue: number, items: any[]) => {
    trackEvent('purchase', {
      transaction_id: transactionId,
      value: totalValue,
      items: items,
    });
  },
};
