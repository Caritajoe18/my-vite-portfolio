import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { trackCTAClick, trackFormOpen } from '@/utils/analytics';
const AffiliateLed = () => {
  const benefits = [{
    title: "Scalable Growth",
    description: "Build a network that grows your revenue exponentially"
  }, {
    title: "Revenue Sharing",
    description: "Only pay for actual results and conversions"
  }, {
    title: "Targeted Reach",
    description: "Access audiences that already trust your affiliates"
  }, {
    title: "Data-Driven",
    description: "Track performance with detailed analytics"
  }];
  return <div className="min-h-screen bg-white">
      <SEO title="Affiliate-led Growth - ContentLab" description="Scale your SaaS with strategic affiliate partnerships that drive consistent revenue without ad spend." url="https://contentlab.live/affiliate-led" />
      
      <ModernHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold text-gray-900 mb-6 leading-[1.05] tracking-tight">
              Build Your Affiliate Team  
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed font-normal max-w-4xl">
              We recruit, manage, and equip high-performing affiliates to sell your SaaS for you. Predictable referral revenue without the management headache.
            </p>
            
            <div className="flex">
              <Button size="lg" className="text-base px-8 py-3.5 bg-black text-white hover:bg-gray-800 rounded-full font-medium" onClick={() => {
                trackCTAClick('affiliate_led_hero', 'Get Your Free Video Growth Plan');
                trackFormOpen('affiliate_led_page_hero');
                window.open('https://forms.fillout.com/t/dr1jqRebxnus', '_blank');
              }}>
                Get Your Free Video Growth Plan →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
            const gradients = ["from-purple-500 to-pink-500", "from-blue-500 to-cyan-500", "from-yellow-600 to-yellow-400", "from-green-500 to-emerald-400"];
            return <motion.div key={benefit.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="bg-gray-50 rounded-[32px] p-12 hover:bg-gray-100 transition-all duration-500 relative overflow-hidden">
                  {/* Subtle gradient decoration */}
                  <div className={`absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl ${gradients[index]} opacity-[0.08] blur-3xl`} />
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }}>
            <h2 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-16 tracking-tight">
              How It Works
            </h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }} className="bg-white rounded-[32px] p-12 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500 to-pink-500 opacity-[0.08] blur-3xl" />
                
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase">
                    Step 1
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                    Partner Identification
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-normal">
                    We identify and recruit affiliates who align with your target audience and brand values.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }} className="bg-white rounded-[32px] p-12 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500 to-cyan-500 opacity-[0.08] blur-3xl" />
                
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase">
                    Step 2
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                    Program Setup
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-normal">
                    We create compelling affiliate offers, tracking systems, and promotional materials.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div initial={{
              opacity: 0,
              y: 40,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }} className="bg-white rounded-[32px] p-12 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-500 to-emerald-400 opacity-[0.08] blur-3xl" />
                
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase">
                    Step 3
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                    Launch & Optimize
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-normal">
                    We launch campaigns, monitor performance, and continuously optimize for maximum ROI.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            Ready to build your affiliate network?
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-normal">
            Let's discuss how affiliate partnerships can scale your SaaS.
          </p>
          <Button size="lg" className="text-base px-8 py-3.5 bg-black text-white hover:bg-gray-800 rounded-full font-medium" onClick={() => {
            trackCTAClick('affiliate_led_bottom_cta', 'Book Your Strategy Call');
            trackFormOpen('affiliate_led_page_bottom');
            window.open('https://forms.fillout.com/t/dr1jqRebxnus', '_blank');
          }}>
            Book Your Strategy Call
          </Button>
        </motion.div>
      </section>
      
      <Footer />
    </div>;
};
export default AffiliateLed;