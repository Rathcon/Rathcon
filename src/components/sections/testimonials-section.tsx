import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { clients } from '@/lib/data';

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Rathcon Construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {clients.map((client) => (
            <Card key={client.id} className="bg-card border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <blockquote className="text-sm text-muted-foreground mb-4 italic">
                  "{client.testimonial}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-sm">{client.name}</div>
                  {client.company && (
                    <div className="text-xs text-muted-foreground">{client.company}</div>
                  )}
                  <div className="text-xs text-primary mt-1">
                    {client.projectType} • {client.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold font-headline mb-2">
              Trusted by 100+ Happy Clients
            </h3>
            <p className="text-muted-foreground">
              Join our growing list of satisfied customers who have chosen Rathcon Construction for their building needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 