import { Building, Calendar, Smile } from "lucide-react";

const stats = [
    { value: '15+', label: 'Years of Experience', icon: Calendar },
    { value: '500+', label: 'Projects Completed', icon: Building },
    { value: '99%', label: 'Happy Clients', icon: Smile },
]

export function StatsSection() {
    return (
        <section className="bg-background border-y border-border">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center gap-2">
                            <stat.icon className="w-10 h-10 text-primary" />
                            <p className="text-4xl font-bold font-headline text-primary">{stat.value}</p>
                            <p className="text-muted-foreground font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
