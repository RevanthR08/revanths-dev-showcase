import { Card } from "@/components/ui/card";
const Story = () => {
  return <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="glass-card p-8 md:p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My<span className="gradient-text">Story</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm Revanth, a developer driven by curiosity and the desire to make technology more human. 
              I see software as a tool to simplify lives, solve real problems, and inspire innovation.
            </p>
            <p>
              This site captures my evolution as a builder — from experimenting with new tech stacks to 
              designing purposeful digital experiences that matter.
            </p>
          </div>
        </Card>
      </div>
    </section>;
};
export default Story;
