import { Trophy, Award, Star, Shield, CheckCircle, Target } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    title: "Best Construction Company 2023",
    organization: "Construction Excellence Awards",
    year: "2023",
    description: "Recognized for outstanding project delivery and client satisfaction across all sectors."
  },
  {
    icon: Award,
    title: "Sustainability Champion",
    organization: "Green Building Council",
    year: "2023",
    description: "Awarded for implementing eco-friendly practices and sustainable building solutions."
  },
  {
    icon: Star,
    title: "Safety Excellence Award",
    organization: "Construction Safety Association",
    year: "2022",
    description: "Zero accidents for three consecutive years across all project sites."
  },
  {
    icon: Shield,
    title: "Quality Assurance Certification",
    organization: "ISO 9001:2015",
    year: "2022",
    description: "Certified for maintaining the highest quality standards in all construction processes."
  },
  {
    icon: CheckCircle,
    title: "Client Choice Award",
    organization: "Homeowners Association",
    year: "2023",
    description: "Voted best construction company by satisfied homeowners and commercial clients."
  },
  {
    icon: Target,
    title: "Innovation in Construction",
    organization: "Building Innovation Awards",
    year: "2022",
    description: "Recognized for implementing cutting-edge construction technologies and methods."
  }
];

const stats = [
  { number: "15+", label: "Industry Awards", icon: Trophy },
  { number: "500+", label: "Happy Clients", icon: Star },
  { number: "98%", label: "Satisfaction Rate", icon: CheckCircle },
  { number: "0", label: "Safety Incidents", icon: Shield }
];

export function AwardsSection() {
  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="container px-4 sm:px-6">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
            <Trophy className="h-4 w-4" />
            Awards & Recognition
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-foreground">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized for excellence in construction, safety, and client satisfaction across the industry.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 lg:p-6 bg-background/50 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-2 lg:mb-3">
                <div className="p-2 lg:p-3 rounded-xl bg-primary/20 text-primary">
                  <stat.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
              </div>
              <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">{stat.number}</div>
              <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group bg-background/50 rounded-xl lg:rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 p-4 lg:p-6 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 lg:gap-4">
                <div className="p-2 lg:p-3 rounded-xl bg-gradient-to-r from-primary/20 to-yellow-500/20 text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <award.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div className="flex-1 space-y-2 lg:space-y-3 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground text-sm lg:text-lg truncate">{award.title}</h3>
                    <span className="text-xs lg:text-sm text-primary font-medium shrink-0 ml-2">{award.year}</span>
                  </div>
                  <p className="text-xs lg:text-sm text-muted-foreground font-medium">{award.organization}</p>
                  <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-primary/20">
          <div className="text-center space-y-4 lg:space-y-6">
            <h3 className="text-xl lg:text-2xl font-bold font-headline text-foreground">
              Certified Excellence
            </h3>
            <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is backed by industry-leading certifications and continuous improvement processes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
              <div className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-card rounded-full border border-border">
                <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                <span className="text-xs lg:text-sm font-medium">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-card rounded-full border border-border">
                <Shield className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                <span className="text-xs lg:text-sm font-medium">Safety Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-card rounded-full border border-border">
                <Star className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                <span className="text-xs lg:text-sm font-medium">Green Building</span>
              </div>
              <div className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-card rounded-full border border-border">
                <Target className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                <span className="text-xs lg:text-sm font-medium">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 