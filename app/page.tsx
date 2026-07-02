import ClientWrapper from "@/components/ClientWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import EducationCertifications from "@/components/EducationCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ClientWrapper>
      <Navbar />
      <main className="relative z-10 space-y-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </ClientWrapper>
  );
}