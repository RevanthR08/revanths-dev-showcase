import { Card } from "@/components/ui/card";
import { Globe, Smartphone, Palette, Database, Plug, GitBranch, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web App Development",
      description: "Building responsive, high-performance web applications using modern frameworks and clean, scalable code."
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Creating sleek, user-friendly mobile apps built with Kotlin, Jetpack, and the latest Android technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Integration",
      description: "Designing and implementing clean, intuitive user interfaces that provide seamless user experiences."
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Building reliable server-side logic, REST APIs, and secure database systems for web and mobile platforms."
    },
    {
      icon: Plug,
      title: "API Integration & Automation",
      description: "Connecting applications with third-party APIs to enhance functionality and streamline processes."
    },
    {
      icon: GitBranch,
      title: "Open Source Projects",
      description: "Contributing to and maintaining open-source projects that push innovation and learning in the dev community."
    },
    {
      icon: Lightbulb,
      title: "Project Consultation",
      description: "Helping teams or individuals plan, structure, and execute projects efficiently using best development practices."
    }
  ];

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive development services tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:shadow-[0_0_30px_hsl(189_94%_55%/0.2)] transition-all duration-300 group cursor-default"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
