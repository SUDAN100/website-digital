
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-light to-white pt-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <p className="text-secondary font-medium">Digital Marketing Expert</p>
          <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight">
            Hi, I'm <span className="text-primary">Sudan Yadav</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            A results-driven Digital Marketing Expert with experience in SEO, PPC, and content writing.
            Passionate about helping businesses grow their online presence through high-converting campaigns.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="bg-primary hover:bg-primary-light text-white">
              My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-secondary/20 rounded-2xl blur opacity-30"></div>
            <img
              src="/lovable-uploads/05bb2ff1-048d-4c90-8623-e4359f810618.png"
              alt="Sudan Yadav"
              className="relative rounded-2xl shadow-2xl max-w-sm w-full object-cover h-[28rem]"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
              <p className="text-primary text-xl md:text-3xl font-bold">1+ Years</p>
              <p className="text-gray-600 text-sm">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
