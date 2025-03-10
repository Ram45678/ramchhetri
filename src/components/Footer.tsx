
import { Github, Heart, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-10 lg:px-20 bg-card/50 border-t border-border/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Ram Chhetri</h3>
            <p className="text-muted-foreground mt-1">Talent Acquisition Specialist</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:chhetriram076@gmail.com" 
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="http://www.linkedin.com/in/ramchhetri" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/60 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              &copy; {new Date().getFullYear()} Ram Chhetri. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-primary" /> in Finland
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
