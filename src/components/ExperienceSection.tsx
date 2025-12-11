import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Award, ChevronRight, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements?: string[];
  branding?: string[];
  link: string;
  logo: string;
}

interface PublishedWork {
  title: string;
  url: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "WeAre Solutions Oy",
    title: "Talent Acquisition Specialist",
    period: "November 2022 - Present",
    location: "Vantaa / Espoo, Finland",
    responsibilities: [
      "Supporting recruitment mainly for senior and niche roles, such as software developers, cloud engineers, DevOps and observability engineers, IAM specialists and other consulting profiles.",
      "Helping teams hire in both Finland and Poland, with a strong focus on understanding the real needs of each team instead of just matching keywords to CVs.",
      "Owning the recruitment process when there is a hiring need: clarifying role requirements, writing and publishing job ads, sourcing and approaching candidates, running screening calls and coordinating interviews.",
      "Keeping communication straightforward and honest so that both candidates and stakeholders know what is happening, what the next step is and why.",
      "Building and maintaining relationships with recruitment agencies, subcontractors and freelancers when external support is needed.",
      "Working with marketing to strengthen WeAre's positioning in observability and modern cloud engineering.",
      "Writing blogs and LinkedIn content, and contributing ideas for carousels, videos and campaigns that explain what we do in a clear and concrete way.",
      "Making sure our recruitment messages and marketing tell a consistent story, so candidates and clients see the same WeAre that we experience internally."
    ],
    achievements: [
      "Helped WeAre expand into the Polish market by building our first engineering and consulting team.",
      "Acted as a trusted partner to leadership, bringing insight on talent availability, salary expectations and hiring feasibility for different tech roles.",
      "Recognised in the Top 25% of LinkedIn Recruiters (2023) for sourcing and engagement, reflecting a strong focus on personalised outreach and respectful candidate communication."
    ],
    branding: [
      "Working with marketing to strengthen WeAre's positioning in observability and modern cloud engineering.",
      "Writing blogs and LinkedIn content, and contributing ideas for carousels, videos and campaigns that explain what we do in a clear and concrete way.",
      "Making sure our recruitment messages and marketing tell a consistent story, so candidates and clients see the same WeAre that we experience internally."
    ],
    link: "https://www.weare.fi/en/",
    logo: "/lovable-uploads/9cd06576-3a10-40e4-8174-e326f27bacb1.png",
  },
  {
    company: "Digipool Group Oy",
    title: "Talent Acquisition Specialist",
    period: "May 2022 - September 2022",
    location: "Helsinki Metropolitan Area",
    responsibilities: [
      "Managed end-to-end recruitment processes for multiple clients, mainly for senior software and QA roles.",
      "Conducted intake discussions with hiring managers to understand team structures, project needs and what a 'good hire' would look like in their context.",
      "Sourced and approached candidates through LinkedIn and other channels, screened them and coordinated the interview process between candidates and clients.",
      "Focused on delivering small, well-matched shortlists that led to confident, long-term hires rather than quick but risky placements.",
      "Supported client employer branding and visibility by suggesting improvements to job ad content and messaging."
    ],
    link: "https://digipool.fi/",
    logo: "/lovable-uploads/047c180f-32a9-4c5f-a5de-5122c40fc053.png",
  }
];

