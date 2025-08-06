'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/lib/types';

const projectImages = [
  '/WhatsApp Image 2025-08-06 at 8.54.41 AM.jpeg',
  '/WhatsApp Image 2025-08-06 at 8.54.41 AM (1).jpeg',
  '/WhatsApp Image 2025-08-06 at 8.54.42 AM.jpeg',
  '/WhatsApp Image 2025-08-06 at 8.54.42 AM (1).jpeg',
  '/WhatsApp Image 2025-08-06 at 8.54.42 AM (2).jpeg',
  '/WhatsApp Image 2025-08-06 at 8.54.43 AM.jpeg',
];

const allProjects: Project[] = [
  { 
    id: 1, 
    title: 'Comprehensive Construction & Civil Works Project', 
    category: 'Commercial', 
    image: '/WhatsApp Image 2025-08-06 at 8.54.43 AM.jpeg', 
    description: 'Complete construction and civil works project at Arga Naval Base, Karwar, Karnataka. This comprehensive project includes Naval Base Main Gate construction, residential complex development, interior design & finishing, commercial building renovation, tile installation, and granite & marble work. Our expertise covers all aspects from structural construction to fine finishing touches.',
    dataAiHint: 'comprehensive construction civil works naval base' 
  },
];

export default function ProjectsPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const filteredProjects = allProjects;

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
        );
    };

  return (
    <>
      <section className="bg-secondary py-12 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Recent Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
            A showcase of our dedication to craftsmanship, innovation, and client satisfaction across diverse projects. 
            Our recent work includes the prestigious Naval Base Main Gate construction at Arga Naval Base, Karwar, Karnataka, 
            along with various residential and commercial projects showcasing our expertise in civil works, tile fitting, 
            granite and marble installation.
          </p>
        </div>
      </section>
      
             <section className="py-12">
         <div className="container">

                                                   <div className="max-w-4xl mx-auto">
                  {filteredProjects.map(project => (
                      <Card key={project.id} className="overflow-hidden group shadow-none border rounded-lg">
                          <CardContent className="p-0 relative">
                            {/* Image Carousel */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                              {projectImages.map((image, index) => (
                                <Image
                                  key={index}
                                  src={image}
                                  alt={`${project.title} - Image ${index + 1}`}
                                  width={800}
                                  height={500}
                                  className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ${
                                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                  }`}
                                />
                              ))}
                              
                              {/* Navigation Arrows */}
                              <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                              >
                                <ChevronLeft className="w-6 h-6" />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                              >
                                <ChevronRight className="w-6 h-6" />
                              </button>
                              
                              {/* Image Indicators */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {projectImages.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                      index === currentImageIndex 
                                        ? 'bg-white' 
                                        : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="p-6 bg-card flex flex-col items-start">
                               <Badge variant="secondary" className="rounded-md">{project.category}</Badge>
                               <h3 className="text-2xl font-bold font-headline mt-3">{project.title}</h3>
                               <p className="text-muted-foreground text-base mt-3 flex-grow leading-relaxed">{project.description}</p>
                               <p className="text-sm text-primary font-medium mt-3">📍 Arga Naval Base, Karwar, Karnataka</p>
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
