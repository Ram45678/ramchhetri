
import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Linkedin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.section-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-secondary/30 to-background relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 section-fade-in">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Interested in discussing talent acquisition, recruitment strategies, or potential opportunities? 
            Get in touch and let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-6 section-fade-in">
            <div className="p-6 border border-border/60 bg-card/50 backdrop-blur-sm rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 border border-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:chhetriram076@gmail.com" 
                      className="font-medium hover:text-primary transition-colors"
                    >
                      chhetriram076@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 border border-primary/20">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="http://www.linkedin.com/in/ramchhetri" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      linkedin.com/in/ramchhetri
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border border-border/60 bg-primary/5 backdrop-blur-sm rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-4">
                I'm always open to discussing new opportunities, recruitment challenges, 
                or sharing insights about talent acquisition in the tech industry.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary/20 hover:bg-primary/10"
                asChild
              >
                <a 
                  href="http://www.linkedin.com/in/ramchhetri" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          <div className="section-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-background/50 backdrop-blur-sm border-border/60 focus:border-primary focus-visible:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-background/50 backdrop-blur-sm border-border/60 focus:border-primary focus-visible:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  rows={6}
                  className="bg-background/50 backdrop-blur-sm border-border/60 focus:border-primary focus-visible:ring-primary/20"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className={cn(
                  "w-full relative overflow-hidden group",
                  isSubmitting && "pointer-events-none opacity-80"
                )}
                disabled={isSubmitting}
              >
                <span className="relative flex items-center justify-center gap-2 z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </span>
                <span className="absolute inset-0 bg-primary transform-gpu group-hover:scale-[1.03] transition-transform duration-300 ease-out" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
