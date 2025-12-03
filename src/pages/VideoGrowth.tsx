import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp } from "lucide-react";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
const VideoGrowth = () => {
  return <>
      <SEO title="For SaaS Founders Who Are Tired of Unpredictable Revenue Growth | ContentLab" description="Add $50K+ in New MRR Every Quarter With Our Done-For-You Video Growth System. We build your entire video conversion funnel from scratch." keywords="saas revenue growth, video growth system, mrr growth, video marketing for saas, predictable revenue" />
      <div className="min-h-screen bg-white">
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
          }} className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                For Founders Who Are Tired of{" "}
                <span className="text-orange-600">Unpredictable Revenue Growth</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-orange-600 font-semibold mb-8 leading-relaxed">
                Add $50K+ in New MRR Every Quarter With Our Done-For-You Video Growth System
              </p>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-normal">
                We build your entire video conversion funnel from scratch.
              </p>
              <Button size="lg" className="text-base px-8 py-3.5 bg-black text-white hover:bg-gray-800 rounded-full font-medium" onClick={() => window.location.href = 'https://calendly.com/kvit/15-minutes-discovery-call?month=2025-11'}>
                Book Your Free Strategy Call Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-12 text-center tracking-tight">
              Does This Sound Familiar?
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed font-normal">
              You have a world-class product that could genuinely change your customers' businesses. But your revenue growth is a rollercoaster. One month you hit your targets, the next… you're scrambling to explain the dip to your board.
            </p>
            <p className="text-xl text-gray-900 font-semibold mb-8">You've tried everything:</p>
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Paid Ads</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-normal">
                  The cost-per-acquisition is skyrocketing, and you're attracting more free trial abusers than paying customers. Your CAC is climbing faster than your LTV, and your unit economics are broken.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Content Marketing</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-normal">
                  You're publishing blog posts and hoping for organic traffic, but conversions are anemic. Visitors bounce. Trials expire. Revenue stays flat.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Referral Programs & Partnerships</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-normal">
                  It's a chaotic, time-sucking nightmare of recruiting, managing, and getting ghosted by partners who promise the world but deliver nothing.
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-600 mt-10 leading-relaxed font-normal">
              It's not just frustrating; it's <span className="font-semibold text-gray-900">terrifying</span>. You're burning cash, your growth has stalled, and you have this nagging fear that you're one bad quarter away from having to make some very tough decisions—like layoffs, down rounds, or worse.
            </p>
          </div>
        </section>

        {/* Reality Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-8 tracking-tight">
              The Brutal Reality: Your Competitors Are Stealing Your Market Share
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed font-normal">
              While you're stuck on the content hamster wheel, your competitors are everywhere. They're dominating your target customers' LinkedIn feeds, YouTube searches, and TikTok streams with authentic, high-value video content.
            </p>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed font-normal">
              They're building trust, educating the market, and converting your best prospects into paying customers before they even know you exist. Every day you delay your video strategy, you're not just standing still—you're falling further behind. The gap is widening, and it's getting exponentially harder to catch up.
            </p>
            <p className="text-2xl font-semibold text-gray-900">This isn't a game you can afford to lose.</p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-12 text-center tracking-tight">
              Imagine a New Reality…
            </h2>
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-normal">
              <p>
                Imagine opening your Stripe dashboard every Monday to see a steady stream of new subscriptions rolling in. Not a trickle. Not a spike-and-crash. A <span className="font-semibold text-gray-900">predictable, compounding flow</span> of new MRR that you can count on, month after month.
              </p>
              <p>
                Imagine prospects who have already been educated by your video content, who understand your value proposition, and who sign up for paid plans without needing a sales call. Or if they do book a call, they're already 80% sold and just need final confirmation.
              </p>
              <p>
                Imagine a world where your customer acquisition engine runs on autopilot, where your trial-to-paid conversion rate climbs from 10% to 25%, and where your churn drops because new customers actually understand how to use your product from day one.
              </p>
              <p className="text-2xl font-semibold text-gray-900 text-center pt-6">
                Imagine having a predictable, scalable, and profitable revenue growth machine that finally gives you the freedom, confidence, and peace of mind you deserve as a founder.
              </p>
              <p className="text-center font-semibold text-gray-900 text-xl">
                This isn't a fantasy. This is the power of a Done-For-You Video Growth System.
              </p>
            </div>
          </div>
        </section>

        {/* Two Paths Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                We Offer Two Paths to Predictable Video Growth
              </h2>
              <p className="text-xl text-gray-600 font-normal">
                Choose the model that fits your business goals and growth stage.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Path 1: Content Machine */}
              <div className="bg-gray-50 rounded-3xl p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-3">Path 1: The Viral UGC System</h3>
                  <p className="text-xl font-semibold text-orange-600 mb-3">We Generate $15,000+ in New MRR From Viral Videos in 90 Days Or You Don't Pay</p>
                  <p className="text-base text-gray-600 font-normal">
                    We recruit 50+ micro-creators every month to flood TikTok, Instagram, and YouTube Shorts with authentic videos about your SaaS—triggering algorithmic reach that converts viewers into paying customers without ads or influencers.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">The Problem</h4>
                    <p className="text-gray-600 font-normal">
                      Your customer acquisition cost is out of control. You're stuck in the affiliate marketing death loop: recruit affiliates → they ghost → recruit again → they produce low-quality content → repeat. You're burning cash on paid ads with declining returns and wasting time on strategies that don't scale.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">The Reality</h4>
                    <p className="text-gray-600 font-normal">
                      Your competitors aren't waiting. They're leveraging armies of micro-creators to build social proof and dominate the conversation on TikTok, Instagram, and YouTube. They're creating an organic retargeting effect that you can't buy with ads, turning repeated exposure into a predictable stream of high-intent customers.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">The Solution: Our Video Content Creator System</h4>
                    <p className="text-gray-600 font-normal">We build and manage a performance-based video creator team for you in 30 days. 50+ creators will generate hundreds of authentic videos about your product, creating a wave of social proof that drives qualified traffic and sign-ups. You only pay for results, and you keep 100% of the new revenue.</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="font-semibold text-gray-900">What You Get:</p>
                  {["50+ high-quality video clips per month on autopilot", "Predictable content pipeline across TikTok, YouTube, Instagram, and X", "Pre-vetted, brand-safe creators (90% qualification rate)", "Performance-based pricing: You only pay for views that actually happen", "79% higher conversion rates from creator-led content", "60% increase in qualified leads within 90 days"].map((item, i) => <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-normal">{item}</span>
                    </div>)}
                </div>

                <div className="mb-6">
                  <p className="font-semibold text-gray-900 mb-2">Perfect For:</p>
                  <ul className="space-y-2 text-gray-600 font-normal">
                    
                    <li>• Founders tired of managing unreliable affiliate programs</li>
                    <li>• Companies that need authentic social proof and user-generated content at scale</li>
                  </ul>
                </div>

                <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800 rounded-full font-medium" onClick={() => window.location.href = 'https://contentlab.live/creator-led'}>
                  Check Our 27 Steps Performance System →
                </Button>
              </div>

              {/* Path 2: Conversion Video Framework */}
              <div className="bg-gray-50 rounded-3xl p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-3">Path 2: The Conversion Video Framework™</h3>
                  <p className="text-xl font-semibold text-orange-600 mb-3">
                    We Build Your High-Converting Video Funnel From Scratch
                  </p>
                  <p className="text-base text-gray-600 font-normal">
                    (You Show Up on Camera 2 Hours/Month. We Handle Everything Else.)
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-lg text-gray-900 mb-4">How It Works: Your 3-Step Path to Predictable MRR Growth</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-600 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                        <h5 className="font-semibold text-gray-900">Strategy & Scripting</h5>
                      </div>
                      <p className="text-sm text-gray-600 font-normal mb-1"><span className="font-semibold">You:</span> Join a 30-minute kickoff call to define your revenue goals and ideal customer.</p>
                      <p className="text-sm text-gray-600 font-normal"><span className="font-semibold">We:</span> Map your entire video conversion funnel, conduct competitor analysis, and write the first month of scripts using our neuroscience-based formulas optimized for conversions.</p>
                    </div>

                    <div className="border-l-4 border-orange-600 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                        <h5 className="font-semibold text-gray-900">Filming</h5>
                      </div>
                      <p className="text-sm text-gray-600 font-normal mb-1"><span className="font-semibold">You:</span> Sit in front of a camera for 2 hours per month. That's it.</p>
                      <p className="text-sm text-gray-600 font-normal"><span className="font-semibold">We:</span> Direct the remote recording session, ensuring you look and sound like a world-class authority.</p>
                    </div>

                    <div className="border-l-4 border-orange-600 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                        <h5 className="font-semibold text-gray-900">Launch & Optimization</h5>
                      </div>
                      <p className="text-sm text-gray-600 font-normal mb-1"><span className="font-semibold">You:</span> Watch the new MRR roll in.</p>
                      <p className="text-sm text-gray-600 font-normal"><span className="font-semibold">We:</span> Handle all editing, production, platform-specific optimization, and A/B testing, turning your 2 hours of raw footage into 20+ high-performing video assets designed to drive sign-ups and reduce churn.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="font-semibold text-gray-900">What You Get:</p>
                  {["Product Demo Videos: Turn prospects into customers with demos that showcase your SaaS like never before", "Explainers & Onboarding Videos: Reduce churn by 40% with crystal-clear onboarding that gets users to 'aha!' moments faster", "Webinar & Event Repurposing: Transform one event into 10+ pieces of engaging content that work 24/7 for your business", "YouTube Content Strategy: Build authority and generate leads with YouTube content that ranks on page 1 and converts viewers"].map((item, i) => <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 font-normal">{item}</span>
                    </div>)}
                </div>

                <div className="mb-6">
                  <p className="font-semibold text-gray-900 mb-2">Perfect For:</p>
                  <ul className="space-y-2 text-gray-600 font-normal">
                    <li>• SaaS founders who want to build personal brand authority</li>
                    <li>• Companies with complex products that need detailed explainer content</li>
                    <li>• Businesses focused on thought leadership and organic growth</li>
                    <li>• Teams that want full control over messaging and brand voice</li>
                  </ul>
                </div>

                <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800 rounded-full font-medium" onClick={() => window.location.href = 'https://contentlab.live/#services'}>
                  Check More →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                Our "More Revenue or We Work For Free" Guarantee
              </h2>
              <p className="text-xl text-gray-600 font-normal">
                We are so confident in our system that we offer the most powerful guarantee in the industry.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10">
              <p className="text-lg text-gray-600 mb-6 font-normal">
                We will agree on a single, measurable revenue KPI for our engagement. This could be:
              </p>
              <div className="space-y-3 mb-8">
                {["$50K+ in new MRR added per quarter", "A 30% increase in trial-to-paid conversion rate", "A 25% reduction in customer acquisition cost (CAC)", "A 20% increase in customer lifetime value (LTV)"].map((item, i) => <div key={i} className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-normal">{item}</span>
                  </div>)}
              </div>

              <div className="bg-orange-50 rounded-2xl p-8 mb-8">
                <p className="text-lg font-semibold text-gray-900 mb-4">If we do not hit that target within 90 days, you have two options:</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shrink-0">1</div>
                    <p className="text-gray-600 font-normal">You can stop the engagement and receive a <span className="font-semibold text-gray-900">100% full refund</span> of every penny you've paid. No questions asked.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shrink-0">2</div>
                    <p className="text-gray-600 font-normal">We will continue to work <span className="font-semibold text-gray-900">for free</span>, producing and optimizing videos, until we hit your agreed-upon revenue target.</p>
                  </div>
                </div>
              </div>

              <p className="text-xl font-semibold text-gray-900 text-center">
                The risk is 100% on us. You either get the revenue growth you need, or you get your money back.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              Ready to Build Your Predictable Revenue Machine?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-normal">
              We have a limited number of onboarding slots available each month to ensure we deliver exceptional results for every client. <span className="font-semibold text-gray-900">Currently, we only have 2 slots remaining for this month.</span>
            </p>
            

            <div className="bg-gray-50 rounded-3xl p-10 mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">On this call, we will:</h3>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Audit your current conversion funnel</p>
                    <p className="text-sm text-gray-600 font-normal">Identify revenue leaks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Show you the biggest opportunity</p>
                    <p className="text-sm text-gray-600 font-normal">Unlock immediate MRR growth</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recommend your best path</p>
                    <p className="text-sm text-gray-600 font-normal">Creator-Led or Framework™</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Map your 90-day plan</p>
                    <p className="text-sm text-gray-600 font-normal">With specific revenue projections</p>
                  </div>
                </div>
              </div>
            </div>

            <Button size="lg" className="text-base px-8 py-3.5 bg-black text-white hover:bg-gray-800 rounded-full font-medium" onClick={() => window.location.href = 'https://calendly.com/kvit/15-minutes-discovery-call?month=2025-11'}>
              Book Your Free Strategy Call Now
            </Button>
            <p className="text-sm text-gray-600 mt-4 font-normal">
              (Only 2 Slots Left This Month)
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Final Choice Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-16 text-center tracking-tight">
              You Have Two Choices…
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-3xl p-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 1: Do Nothing</h3>
                <p className="text-gray-600 leading-relaxed font-normal">
                  Continue with the stressful rollercoaster of unpredictable revenue, keep wasting money on tactics that don't work, and watch your competitors pull further and further ahead.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 2: Take Action</h3>
                <p className="text-gray-600 leading-relaxed font-normal">
                  Book a risk-free strategy call and let us show you the exact blueprint for building a predictable, scalable video growth machine that adds $50K+ in new MRR every quarter.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-900 mb-8">The choice is yours.</p>
              <Button size="lg" className="text-base px-8 py-3.5 bg-black text-white hover:bg-gray-800 rounded-full font-medium" onClick={() => window.location.href = 'https://calendly.com/kvit/15-minutes-discovery-call?month=2025-11'}>
                Book My Free Strategy Call & Secure My Spot
              </Button>
              <p className="text-sm text-gray-600 mt-4 font-normal">
                (Only 2 Slots Left This Month)
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default VideoGrowth;