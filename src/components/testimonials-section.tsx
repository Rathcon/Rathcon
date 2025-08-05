'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Bot, ThumbsUp, Quote } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { summarizeTestimonialAction } from '@/app/actions';
import type { Testimonial } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from './ui/skeleton';

const initialTestimonials: Testimonial[] = [
  { id: 1, name: 'John Doe', company: 'Tech Solutions Inc.', quote: "Working with Construct Digital was a game-changer for our new headquarters. Their professionalism, attention to detail, and commitment to deadlines were outstanding. The final result exceeded our expectations, providing a modern and efficient workspace for our team. We couldn't be happier and highly recommend their services.", avatar: 'https://placehold.co/100x100.png', dataAiHint: 'man portrait' },
  { id: 2, name: 'Jane Smith', company: 'Creative Designs Co.', quote: "The team transformed our outdated office into a vibrant, collaborative environment. Their design sense is impeccable, and they managed the entire project seamlessly from start to finish. Communication was excellent throughout the process. We've seen a noticeable boost in employee morale and productivity since the renovation.", avatar: 'https://placehold.co/100x100.png', dataAiHint: 'woman portrait' },
];

type TestimonialWithSummary = Testimonial & { summary?: string; loading?: boolean };

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialWithSummary[]>(initialTestimonials);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSummarize = (id: number) => {
    const testimonial = testimonials.find(t => t.id === id);
    if (!testimonial) return;

    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, loading: true } : t));

    startTransition(async () => {
      const result = await summarizeTestimonialAction(testimonial.quote);
      if (result.error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error,
        });
        setTestimonials(prev => prev.map(t => t.id === id ? { ...t, loading: false } : t));
      } else {
        setTestimonials(prev => prev.map(t => t.id === id ? { ...t, summary: result.summary, loading: false } : t));
      }
    });
  };

  return (
    <section id="testimonials" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from satisfied partners who trusted us with their vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-primary/50 shrink-0" />
                    <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                    data-ai-hint={testimonial.dataAiHint}
                  />
                  <div>
                    <p className="font-bold font-headline">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  {testimonial.summary ? (
                     <div className="space-y-2">
                        <h4 className="text-sm font-bold flex items-center gap-2"><Bot className="h-4 w-4" /> AI Summary</h4>
                        <p className="text-sm text-muted-foreground bg-secondary p-3 rounded-md">{testimonial.summary}</p>
                     </div>
                  ) : testimonial.loading ? (
                    <div className="space-y-2">
                       <Skeleton className="h-5 w-32" />
                       <Skeleton className="h-16 w-full" />
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => handleSummarize(testimonial.id)} disabled={isPending}>
                      <Bot className="mr-2 h-4 w-4" />
                      Summarize with AI
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
