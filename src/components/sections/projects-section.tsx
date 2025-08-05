import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/types';
import { Badge } from '../ui/badge';

const featuredProjects: Project[] = [
  { id: 1, title: 'Modern Downtown Plaza', category: 'Commercial', image: 'https://placehold.co/600x400.png', description: '', dataAiHint: 'modern plaza' },
  { id: 2, title: 'Lakeside Family Home', category: 'Residential', image: 'https://placehold.co/600x400.png', description: '', dataAiHint: 'modern house lake' },
  { id: 3, title: 'Minimalist Office Interior', category: 'Interior Design', image: 'https://placehold.co/600x400.png', description: '', dataAiHint: 'office interior' },
  { id: 4, title: 'Suburban Villa Renovation', category: 'Renovations', image: 'https://placehold.co/600x400.png', description: '', dataAiHint: 'house suburb' },
  { id: 5, title: 'Luxury Residential Tower', category: 'Residential', image: 'https://placehold.co/600x400.png', description: '', dataAiHint: 'luxury apartment' },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our commitment to quality, design, and craftsmanship.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredProjects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="p-0 relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover aspect-[3/2] w-full group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={project.dataAiHint}
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </CardContent>
                    <CardFooter className="p-4 absolute bottom-0 w-full">
                       <div>
                         <Badge variant="secondary">{project.category}</Badge>
                         <h3 className="text-lg font-bold font-headline text-white mt-1">{project.title}</h3>
                       </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/projects">Explore All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
