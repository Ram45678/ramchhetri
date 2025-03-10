
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Award, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements?: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "WeAre Solutions Oy",
    title: "Talent Acquisition Specialist",
    period: "November 2022 - Present",
    location: "Helsinki",
    responsibilities: [
      "Leading end-to-end recruitment for top-tier software developers, cloud engineers, IAM experts, cybersecurity specialists, DevOps/DevSecOps engineers, and product managers across Finland and Poland.",
      "Partnering closely with hiring managers and technical teams to define job requirements and ensure talent alignment.",
      "Developing and executing data-driven sourcing strategies, reducing time-to-hire by 25% and improving the vacancy fill rate to 90%.",
      "Improving candidate experience, achieving a candidate satisfaction score of 85% focusing on a personalized approach to understanding candidates deeply rather than relying solely on automation.",
      "Utilizing recruitment analytics to track hiring performance and optimize recruitment strategies.",
      "Conducting thorough candidate screenings and interviews to assess technical skills and cultural fit.",
      "Developing and maintaining relationships with external recruiters and staffing agencies to expand the talent pool.",
      "Creating employer branding content, including blog posts and social media content, contributing to WeAre's positive employer perception. Received direct feedback from candidates stating that WeAre is highly regarded as an employer of choice, with many hires coming through employee referrals."
    ],
    achievements: [
      "On-boarded 25+ new & diverse engineering team members since joining the company across Finland and Poland.",
      "Reduced time-to-fill from 45 to 30 days, ensuring faster hiring cycles.",
      "Increased company career page visits, applicant count and conversion rate.",
      "Awarded Top 25% of LinkedIn recruiter for consistent excellence in sourcing and engaging talent from LinkedIn."
    ],
    link: "#",
  },
  {
    company: "Digipool Group Oy",
    title: "Talent Acquisition Specialist",
    period: "May 2022 - September 2022",
    location: "Helsinki",
    responsibilities: [
      "Conducted end-to-end recruitment for software developers, QA leads, and data engineers.",
      "Built and maintained a large talent pool of engineering candidates, enabling faster sourcing for client projects.",
      "Conducted weekly candidate calls, interviews ensuring an efficient screening process.",
      "Partnered with clients to understand staffing needs, reducing time-to-fill days significantly.",
      "Identified and researched new prospective clients, contributing to business development efforts."
    ],
    link: "#",
  }
];

const ExperienceSection = () => {
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
      id="experience" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 lg:px-20 bg-background relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 section-fade-in">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
            Work Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Experienced at full-cycle recruitment, employer branding, talent pipeline development, 
            data-driven hiring, and stakeholder collaboration.
          </p>
        </div>

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className={`
                border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden
                transition-all duration-300 hover:shadow-md hover:bg-card/80
                hover:border-primary/20 section-fade-in
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 md:p-8 md:w-1/3 bg-secondary/30 border-b md:border-b-0 md:border-r border-border/60">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{experience.company}</h3>
                      <p className="text-muted-foreground font-medium">{experience.title}</p>
                      
                      <div className="flex items-center text-sm text-muted-foreground space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 md:w-2/3 space-y-6">
                    <div>
                      <h4 className="text-md font-medium flex items-center text-muted-foreground mb-3">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {experience.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm md:text-base">
                            <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {experience.achievements && (
                      <div>
                        <h4 className="text-md font-medium flex items-center text-muted-foreground mb-3">
                          <Award className="h-4 w-4 mr-2" />
                          Achievements
                        </h4>
                        <ul className="space-y-3">
                          {experience.achievements.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm md:text-base">
                              <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
