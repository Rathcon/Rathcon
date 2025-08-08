import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { AnimatedSection, StaggeredChildren } from '@/components/ui/animated-section';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary to-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideInLeft" delay={200}>
            <div className="space-y-8">
              <StaggeredChildren staggerDelay={150} animation="fadeIn">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                    <CheckCircle className="h-4 w-4" />
                    Trusted by 2+ Clients
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-foreground">
                    Building Dreams,
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      Creating Reality
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    Transform your vision into extraordinary structures with Rathcon Constructions. 
                    We specialize in comprehensive construction and civil works including tile, granite, marble fitting, 
                    and all types of construction projects. From Naval Base construction to residential complexes, 
                    we deliver excellence in every project.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="rounded-full text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/contact">
                      Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-full text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/projects">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Our Story
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">10+ Happy Clients</p>
                    <p className="text-muted-foreground">Trust us with their projects</p>
                  </div>
                </div>
              </StaggeredChildren>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideInRight" delay={400} mouseEffect={true}>
                          <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl border border-border group hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/WhatsApp Image 2025-08-06 at 8.54.43 AM.jpeg"
                        alt="Naval Base Construction"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative h-60 rounded-2xl overflow-hidden shadow-2xl border border-border group hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/WhatsApp Image 2025-08-06 at 8.54.42 AM (2).jpeg"
                        alt="Residential Complex"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative h-60 rounded-2xl overflow-hidden shadow-2xl border border-border group hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/WhatsApp Image 2025-08-06 at 8.54.42 AM (1).jpeg"
                        alt="Interior Design & Finishing"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl border border-border group hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/WhatsApp Image 2025-08-06 at 8.54.41 AM.jpeg"
                        alt="Granite & Marble Work"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-2xl p-6 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">1+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
