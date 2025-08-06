import Link from 'next/link';
import { Building2, Home, Paintbrush, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/types';

const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'We build custom homes with unparalleled attention to detail and quality craftsmanship, creating spaces that are perfectly tailored to your lifestyle and needs.'
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'From state-of-the-art office buildings to large-scale retail spaces, we deliver functional, aesthetic, and impressive commercial properties on time and on budget.'
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description: 'Our talented design team creates beautiful and functional interiors that reflect your personal style, enhancing the comfort and value of your space.'
  },
  {
    icon: Wrench,
    title: 'Renovations & Remodeling',
    description: 'Breathe new life into your existing space with our expert renovation and remodeling services. We handle projects of all sizes with precision and care.'
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of construction services designed to meet the diverse needs of our clients, from initial planning to final execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border/50 group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="flex flex-row items-center gap-6 p-6">
                    <div className="bg-primary/10 text-primary rounded-lg p-4 shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                        <service.icon className="w-8 h-8" />
                    </div>
                    <div>
                        <CardTitle className="font-headline text-xl leading-tight">{service.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/services">Discover All Our Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
