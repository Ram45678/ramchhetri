
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Award, Search, Users, BarChart, Clock } from 'lucide-react';

const LinkedInRecognition = () => {
  return (
    <section id="linkedin-recognition" className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-background to-background/80 relative">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 section-fade-in">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
            Professional Recognition
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
            <Linkedin className="h-7 w-7 text-[#0077B5]" />
            LinkedIn Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Awarded among the top 25% of LinkedIn recruiters for consistent excellence in sourcing and engaging talent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section-fade-in">
          <Card className="border border-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md">
                  <img 
                    src="/lovable-uploads/40fbc7a9-6b4b-48d5-b6bf-e4c484698e6f.png" 
                    alt="LinkedIn Top 25% Recruiter Recognition" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md">
                  <img 
                    src="/lovable-uploads/87b9d2ee-a4ce-4aa3-81d4-4575698e66e2.png" 
                    alt="LinkedIn Recruiting Statistics" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LinkedInRecognition;
