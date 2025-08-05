import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
           <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Building Your Vision,
              <br />
              <span className="text-primary">Creating Reality.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 text-muted-foreground">
              We are a team of dedicated professionals committed to delivering high-quality construction services. From concept to completion, we bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View Portfolio</Link>
              </Button>
            </div>
        </div>
        <div className="relative h-64 md:h-auto md:aspect-[4/3] order-first md:order-last">
          <Image
            src="https://placehold.co/800x600.png"
            alt="Modern building under construction"
            fill
            className="rounded-lg object-cover"
            data-ai-hint="construction architecture"
            priority
          />
        </div>
      </div>
    </section>
  );
}
