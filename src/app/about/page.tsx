import Image from 'next/image';
import { Award, Target, Users, CheckCircle } from 'lucide-react';

const timeline = [
  { year: '2008', event: 'Company Founded', description: 'Rathcon Constructions was born with a vision to revolutionize the construction industry.' },
  { year: '2012', event: 'First Major Commercial Project', description: 'Completed the landmark Downtown Plaza, setting a new standard for excellence.' },
  { year: '2018', event: 'Expanded to Residential Sector', description: 'Began building custom luxury homes, bringing our quality to new homeowners.' },
  { year: '2023', event: '100th Project Completed', description: 'Celebrated a milestone of 100 successful projects, a testament to our commitment.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary py-12 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About Rathcon Constructions</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of construction with integrity, quality, and innovation for over 15 years.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
            <p className="text-muted-foreground">
              Our mission is to deliver exceptional construction services by creating strong partnerships with our clients, embracing innovation, and maintaining the highest standards of quality and safety. We strive to not just build structures, but to build lasting relationships and communities.
            </p>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-primary mt-1 shrink-0" />
                    <div>
                        <h3 className="font-semibold font-headline">Client-Centric Approach</h3>
                        <p className="text-sm text-muted-foreground">We put our clients at the heart of everything we do, ensuring their vision is realized to its fullest potential.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary mt-1 shrink-0" />
                    <div>
                        <h3 className="font-semibold font-headline">Uncompromising Quality</h3>
                        <p className="text-sm text-muted-foreground">We use the finest materials and skilled labor to ensure every project stands the test of time.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-primary mt-1 shrink-0" />
                    <div>
                        <h3 className="font-semibold font-headline">Expert Team</h3>
                        <p className="text-sm text-muted-foreground">Our team of architects, engineers, and builders are leaders in their respective fields.</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
            <Image
              src="https://source.unsplash.com/random/600x700/?construction,team"
              alt="Team of construction workers"
              width={600}
              height={700}
              className="rounded-lg object-cover"
              data-ai-hint="construction team"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Journey</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Tracing our path from a small startup to an industry leader.
                </p>
            </div>
            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
                {timeline.map((item, index) => (
                    <div key={item.year} className="relative mb-8 flex justify-center">
                       <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                         {index % 2 === 0 && (
                            <div className="p-6 bg-card rounded-lg shadow-none text-right">
                                <p className="text-2xl font-bold font-headline text-primary">{item.year}</p>
                                <h3 className="text-xl font-semibold font-headline mt-2">{item.event}</h3>
                                <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                            </div>
                         )}
                       </div>
                        <div className="absolute top-1/2 -translate-y-1/2 bg-primary rounded-full p-2">
                             <CheckCircle className="h-5 w-5 text-primary-foreground" />
                        </div>
                       <div className={`w-1/2 ${index % 2 !== 0 ? 'text-left pl-8' : 'pr-8'}`}>
                         {index % 2 !== 0 && (
                            <div className="p-6 bg-card rounded-lg shadow-none text-left">
                                <p className="text-2xl font-bold font-headline text-primary">{item.year}</p>
                                <h3 className="text-xl font-semibold font-headline mt-2">{item.event}</h3>
                                <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                            </div>
                         )}
                       </div>
                    </div>
                ))}
            </div>
          </div>
      </section>
    </>
  );
}
