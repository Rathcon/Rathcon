'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, DollarSign, Ruler } from 'lucide-react';
import { projects } from '@/lib/data';

export const metadata = {
  title: 'Our Projects - Construction Portfolio | Rathcon Construction',
  description: 'Explore our comprehensive portfolio of construction projects including residential, commercial, interior design, and renovation projects across Mumbai and Thane. View our completed projects and get inspired.',
  keywords: [
    'construction projects mumbai',
    'residential projects thane',
    'commercial construction portfolio',
    'interior design projects mumbai',
    'renovation projects thane',
    'construction portfolio mumbai',
    'building projects thane',
    'completed projects mumbai'
  ]
};

export default function ProjectsPage() {
  const projectTypes = ['all', 'residential', 'commercial', 'renovation', 'interior'];
  
  return (
    <>
      <section className="bg-secondary py-16 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Our Projects Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Explore our comprehensive portfolio of successful construction projects. From luxury villas to commercial complexes, 
            we've delivered exceptional results across Mumbai and Thane. Each project showcases our commitment to quality, 
            innovation, and client satisfaction.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-card border-border/50 group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="p-6">
                  <div className="space-y-2">
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Ruler className="h-4 w-4" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span>{project.value}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/projects/${project.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-primary/10 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold font-headline mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Inspired by our portfolio? Let's discuss your construction project and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
