import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { GridFlux } from "@/components/GridFlux";
import { Courses } from "@/components/Courses";
import { Premium } from "@/components/Premium";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <GridFlux />
        <Courses />
        <Premium />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
