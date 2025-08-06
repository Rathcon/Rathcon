import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Naval Base Commanding Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    content: "Rathcon Construction delivered exceptional quality in our Naval Base Main Gate project. Their expertise in civil works, tile fitting, and granite installation exceeded our expectations. The project was completed on time with superior craftsmanship.",
    rating: 5,
    project: "Naval Base Main Gate Construction"
  },
  {
    name: "Priya Sharma",
    role: "Property Developer, Karwar",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    content: "Working with Rathcon for our residential complex was outstanding. Their attention to detail in tile work, granite installation, and overall construction quality is unmatched. They truly understand Indian construction standards and delivered beyond our expectations.",
    rating: 5,
    project: "Residential Complex Development"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Rathcon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fadeInUp text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                <p className="text-muted-foreground leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-primary font-medium mt-1">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold">
            <Star className="h-5 w-5" />
            Average Rating: 4.9/5
          </div>
        </div>
      </div>
    </section>
  );
} 