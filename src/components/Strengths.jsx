import { FileText, Target, BookOpen, Archive, Users, UsersRound, Clock, Headset } from 'lucide-react';

const Strengths = () => {
  const strengths = [
    {
      icon: FileText,
      title: "Personalized Student Progress Reports",
      description: "Detailed progress tracking and regular feedback to ensure continuous improvement and goal achievement."
    },
    {
      icon: Target,
      title: "School Topic-Oriented Learning",
      description: "Curriculum aligned with school subjects and topics to enhance academic performance and understanding."
    },
    {
      icon: BookOpen,
      title: "Extensive Learning Resources",
      description: "Comprehensive collection of learning materials, textbooks, and digital resources for effective study."
    },
    {
      icon: Archive,
      title: "Access to Past Examination Papers",
      description: "Complete database of previous exam papers and practice tests for thorough preparation."
    },
    {
      icon: Users,
      title: "Experienced and Engaging Educators",
      description: "Qualified teachers with international experience and proven track records in student success."
    }
  ];

  return (
    <section id="strengths" className="py-20 bg-decorative-blue decorative-circles">
      {/* Decorative Circles */}
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Strengths
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            What sets us apart and makes us the preferred choice for international education
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex items-start space-x-6 p-8 bg-white/95 backdrop-blur-sm hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-xl border border-white/20 hover:border-white"
              >
                <div className="flex-shrink-0">
                  <div className="bg-primary-500 p-4 rounded-xl">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div data-aos="fade-up" className="text-center">
            <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersRound className="w-8 h-8 text-primary-500" />
            </div>
            <h4 className="font-semibold text-white mb-2">Small Class Sizes</h4>
            <p className="text-blue-100 text-sm">Maximum attention with our small class ratio for personalized learning</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="100" className="text-center">
            <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary-500" />
            </div>
            <h4 className="font-semibold text-white mb-2">Flexible Scheduling</h4>
            <p className="text-blue-100 text-sm">Convenient class times that fit your busy schedule and lifestyle</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200" className="text-center">
            <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headset className="w-8 h-8 text-primary-500" />
            </div>
            <h4 className="font-semibold text-white mb-2">Continuous Support</h4>
            <p className="text-blue-100 text-sm">Ongoing guidance and support beyond classroom hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;