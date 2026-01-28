interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag: (
      command: 'js' | 'config' | 'event' | 'set',
      targetIdOrDate: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export {};
