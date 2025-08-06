import { Shield, Clock, Award, Users, Zap, Heart } from 'lucide-react';
import { AnimatedSection, StaggeredChildren } from '@/components/ui/animated-section';

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every project undergoes rigorous quality checks to ensure the highest standards of construction excellence."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on completing projects within the agreed timeline, never compromising on quality."
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Our innovative designs have won multiple industry awards and recognition for excellence."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of architects, engineers, and craftsmen bring years of combined experience."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We embrace cutting-edge technology and sustainable practices in all our projects."
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    description: "Your satisfaction is our priority. We build lasting relationships through trust and transparency."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
              Why Choose <span className="text-primary">Rathcon</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine years of experience with innovative solutions to deliver exceptional results that exceed expectations.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredChildren staggerDelay={150} animation="fadeInUp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 border border-primary/20 group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold font-headline text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </StaggeredChildren>

        <AnimatedSection animation="fadeInUp" delay={800}>
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
                              <div className="text-4xl font-bold text-primary group-hover:text-primary/80">2+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary group-hover:text-primary/80">1+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary group-hover:text-primary/80">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 