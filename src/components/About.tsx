
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <p className="text-gray-600 mt-4">
            Get to know me and my professional journey
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6 animated-section">
          <h3 className="text-2xl font-bold text-primary">
            Digital Marketing Expert & Content Writer
          </h3>
          <p className="text-gray-600">
            I am a results-driven Digital Marketing Expert with extensive experience in SEO, PPC, and content writing. I offer strategic 
            marketing and content solutions to help businesses grow their online presence through high-converting ad campaigns, 
            SEO-optimized content, and data-driven strategies.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-600">
                <strong className="text-dark">Expert in Meta & Google Ads:</strong> Creating high-performing ad campaigns that drive leads and sales
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-600">
                <strong className="text-dark">SEO Specialist:</strong> On-page & Off-page SEO strategies to improve search rankings
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-600">
                <strong className="text-dark">Content Creation:</strong> SEO-optimized blog posts, articles, and web content that engages and converts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
