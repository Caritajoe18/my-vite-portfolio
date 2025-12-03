// Google Analytics 4 tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track when a user clicks a CTA button
 * @param ctaLocation - Where the CTA was clicked (e.g., "hero", "pricing", "footer")
 * @param ctaText - The text of the CTA button
 */
export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'CTA',
      event_label: ctaLocation,
      cta_text: ctaText,
      page_path: window.location.pathname,
      page_url: window.location.href
    });
    
    console.log('[Analytics] CTA Click:', { ctaLocation, ctaText });
  }
};

/**
 * Track outbound link clicks to the Fillout form
 * @param source - The page/component where the link was clicked
 */
export const trackFormOpen = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_open', {
      event_category: 'Conversion',
      event_label: source,
      page_path: window.location.pathname,
      page_url: window.location.href,
      outbound: true
    });
    
    console.log('[Analytics] Form Opened:', { source });
  }
};

/**
 * Track page views (called automatically by React Router)
 * @param pagePath - The path of the page being viewed
 */
export const trackPageView = (pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title
    });
    
    console.log('[Analytics] Page View:', pagePath);
  }
};

/**
 * Track video plays
 * @param videoTitle - Title of the video
 * @param videoLocation - Where the video was played
 */
export const trackVideoPlay = (videoTitle: string, videoLocation: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'video_play', {
      event_category: 'Engagement',
      event_label: videoLocation,
      video_title: videoTitle
    });
    
    console.log('[Analytics] Video Play:', { videoTitle, videoLocation });
  }
};

/**
 * Track navigation clicks
 * @param linkText - The text of the navigation link
 * @param destination - The destination URL/path
 */
export const trackNavigation = (linkText: string, destination: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'navigation_click', {
      event_category: 'Navigation',
      event_label: linkText,
      destination: destination
    });
    
    console.log('[Analytics] Navigation:', { linkText, destination });
  }
};
