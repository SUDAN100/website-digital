
import { Progress } from "@/components/ui/progress";
import { Award } from "lucide-react";

const Skills = () => {
  const marketingSkills = [
    { name: "Meta Ads (Facebook & Instagram)", level: 90 },
    { name: "Google Ads & PPC Campaigns", level: 85 },
    { name: "SEO (On-page & Off-page)", level: 92 },
    { name: "Content Writing", level: 88 }
  ];
  
  const technicalSkills = [
    { name: "Social Media Marketing", level: 90 },
    { name: "WordPress & Website Management", level: 75 },
    { name: "Google Analytics & Tag Manager", level: 80 },
    { name: "HTML/CSS (basic)", level: 60 }
  ];
  
  const certificates = [
    { name: "Digital Marketing", issuer: "Skill Training Nepal", date: "Jul 2024" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">Skills & Certifications</h2>
          <p className="text-gray-600 mt-4">
            My professional skills and qualifications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animated-section">
            <h3 className="text-xl font-bold text-primary">Marketing Skills</h3>
            <div className="space-y-6">
              {marketingSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-dark font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 animated-section" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-dark font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 animated-section" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-bold text-primary mb-6">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
