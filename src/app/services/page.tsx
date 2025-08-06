import Link from 'next/link';
import { Building2, Home, Paintbrush, Wrench, HardHat, LandPlot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/types';

const allServices: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'We build custom homes from the ground up, focusing on quality, durability, and a design that reflects your family\'s needs. Our comprehensive service includes architectural design, material selection, and construction, ensuring a seamless and transparent process from foundation to finish.'
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Our expertise covers large-scale commercial projects including office buildings, retail centers, and industrial facilities. We prioritize budget adherence, on-time delivery, and superior quality to create spaces that are both impressive and functional.'
  },
  {
    icon: Paintbrush,
    title: 'Interior Design & Finishing',
    description: 'Our in-house design team works with you to create stunning and functional interior spaces. We handle everything from space planning and layout to material selection, color palettes, and the final finishes and fixtures that bring your vision to life.'
  },
  {
    icon: Wrench,
    title: 'Renovations & Remodeling',
    description: 'Modernize your home or commercial space with our comprehensive renovation services. We specialize in kitchen and bath remodels, home additions, basement finishing, and complete commercial overhauls, transforming your existing property to meet your current needs.'
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'Our certified project managers oversee every phase of your project. They act as your single point of contact, ensuring clear communication, and that your project is completed on time, within budget, and to the highest standards of safety and quality.'
  },
  {
    icon: LandPlot,
    title: 'Pre-Construction & Planning',
    description: 'We offer detailed pre-construction services to set your project up for success. This includes site analysis, feasibility studies, detailed cost estimation, value engineering, and strategic planning to mitigate risks and ensure a smooth construction process.'
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for every stage of your construction project, delivered with expertise and precision.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <Card key={service.title} className="bg-card border-border/50 group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="p-8">
                    <div className="bg-primary/10 text-primary rounded-lg p-4 self-start shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <service.icon className="w-8 h-8" />
                    </div>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow flex flex-col">
                  <CardTitle className="font-headline text-xl mb-4">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
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
