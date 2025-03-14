
import { useState, useEffect } from 'react';
import { Mail, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 lg:px-20',
        isScrolled 
          ? 'py-3 bg-background/80 backdrop-blur-lg shadow-sm' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="text-lg md:text-xl font-display font-semibold cursor-pointer transition-all hover:text-primary"
          onClick={() => scrollToSection('hero')}
        >
          Ram Chhetri
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {['experience', 'skills', 'education', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition link-underline"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost"
              size="icon"
              asChild
            >
              <a 
                href="mailto:chhetriram076@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Email"
                className="rounded-full hover:bg-accent"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost"
              size="icon"
              asChild
            >
              <a 
                href="http://www.linkedin.com/in/ramchhetri" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full hover:bg-accent"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-background/95 backdrop-blur-lg md:hidden z-40 animate-fade-down">
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-8 mb-10">
              {['experience', 'skills', 'education', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-lg font-medium text-foreground"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <Button 
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full h-12 w-12"
              >
                <a 
                  href="mailto:chhetriram076@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full h-12 w-12"
              >
                <a 
                  href="http://www.linkedin.com/in/ramchhetri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
