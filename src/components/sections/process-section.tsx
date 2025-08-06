import Image from 'next/image';
import { FileText, PenTool, Hammer, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: "Consultation & Planning",
    description: "We begin with a comprehensive consultation to understand your vision, requirements, and budget. Our team creates detailed plans and timelines.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format&q=80"
  },
  {
    number: "02",
    title: "Design & Engineering",
    description: "Our architects and engineers work together to create innovative designs that balance aesthetics, functionality, and sustainability.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format&q=80"
  },
  {
    number: "03",
    title: "Construction & Execution",
    description: "With meticulous attention to detail, our skilled craftsmen bring your vision to life using the finest materials and latest techniques.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&auto=format&q=80"
  },
  {
    number: "04",
    title: "Quality Assurance & Handover",
    description: "Every project undergoes rigorous quality checks before we hand over your completed project, ensuring it exceeds your expectations.",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80"
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-secondary" id="process">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a proven methodology that ensures every project is delivered on time, within budget, and to the highest standards.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="hidden lg:flex justify-center mb-16">
          <div className="flex items-center space-x-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-sm font-bold transition-all duration-300 hover:scale-110">
                  {step.number}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-16 h-0.5 bg-border mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slideInLeft`}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    {step.number}
                  </div>
                  <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold font-headline text-foreground group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Step {index + 1} of {processSteps.length}
                  </div>
                </div>
              </div>
              
              <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-border transition-all duration-500 hover:shadow-primary/20 hover:scale-[1.02] ${
                index % 2 === 1 ? 'lg:col-start-1' : ''
              } animate-slideInRight group`}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {step.number}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <CheckCircle className="h-5 w-5" />
            Ready to Start Your Project?
          </div>
          <p className="mt-4 text-muted-foreground">
            Get in touch with us to begin your journey
          </p>
        </div>
      </div>
    </section>
  );
} 