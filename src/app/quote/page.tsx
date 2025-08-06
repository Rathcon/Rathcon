import { QuoteForm } from '@/components/quote-form';
import { Calculator, Building2, CheckCircle, Clock, DollarSign } from 'lucide-react';

export default function QuotePage() {
  return (
    <>
      <section className="bg-secondary py-16 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get a Free Quote</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Tell us about your project and we'll provide you with a detailed estimate tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-headline mb-6">Why Choose Rathcon?</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-lg p-3">
                      <Calculator className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Free Quote</h3>
                      <p className="text-muted-foreground">Get detailed estimates with no hidden costs or obligations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-lg p-3">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Expert Consultation</h3>
                      <p className="text-muted-foreground">Professional advice from experienced construction specialists.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-lg p-3">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Quality Assurance</h3>
                      <p className="text-muted-foreground">We guarantee quality workmanship and timely delivery.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-lg p-3">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Quick Response</h3>
                      <p className="text-muted-foreground">Get your quote within 24-48 hours of submission.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">What's Included in Your Quote?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Detailed cost breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Material specifications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Timeline estimation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Payment schedule
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Warranty information
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Project milestones
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Transparent Pricing
                </h3>
                <p className="text-sm text-muted-foreground">
                  We believe in complete transparency. Our quotes include all costs upfront with no hidden fees or surprise charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
