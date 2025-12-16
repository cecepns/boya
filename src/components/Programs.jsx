import { BookOpen, Globe, GraduationCap, Building, Award, Languages, Monitor } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Tuition Center for Cambridge Curriculum",
      description: "Comprehensive Cambridge curriculum support with experienced tutors and proven methodologies.",
      features: ["IGCSE Preparation", "A-Level Support", "Cambridge Assessment"]
    },
    {
      icon: GraduationCap,
      title: "Tuition Center for IB Curriculum",
      description: "International Baccalaureate program guidance for academic excellence and global recognition.",
      features: ["IB Diploma Programme", "Extended Essay Support", "TOK Guidance"]
    },
    {
      icon: Award,
      title: "Tuition Center for National Curriculum",
      description: "Indonesian national curriculum enhancement with international learning approaches.",
      features: ["UN Preparation", "Local Curriculum", "Academic Support"]
    },
    {
      icon: Building,
      title: "Corporate & Professional English Training",
      description: "Business English and professional communication skills for working professionals.",
      features: ["Business English", "Presentation Skills", "Corporate Training"]
    },
    {
      icon: Globe,
      title: "IELTS, TOEFL & TOEIC Preparation Courses",
      description: "Comprehensive test preparation for international language proficiency certifications.",
      features: ["Test Strategies", "Practice Tests", "Score Improvement"]
    },
    {
      icon: Languages,
      title: "HSK (Chinese Proficiency) Courses",
      description: "Chinese language learning and HSK test preparation for all proficiency levels.",
      features: ["HSK 1-6 Levels", "Cultural Context", "Speaking Practice"]
    },
    {
      icon: Monitor,
      title: "Comprehensive Online English Program",
      description: "Flexible online English learning with interactive materials and live instruction.",
      features: ["Live Sessions", "Interactive Materials", "Flexible Schedule"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive educational programs designed to meet diverse learning needs and international standards
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-primary-200"
              >
                <div className="mb-6">
                  <div className="bg-primary-100 group-hover:bg-primary-500 p-4 rounded-xl inline-block transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => {
                    const message = encodeURIComponent(`Hi! I'd like to learn more about ${program.title}.`);
                    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
                  }}
                  className="mt-6 w-full bg-gray-50 hover:bg-primary-500 text-gray-700 hover:text-white py-3 px-4 rounded-lg transition-all duration-300 font-semibold group-hover:shadow-md"
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-primary-500 text-white p-8 lg:p-12 rounded-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss which program is right for you and schedule your free trial class.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to learn more about your programs and schedule a free trial class.");
                window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
              }}
              className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
            >
              Contact Us Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;