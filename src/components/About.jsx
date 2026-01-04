import { Award, Globe, Users, Target, MapPin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            About Boya International Learning Center
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Description */}
          <div data-aos="fade-right">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-primary-500">Boya International Learning Center</strong> adalah lembaga pendidikan profesional yang berkomitmen memberikan dukungan akademik dan pelatihan bahasa berkualitas tinggi bagi siswa dan profesional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Program pembelajaran dirancang sesuai standar internasional untuk membantu peserta mencapai keunggulan akademik dan kompetensi global.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">International Standards</h4>
                  <p className="text-sm text-gray-600">Global curriculum alignment</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Competency</h4>
                  <p className="text-sm text-gray-600">International skill development</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Educators</h4>
                  <p className="text-sm text-gray-600">Professional teaching staff</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Academic Excellence</h4>
                  <p className="text-sm text-gray-600">Results-focused approach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div data-aos="fade-left" className="relative">
            <img
              src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg"
              alt="Educational environment"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-2xl"></div>
            
            {/* Overlay Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">Active Learning Environment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-up" className="bg-gray-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-primary-500 p-3 rounded-lg mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the leading international learning center that empowers individuals with world-class education and language proficiency, fostering global citizens who excel in their academic and professional endeavors.
            </p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="100" className="bg-primary-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-primary-500 p-3 rounded-lg mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide high-quality, personalized education and language training programs that meet international standards, delivered by experienced educators using innovative teaching methodologies and comprehensive learning resources.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div data-aos="fade-up" className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-500 p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <p className="text-gray-700 leading-relaxed">
                  Galeri Niaga Mediterania II<br />
                  Jl. Pantai Indah Utara 2, RT.1/RW.16<br />
                  Blok M8B. Pantai Indah Kapuk<br />
                  Jakarta Utara
                </p>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-500 p-3 rounded-lg flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Address</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-700 mb-1">General Inquiry</p>
                    <a 
                      href="mailto:info@boyalearningcenter.com" 
                      className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                    >
                      info@boyalearningcenter.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-1">Career</p>
                    <a 
                      href="mailto:career@boyalearningcenter.com" 
                      className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                    >
                      career@boyalearningcenter.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;