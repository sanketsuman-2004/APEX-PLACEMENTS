'use server';

import { z } from 'zod';
import { careerPathRecommendation, CareerPathRecommendationOutput } from '@/ai/flows/career-path-recommendation';

const FormSchema = z.object({
  skills: z.string().min(10, {
    message: 'Please enter at least a few skills (min. 10 characters).',
  }),
});

type State = {
  data: CareerPathRecommendationOutput | null;
  message: string | null;
};

export async function getCareerPath(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    skills: formData.get('skills'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      message: validatedFields.error.flatten().fieldErrors.skills?.[0] ?? "Invalid input.",
    };
  }

  try {
    const result = await careerPathRecommendation({ skills: validatedFields.data.skills });
    return { data: result, message: null };
  } catch (error) {
    console.error(error);
    return { data: null, message: 'An error occurred with the AI service. Please try again later.' };
  }
}
