import Link from 'next/link';
import Image from 'next/image';
import { Building2, Home, Paintbrush, Wrench, HardHat, LandPlot, Square, Layers, Hammer, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/types';

const allServices: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'We build custom homes with unparalleled attention to detail and quality craftsmanship, creating spaces that are perfectly tailored to your lifestyle and needs.',
    image: '/WhatsApp Image 2025-08-06 at 8.54.43 AM.jpeg',
    features: ['Custom Design', 'Quality Materials', 'Timeline Management']
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'From state-of-the-art office buildings to large-scale retail spaces, we deliver functional, aesthetic, and impressive commercial properties on time and on budget.',
    image: '/WhatsApp Image 2025-08-06 at 8.54.42 AM (2).jpeg',
    features: ['Large Scale Projects', 'Modern Architecture', 'Efficient Planning']
  },
  {
    icon: Paintbrush,
    title: 'Interior Design & Finishing',
    description: 'Our talented design team creates beautiful and functional interiors that reflect your personal style, enhancing the comfort and value of your space.',
    image: '/WhatsApp Image 2025-08-06 at 8.54.42 AM (1).jpeg',
    features: ['Custom Interiors', 'Space Planning', 'Material Selection']
  },
  {
    icon: Wrench,
    title: 'Renovations & Remodeling',
    description: 'Breathe new life into your existing space with our expert renovation and remodeling services. We handle projects of all sizes with precision and care.',
    image: '/WhatsApp Image 2025-08-06 at 8.54.42 AM.jpeg',
    features: ['Structural Updates', 'Modern Upgrades', 'Value Enhancement']
  },
  {
    icon: Square,
    title: 'Tile Installation & Fitting',
    description: 'Professional tile installation services for floors, walls, and backsplashes. We work with ceramic, porcelain, natural stone, and mosaic tiles. Our expert craftsmen ensure precise cutting, proper grouting, and seamless installation.',
    image: '/WhatsApp Image 2025-08-06 at 8.54.41 AM (1).jpeg',
    features: ['Floor & Wall Tiling', 'Precise Cutting', 'Professional Grouting']
  },
  {
    icon: Layers,
    title: 'Granite & Marble Work',
    description: 'Premium granite and marble installation for countertops, flooring, and wall cladding. We offer custom cutting, polishing, and installation services for luxurious finishes.',
    image: '/WhatsApp Image 2025-08-06 at 8.54.41 AM.jpeg',
    features: ['Custom Countertops', 'Wall Cladding', 'Premium Finishing']
  },
  {
    icon: Hammer,
    title: 'Civil Works & Finishing',
    description: 'Comprehensive civil works including concrete work, masonry, plastering, and finishing touches. We provide structural integrity with aesthetic appeal.',
    image: '/WhatsApp Image 2025-08-06 at 8.54.43 AM.jpeg',
    features: ['Concrete Work', 'Masonry Services', 'Plastering & Finishing']
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'Our certified project managers oversee every phase of your project, ensuring clear communication and completion on time, within budget, and to the highest standards.',
    features: ['Timeline Management', 'Budget Control', 'Quality Assurance']
  },
  {
    icon: LandPlot,
    title: 'Pre-Construction & Planning',
    description: 'We offer detailed pre-construction services including site analysis, feasibility studies, cost estimation, and strategic planning to ensure project success.',
    features: ['Site Analysis', 'Cost Estimation', 'Strategic Planning']
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
            We offer a comprehensive suite of construction services designed to meet the diverse needs of our clients, from initial planning to final execution. Our expertise includes civil works like tile, granite, marble fitting, and all types of construction and finishing work.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <Card key={service.title} className="bg-card border-border/50 group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                )}
                
                <CardHeader className="p-8">
                    <div className="bg-primary/10 text-primary rounded-lg p-4 self-start shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <service.icon className="w-8 h-8" />
                    </div>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow flex flex-col">
                  <CardTitle className="font-headline text-xl mb-4">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>
                  
                  {service.features && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
