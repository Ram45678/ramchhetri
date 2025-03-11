
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResearchSection = () => {
  return (
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
  );
};

export default ResearchSection;
