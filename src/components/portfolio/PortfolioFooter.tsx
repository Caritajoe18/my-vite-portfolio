import { Github, LinkedinIcon, Mail, Heart } from 'lucide-react';

const PortfolioFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {'<Carita />'}
              </span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Building the future, one line at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href={import.meta.env.VITE_MEDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Medium"
            >
              <svg className="h-5 w-5 text-muted-foreground hover:text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
              className="p-2.5 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Carita Ndibe. All rights reserved.</p>
          {/* <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & TypeScript
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
