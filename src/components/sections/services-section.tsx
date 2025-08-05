import Link from 'next/link';
import { Building2, Home, Paintbrush, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/types';

const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Building custom homes with attention to detail and quality craftsmanship, tailored to your lifestyle.'
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'From office buildings to retail spaces, we deliver functional and impressive commercial properties.'
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description: 'Our design team creates beautiful and functional interiors that reflect your personal style.'
  },
  {
    icon: Wrench,
    title: 'Renovations & Remodeling',
    description: 'Transform your existing space with our expert renovation and remodeling services.'
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of construction services to meet the diverse needs of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col items-center p-6 bg-secondary/50 hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-0">
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 text-muted-foreground text-sm">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/services">View All Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
