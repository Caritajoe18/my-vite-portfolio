import { useEffect } from 'react';
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

const Index = () => {
  useEffect(() => {
    document.title = "Software Developer & Web3 Engineer | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
