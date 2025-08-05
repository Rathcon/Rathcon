import Link from 'next/link';
import { Building2, Home, Paintbrush, Wrench, HardHat, LandPlot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/types';

const allServices: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'We build custom homes from the ground up, focusing on quality, durability, and a design that reflects your family\'s needs. Our process is transparent and collaborative.'
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Our expertise covers large-scale commercial projects including office buildings, retail centers, and industrial facilities. We prioritize budget, schedule, and quality.'
  },
  {
    icon: Paintbrush,
    title: 'Interior Design & Finishing',
    description: 'Our in-house design team works with you to create stunning and functional interior spaces, handling everything from layout to final finishes and fixtures.'
  },
  {
    icon: Wrench,
    title: 'Renovations & Remodeling',
    description: 'Modernize your home or commercial space with our comprehensive renovation services. We handle kitchen and bath remodels, additions, and complete overhauls.'
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'Our certified project managers oversee every phase of your project, ensuring it is completed on time, within budget, and to the highest standards of safety.'
  },
  {
    icon: LandPlot,
    title: 'Pre-Construction & Planning',
    description: 'We offer detailed pre-construction services, including site analysis, feasibility studies, budgeting, and value engineering to set your project up for success.'
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for every stage of your construction project, delivered with expertise and precision.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <Card key={service.title} className="flex flex-col text-left p-6 hover:bg-secondary/50 hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-lg p-3">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-16">
                <h3 className="text-2xl font-bold font-headline">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mt-2 mb-6">Let's build something amazing together.</p>
                <Button asChild size="lg">
                    <Link href="/contact">Get a Free Quote</Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
