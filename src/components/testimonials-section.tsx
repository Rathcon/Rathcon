'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import type { Testimonial } from '@/lib/types';

const testimonials: Testimonial[] = [
  { id: 1, name: 'John Doe', company: 'Tech Solutions Inc.', quote: "Working with Rathcon Constructions was a game-changer for our new headquarters. Their professionalism, attention to detail, and commitment to deadlines were outstanding. The final result exceeded our expectations, providing a modern and efficient workspace for our team. We couldn't be happier and highly recommend their services.", avatar: 'https://source.unsplash.com/random/100x100/?man,portrait', dataAiHint: 'man portrait' },
  { id: 2, name: 'Jane Smith', company: 'Creative Designs Co.', quote: "The team transformed our outdated office into a vibrant, collaborative environment. Their design sense is impeccable, and they managed the entire project seamlessly from start to finish. Communication was excellent throughout the process. We've seen a noticeable boost in employee morale and productivity since the renovation.", avatar: 'https://source.unsplash.com/random/100x100/?woman,portrait', dataAiHint: 'woman portrait' },
  { id: 3, name: 'Samuel Wilson', company: 'Lakeside Properties', quote: "Rathcon built our dream family home, and the experience was exceptional. They listened to our needs, offered creative solutions, and the craftsmanship is second to none. They made a complex process feel easy and enjoyable. We are incredibly grateful for their dedication and for the beautiful home they created for us.", avatar: 'https://source.unsplash.com/random/100x100/?male,portrait,beard', dataAiHint: 'male portrait beard'},
  { id: 4, name: 'Emily Chen', company: 'The Urban Bistro', quote: "The renovation of our restaurant was a huge undertaking, but Rathcon handled it with absolute professionalism. They minimized downtime and delivered a stunning result that our customers love. Their team was responsive, reliable, and a pleasure to work with. I would not hesitate to partner with them again for future projects.", avatar: 'https://source.unsplash.com/random/100x100/?female,portrait,asian', dataAiHint: 'female portrait asian'},
];


export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-16">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from satisfied partners who trusted us with their vision. Their success is our greatest achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 shadow-none border rounded-lg flex flex-col">
              <CardContent className="p-0 flex flex-col flex-grow">
                <div className="flex items-start gap-4 flex-grow">
                    <Quote className="h-8 w-8 text-primary/20 shrink-0 mt-1" />
                    <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
