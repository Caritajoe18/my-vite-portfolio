import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { AnimeNavbar } from '@/components/ui/anime-navbar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
      // If already on home page, just scroll to section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    // If not on home page, Link component will handle navigation to /#section
  };
  return <header className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] rounded-full pl-6 pr-2 py-2">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ContentLab
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-1 px-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-50 flex items-center gap-1">
                  Work <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-2xl p-2 z-[100]">
                  <DropdownMenuItem asChild>
                    <Link to="/video-led" className="px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      Video-led
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/affiliate-led" className="px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      Affiliate-led
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/creator-led" className="px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      Creator-led
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/case-studies" className="px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      Case Studies
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/pricing" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-50">
                Pricing
              </Link>
              
              <a href="https://calendly.com/kvit/15-minutes-discovery-call" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-2.5 h-auto">
                  Book a Call
                </Button>
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && <div className="md:hidden mt-4 bg-white/95 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-6">
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500">Work</div>
              <Link to="/video-led" className="block pl-4 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Video-led
              </Link>
              <Link to="/affiliate-led" className="block pl-4 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Affiliate-led
              </Link>
              <Link to="/creator-led" className="block pl-4 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Creator-led
              </Link>
              <Link to="/case-studies" className="block pl-4 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Case Studies
              </Link>
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            
            <div className="pt-4">
              <a href="https://calendly.com/kvit/15-minutes-discovery-call" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full w-full">
                  Book a Call
                </Button>
              </a>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;
