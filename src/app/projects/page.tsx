'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, PlusCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Level = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';

export default function ProjectsPage() {
  const [levelFilter, setLevelFilter] = useState<Level>('All');

  const filteredProjects = projects.filter(project => 
    levelFilter === 'All' || project.level === levelFilter
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Project Ideas" 
        description="Build your skills and portfolio with our curated list of project ideas, from beginner-friendly to advanced challenges." 
      />
      
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <label htmlFor="level-filter" className="text-muted-foreground">Filter by level:</label>
          <Select onValueChange={(value: Level) => setLevelFilter(value)} defaultValue="All">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-[0_0_20px] transition-all duration-300">
          <PlusCircle className="mr-2 h-5 w-5" /> Submit Project Idea
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-[0_0_30px] transition-all duration-300 flex flex-col group">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <Badge
                  variant="outline"
                  className={
                    project.level === 'Beginner' ? 'border-green-400/50 text-green-400' :
                    project.level === 'Intermediate' ? 'border-yellow-400/50 text-yellow-400' :
                    'border-red-400/50 text-red-400'
                  }
                >
                  {project.level}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-base text-muted-foreground mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
               <Button variant="outline" className="w-full group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary transition-colors duration-300">
                  <Lightbulb className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
         {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground col-span-full mt-8">No projects found for this level.</p>
        )}
      </div>
    </div>
  );
}
