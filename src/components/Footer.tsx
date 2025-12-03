import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white/20 rounded-[32px] shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left side - Subscribe */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Subscribe to ContentLab
            </h2>
            <p className="text-gray-600 text-lg">
              We help SaaS startups scale with high-converting video content that drives real business results.
            </p>
            <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 rounded-full p-1.5 max-w-md border border-gray-200">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email..."
                className="flex-1 px-6 py-3 bg-transparent text-gray-900 placeholder:text-gray-500 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Right side - Navigation */}
          <div className="flex justify-end">
            <nav className="space-y-4">
              <Link to="/blog" className="block text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium">
                Blog
              </Link>
              <Link to="/career" className="block text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium">
                Career
              </Link>
              <Link to="/video-growth" className="block text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium">
                Video Growth
              </Link>
              <Link to="/youtube-script-generator" className="block text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium">
                YouTube Script Generator
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              ContentLab © 2025 All rights reserved
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link to="/privacy-policy" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-gray-900 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;