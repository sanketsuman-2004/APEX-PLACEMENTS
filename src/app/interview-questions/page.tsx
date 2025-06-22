'use client';

import { useState } from 'react';
import { interviewQuestions } from '@/lib/data';
import { PageHeader } from '@/components/shared/PageHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export default function InterviewQuestionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredQuestions = interviewQuestions.filter(q => 
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(interviewQuestions.map(q => q.category))];

  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Interview Questions" 
        description="Ace your technical and HR rounds with our curated list of frequently asked questions." 
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            type="search"
            placeholder="Search questions, answers, or categories..."
            className="pl-10 h-12 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {filteredQuestions.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-border/50">
              <AccordionTrigger className="text-left hover:no-underline text-base md:text-lg">
                <div className="flex items-center gap-4">
                   <Badge 
                    variant="outline" 
                    className={
                      item.category === 'DSA' ? 'border-red-500/50 text-red-400' :
                      item.category === 'Frontend' ? 'border-blue-500/50 text-blue-400' :
                      item.category === 'Backend' ? 'border-green-500/50 text-green-400' :
                      item.category === 'System Design' ? 'border-purple-500/50 text-purple-400' :
                      'border-yellow-500/50 text-yellow-400'
                    }>
                      {item.category}
                    </Badge>
                  <span>{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {filteredQuestions.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No questions found matching your search.</p>
        )}
      </div>
    </div>
  );
}
