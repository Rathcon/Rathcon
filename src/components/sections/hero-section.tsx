import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Modern building under construction"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="construction architecture"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="container relative z-20 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Building Your Vision,
          <br />
          <span className="text-primary">Creating Reality.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 text-white">
          We are a team of dedicated professionals committed to delivering high-quality construction services. From concept to completion, we bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/services">Our Services</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/projects">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
