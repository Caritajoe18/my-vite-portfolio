import { Button } from "@/components/ui/button";
import { Check, X, DollarSign } from "lucide-react";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TwentyOneSteps from "@/components/TwentyOneSteps";
import FloatingPlatformLogos from "@/components/FloatingPlatformLogos";
import { trackCTAClick, trackFormOpen } from "@/utils/analytics";

const CreatorLed = () => {
  return (
    <>
      <SEO 
        title="Video Content Creator System - SaaS Video Marketing | ContentLab" 
        description="Generate $15,000+ in new MRR with our Video Content Creator System. 50+ creators producing hundreds of viral videos across TikTok, Instagram & YouTube Shorts. Performance-based pricing." 
        keywords="video content creator system, saas video marketing, viral video production, performance video marketing, tiktok marketing for saas, instagram reels for saas, youtube shorts marketing, video creator network, affiliate video marketing" 
      />
      
      <div className="min-h-screen bg-white">
        <ModernHeader />
        
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold text-gray-900 mb-6 leading-[1.05] tracking-tight">
                  Dominate Social Proof with 50+ Creators
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed font-normal">
                  We recruit 50+ video creators every month to produce and post hundreds of videos about your SaaS across TikTok, Instagram, and YouTube Shorts that turns views into paying customers without spending on ads
                </p>
                
                <div className="flex">
                  <Button 
                    size="lg" 
                    className="text-base px-8 py-3.5 bg-black text-white hover:bg-gray-800 rounded-full font-medium"
                    onClick={() => {
                      trackCTAClick('creator_led_hero', 'Get Your Free Video Growth Plan');
                      trackFormOpen('creator_led_page_hero');
                      window.open('https://forms.fillout.com/t/dr1jqRebxnus', '_blank');
                    }}
                  >
                    Get Your Free Video Growth Plan →
                  </Button>
                </div>
              </motion.div>

              {/* Right - Platform Logos Animation */}
              <div className="relative h-[500px] hidden lg:block">
                <FloatingPlatformLogos />
              </div>
            </div>
          </div>
        </section>

        {/* Colorful Feature Blocks */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Block 1 - Vibrant Purple/Pink */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-[32px] p-12 text-white overflow-hidden h-[400px] flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <h3 className="text-4xl font-semibold mb-4 leading-tight">
                    50+ Creators
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Every month, we recruit and manage a network of 50+ micro-creators who produce authentic content about your SaaS.
                  </p>
                </div>
              </motion.div>

              {/* Block 2 - Vibrant Blue/Cyan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 rounded-[32px] p-12 text-white overflow-hidden h-[400px] flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <h3 className="text-4xl font-semibold mb-4 leading-tight">
                    Hundreds of Videos
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Your creators produce and post hundreds of videos monthly across TikTok, Instagram, and YouTube Shorts.
                  </p>
                </div>
              </motion.div>

              {/* Block 3 - Vibrant Yellow/Orange */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-[32px] p-12 text-white overflow-hidden h-[400px] flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <h3 className="text-4xl font-semibold mb-4 leading-tight">
                    Viral Reach
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Each video can go viral independently, amplified by algorithms to reach millions of qualified prospects.
                  </p>
                </div>
              </motion.div>

              {/* Block 4 - Vibrant Green/Lime */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative bg-gradient-to-br from-green-500 via-lime-400 to-yellow-400 rounded-[32px] p-12 text-white overflow-hidden h-[400px] flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <h3 className="text-4xl font-semibold mb-4 leading-tight">
                    Pay for Results
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Only pay $1-3 per 1,000 views. No upfront influencer fees. Keep 100% of revenue from every new customer.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                Traditional vs. Our System
              </h2>
              <p className="text-xl text-gray-600 font-normal">
                See the clear difference in approach and results
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Comparison Block 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-4 bg-white rounded-[24px] overflow-hidden shadow-sm"
              >
                <div className="p-8 flex items-center gap-4 bg-gray-100">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">1 influencer with 500k followers</p>
                </div>
                <div className="p-8 flex items-center gap-4 bg-gradient-to-r from-purple-50 to-pink-50">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <p className="text-gray-900 font-medium text-lg">50+ video creators posting simultaneously</p>
                </div>
              </motion.div>

              {/* Comparison Block 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid md:grid-cols-2 gap-4 bg-white rounded-[24px] overflow-hidden shadow-sm"
              >
                <div className="p-8 flex items-center gap-4 bg-gray-100">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">1 post = 50k views from their audience</p>
                </div>
                <div className="p-8 flex items-center gap-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-900 font-medium text-lg">500+ videos = <span className="text-blue-600 font-bold">2.5M+</span> views</p>
                </div>
              </motion.div>

              {/* Comparison Block 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-4 bg-white rounded-[24px] overflow-hidden shadow-sm"
              >
                <div className="p-8 flex items-center gap-4 bg-gray-100">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Single touchpoint (user sees it once)</p>
                </div>
                <div className="p-8 flex items-center gap-4 bg-gradient-to-r from-green-50 to-lime-50">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-gray-900 font-medium text-lg">Multiple touchpoints (user sees <span className="text-green-600 font-bold">5-7 videos</span>)</p>
                </div>
              </motion.div>

              {/* Comparison Block 4 - Pricing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid md:grid-cols-2 gap-4 bg-white rounded-[24px] overflow-hidden shadow-sm border-2 border-purple-200"
              >
                <div className="p-10 flex items-center gap-4 bg-red-50">
                  <DollarSign className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <p className="text-gray-900 font-bold text-xl">$2.5k-$50k per post</p>
                </div>
                <div className="p-10 flex items-center gap-4 bg-gradient-to-r from-purple-100 to-pink-100">
                  <Check className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <p className="text-gray-900 font-bold text-xl">Pay only for results <span className="text-purple-600">(performance-based)</span></p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                Why This System Delivers MRR Growth
              </h2>
            </motion.div>

            <div className="space-y-8">
              {/* Reason 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100"
              >
                <div className="mb-4">
                  <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Frequency</span>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">Organic Retargeting</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Users see 5-7 different videos over weeks, building familiarity and trust organically through repeated exposure.
                </p>
              </motion.div>

              {/* Reason 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100"
              >
                <div className="mb-4">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Algorithm</span>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">Amplification Beyond Followers</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Each video can go viral independently. Algorithms push content to millions beyond any follower base.
                </p>
              </motion.div>

              {/* Reason 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100"
              >
                <div className="mb-4">
                  <span className="text-sm font-bold text-green-600 uppercase tracking-wider">Intent</span>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">Qualified Audience</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Algorithms show videos only to users interested in your category, delivering higher conversion rates.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 27 Steps Section */}
        <TwentyOneSteps />

        {/* CTA Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Ready to scale with video?
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-normal">
              Book a free consultation to see how our creator system can drive your MRR growth.
            </p>
            <Button 
              size="lg" 
              className="text-base px-8 py-3.5 bg-black text-white hover:bg-gray-800 rounded-full font-medium"
              onClick={() => {
                trackCTAClick('creator_led_bottom_cta', 'Get Your Free Video Growth Plan');
                trackFormOpen('creator_led_page_bottom');
                window.open('https://forms.fillout.com/t/dr1jqRebxnus', '_blank');
              }}
            >
              Get Your Free Video Growth Plan →
            </Button>
          </motion.div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default CreatorLed;
