
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Calendar, GraduationCap } from 'lucide-react';
import { getImagePath } from '@/lib/image-utils';

interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
  logo?: string;
  grade?: string;
}

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card 
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
                  src={getImagePath(education.logo)} 
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
          
          <div className="space-y-4 flex-1 text-left">
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
  );
};

export default EducationCard;
