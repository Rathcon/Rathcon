import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
                  Building Your Vision,
                  <br />
                  <span className="text-primary">Creating Reality.</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
                  Welcome to Rathcon Constructions, where we transform your ideas into tangible structures. As a leader in the construction industry, we are dedicated to delivering high-quality craftsmanship, innovative solutions, and unparalleled client satisfaction. From initial concept to final completion, we are your trusted partner in bringing your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" asChild className="rounded-full">
                    <Link href="/contact">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-full">
                    <Link href="/projects">View Portfolio</Link>
                  </Button>
                </div>
            </div>
            <div className="relative h-64 md:h-auto md:aspect-square">
              <Image
                src="https://placehold.co/800x800.png"
                alt="Modern building under construction"
                fill
                className="rounded-lg object-cover"
                data-ai-hint="construction architecture"
                priority
              />
            </div>
          </div>
      </div>
    </section>
  );
}
