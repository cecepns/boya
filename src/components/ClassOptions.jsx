import { Monitor, MapPin, Video, Users, Clock, Globe } from 'lucide-react';

const ClassOptions = () => {
  const classTypes = [
    {
      icon: Monitor,
      title: "Virtual Classes",
      description: "Interactive online learning with flexible scheduling and global accessibility",
      features: [
        { icon: Video, text: "Live Interactive Sessions" },
        { icon: Clock, text: "Flexible Scheduling" },
        { icon: Globe, text: "Learn from Anywhere" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "On-site Classes",
      description: "Face-to-face learning in our modern Jakarta facility with personalized attention",
      features: [
        { icon: Users, text: "Small Class Sizes" },
        { icon: MapPin, text: "Jakarta Facility" },
        { icon: Users, text: "Personal Attention" }
      ],
      gradient: "from-primary-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Mode
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible learning options designed to fit your schedule and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {classTypes.map((classType, index) => {
            const IconComponent = classType.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${classType.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${classType.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {classType.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {classType.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {classType.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3 text-gray-700"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                            <FeatureIcon className="w-4 h-4 text-primary-500" />
                          </div>
                          <span className="text-sm font-medium">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${classType.gradient} group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100"
        >
          <p className="text-gray-700 text-lg mb-4">
            Not sure which option is right for you?
          </p>
          <a
            href="https://wa.me/6281220008601"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold transition-colors"
          >
            Contact us for personalized guidance
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassOptions;
