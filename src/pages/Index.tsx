import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import MediumSection from '@/components/portfolio/MediumSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Full-Stack Developer & Web3 Engineer | Portfolio"
        description="Full-stack developer specializing in Node.js, TypeScript, React, and Web3 technologies. Building scalable applications and blockchain solutions."
        keywords="full-stack developer, web3 developer, node.js, typescript, react, solidity, rust, smart contracts, blockchain"
      />
      <PortfolioHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <MediumSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  );
};

export default Index;
