import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const missionPoints = [
    'Provide clear, actionable career roadmaps.',
    'Demystify the interview process with curated Q&As.',
    'Inspire learning through real-world project ideas.',
    'Offer access to valuable free certifications.',
    'Leverage AI to provide personalized career guidance.',
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="About Apex Placement" 
        description="Our mission is to empower the next generation of tech leaders." 
      />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Who We Are</h2>
          <p className="text-lg text-muted-foreground">
            Apex Placement was born from a simple idea: to create a single, comprehensive platform that computer science students can rely on for their placement preparation. We are a team of developers, educators, and industry professionals passionate about bridging the gap between academic knowledge and industry expectations.
          </p>
          <p className="text-lg text-muted-foreground">
            We understand the challenges students face—from choosing a career path to cracking tough technical interviews. Our goal is to provide the tools, resources, and guidance needed to navigate this journey with confidence.
          </p>
        </div>
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Our Core Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
