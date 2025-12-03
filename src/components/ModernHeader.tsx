import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to sections when navigating from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);
  const handleSectionNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  const servicesItems = [{
    name: 'Product Demo Videos',
    href: '/product-demo-videos'
  }, {
    name: 'Shorts',
    href: '/shorts'
  }, {
    name: 'Video Production',
    href: '/video-production'
  }];
  const resourcesItems = [{
    name: 'Script Generator',
    href: '/youtube-script-generator'
  }, {
    name: 'Blog',
    href: '/blog'
  }];
  return <header className="fixed top-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop - Separate Logo and Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Standalone Logo - Left */}
          <Link to="/" className="text-xl font-bold text-gray-900 hover:scale-105 transition-all duration-300">
            ContentLab
          </Link>
          
          {/* Standalone Navigation - Right */}
          <nav className="flex items-center gap-1 bg-white/70 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-300">
            <Link to="/creator-led" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-bold px-3 py-1.5 rounded-full hover:bg-white/90 hover:scale-105 text-sm">
              Creator-Led
            </Link>
            <Link to="/affiliate-led" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-bold px-3 py-1.5 rounded-full hover:bg-white/90 hover:scale-105 text-sm">
              Affiliate-Led
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-bold px-3 py-1.5 rounded-full hover:bg-white/90 hover:scale-105 flex items-center gap-1 text-sm">
                Video-Led
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-2xl p-2 z-50">
                <DropdownMenuItem asChild>
                  
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/case-studies" className="cursor-pointer px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                    Case Studies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/video-led" className="cursor-pointer px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                    DFY Video
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="https://forms.fillout.com/t/dr1jqRebxnus" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-5 py-1.5 font-bold ml-2 text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Book a Call
              </Button>
            </a>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]">
          <Link to="/" className="text-xl font-bold text-gray-900">
            ContentLab
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 hover:text-gray-700 transition-colors duration-200 p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-6 border-t border-gray-200 space-y-4">
            <Link to="/creator-led" className="block text-gray-900 hover:text-gray-600 transition-all duration-300 font-medium py-2 hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
              Creator-Led
            </Link>
            <Link to="/affiliate-led" className="block text-gray-900 hover:text-gray-600 transition-all duration-300 font-medium py-2 hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
              Affiliate-Led
            </Link>
            <div className="space-y-2">
              <div className="text-gray-900 font-medium py-2">Video-Led</div>
              <div className="pl-4 space-y-2">
                <Link to="/product-demo-videos" className="block text-gray-700 hover:text-gray-900 transition-all duration-300 py-1 hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  Product Demo Videos
                </Link>
                <Link to="/video-production" className="block text-gray-700 hover:text-gray-900 transition-all duration-300 py-1 hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  Video Production
                </Link>
                <Link to="/shorts" className="block text-gray-700 hover:text-gray-900 transition-all duration-300 py-1 hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  Shorts
                </Link>
                <Link to="/case-studies" className="block text-gray-700 hover:text-gray-900 transition-all duration-300 py-1 hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  Case Studies
                </Link>
                <Link to="/video-led" className="block text-gray-700 hover:text-gray-900 transition-all duration-300 py-1 hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  DFY Video
                </Link>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4">
              <a href="https://forms.fillout.com/t/dr1jqRebxnus" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg" onClick={() => setIsMenuOpen(false)}>
                  Book a Call
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>;
};
export default ModernHeader;