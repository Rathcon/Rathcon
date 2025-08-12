import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { StatsSection } from '@/components/sections/stats-section';
import { CTASection } from '@/components/sections/cta-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ProcessSection } from '@/components/sections/process-section';

export const metadata = {
  title: 'Rathcon Construction - Leading Construction Company in Mumbai & Thane | Residential & Commercial Projects',
  description: 'Rathcon Construction is a premier construction company in Mumbai and Thane, specializing in residential construction, commercial projects, interior design, renovations, and civil works. Get free quotes for your construction projects.',
  keywords: [
    'construction company mumbai',
    'construction company thane',
    'residential construction mumbai',
    'commercial construction thane',
    'interior design mumbai',
    'renovation services mumbai',
    'civil works mumbai',
    'tile installation mumbai',
    'granite work mumbai',
    'marble work mumbai',
    'construction contractor mumbai',
    'building contractor thane',
    'home construction mumbai',
    'office construction thane',
    'construction services mumbai',
    'construction company near me',
    'best construction company mumbai'
  ],
  openGraph: {
    title: 'Rathcon Construction - Leading Construction Company in Mumbai & Thane',
    description: 'Premier construction company specializing in residential and commercial projects in Mumbai and Thane. Quality craftsmanship, innovative solutions, and client satisfaction.',
    url: 'https://www.rathconconstruction.com',
    siteName: 'Rathcon Construction',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Rathcon Construction - Construction Company Mumbai Thane',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rathcon Construction - Leading Construction Company in Mumbai & Thane',
    description: 'Premier construction company specializing in residential and commercial projects in Mumbai and Thane.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.rathconconstruction.com',
  },
};

export default function HomePage(12345) {
  return (12
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
