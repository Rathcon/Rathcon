'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';

const allProjects: Project[] = [
  { id: 1, title: 'Modern Downtown Plaza', category: 'Commercial', image: 'https://placehold.co/600x400.png', description: 'A state-of-the-art commercial hub in the city center.', dataAiHint: 'modern plaza' },
  { id: 2, title: 'Lakeside Family Home', category: 'Residential', image: 'https://placehold.co/600x400.png', description: 'A beautiful custom home with scenic lake views.', dataAiHint: 'modern house lake' },
  { id: 3, title: 'Minimalist Office Interior', category: 'Interior Design', image: 'https://placehold.co/600x400.png', description: 'A complete interior overhaul for a growing tech company.', dataAiHint: 'office interior' },
  { id: 4, title: 'Suburban Villa Renovation', category: 'Renovations', image: 'https://placehold.co/600x400.png', description: 'A full-scale renovation of a classic suburban villa.', dataAiHint: 'house suburb' },
  { id: 5, title: 'Luxury Residential Tower', category: 'Residential', image: 'https://placehold.co/600x400.png', description: 'A high-rise apartment building with luxury amenities.', dataAiHint: 'luxury apartment' },
  { id: 6, title: 'Industrial Warehouse', category: 'Commercial', image: 'https://placehold.co/600x400.png', description: 'A large-scale industrial warehouse with modern logistics facilities.', dataAiHint: 'warehouse exterior' },
  { id: 7, 'title': 'Cozy Cafe Fit-out', 'category': 'Interior Design', 'image': 'https://placehold.co/600x400.png', 'description': 'Interior design and fit-out for a trendy new cafe.', dataAiHint: 'cafe interior' },
  { id: 8, 'title': 'Historic Building Restoration', 'category': 'Renovations', 'image': 'https://placehold.co/600x400.png', 'description': 'Painstaking restoration of a landmark historic building.', dataAiHint: 'historic building' },
];
const categories = ['All', 'Residential', 'Commercial', 'Interior Design', 'Renovations'] as const;
type Category = typeof categories[number];


export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    
    const filteredProjects = activeCategory === 'All' 
        ? allProjects 
        : allProjects.filter(p => p.category === activeCategory);

  return (
    <>
      <section className="bg-secondary py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Portfolio</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of our dedication to craftsmanship, innovation, and client satisfaction across diverse projects.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
            <div className="flex justify-center flex-wrap gap-2 mb-12">
                {categories.map(category => (
                    <Button 
                        key={category} 
                        variant={activeCategory === category ? 'default' : 'outline'}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <Card key={project.id} className="overflow-hidden group shadow-lg">
                        <CardContent className="p-0 relative">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover aspect-[3/2] w-full group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={project.dataAiHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </CardContent>
                        <CardFooter className="p-6 bg-card flex flex-col items-start">
                             <Badge>{project.category}</Badge>
                             <h3 className="text-xl font-bold font-headline mt-2">{project.title}</h3>
                             <p className="text-muted-foreground text-sm mt-1 flex-grow">{project.description}</p>
                             <Button variant="link" className="p-0 h-auto mt-4">View Project Details &rarr;</Button>
                        </CardFooter>
                  </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
