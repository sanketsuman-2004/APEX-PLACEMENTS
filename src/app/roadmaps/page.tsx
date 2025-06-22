import { roadmaps } from '@/lib/data';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RoadmapsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Career Roadmaps" 
        description="Your step-by-step guide to mastering the most in-demand tech domains and landing your dream job." 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roadmaps.map((roadmap) => (
          <Card key={roadmap.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-[0_0_30px] transition-all duration-300 flex flex-col group">
            <CardHeader className="flex-row items-center gap-4">
               <div className="p-3 bg-primary/10 rounded-lg text-primary">
                {roadmap.icon}
              </div>
              <div>
                <CardTitle className="text-xl">{roadmap.title}</CardTitle>
              </div>
            </CardHeader>
             <CardDescription className="px-6 text-base text-muted-foreground flex-grow">{roadmap.description}</CardDescription>
            <CardFooter>
              <Button asChild variant="link" className="p-0 text-primary group-hover:underline">
                <Link href={`/roadmaps/${roadmap.id}`}>
                  Start Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
