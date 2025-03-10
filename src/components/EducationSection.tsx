
import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, BookOpen, ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
  logo?: string;
  grade?: string;
}

const educations: Education[] = [
  {
    institution: "LUT University",
    degree: "Master's in Business Analytics (Specialization: Big Data & AI)",
    period: "Sept 2024 - Present",
    location: "Finland",
    description: "Pursuing advanced studies in business analytics, focusing on big data techniques and artificial intelligence applications in business contexts.",
    logo: "/lovable-uploads/de402d04-a033-4c0c-88c6-1b1a2ce4cbac.png"
  },
  {
    institution: "JAMK University of Applied Sciences",
    degree: "Bachelor of Business Administration - BBA, International Business",
    period: "Jan 2020 - Apr 2022",
    location: "Finland",
    description: "Focused on international business operations, digital marketing, and cross-cultural management. Completed thesis on blockchain applications in HR recruitment.",
    logo: "/lovable-uploads/bd588702-45b7-4fdd-925b-29987b14b300.png",
    grade: "4.29/5"
  }
];

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 lg:px-20 bg-background relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 section-fade-in">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
            Education & Learning
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Background</h2>
        </div>

        <div className="mb-12 text-center section-fade-in">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Expanding knowledge in analytics and modern business practices through formal education.
          </p>
        </div>

        <div className="space-y-8">
          {educations.map((education, index) => (
            <Card 
              key={index}
              className="border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden
                transition-all duration-300 hover:shadow-md hover:bg-card/80
                hover:border-primary/20 section-fade-in"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    {education.logo ? (
                      <div className="h-20 w-20 overflow-hidden">
                        <img 
                          src={education.logo} 
                          alt={education.institution} 
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 border border-primary/20">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-xl font-semibold">{education.institution}</h3>
                      <p className="text-muted-foreground mt-1">{education.degree}</p>
                      {education.grade && (
                        <div className="mt-1 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Grade: {education.grade}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{education.period}</span>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                    
                    {education.description && (
                      <p className="text-muted-foreground text-sm">{education.description}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 section-fade-in">
          <Card className="border border-border/60 bg-primary/5 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Research & Thesis
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">Implementation of Blockchain Technology into Human Resource Recruitment</h4>
                  <p className="text-muted-foreground mb-4">
                    Research exploring how blockchain technology can revolutionize recruitment processes, enhancing security, efficiency, and transparency in HR operations.
                  </p>
                  <Button variant="outline" size="sm" asChild className="gap-2">
                    <a 
                      href="https://www.theseus.fi/handle/10024/743680" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Publication <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 section-fade-in">
          <Card className="border border-border/60 bg-primary/5 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Professional Development
              </h3>
              <p className="text-muted-foreground mb-6">
                Committed to continuous learning and staying current with the latest trends in talent acquisition, recruitment technologies, and HR analytics.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card/50 border border-border/40">
                  <h4 className="font-medium mb-2">Technical Recruitment Specialization</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced knowledge in recruiting for engineering, cloud, and cybersecurity roles.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card/50 border border-border/40">
                  <h4 className="font-medium mb-2">Data-Driven Recruitment Strategies</h4>
                  <p className="text-sm text-muted-foreground">
                    Expertise in implementing analytical approaches to talent acquisition.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
