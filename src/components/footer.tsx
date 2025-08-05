import Link from 'next/link';
import { Badge, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              Your trusted partner in building the future. Quality, integrity, and excellence in every project.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Construction Ave, Buildtown, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@constructdigital.com</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline font-semibold">Our Guarantee</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1 border-primary/50 text-primary">
                <ShieldCheck className="h-3 w-3" />
                <span>Licensed</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 border-primary/50 text-primary">
                <ShieldCheck className="h-3 w-3" />
                <span>Insured</span>
              </Badge>
               <Badge variant="outline" className="flex items-center gap-1 border-primary/50 text-primary">
                <ShieldCheck className="h-3 w-3" />
                <span>Eco-Friendly</span>
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Construct Digital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
