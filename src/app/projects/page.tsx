'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';

const allProjects: Project[] = [
  { id: 1, title: 'Modern Downtown Plaza', category: 'Commercial', image: 'https://source.unsplash.com/random/600x400/?modern,plaza', description: 'A state-of-the-art commercial hub in the city center.', dataAiHint: 'modern plaza' },
  { id: 2, title: 'Lakeside Family Home', category: 'Residential', image: 'https://source.unsplash.com/random/600x400/?modern,house,lake', description: 'A beautiful custom home with scenic lake views.', dataAiHint: 'modern house lake' },
  { id: 3, title: 'Minimalist Office Interior', category: 'Interior Design', image: 'https://source.unsplash.com/random/600x400/?office,interior', description: 'A complete interior overhaul for a growing tech company.', dataAiHint: 'office interior' },
  { id: 4, title: 'Suburban Villa Renovation', category: 'Renovations', image: 'https://source.unsplash.com/random/600x400/?house,suburb', description: 'A full-scale renovation of a classic suburban villa.', dataAiHint: 'house suburb' },
  { id: 5, title: 'Luxury Residential Tower', category: 'Residential', image: 'https://source.unsplash.com/random/600x400/?luxury,apartment', description: 'A high-rise apartment building with luxury amenities.', dataAiHint: 'luxury apartment' },
  { id: 6, title: 'Industrial Warehouse', category: 'Commercial', image: 'https://source.unsplash.com/random/600x400/?warehouse,exterior', description: 'A large-scale industrial warehouse with modern logistics facilities.', dataAiHint: 'warehouse exterior' },
  { id: 7, 'title': 'Cozy Cafe Fit-out', 'category': 'Interior Design', 'image': 'https://source.unsplash.com/random/600x400/?cafe,interior', 'description': 'Interior design and fit-out for a trendy new cafe.', dataAiHint: 'cafe interior' },
  { id: 8, 'title': 'Historic Building Restoration', 'category': 'Renovations', 'image': 'https://source.unsplash.com/random/600x400/?historic,building', 'description': 'Painstaking restoration of a landmark historic building.', dataAiHint: 'historic building' },
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
      <section className="bg-secondary py-12 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Portfolio</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of our dedication to craftsmanship, innovation, and client satisfaction across diverse projects.
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
            <div className="flex justify-center flex-wrap gap-2 mb-12">
                {categories.map(category => (
                    <Button 
                        key={category} 
                        variant={activeCategory === category ? 'default' : 'outline'}
                        onClick={() => setActiveCategory(category)}
                        className="rounded-full"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <Card key={project.id} className="overflow-hidden group shadow-none border rounded-lg">
                        <CardContent className="p-0 relative">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover aspect-[3/2] w-full group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={project.dataAiHint}
                        />
                        </CardContent>
                        <CardFooter className="p-4 bg-card flex flex-col items-start">
                             <Badge variant="secondary" className="rounded-md">{project.category}</Badge>
                             <h3 className="text-lg font-bold font-headline mt-2">{project.title}</h3>
                             <p className="text-muted-foreground text-sm mt-1 flex-grow">{project.description}</p>
                             <Button variant="link" className="p-0 h-auto mt-4 text-primary">View Project Details &rarr;</Button>
                        </CardFooter>
                  </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