const publishedWorks: PublishedWork[] = [
  {
    title: "Innovative Culture and Product Development",
    url: "https://www.weare.fi/en/innovative-culture-and-product-development/",
    description: "An article discussing how innovative company culture impacts product development success."
  },
  {
    title: "Our Values in Recruitment",
    url: "https://www.weare.fi/en/our-values-in-recruitment/",
    description: "Insights on value-based recruitment approaches and how they contribute to company culture."
  },
  {
    title: "Update on Recruitment and Measuring Satisfaction",
    url: "https://www.weare.fi/en/update-on-recruitment-and-measuring-satisfaction/",
    description: "An exploration of methods to measure and improve candidate and employee satisfaction."
  },
  {
    title: "10 Best Security Practices in Software Development",
    url: "https://www.weare.fi/en/10-best-security-practices-in-software-development/",
    description: "A guide on implementing effective security practices in software development processes."
  },
  {
    title: "How to Become a Data-Driven Organization",
    url: "https://www.weare.fi/en/how-to-become-a-data-driven-organization/",
    description: "Strategies for organizations to leverage data for better decision-making and business outcomes."
  },
  {
    title: "Guide to Excelling in Industry 4.0 Era",
    url: "https://www.weare.fi/en/guide-to-excelling-in-industry-40-era/",
    description: "An overview of how businesses can adapt and thrive in the fourth industrial revolution."
  },
  {
    title: "Impact of AI on Software Development",
    url: "https://www.weare.fi/en/impact-of-ai-on-software-development/",
    description: "An analysis of how artificial intelligence is transforming software development practices and outcomes."
  }
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
        </div>

        <div className="mb-12 text-center section-fade-in">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                  <div className="p-6 md:p-8 md:w-1/3 bg-secondary/30 border-b md:border-b-0 md:border-r border-border/60 flex flex-col">
                    <div className="mb-4">
                      <a 
                        href={experience.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-80 transition-opacity"
                      >
                        <img 
                          src={getImagePath(experience.logo)} 
                          alt={`${experience.company} logo`} 
                          className="max-h-16 w-auto mb-4"
                        />
                      </a>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        <a 
                          href={experience.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center hover:text-primary transition-colors"
                        >
                          {experience.company}
                          <ExternalLink className="ml-2 h-4 w-4 inline-block" />
                        </a>
                      </h3>
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
                          <li key={idx} className="flex items-start text-sm md:text-base text-left">
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
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {experience.achievements.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm md:text-base text-left">
                              <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {experience.branding && (
                      <div>
                        <h4 className="text-md font-medium flex items-center text-muted-foreground mb-3">
                          <FileText className="h-4 w-4 mr-2" />
                          Employer branding & observability marketing
                        </h4>
                        <ul className="space-y-3">
                          {experience.branding.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm md:text-base text-left">
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

        <div className="mt-16 section-fade-in">
          <Card className="border border-border/60 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6">
                <Badge variant="outline" className="mb-3 px-3 py-1 text-sm border-primary/30 text-primary bg-primary/10">
                  Available for Consulting
                </Badge>
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <Briefcase className="h-6 w-6 mr-2 text-primary" />
                  Freelance / Consulting Talent Acquisition
                </h3>
                <p className="text-muted-foreground">
                  In addition to my role at WeAre, I am open to selected freelance or consulting assignments in Talent Acquisition and Employer Branding.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4">I can help with:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm md:text-base">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Hiring senior and niche tech profiles (software, cloud, DevOps, observability, IAM).</span>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Setting up or running end to end recruitment processes for specific roles or markets.</span>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Writing job ads and outreach messages that are clear, honest and attractive.</span>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Supporting employer branding through content and LinkedIn activity.</span>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Advising on talent market insights in Finland and Poland.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-card/50 rounded-lg border border-border/40 mb-6">
                <p className="text-sm md:text-base text-muted-foreground italic">
                  My approach is simple: I try to understand the business first, then focus on a few well matched candidates rather than a lot of random CVs. I care about long term fit, clear communication and not wasting anyone's time.
                </p>
              </div>

              <p className="text-sm md:text-base font-medium">
                If you need help hiring for a specific role or building a small, senior team, feel free to reach out.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 section-fade-in">
          <Card className="border border-border/60 bg-primary/5 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Published Work
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {publishedWorks.map((work, index) => (
                  <Card key={index} className="border border-border/40 bg-card/30 hover:bg-card/60 transition-colors">
                    <CardContent className="p-5 space-y-4">
                      <h4 className="font-medium text-base line-clamp-2">{work.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-3 text-left">{work.description}</p>
                      <Button variant="outline" size="sm" asChild className="w-full mt-2 gap-1">
                        <a href={work.url} target="_blank" rel="noopener noreferrer">
                          Read Article <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;