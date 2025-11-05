import Hero from "@/components/Hero";
import WhyChooseMe from "@/components/WhyChooseMe";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseMe />
      <Services />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
