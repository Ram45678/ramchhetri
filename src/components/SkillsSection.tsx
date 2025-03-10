
import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Briefcase, Brain, Code, Search, UserCheck, BarChart } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
  category: 'recruitment' | 'technical' | 'analytics';
  icon?: React.ReactNode;
}

const skills: Skill[] = [
  { 
    name: "Talent Acquisition", 
    proficiency: 95, 
    category: 'recruitment',
    icon: <Search className="h-5 w-5 text-primary" />
  },
  { 
    name: "Headhunting", 
    proficiency: 90, 
    category: 'recruitment',
    icon: <UserCheck className="h-5 w-5 text-primary" />
  },
  { 
    name: "Sourcing", 
    proficiency: 92, 
    category: 'recruitment',
    icon: <Search className="h-5 w-5 text-primary" />
  },
  { 
    name: "Interviewing", 
    proficiency: 88, 
    category: 'recruitment',
    icon: <UserCheck className="h-5 w-5 text-primary" />
  },
  { 
    name: "ATS", 
    proficiency: 85, 
    category: 'recruitment',
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
  { 
    name: "Tech Recruitment", 
    proficiency: 90, 
    category: 'recruitment',
    icon: <Code className="h-5 w-5 text-primary" />
  },
  { 
    name: "HR Analytics", 
    proficiency: 82, 
    category: 'analytics',
    icon: <BarChart className="h-5 w-5 text-primary" />
  },
  { 
    name: "Business Development", 
    proficiency: 80, 
    category: 'analytics',
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
  { 
    name: "Python", 
    proficiency: 75, 
    category: 'technical',
    icon: <Code className="h-5 w-5 text-primary" />
  },
  { 
    name: "SQL", 
    proficiency: 70, 
    category: 'technical',
    icon: <Code className="h-5 w-5 text-primary" />
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Card className="border border-border/60 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:bg-card/80 hover:border-primary/20">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {skill.icon}
            <h3 className="font-medium">{skill.name}</h3>
          </div>
          <Badge variant="outline" className="text-xs bg-secondary/50 text-foreground border-border/60">
            {skill.proficiency}%
          </Badge>
        </div>
        <Progress value={skill.proficiency} className="h-1.5" />
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
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

  const recruitmentSkills = skills.filter((skill) => skill.category === 'recruitment');
  const analyticsSkills = skills.filter((skill) => skill.category === 'analytics');
  const technicalSkills = skills.filter((skill) => skill.category === 'technical');

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 lg:px-20 bg-secondary/30 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12 section-fade-in">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Toolbox</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive set of recruitment, analytics, and technical skills honed through years of experience.
          </p>
        </div>

        <div className="space-y-12">
          <div className="section-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 border border-primary/20">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Recruitment Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recruitmentSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="section-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 border border-primary/20">
                <BarChart className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Analytics Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analyticsSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="section-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 border border-primary/20">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 section-fade-in">
          <div className="p-6 md:p-8 border border-border/60 bg-card/50 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-primary" />
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Engineering & Tech Recruitment",
                "Cloud & DevOps Talent",
                "Cybersecurity Specialists",
                "IAM Experts",
                "Software Developers",
                "Product Managers",
                "Data Engineers",
                "QA Leads",
                "Talent Pipeline Development"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
