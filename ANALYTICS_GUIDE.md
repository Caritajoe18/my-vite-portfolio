# Google Analytics Tracking Guide

This project uses Google Analytics 4 (GA4) to track conversion events and user behavior.

## Current Tracking ID
**GA4 Measurement ID:** `G-4SFW7K9CVJ`

## Events Being Tracked

### 1. CTA Button Clicks (`cta_click`)
Tracks when users click any "Get Your Free Video Growth Plan" button across the site.

**Event Parameters:**
- `event_category`: "CTA"
- `event_label`: Location where clicked (e.g., "hero", "pricing_cta_section", "services_section")
- `cta_text`: The text of the button
- `page_path`: Current page path
- `page_url`: Full URL

**Locations tracked:**
- Homepage hero
- Homepage bottom CTA
- Creator-Led page (hero & bottom)
- Affiliate-Led page (hero & bottom)
- Video Production page
- Hero component
- How It Works section
- Services section
- Pricing CTA section
- Pricing Plans cards
- Case Studies CTA

### 2. Form Opens (`form_open`)
Tracks when users click through to the Fillout form.

**Event Parameters:**
- `event_category`: "Conversion"
- `event_label`: Source page/component
- `page_path`: Current page path
- `page_url`: Full URL
- `outbound`: true

**Sources tracked:**
- `homepage_hero`
- `homepage_bottom_cta`
- `creator_led_page_hero`
- `creator_led_page_bottom`
- `affiliate_led_page_hero`
- `affiliate_led_page_bottom`
- `main_page_hero`
- `how_it_works_cta`
- `services_bottom_cta`
- `pricing_page_cta`
- `pricing_plan_professional`
- `case_studies_page`

### 3. Page Views (`page_view`)
Automatically tracked by GA4 when pages load.

### 4. Video Plays (`video_play`)
Can be used to track video engagement (ready for implementation).

### 5. Navigation Clicks (`navigation_click`)
Can be used to track header/footer navigation (ready for implementation).

## How to View Analytics in Google Analytics 4

### Access Your Dashboard
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property (ContentFarm / G-4SFW7K9CVJ)

### View Real-Time Events
1. Navigate to **Reports** → **Realtime**
2. Scroll to the "Event count by Event name" card
3. You'll see events like:
   - `cta_click`
   - `form_open`
   - `page_view`

### View Conversion Funnel
1. Go to **Reports** → **Engagement** → **Events**
2. Click on any event name to see detailed breakdown
3. Use the secondary dimension dropdown to add:
   - `event_label` - to see which locations get most clicks
   - `page_path` - to see which pages convert best

### Create Custom Reports

#### CTA Performance Report
1. Go to **Explore** → **Create a new exploration**
2. Choose "Free form"
3. Add dimensions:
   - Event name
   - Event label (for CTA location)
   - Page path
4. Add metrics:
   - Event count
   - Users
5. Apply filter: Event name = `cta_click`

#### Conversion Tracking Report
1. **Explore** → **Funnel exploration**
2. Add steps:
   - Step 1: Page view (any page)
   - Step 2: CTA click (`cta_click`)
   - Step 3: Form open (`form_open`)
3. This shows drop-off rates at each stage

### Mark Events as Conversions
1. Go to **Admin** → **Events** (under Data display)
2. Find `form_open` event
3. Toggle "Mark as conversion"
4. This will track `form_open` as a conversion goal

### Top Pages Report
To see which pages drive the most form opens:
1. **Reports** → **Engagement** → **Pages and screens**
2. Add secondary dimension: Event name
3. Filter to show only `form_open` events
4. Sort by Event count descending

## Console Logging
All events are also logged to the browser console for debugging:
- `[Analytics] CTA Click: { ctaLocation, ctaText }`
- `[Analytics] Form Opened: { source }`
- `[Analytics] Page View: pagePath`

## Testing Your Setup
1. Open your site in a new incognito window
2. Open Developer Tools (F12) → Console
3. Click any CTA button
4. You should see console logs confirming events fired
5. Check GA4 Realtime report to see events appear

## Best Practices
- Check analytics weekly to identify high-performing pages
- A/B test CTA locations based on click data
- Monitor drop-off between `cta_click` and `form_open`
- Use UTM parameters in external links to track sources

## Fillout Form Tracking
To track actual form submissions (not just opens):
1. In Fillout, go to your form settings
2. Enable "Webhook" or "Integration"
3. Set up a webhook to send data back to your analytics
4. Or use Fillout's built-in analytics dashboard

## Privacy & GDPR
Google Analytics 4 is configured with default privacy settings. For GDPR compliance:
- Add a cookie consent banner
- Update privacy policy to mention GA4 usage
- Consider using GA4's anonymizeIp setting for EU visitors
