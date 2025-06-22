import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Code, Cpu, Database, GitBranch, Shield, TestTube2, Cloud } from 'lucide-react';
import type { Roadmap } from '@/lib/types';

const roadmaps: Roadmap[] = [
  { id: 'frontend', title: 'Frontend Developer', description: 'Master HTML, CSS, JavaScript, and React to build beautiful user interfaces.', icon: <Code className="h-8 w-8"/> },
  { id: 'backend', title: 'Backend Developer', description: 'Learn Node.js, databases, and APIs to power web applications.', icon: <Database className="h-8 w-8"/> },
  { id: 'fullstack', title: 'Full Stack Developer', description: 'Become proficient in both frontend and backend development.', icon: <GitBranch className="h-8 w-8"/> },
  { id: 'devops', title: 'DevOps Engineer', description: 'Understand CI/CD, cloud infrastructure, and automation.', icon: <Cloud className="h-8 w-8"/> },
  { id: 'ai-ml', title: 'AI/ML Engineer', description: 'Dive into machine learning, neural networks, and data modeling.', icon: <Cpu className="h-8 w-8"/> },
  { id: 'data-science', title: 'Data Scientist', description: 'Explore data analysis, visualization, and statistical modeling.', icon: <TestTube2 className="h-8 w-8"/> },
  { id: 'cybersecurity', title: 'Cybersecurity Analyst', description: 'Learn to protect systems, networks, and data from threats.', icon: <Shield className="h-8 w-8"/> },
];

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
