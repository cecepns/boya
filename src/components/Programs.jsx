import { BookOpen, Award, Building, Calendar } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      level: "Nursery – Kindergarten",
      title: "Early Achievers (EA)",
      description: "A foundational program designed for early learners to build academic readiness and language skills from a young age.",
      classStructure: [
        "2 meetings of school subjects",
        "1 free meeting of Phonics Thematic Class"
      ],
      learningMethods: [
        "Flashcards",
        "Digital video and audio learning",
        "Role play activities",
        "Guided reading sessions"
      ],
      learningMethodsLabel: "Learning Methods & Focus:"
    },
    {
      icon: Award,
      level: "Primary 1 – 3",
      title: "Confident Young Minds (CYM)",
      description: "A program aimed at developing confidence, creativity, and strong character in young learners.",
      classStructure: [
        "2–3 meetings of school subjects",
        "1 meeting of Business Class"
      ],
      learningMethods: [
        "Public speaking",
        "Creative thinking",
        "Character building",
        "Opportunity-seeking mindset"
      ]
    },
    {
      icon: Building,
      level: "Primary 4 – 6",
      title: "Business Explorers (BE)",
      description: "A program that introduces students to basic business concepts while strengthening communication skills.",
      classStructure: [
        "2–3 meetings of school subjects",
        "1 meeting of Business Class"
      ],
      learningMethods: [
        "Public speaking",
        "Persuasion skills",
        "Communication skills",
        "Basic selling concepts"
      ]
    },
    {
      icon: Building,
      level: "Secondary 1 – 3",
      title: "Growingpreneur Minds (GM)",
      description: "A program designed to nurture leadership qualities and entrepreneurial thinking in early secondary students.",
      classStructure: [
        "2–3 meetings of school subjects",
        "1 meeting of Business Class"
      ],
      learningMethods: [
        "Public speaking",
        "Financial literacy",
        "Leadership development",
        "Entrepreneurship"
      ]
    },
    {
      icon: Building,
      level: "Secondary 4 – 6",
      title: "Creative Earning Opportunities (CEO)",
      description: "An advanced program that empowers students to explore creative income opportunities while enhancing leadership and business skills.",
      classStructure: [
        "2–3 meetings of school subjects",
        "1 meeting of Business Class"
      ],
      learningMethods: [
        "Public speaking",
        "Financial literacy",
        "Leadership",
        "Entrepreneurship"
      ]
    },
    {
      icon: Calendar,
      level: "Holiday Camp",
      title: "Holiday Camp Program (2 Weeks or 1 Month)",
      description: "A fun and structured holiday programme designed to introduce students to business fundamentals, entrepreneurship, and essential life skills.",
      classStructure: [],
      learningMethods: [
        "Creative earning opportunities",
        "Communication and teamwork skills",
        "Critical thinking and problem-solving",
        "Increased confidence and independence",
        "A strong entrepreneurial mindset"
      ],
      highlights: [
        "Interactive learning activities",
        "Hands-on projects",
        "Real-world problem-solving experiences"
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-decorative-orange decorative-circles">
      {/* Decorative Circles */}
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Available Classes
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Comprehensive educational programs designed to meet diverse learning needs and international standards
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
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
                
                {program.level && (
                  <p className="text-sm font-semibold text-primary-600 mb-2">
                    {program.level}
                  </p>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                {program.classStructure && program.classStructure.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Class Structure:</h4>
                    <div className="space-y-2">
                      {program.classStructure.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {program.highlights && program.highlights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Programme Highlights:</h4>
                    <div className="space-y-2">
                      {program.highlights.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {program.learningMethods && program.learningMethods.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      {program.learningMethodsLabel || (program.highlights ? "Learning Outcomes:" : "Key Focus Areas:")}
                    </h4>
                    <div className="space-y-2">
                      {program.learningMethods.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => {
                    const message = encodeURIComponent(`Hi! I'd like to learn more about ${program.title}.`);
                    window.open(`https://wa.me/6281220008601?text=${message}`, '_blank');
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
          <div className="bg-white/95 backdrop-blur-sm text-gray-900 p-8 lg:p-12 rounded-2xl shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss which program is right for you and schedule your free trial class.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to learn more about your programs and schedule a free trial class.");
                window.open(`https://wa.me/6281220008601?text=${message}`, '_blank');
              }}
              className="bg-primary-500 text-white hover:bg-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
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