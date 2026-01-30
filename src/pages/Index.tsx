import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Education from "@/components/Education";
import Community from "@/components/Community";
import Contributions from "@/components/Contributions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Career />
      <Education />
      <Community />
      <Contributions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
