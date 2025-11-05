import { Brain, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Brain,
      title: "Passionate About Building",
      description: "I genuinely enjoy creating products that solve problems and make life easier. Every project is an opportunity to learn and innovate."
    },
    {
      icon: Zap,
      title: "Clean & Efficient Code",
      description: "I focus on writing maintainable, scalable, and efficient code — because great design starts under the hood."
    },
    {
      icon: Users,
      title: "Collaborative & Reliable",
      description: "I value communication and teamwork. Whether it's a solo project or a collaboration, I make sure goals are met on time."
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-text">Choose Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What sets me apart as a developer
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="glass-card p-8 hover:shadow-[0_0_30px_hsl(221_83%_53%/0.15)] transition-all duration-300 group cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
