import { Button } from '@/components/ui/button';
import { trackCTAClick, trackFormOpen } from '@/utils/analytics';

const PricingCTA = () => {
  return (
    <section className="py-20 cinematic-section relative overflow-hidden">
      <div className="absolute inset-0 cinematic-grain opacity-20"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cinematic-text-shadow">
          Ready to Transform Your Product Story?
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
          Let&apos;s discuss your project and create a video that drives results for your SaaS business.
        </p>
        <a 
          href="https://forms.fillout.com/t/dr1jqRebxnus" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => {
            trackCTAClick('pricing_cta_section', 'Get Your Free Video Growth Plan');
            trackFormOpen('pricing_page_cta');
          }}
        >
          <Button 
            size="lg" 
            className="cinematic-cta text-lg px-10 py-6 font-semibold"
          >
            Get Your Free Video Growth Plan →
          </Button>
        </a>
      </div>
    </section>
  );
};

export default PricingCTA;
