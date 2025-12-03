import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackCTAClick, trackFormOpen } from '@/utils/analytics';
const Index = () => {
  const approaches = [{
    label: "AFFILIATE-LED",
    title: "Build your Affiliate Team",
    description: "We recruit, manage, and equip high-performing affiliates to sell your SaaS for you. Predictable referral revenue without the management headache.",
    link: "/affiliate-led",
    gradient: "from-purple-500 to-pink-500",
    hoverGradient: "from-purple-600 to-pink-600",
    isExternal: false
  }, {
    label: "CREATOR-LED",
    title: "Dominate Social Proof with 50+ Creators",
    description: "We recruit 50+ video creators every month to produce and post hundreds of videos about your SaaS across TikTok, Instagram, and YouTube Shorts that turns views into paying customers without spending on ads",
    link: "/creator-led",
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
    isExternal: false
  }, {
    label: "VIDEO-LED",
    title: "Video Editing and Creating for a Flat Monthly Fee",
    description: "Get unlimited, high-quality video editing, motion graphics, and optimization for all your content needs. Fast, reliable, and scalable.",
    link: "https://contentlab.live/creator-led",
    gradient: "from-yellow-600 to-yellow-400",
    hoverGradient: "from-yellow-700 to-orange-500",
    isExternal: true
  }];
  return <div className="min-h-screen bg-white">
      <SEO 
        title="ContentLab - Predictable SaaS Growth Without Ads | Creator, Affiliate & Video Marketing" 
        description="ContentLab helps SaaS founders unlock predictable MRR growth through creator-led, affiliate-led, and video-led strategies. We recruit 50+ video creators monthly, build high-performing affiliate teams, and provide unlimited video production - all without ad spend. Perfect for B2B SaaS companies looking for sustainable growth." 
        keywords="SaaS growth without ads, creator marketing for SaaS, affiliate marketing for B2B, video production for SaaS, TikTok marketing, YouTube Shorts, Instagram Reels, predictable MRR growth, B2B video content, SaaS content strategy, growth marketing agency, no ad spend marketing, organic SaaS growth, video creators network, affiliate program management" 
        url="https://contentlab.live" 
        type="website" 
      />
      
      <ModernHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-gray-900 mb-6 leading-[1.05] tracking-tight"
            >
              Need More Users For Your SaaS?
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed font-normal"
            >
              We help founders unlock predictable MRR growth. Affiliate-led, Creator-led, or Video-led - all with $0 spent on ads.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 bg-black text-white hover:bg-gray-800 rounded-full font-medium" onClick={() => {
                trackCTAClick('hero', 'Book a Call');
                trackFormOpen('homepage_hero');
                window.open('https://forms.fillout.com/t/dr1jqRebxnus', '_blank');
              }}>
                Book a Call
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Continuous Horizontal Scrolling Section */}
      <section id="approaches" className="pb-20 bg-white overflow-hidden">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6" 
            animate={{
              x: [0, -4272],
              opacity: 1
            }} 
            transition={{
              opacity: { duration: 0.8 },
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 70,
                ease: "linear"
              }
            }}>
            {/* Render approaches twice for seamless loop */}
            {[...approaches, ...approaches].map((approach, index) => {
            const CardContent = <motion.div whileHover={{
              scale: 1.01
            }} transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }} className="bg-gray-50 rounded-[32px] p-8 sm:p-12 lg:p-16 hover:bg-gray-100 transition-all duration-500 cursor-pointer w-[90vw] sm:w-[600px] lg:w-[1000px] xl:w-[1400px] h-[500px] sm:h-[550px] lg:h-[650px] xl:h-[700px] flex flex-col relative overflow-hidden">
                  {/* Subtle gradient decoration */}
                  <div className={`absolute bottom-0 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-tl ${approach.gradient} opacity-[0.08] blur-3xl animate-pulse`} />
                  
                  {/* Label */}
                  <div className="text-xs font-semibold text-gray-500 mb-6 sm:mb-8 tracking-[0.12em] uppercase relative z-10">
                    {approach.label}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight relative z-10">
                    {approach.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg lg:text-xl max-w-2xl flex-grow relative z-10 font-normal">
                    {approach.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto relative z-10">
                    <div className={`inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-900 text-white rounded-full font-medium text-base sm:text-lg hover:bg-gradient-to-r hover:${approach.hoverGradient} hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-500 hover:gap-4 hover:pr-5 hover:scale-[1.02]`}>
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>;
            return approach.isExternal ? <a key={`${approach.title}-${index}`} href={approach.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  {CardContent}
                </a> : <Link key={`${approach.title}-${index}`} to={approach.link} className="flex-shrink-0">
                  {CardContent}
                </Link>;
          })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            Ready to grow without ads?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 font-normal">
            Book a free consultation to discover which approach fits your SaaS best.
          </p>
          <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 bg-black text-white hover:bg-gray-800 rounded-full font-medium" onClick={() => {
            trackCTAClick('cta_section', 'Schedule a Call');
            trackFormOpen('homepage_bottom_cta');
            window.open('https://forms.fillout.com/t/dr1jqRebxnus', '_blank');
          }}>
            Schedule a Call
          </Button>
        </motion.div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;