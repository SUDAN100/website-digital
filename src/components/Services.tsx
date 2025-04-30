
import { Search, PenTool, BarChart4, Monitor } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies including keyword research, on-page optimization, and technical SEO to improve search rankings."
    },
    {
      icon: BarChart4,
      title: "PPC Campaigns",
      description: "Strategic pay-per-click advertising on Google and social media platforms to drive qualified traffic and leads."
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "SEO-friendly blog posts, articles, and website content that engages your audience and drives conversions."
    },
    {
      icon: Monitor,
      title: "Social Media Marketing",
      description: "Effective social media strategies to build brand awareness, engage with your audience, and drive traffic."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">My Services</h2>
          <p className="text-gray-600 mt-4">
            Comprehensive digital marketing solutions for your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 animated-section"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
