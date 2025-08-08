import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Ruler } from 'lucide-react';
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
  const project = projects[0]; // Get the single project
  
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
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Carousel */}
            <div className="space-y-4">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-3 gap-2">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-24 overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold font-headline mb-4">{project.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
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
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-primary">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
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
