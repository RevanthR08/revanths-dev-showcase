import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="container mx-auto z-10 animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 rounded-full glass-card">
              <span className="text-sm text-muted-foreground">Available for freelance</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Revanth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full-Stack Developer crafting beautiful, efficient, and scalable digital experiences
            </p>
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary" onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                View services
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />
              <img src={profileImage} alt="Revanth - Full-Stack Developer" className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover aspect-[3/4] " />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;