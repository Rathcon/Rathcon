'use client';
import Image from 'next/image';
import { Award, Target, Users, Heart, CheckCircle, Star, Building, Globe, Shield, ArrowRight, Calendar, Trophy, Users2 } from 'lucide-react';

const timeline = [
  { id: 1, year: '2025', event: 'Company Founded', description: 'Rathcon Construction Private Limited was established with a vision to deliver excellence in construction and civil works.' },
  { id: 2, year: '2025', event: 'First Major Project - Naval Base', description: 'Successfully completed the prestigious Naval Base Main Gate construction at Arga Naval Base, Karwar, Karnataka.' },
  { id: 3, year: '2025', event: 'Residential Complex Development', description: 'Delivered modern residential complex with premium amenities and sustainable design principles.' },
  { id: 4, year: '2025', event: 'Civil Works Excellence', description: 'Established expertise in tile fitting, granite work, and comprehensive civil works services.' },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "We approach every project with unwavering dedication to quality and attention to detail."
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description: "Building lasting relationships through transparency, honesty, and reliable delivery."
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Committed to eco-friendly practices and sustainable building solutions for a better future."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Our diverse team works together to bring your vision to life with creativity and expertise."
  }
];

const stats = [
  { number: "2+", label: "Projects Completed", icon: Building },
  { number: "1+", label: "Years Experience", icon: Calendar },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "50+", label: "Team Members", icon: Users2 }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-background via-secondary to-card overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,177,51,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(227,177,51,0.05),transparent_50%)]"></div>
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30 backdrop-blur-sm">
                  <CheckCircle className="h-4 w-4" />
                  Since 2025
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-headline tracking-tight">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400">Rathcon</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Pioneering the future of construction with integrity, quality, and innovation. 
                  We transform visions into extraordinary structures that stand the test of time.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 lg:p-6 bg-card/50 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <div className="flex justify-center mb-2 lg:mb-3">
                      <div className="p-2 rounded-xl bg-primary/20 text-primary">
                        <stat.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                      </div>
                    </div>
                    <div className="text-xl lg:text-3xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="space-y-3 lg:space-y-4">
                  <div className="relative h-32 sm:h-40 lg:h-60 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format&q=80"
                      alt="Construction team"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="relative h-24 sm:h-32 lg:h-40 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                    <Image
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=300&fit=crop&auto=format&q=80"
                      alt="Modern building"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
                <div className="space-y-3 lg:space-y-4 pt-6 lg:pt-8">
                  <div className="relative h-24 sm:h-32 lg:h-40 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                    <Image
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop&auto=format&q=80"
                      alt="Luxury building"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="relative h-32 sm:h-40 lg:h-60 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                    <Image
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&auto=format&q=80"
                      alt="Interior design"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  <Target className="h-4 w-4" />
                  Our Mission
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headline">Building Tomorrow's <span className="text-primary">Legacy</span></h2>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Our mission is to deliver exceptional construction services by creating strong partnerships with our clients, 
                  embracing innovation, and maintaining the highest standards of quality and safety. We strive to not just build 
                  structures, but to build lasting relationships and communities.
                </p>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 lg:gap-4 p-4 lg:p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300">
                    <div className="p-2 lg:p-3 rounded-xl bg-primary/20 text-primary shrink-0">
                      <value.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-headline text-base lg:text-lg text-foreground">{value.title}</h3>
                      <p className="text-sm lg:text-base text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&auto=format&q=80"
                alt="Team collaboration"
                width={600}
                height={600}
                className="rounded-xl lg:rounded-2xl shadow-2xl border border-border/50 w-full"
              />
              <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-card rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl p-4 lg:p-6 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="p-2 rounded-xl bg-yellow-500/20">
                    <Trophy className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-400" />
                  </div>
                  <div>
                                      <div className="font-semibold text-foreground text-sm lg:text-base">Quality Focused</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Excellence in Every Project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-secondary to-card">
        <div className="container px-4 sm:px-6">
          <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4" />
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headline">Our <span className="text-primary">Timeline</span></h2>
            <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our journey from establishment to delivering excellence in construction and civil works.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              {timeline.map((item, index) => (
                <div key={item.id} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-400 shadow-lg border-2 border-background">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{item.year}</p>
                      <h3 className="font-bold text-lg font-headline text-foreground">{item.event}</h3>
                    </div>
                  </div>
                  <div className="pl-16">
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-blue-400 to-purple-400 -translate-x-1/2"></div>
              {timeline.map((item, index) => (
                <div key={item.id} className={`relative mb-16 flex items-center justify-between w-full ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}>
                  <div className="order-1 w-5/12"></div>
                  <div className="z-10 order-1 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-blue-400 shadow-2xl border-4 border-background">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className={`order-1 w-5/12 px-8 py-8 text-left rounded-2xl shadow-2xl bg-card border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'text-right' : ''
                  }`}>
                    <p className="mb-3 text-sm font-bold text-primary">{item.year}</p>
                    <h3 className="mb-4 font-bold text-xl font-headline text-foreground">{item.event}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container px-4 sm:px-6">
          <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
              <Heart className="h-4 w-4" />
              Our Values
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4 lg:space-y-6 p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-background/50 border border-border/50 hover:border-primary/50 hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 group">
                <div className="mx-auto p-3 lg:p-4 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary w-fit group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold font-headline text-foreground">{value.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10">
        <div className="container px-4 sm:px-6">
          <div className="text-center space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
              Ready to Build <span className="text-primary">Together?</span>
            </h2>
            <p className="text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and turn your vision into reality with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-primary text-primary-foreground rounded-full text-base lg:text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-card text-foreground rounded-full text-base lg:text-lg font-semibold border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
