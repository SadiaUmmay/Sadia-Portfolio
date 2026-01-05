// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navItems = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'about', name: 'About', href: '#about' },
    { id: 'skills', name: 'Skills', href: '#skills' },
    { id: 'projects', name: 'Projects', href: '#projects' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect and active link
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setScrolled(window.scrollY > 10);

      // Update active link
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveLink(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll
  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetElement = document.getElementById(id);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-bg/95 backdrop-blur-lg border-b border-lilac-900/30 py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, 'home')}
            className="text-2xl font-bold bg-gradient-to-r from-lilac-400 to-white bg-clip-text text-transparent"
          >
            Sadia
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.id)}
                className={`transition-colors duration-300 font-medium ${
                  activeLink === item.id
                    ? 'text-lilac-400'
                    : 'text-dark-text-secondary hover:text-lilac-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, 'contact')}
              className="px-6 py-2 bg-gradient-to-r from-lilac-600 to-lilac-800 rounded-full hover:from-lilac-700 hover:to-lilac-900 transition-all duration-300 font-semibold"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer text-dark-text p-2 hover:bg-dark-card/50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-dark-card rounded-lg mt-2 p-4 border border-lilac-900/30">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.id)}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  activeLink === item.id
                    ? 'bg-lilac-600/20 text-lilac-400'
                    : 'text-dark-text hover:bg-dark-card/50 hover:text-lilac-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, 'contact')}
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-lilac-600 to-lilac-800 rounded-lg hover:from-lilac-700 hover:to-lilac-900 transition-all duration-300 font-semibold text-center"
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;