// src/components/Footer.jsx
import { Heart, ArrowUp, Copyright } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-card border-t border-lilac-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-lilac-400 to-white bg-clip-text text-transparent mb-2">
              Ummay Jannat Sadia
            </h3>
            <p className="text-dark-text-secondary">
              Mern Stack Developer & Creative Problem Solver
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="mailto:ummayjannatsadia@gmail.com" 
              className="text-dark-text-secondary hover:text-lilac-400 transition-colors"
            >
              Email
            </a>
            <a 
              href="https://github.com/SadiaUmmay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-text-secondary hover:text-lilac-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/ummay-jannat-sadia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-text-secondary hover:text-lilac-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-linear-to-r from-lilac-600 to-lilac-800 rounded-full hover:from-lilac-700 hover:to-lilac-900 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="pt-8 border-t border-lilac-900/20 text-center">
          <p className="text-dark-text-secondary flex items-center justify-center gap-2 mb-4">
            Made with <Heart size={16} className="text-red-400 fill-red-400 animate-pulse" /> by Ummay Jannat Sadia
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-dark-text-secondary text-sm">
            <div className="flex items-center gap-1">
              <Copyright size={14} />
              <span>{currentYear} All rights reserved.</span>
            </div>
            <div className="hidden sm:block">•</div>
            <p>Built with React</p>
            <div className="hidden sm:block">•</div>
            <p>Barisal, Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;