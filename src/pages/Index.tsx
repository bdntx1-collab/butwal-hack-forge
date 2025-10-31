import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Challenges from "@/components/Challenges";
import Workshops from "@/components/Workshops";
import Organizers from "@/components/Organizers";
import Sponsors from "@/components/Sponsors";
import Community from "@/components/Community";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Challenges />
      <Workshops />
      <Organizers />
      <Sponsors />
      <Community />
      <Projects />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
