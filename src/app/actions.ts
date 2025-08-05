'use server';

import { testimonialSummarizer } from '@/ai/flows/testimonial-summarizer';
import { z } from 'zod';

const summarizeSchema = z.object({
    testimonial: z.string().min(10, 'Testimonial is too short.'),
});

export async function summarizeTestimonialAction(testimonial: string) {
    const validation = summarizeSchema.safeParse({ testimonial });
    if (!validation.success) {
        return { error: validation.error.flatten().fieldErrors.testimonial?.[0] };
    }

    try {
        const result = await testimonialSummarizer({ testimonial });
        return { summary: result.summary };
    } catch (e) {
        console.error(e);
        return { error: 'Failed to summarize testimonial. Please try again later.' };
    }
}
