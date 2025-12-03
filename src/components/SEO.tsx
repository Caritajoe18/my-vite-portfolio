
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

const SEO = ({ 
  title = "ContentLab - Predictable SaaS Growth Without Ads | Creator, Affiliate & Video Marketing",
  description = "ContentLab helps SaaS founders unlock predictable MRR growth through creator-led, affiliate-led, and video-led strategies. No ad spend required. We recruit 50+ creators monthly, build affiliate teams, and produce unlimited video content for B2B SaaS companies worldwide.",
  keywords = "SaaS growth marketing, video marketing for SaaS, creator marketing, affiliate marketing for SaaS, product demo videos, B2B video production, SaaS content marketing, growth without ads, MRR growth, TikTok marketing for SaaS, YouTube Shorts for B2B, Instagram Reels for SaaS, unlimited video editing, flat rate video production, SaaS marketing agency",
  image = "https://contentlab.live/lovable-uploads/42844e19-815c-453d-9d1d-66e5ec0590fb.png",
  url,
  type = "website",
  noIndex = false
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = url || `https://contentlab.live${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Update Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', currentUrl, true);
    updateMeta('og:type', type, true);
    updateMeta('og:site_name', 'ContentLab', true);
    updateMeta('og:locale', 'en_US', true);

    // Update Twitter tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    updateMeta('twitter:url', currentUrl);
    updateMeta('twitter:site', '@contentlab');

    // AI-friendly meta tags for ChatGPT and other AI search engines
    updateMeta('abstract', description);
    updateMeta('topic', 'SaaS Marketing, Video Production, Growth Marketing');
    updateMeta('summary', 'ContentLab provides creator-led, affiliate-led, and video-led marketing services for SaaS companies to achieve predictable growth without advertising spend.');
    updateMeta('Classification', 'Business, Marketing, Video Production');
    updateMeta('subject', 'SaaS Growth Marketing and Video Production');
    updateMeta('coverage', 'Worldwide');
    updateMeta('distribution', 'Global');
    updateMeta('rating', 'General');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);
  }, [title, description, keywords, image, currentUrl, type, noIndex]);

  return null;
};

export default SEO;
