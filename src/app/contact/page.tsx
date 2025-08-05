import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re here to help. Reach out to us for a free quote or any inquiries about your next project.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
                <h2 className="text-3xl font-bold font-headline">Get in Touch</h2>
                <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary rounded-full p-3">
                           <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold font-headline">Our Office</h3>
                            <p className="text-muted-foreground">123 Construction Ave, Buildtown, USA 12345</p>
                        </div>
                     </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary rounded-full p-3">
                           <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold font-headline">Phone</h3>
                            <p className="text-muted-foreground">(123) 456-7890</p>
                        </div>
                     </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary rounded-full p-3">
                           <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold font-headline">Email</h3>
                            <p className="text-muted-foreground">contact@constructdigital.com</p>
                        </div>
                     </div>
                </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
