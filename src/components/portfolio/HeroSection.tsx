import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 bg-background">

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-primary/20 font-mono text-6xl"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          {'</>'}
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-20 text-accent/20 font-mono text-5xl"
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          {'{ }'}
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-primary/15 font-mono text-4xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          {'=>'}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image - Left side */}
          <div className="w-full md:w-1/2 lg:w-5/12 flex-shrink-0 -mx-2 md:mx-0">
            <div className="relative w-full overflow-hidden rounded-lg border-4 border-primary/50 shadow-xl shadow-primary/20 bg-gradient-to-br from-card to-background p-0 m-0">
              <img
                src="/profile-image2.jpg"
                alt="Profile"
                className="w-full h-auto max-h-[500px] object-cover m-0"
              />
            </div>
          </div>

          {/* Content - Right side */}
          <div className="text-center md:text-left max-w-2xl">

            {/* Status badge */}
            {/* <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span> */}
            {/* </motion.div> */}

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Hello, I am </span>
              <span className="text-foreground block md:inline-block">
                Carita Ndibe
              </span>
            </h1>

            {/* Title */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Backend Developer • Web3 Engineer
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Building systems with Node.js, TypeScript, and blockchain technologies.
              Passionate about clean architecture and scalable solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="group px-8 py-6 text-lg font-semibold"
              >
                <a
                  href="/Carita_Ndibe_CV.pdf"
                  download="Carita_Ndibe_CV.pdf"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <a href="#contact" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <span className="text-foreground">Contact Me</span>
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center md:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href={import.meta.env.VITE_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href={import.meta.env.VITE_MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <svg className="h-6 w-6 text-muted-foreground hover:text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
