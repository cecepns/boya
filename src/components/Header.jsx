import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? 'text-primary-500 font-semibold'
        : 'text-gray-700 hover:text-primary-500'
    }`;

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={Logo} alt="Boya International Learning Center" className="w-24 h-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/programs" className={navLinkClass}>
              Programs
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-1 text-primary-500" />
              <span>WhatsApp Available</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-1 text-primary-500" />
              <span>info@boyalearningcenter.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/programs" onClick={closeMenu} className={navLinkClass}>
                Programs
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;