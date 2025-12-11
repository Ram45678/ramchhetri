import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  // Fix for local development - ensure the image path is correct
  const getImagePath = (path: string) => {
    if (!path) return null;
    
    // If the path already starts with the base URL or is an absolute URL, use it as is
    if (path.startsWith('http') || path.startsWith(import.meta.env.BASE_URL)) {
      return path;
    }
    
    // Otherwise, prepend the base URL (removes leading slash if present)
    const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
    return `${import.meta.env.BASE_URL}${normalizedPath}`;
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 pt-20"
    >
      
      <div className="w-full max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl animate-fadeIn">
          <img 
            src={getImagePath("/lovable-uploads/fecbc1d9-aeb6-4cf9-ada0-34d7ef6caf96.png")} 
            alt="Ram Chhetri" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <div className="space-y-3 animate-fade-down">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Ram Chhetri
            </h1>
            <div className="inline-block">
              <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm md:text-base text-primary animate-fadeIn">
                Talent Acquisition Specialist
              </div>
            </div>
          </div>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Hi, I’m Ram. I help companies hire better people in a smarter way.
            I work in talent acquisition with a focus on tech and cloud roles in Finland and Poland. Most of my work sits at the intersection of recruitment, employer branding and marketing. I enjoy understanding how a business works, what kind of people it really needs, and then building a clear, honest process to find and hire them. 
            At WeAre Solutions, I am the sole Talent Acquisition Specialist. I support leadership in hiring senior engineers and specialists, and I helped WeAre expand into the Polish market by building our first engineering team there. Besides recruitment, I also work on content and campaigns around our observability services, making sure our hiring, brand and messaging all point in the same direction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="relative overflow-hidden group"
              onClick={scrollToExperience}
            >
              <span className="relative z-10">View Experience</span>
              <span className="absolute inset-0 bg-primary transform-gpu group-hover:scale-[1.03] transition-transform duration-300 ease-out" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className={cn(
                "border-primary/20 hover:bg-primary/5 transition-all duration-300",
                "relative overflow-hidden"
              )}
            >
              <a 
                href="http://www.linkedin.com/in/ramchhetri" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Connect on LinkedIn</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-shimmer" />
              </a>
            </Button>
          </div>
          
          <div className="animate-fadeIn flex items-center gap-6 pt-4 justify-center md:justify-start" style={{ animationDelay: "0.6s" }}>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Location:</span> Espoo, Finland
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Contact:</span> chhetriram076@gmail.com
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full h-12 w-12 border border-primary/20 bg-background/80 backdrop-blur-sm"
          onClick={scrollToExperience}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
