import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-headline">
                Ready to Build Your <span className="text-yellow-300">Dream Project?</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl">
                Let's discuss your vision and turn it into reality. Our team is ready to help you create something extraordinary.
              </p>
            </div>
            
            <div className="space-y-6">
                             <div className="flex items-center gap-4">
                 <div className="p-3 rounded-full bg-white/20">
                   <Phone className="h-6 w-6" />
                 </div>
                 <div>
                   <p className="font-semibold">Call Us Today</p>
                   <p className="text-blue-100">+91-8928551747</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4">
                 <div className="p-3 rounded-full bg-white/20">
                   <Mail className="h-6 w-6" />
                 </div>
                 <div>
                   <p className="font-semibold">Email Us</p>
                   <p className="text-blue-100">contact@rathconconstructions.com</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4">
                 <div className="p-3 rounded-full bg-white/20">
                   <MapPin className="h-6 w-6" />
                 </div>
                 <div>
                   <p className="font-semibold">Visit Our Office</p>
                   <p className="text-blue-100">RATHCON CONSTRUCTION PRIVATE LIMITED<br />
                   JAI BHIM NAGAR 2, NR. HANUMAN MANDIR<br />
                   THANE KALWA, THANE-400605<br />
                   MAHARASHTRA</p>
                 </div>
               </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="rounded-full text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
                             <div className="space-y-4">
                 <div className="relative h-60 rounded-2xl overflow-hidden shadow-2xl">
                   <Image
                     src="/WhatsApp Image 2025-08-06 at 8.54.43 AM.jpeg"
                     alt="Naval Base Construction"
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div className="relative h-40 rounded-2xl overflow-hidden shadow-2xl">
                   <Image
                     src="/WhatsApp Image 2025-08-06 at 8.54.42 AM (2).jpeg"
                     alt="Residential Complex"
                     fill
                     className="object-cover"
                   />
                 </div>
               </div>
               <div className="space-y-4 pt-8">
                 <div className="relative h-40 rounded-2xl overflow-hidden shadow-2xl">
                   <Image
                     src="/WhatsApp Image 2025-08-06 at 8.54.42 AM (1).jpeg"
                     alt="Interior Design & Finishing"
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div className="relative h-60 rounded-2xl overflow-hidden shadow-2xl">
                   <Image
                     src="/WhatsApp Image 2025-08-06 at 8.54.41 AM.jpeg"
                     alt="Granite & Marble Work"
                     fill
                     className="object-cover"
                   />
                 </div>
               </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 text-primary">
              <div className="text-center">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 