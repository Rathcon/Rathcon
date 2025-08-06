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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col p-6 bg-secondary/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300">
              <CardHeader className="p-0 flex-row items-center gap-4">
                <div className="bg-primary/10 text-primary rounded-lg p-3">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 text-muted-foreground text-sm flex-grow">
                <p>{service.description}</p>
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
