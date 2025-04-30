
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { setupAnimation } from "@/utils/animation";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";

const Index = () => {
  useEffect(() => {
    // Setup scroll animation
    setupAnimation();
    
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        const element = document.querySelector(id || '');
        
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
