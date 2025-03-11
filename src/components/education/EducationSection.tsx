
import { useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import EducationCard from './EducationCard';
import ResearchSection from './ResearchSection';
import ProfessionalDevelopment from './ProfessionalDevelopment';
import { educations } from './educationData';

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
            <EducationCard key={index} education={education} />
          ))}
        </div>

        <div className="mt-12 section-fade-in">
          <ResearchSection />
        </div>

        <div className="mt-12 section-fade-in">
          <ProfessionalDevelopment />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
