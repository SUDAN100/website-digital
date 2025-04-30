
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Kathmandu Info Tech",
      role: "Digital Marketing Expert",
      date: "Jul 2024 - Present",
      description: [
        "Assisted in creating and managing social media marketing campaigns for clients in technology and education sectors.",
        "Conducted market research, analyzed customer behavior, and provided recommendations for SEO strategies.",
        "Contributed to developing website content and blogs, focusing on SEO optimization and audience engagement.",
        "Supported with Google Ads and Meta Ads setup, helping increase client visibility and lead generation."
      ]
    },
    {
      type: "work",
      title: "Freelance",
      role: "Digital Marketer & Content Writer",
      date: "Nov 2024 - Present",
      description: [
        "Provide SEO-friendly content writing services, specializing in blog posts, articles, and web content for clients in digital marketing, tech, and business industries.",
        "Design and manage Meta Ads and PPC campaigns to drive leads and sales for small and medium-sized businesses.",
        "Conduct comprehensive keyword research and optimize content to enhance search engine rankings."
      ]
    },
    {
      type: "education",
      title: "DIT (Diploma in Information Technology)",
      institution: "Shree Adarsh Model Secondary School, Dang",
      date: "Nov 2020 - Feb 2024",
      description: []
    },
    {
      type: "education",
      title: "SEE",
      institution: "Buddha Jyoti Secondary School, Dang",
      date: "Apr 2017 - Apr 2019",
      description: []
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">Experience & Education</h2>
          <p className="text-gray-600 mt-4">
            My professional journey and academic background
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div 
                key={index} 
                className="relative pl-10 animated-section"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                
                {/* Icon */}
                <div className="absolute left-0 top-1">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    {item.type === "work" ? (
                      <Briefcase size={16} className="text-white" />
                    ) : (
                      <GraduationCap size={16} className="text-white" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-wrap justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                  </div>
                  
                  {item.role && (
                    <p className="font-medium text-dark mb-3">{item.role}</p>
                  )}
                  
                  {item.institution && (
                    <p className="font-medium text-dark mb-3">{item.institution}</p>
                  )}
                  
                  {item.description.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
