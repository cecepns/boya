import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import BgImage1 from '../assets/bg-image1.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleFreeTrial = () => {
    const message = encodeURIComponent("Hi! I'm interested in a free trial class at Boya International Learning Center. Could you please provide more information?");
    window.open(`https://wa.me/6281220008601?text=${message}`, '_blank');
  };

  const handleViewPrograms = () => {
    navigate('/programs');
  };

  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" className="text-center lg:text-left">
            <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              International Standard Education
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Unlock Your
              <span className="text-primary-500 block">Global Potential</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Professional education and language training designed to international standards. 
              Achieve academic excellence and global competency with our expert guidance.
            </p>
            
            {/* Tagline */}
            <div className="mb-8 p-4 bg-primary-50 border-l-4 border-primary-500 rounded-r-lg">
              <p className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Pay once in Business Class for your child, GET Free tuition Program !
              </p>
              <p className="text-base lg:text-lg text-gray-700 italic">
                (All subject and curriculum are available !)
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleFreeTrial}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Free Trial Class
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleViewPrograms}
                className="border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Programs
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div data-aos="fade-left" className="relative">
            <div className="relative z-10">
              <img
                src={BgImage1}
                alt="Students learning"
                className="w-full h-96 h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-2xl"></div> */}
            </div>
            
            {/* Floating Stats Card */}
            {/* <div className="absolute -bottom-8 left-1 md:-left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 z-10">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-500">{stats.since}</div>
                  <div className="text-xs text-gray-600">Trusted Since</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-500">{stats.satisfaction}%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-500">{stats.students.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;