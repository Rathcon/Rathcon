import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    bio: "20+ years of construction industry experience. Passionate about sustainable building practices.",
    linkedin: "#",
    twitter: "#",
    email: "sarah@rathcon.com"
  },
  {
    name: "Michael Chen",
    role: "Chief Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    bio: "Award-winning architect with expertise in modern residential and commercial design.",
    linkedin: "#",
    twitter: "#",
    email: "michael@rathcon.com"
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681032-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    bio: "Certified PMP with 15 years managing complex construction projects across multiple sectors.",
    linkedin: "#",
    twitter: "#",
    email: "emily@rathcon.com"
  },
  {
    name: "David Thompson",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    bio: "Structural engineer specializing in sustainable building systems and innovative construction methods.",
    linkedin: "#",
    twitter: "#",
    email: "david@rathcon.com"
  },
  {
    name: "Lisa Wang",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    bio: "Creative designer with a passion for creating functional and beautiful living spaces.",
    linkedin: "#",
    twitter: "#",
    email: "lisa@rathcon.com"
  },
  {
    name: "James Wilson",
    role: "Site Supervisor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
    bio: "Experienced supervisor ensuring quality and safety standards on every construction site.",
    linkedin: "#",
    twitter: "#",
    email: "james@rathcon.com"
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expert team combines decades of experience with innovative thinking to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary/80">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 border border-border"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 border border-border"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 border border-border"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold">
            Join Our Team
          </div>
        </div>
      </div>
    </section>
  );
} 