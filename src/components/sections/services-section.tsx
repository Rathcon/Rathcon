import Link from 'next/link';
import Image from 'next/image';
import { Building2, Home, Paintbrush, Wrench, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/types';

const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'We build custom homes with unparalleled attention to detail and quality craftsmanship, creating spaces that are perfectly tailored to your lifestyle and needs.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80',
    features: ['Custom Design', 'Quality Materials', 'Timeline Management']
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'From state-of-the-art office buildings to large-scale retail spaces, we deliver functional, aesthetic, and impressive commercial properties on time and on budget.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&auto=format&q=80',
    features: ['Large Scale Projects', 'Modern Architecture', 'Efficient Planning']
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description: 'Our talented design team creates beautiful and functional interiors that reflect your personal style, enhancing the comfort and value of your space.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&auto=format&q=80',
    features: ['Custom Interiors', 'Space Planning', 'Material Selection']
  },
  {
    icon: Wrench,
    title: 'Renovations & Remodeling',
    description: 'Breathe new life into your existing space with our expert renovation and remodeling services. We handle projects of all sizes with precision and care.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format&q=80',
    features: ['Structural Updates', 'Modern Upgrades', 'Value Enhancement']
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of construction services designed to meet the diverse needs of our clients, 
            from initial planning to final execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-3 rounded-xl bg-card/90 text-primary border border-border">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="p-6">
                <CardTitle className="font-headline text-2xl leading-tight text-foreground">{service.title}</CardTitle>
                <p className="text-muted-foreground mt-2">{service.description}</p>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 border-primary text-primary">
                      <Link href="/services">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fadeInUp">
          <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
