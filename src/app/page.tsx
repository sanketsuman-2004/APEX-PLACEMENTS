import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Code, FileText, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';
import AiCareerTool from '@/components/home/AiCareerTool';

export default function Home() {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: 'Career Roadmaps',
      description: 'Step-by-step guides for top tech roles like Full Stack, AI/ML, and DevOps.',
      link: '/roadmaps',
      cta: 'Explore Roadmaps',
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: 'Interview Questions',
      description: 'Curated Q&As for DSA, System Design, and role-specific interviews.',
      link: '/interview-questions',
      cta: 'Get Questions',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: 'Project Ideas',
      description: 'A directory of projects from beginner to advanced to build your portfolio.',
      link: '/projects',
      cta: 'Find Projects',
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Free Certifications',
      description: 'Grab free certifications from Google, Microsoft, and more.',
      link: '/certifications',
      cta: 'Claim Certificates',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-20 md:py-32 bg-grid-primary/10 relative">
        <div className="container mx-auto text-center px-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground">
              Your Launchpad to a Top Tech Career
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Apex Placement provides curated roadmaps, interview prep, and AI-powered guidance to help you land your dream job in computer science.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-[0_0_20px] transition-all duration-300">
                <Link href="/roadmaps">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors duration-300">
                <Link href="#ai-career-tool">
                  <Bot className="mr-2 h-5 w-5"/> AI Career Tool
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Everything You Need to Succeed</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            From planning your career path to acing the final interview, we've got you covered.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-[0_0_30px] transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                   <Button asChild variant="link" className="p-0 text-primary group-hover:underline">
                    <Link href={feature.link}>
                      {feature.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-career-tool" className="w-full py-20 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <AiCareerTool />
        </div>
      </section>
    </div>
  );
}
