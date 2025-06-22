'use client';

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { getCareerPath } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Bot, Sparkles, Loader2, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  skills: z.string().min(10, {
    message: 'Please enter at least a few skills (min. 10 characters).',
  }),
});

const initialState = {
  data: null,
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="w-full mt-2 group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-[0_0_20px] transition-all duration-300"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          Get Recommendation <Sparkles className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}

export default function AiCareerTool() {
  const [state, formAction] = useFormState(getCareerPath, initialState);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: '',
    },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold flex items-center">
          <Bot className="h-10 w-10 mr-4 text-primary" />
          AI Career Path Finder
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Not sure where to start? Enter your skills, interests, and project experience, and our AI will suggest the best career paths for you.
        </p>
        <Card className="mt-6 bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <Form {...form}>
              <form action={formAction}>
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Your Skills & Interests</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Python, React, SQL, machine learning, web development, cloud computing..."
                          className="min-h-[120px] text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SubmitButton />
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-center">
        {state.data ? (
          <Card className="w-full bg-gradient-to-br from-card to-card/80 border-primary/30 shadow-primary/20 shadow-[0_0_40px] animate-in fade-in-50 duration-500">
            <CardHeader>
              <CardTitle className="flex items-center"><Sparkles className="h-6 w-6 mr-3 text-primary" /> AI Recommendations</CardTitle>
              <CardDescription>Based on your skills, here are some suggested paths:</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-lg text-primary">Recommended Paths:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {state.data.recommendedPaths.split(',').map((path) => (
                  <span key={path} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {path.trim()}
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-lg text-primary mt-6">Reasoning:</h3>
              <p className="mt-2 text-muted-foreground">{state.data.reasoning}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center text-muted-foreground">
             <div className="w-32 h-32 mx-auto rounded-full bg-card/80 flex items-center justify-center border-2 border-dashed border-border mb-4">
                <Bot size={64} className="text-primary/50" />
            </div>
            <p className="text-lg font-medium">Your personalized career path will appear here.</p>
          </div>
        )}
        {state.message && !state.data && (
            <p className="mt-4 text-destructive">{state.message}</p>
        )}
      </div>
    </div>
  );
}
