'use server';
/**
 * @fileOverview An AI-powered career path recommendation tool.
 *
 * - careerPathRecommendation - A function that recommends career paths based on skills.
 * - CareerPathRecommendationInput - The input type for the careerPathRecommendation function.
 * - CareerPathRecommendationOutput - The return type for the careerPathRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerPathRecommendationInputSchema = z.object({
  skills: z
    .string()
    .describe("A comma-separated list of the student's skills and experience."),
});
export type CareerPathRecommendationInput = z.infer<typeof CareerPathRecommendationInputSchema>;

const CareerPathRecommendationOutputSchema = z.object({
  recommendedPaths: z
    .string()
    .describe('A comma-separated list of recommended career paths.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the career path recommendations.'),
});
export type CareerPathRecommendationOutput = z.infer<typeof CareerPathRecommendationOutputSchema>;

export async function careerPathRecommendation(input: CareerPathRecommendationInput): Promise<CareerPathRecommendationOutput> {
  return careerPathRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerPathRecommendationPrompt',
  input: {schema: CareerPathRecommendationInputSchema},
  output: {schema: CareerPathRecommendationOutputSchema},
  prompt: `You are a career counselor specializing in computer science roles.

You will analyze the student's skills and recommend suitable career paths.

Skills: {{{skills}}}

Based on these skills, what career paths would you recommend? Explain your reasoning.

{{#json recommendedPaths}}
{{/json}}
`,
});

const careerPathRecommendationFlow = ai.defineFlow(
  {
    name: 'careerPathRecommendationFlow',
    inputSchema: CareerPathRecommendationInputSchema,
    outputSchema: CareerPathRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
