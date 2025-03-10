
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
      
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_top,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
      </div>
      
      <div className="w-full max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl animate-fadeIn">
          <img 
            src="/lovable-uploads/fecbc1d9-aeb6-4cf9-ada0-34d7ef6caf96.png" 
            alt="Ram Chhetri" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <div className="space-y-3 animate-fade-down">
            <div className="inline-block">
              <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary animate-fadeIn">
                Talent Acquisition Specialist
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Ram Chhetri
            </h1>
          </div>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Result-driven Talent Acquisition Specialist with extensive experience in sourcing, attracting, and onboarding top-tier engineering and technology professionals.
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
