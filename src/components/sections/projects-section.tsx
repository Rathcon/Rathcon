import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'Naval Base Main Gate Construction',
    category: 'Commercial',
    image: '/WhatsApp Image 2025-08-06 at 8.54.43 AM.jpeg',
    description: 'State-of-the-art main gate construction at Arga Naval Base featuring modern security infrastructure and architectural excellence.',
    location: 'Arga Naval Base, Karwar, Karnataka',
    duration: '12 months',
    area: '25,000 sq ft'
  },
  {
    id: 2,
    title: 'Residential Complex Development',
    category: 'Residential',
    image: '/WhatsApp Image 2025-08-06 at 8.54.42 AM (2).jpeg',
    description: 'Modern residential complex with premium amenities and sustainable design principles.',
    location: 'Arga Naval Base, Karwar, Karnataka',
    duration: '18 months',
    area: '150,000 sq ft'
  },
  {
    id: 3,
    title: 'Interior Design & Finishing',
    category: 'Interior Design',
    image: '/WhatsApp Image 2025-08-06 at 8.54.42 AM (1).jpeg',
    description: 'Complete interior design and finishing work showcasing expertise in space planning and material selection.',
    location: 'Arga Naval Base, Karwar, Karnataka',
    duration: '6 months',
    area: '45,000 sq ft'
  },
  {
    id: 4,
    title: 'Commercial Building Renovation',
    category: 'Renovations',
    image: '/WhatsApp Image 2025-08-06 at 8.54.42 AM.jpeg',
    description: 'Comprehensive renovation project transforming existing commercial space into modern, functional facilities.',
    location: 'Arga Naval Base, Karwar, Karnataka',
    duration: '8 months',
    area: '35,000 sq ft'
  },
  {
    id: 5,
    title: 'Tile Installation Project',
    category: 'Residential',
    image: '/WhatsApp Image 2025-08-06 at 8.54.41 AM (1).jpeg',
    description: 'Professional tile installation work demonstrating precision cutting and expert grouting techniques.',
    location: 'Arga Naval Base, Karwar, Karnataka',
    duration: '4 months',
    area: '20,000 sq ft'
  },
  {
    id: 6,
    title: 'Granite & Marble Work',
    category: 'Commercial',
    image: '/WhatsApp Image 2025-08-06 at 8.54.41 AM.jpeg',
    description: 'Premium granite and marble installation showcasing custom countertops and wall cladding expertise.',
    location: 'Arga Naval Base, Karwar, Karnataka',
    duration: '5 months',
    area: '30,000 sq ft'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A showcase of our comprehensive construction and civil works expertise at Arga Naval Base, Karwar, Karnataka. 
            From Naval Base Main Gate construction to tile fitting and granite work, we demonstrate excellence in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-card/90 text-primary border border-border">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold font-headline text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-sm text-muted-foreground">
                      Area: <span className="font-semibold text-primary">{project.area}</span>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 border-primary text-primary">
                    <Link href={`/projects/${project.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fadeInUp">
          <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/projects">
              Explore All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
