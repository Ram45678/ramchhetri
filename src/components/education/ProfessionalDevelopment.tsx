
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const ProfessionalDevelopment = () => {
  return (
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
              Advanced knowledge in recruiting for engineering, cloud, and Observability roles.
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
  );
};

export default ProfessionalDevelopment;
