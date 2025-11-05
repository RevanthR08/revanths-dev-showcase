import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's talk about it
          </p>
        </div>
        <Card className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:revanthofficial08@gmail.com" className="block group">
              <Card className="glass-card p-6 hover:shadow-[0_0_30px_hsl(221_83%_53%/0.15)] transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                    <p className="text-muted-foreground break-all">revanthofficial08@gmail.com</p>
                  </div>
                </div>
              </Card>
            </a>
            <a href="tel:+919566768327" className="block group">
              <Card className="glass-card p-6 hover:shadow-[0_0_30px_hsl(221_83%_53%/0.15)] transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Call Me</h3>
                    <p className="text-muted-foreground">+91 9566768327</p>
                  </div>
                </div>
              </Card>
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Available for freelance work and exciting projects
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.location.href = 'mailto:revanthofficial08@gmail.com'}
            >
              Start a conversation
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
