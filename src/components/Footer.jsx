import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path, sectionId = null) => {
    if (path === location.pathname && sectionId) {
      // Same page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (sectionId) {
      // Different page, navigate then scroll
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Just navigate
      navigate(path);
    }
  };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Boya International</h3>
                <p className="text-gray-300 text-sm">Learning Center</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Professional education and language training designed to international standards. 
              Achieve academic excellence and global competency with our expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigate('/about')}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('/programs')}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-left"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('/', 'strengths')}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-left"
                >
                  Our Strengths
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('/contact')}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href="mailto:info@boyalearningcenter.com" 
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    info@boyalearningcenter.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white text-sm">
                    Galeri Niaga Mediterania II<br />
                    Jakarta Utara, 14460
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Boya International Learning Center. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Designed for Excellence in Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;