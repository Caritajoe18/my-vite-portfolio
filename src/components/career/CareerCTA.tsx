
import { Button } from '@/components/ui/button';

const CareerCTA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
          Don't See Your Role?
        </h2>
        <p className="text-xl mb-8" style={{ color: '#4a4a4a' }}>
          We're always looking for talented people. Send us your portfolio and let's talk!
        </p>
        <a href="https://forms.fillout.com/t/dr1jqRebxnus" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="font-semibold" style={{ backgroundColor: '#2a2a2a', color: '#ffffff' }}>
            Get Your Free Video Growth Plan →
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CareerCTA;
