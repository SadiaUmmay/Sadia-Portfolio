// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import img from './../assets/IMG-20241225-WA0154.jpg'
const Hero = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/SadiaUmmay', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/ummay-jannat-sadia/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/SadiaUmmay_', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:ummayjannatsadia@gmail.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-linear-to-r from-lilac-400 via-white to-lilac-300 bg-clip-text text-transparent">
                  Ummay Jannat Sadia
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-lilac-400 font-semibold">
                MERN Stack Developer
              </h2>
              <p className="text-dark-text-secondary text-lg max-w-2xl">
                I create beautiful, functional web experiences with modern technologies.
                Passionate about clean code, user-centric design, and continuous learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1Hf-cT3rwCaZ4jCo4_R2w8Y9wzY5ha2cf
"
                download
                className="px-8 py-3 bg-linear-to-r from-lilac-600 to-lilac-800 rounded-full hover:from-lilac-700 hover:to-lilac-900 transition-all duration-300 flex items-center gap-2 font-semibold"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="mailto:ummayjannatsadia@gmail.com"
                className="px-8 py-3 border-2 border-lilac-600 text-lilac-400 rounded-full hover:bg-lilac-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-card rounded-full hover:bg-lilac-600 hover:scale-110 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-linear-to-r from-lilac-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-lilac-500/30">
              
                <div className="w-full h-full bg-linear-to-br from-lilac-400 to-purple-600 flex items-center justify-center">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-lilac-600/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
