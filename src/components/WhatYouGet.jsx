import { useState, useEffect } from 'react';
import { Users, Award, ThumbsUp, Calendar, Wallet } from 'lucide-react';

const WhatYouGet = () => {
  const [stats, setStats] = useState({
    since: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const finalStats = {
      since: 2018,
      satisfaction: 98
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
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleFreeTrial = () => {
    const message = encodeURIComponent("Hi! I'm interested in a free trial class at Boya International Learning Center. Could you please provide more information?");
    window.open(`https://wa.me/6281220008601?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid gap-20 grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto" data-aos="fade-up">
          {/* Trusted Since Card */}
          <div className="relative bg-white rounded-2xl shadow-lg border-2 border-teal-500 p-8 text-center">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-teal-600 rounded-full p-5 shadow-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="pt-8">
              <p className="text-gray-700 text-sm font-medium mb-2">Trusted since</p>
              <p className="text-5xl font-bold text-gray-900">{stats.since}</p>
            </div>
            {/* Speech bubble arrow */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-teal-500"></div>
          </div>

          {/* Customer Satisfaction Card */}
          <div className="relative bg-white rounded-2xl shadow-lg border-2 border-yellow-500 p-8 text-center">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-600 rounded-full p-5 shadow-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="pt-8">
              <p className="text-gray-900 text-sm font-semibold mb-2">Customer Satisfaction</p>
              <p className="text-5xl font-bold text-gray-900">{stats.satisfaction}</p>
              <p className="text-gray-700 text-sm font-medium mt-1">Percent</p>
            </div>
            {/* Speech bubble arrow */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-yellow-500"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What You Will Get
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-2">
            With methods tested for more than 19 years and experienced{' '}
            <span className="italic font-semibold">full time teachers</span>,
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            will help you be confident in speaking English
          </p>

          {/* Free Trial Button */}
          <button
            onClick={handleFreeTrial}
            className="bg-rose-400 hover:bg-rose-500 text-white px-12 py-4 rounded-lg text-lg font-bold tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            FREE TRIAL CLASS
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-16" data-aos="fade-up" data-aos-delay="400">
          {/* Trusted Quality */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <ThumbsUp className="w-24 h-24 text-blue-900" />
                <div className="absolute bottom-0 -left-4 w-8 h-12 bg-orange-500 rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted</h3>
            <h3 className="text-2xl font-bold text-gray-900">Quality</h3>
          </div>

          {/* High Flexibility */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Calendar className="w-24 h-24 text-blue-900"  />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">High</h3>
            <h3 className="text-2xl font-bold text-gray-900">Flexibility</h3>
          </div>

          {/* Affordable Cost */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Wallet className="w-24 h-24 text-blue-900" />
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Affordable</h3>
            <h3 className="text-2xl font-bold text-gray-900">Cost</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
