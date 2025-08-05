'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing customer testimonials.
 *
 * - testimonialSummarizer - A function that takes a testimonial as input and returns a concise summary.
 * - TestimonialSummarizerInput - The input type for the testimonialSummarizer function.
 * - TestimonialSummarizerOutput - The return type for the testimonialSummarizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TestimonialSummarizerInputSchema = z.object({
  testimonial: z
    .string()
    .describe('The customer testimonial to be summarized.'),
});
export type TestimonialSummarizerInput = z.infer<typeof TestimonialSummarizerInputSchema>;

const TestimonialSummarizerOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the customer testimonial.'),
});
export type TestimonialSummarizerOutput = z.infer<typeof TestimonialSummarizerOutputSchema>;

export async function testimonialSummarizer(input: TestimonialSummarizerInput): Promise<TestimonialSummarizerOutput> {
  return testimonialSummarizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'testimonialSummarizerPrompt',
  input: {schema: TestimonialSummarizerInputSchema},
  output: {schema: TestimonialSummarizerOutputSchema},
  prompt: `Summarize the following customer testimonial in a concise and impactful way. Focus on the key benefits and positive aspects mentioned by the customer.\n\nTestimonial: {{{testimonial}}}`,
});

const testimonialSummarizerFlow = ai.defineFlow(
  {
    name: 'testimonialSummarizerFlow',
    inputSchema: TestimonialSummarizerInputSchema,
    outputSchema: TestimonialSummarizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
