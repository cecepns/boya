import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Monitor, MapPin, ArrowRight } from 'lucide-react';
import BgImage1 from '../assets/bg-image1.png';

const Hero = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    since: 0,
    satisfaction: 0,
    students: 0
  });

  useEffect(() => {
    const finalStats = {
      since: 2018,
      satisfaction: 98,
      students: 2500
    };

    const animateCounter = (key, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter('since', finalStats.since, 1500);
      animateCounter('satisfaction', finalStats.satisfaction, 2000);
      animateCounter('students', finalStats.students, 2500);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleFreeTrial = () => {
    const message = encodeURIComponent("Hi! I'm interested in a free trial class at Boya International Learning Center. Could you please provide more information?");
    window.open(`https://wa.me/6281220008601?text=${message}`, '_blank');
  };

  const handleViewPrograms = () => {
    navigate('/programs');
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional education and language training designed to international standards. 
              Achieve academic excellence and global competency with our expert guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

            {/* Class Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <Monitor className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Virtual Classes</h3>
                <p className="text-gray-600 text-sm">Interactive online learning with flexible scheduling</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <MapPin className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">On-site Classes</h3>
                <p className="text-gray-600 text-sm">Face-to-face learning in our Jakarta facility</p>
              </div>
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
            <div className="absolute -bottom-8 left-1 md:-left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 z-10">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;