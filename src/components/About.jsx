// src/components/About.jsx
import { motion } from 'framer-motion';
import { Code2, Palette, Coffee, BookOpen, Book, GraduationCap } from 'lucide-react'; // added GraduationCap

const About = () => {
  const interests = [
    { icon: <Code2 size={24} />, title: 'Web Development', desc: 'Building modern web applications' },
    { icon: <Book size={24} />, title: 'Language & Growth', desc: 'Improving English fluency through regular practice in reading, writing, and speaking.' },
    { icon: <Coffee size={24} />, title: 'Coffee & Code', desc: 'My perfect work environment' },
    { icon: <BookOpen size={24} />, title: 'Reading', desc: 'Tech blogs & fantasy novels' },
  ];

  const educationList = [
    { icon: <GraduationCap size={24} />, degree: 'B.Sc. Honours in Zoology', institute: 'National University, Bangladesh', year: '2023' },
    { icon: <GraduationCap size={24} />, degree: 'HSC in Science', institute: 'Government Girls College, Pirojpur', year: '2021' },
    { icon: <GraduationCap size={24} />, degree: 'Certification in Web Development', institute: 'Ministry of ICT, Bangladesh', year: '2024' },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About <span className="bg-gradient-to-r from-lilac-400 via-white to-lilac-300 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        {/* Journey */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-lilac-400 mb-4">My Journey</h3>
              <p className="text-dark-text-secondary text-lg mb-4">
                Hello! I'm Sadia, a passionate Mern Stack Developer with a love for creating
                digital experiences that make a difference. My journey into programming started
                with curiosity about how websites work, which quickly turned into a full-blown passion.
              </p>
              <p className="text-dark-text-secondary text-lg mb-4">
                I enjoy the entire process of building applications - from conceptualizing ideas
                to writing clean, efficient code and seeing projects come to life. What excites me
                most about development is the constant learning and problem-solving opportunities.
              </p>
              <p className="text-dark-text-secondary text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or enjoying a good cup of coffee while reading tech blogs.
                I believe in writing code that not only works but is also maintainable and scalable.
              </p>
            </motion.div>
          </motion.div>

          {/* Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                custom={index}
                className="p-6 bg-dark-card rounded-2xl hover:bg-dark-card/80 transition-all duration-300 border border-lilac-900/20"
              >
                <div className="text-lilac-400 mb-4">{interest.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{interest.title}</h4>
                <p className="text-dark-text-secondary text-sm">{interest.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-26"
        >
          <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
         <span className="bg-gradient-to-r from-lilac-400 via-white to-lilac-300 bg-clip-text text-transparent"> Education </span>
        </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-dark-card rounded-2xl hover:bg-dark-card/80 transition-all duration-300 border border-lilac-900/20"
              >
                <div className="text-lilac-400 mb-4">{edu.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                {edu.institute && <p className="text-dark-text-secondary text-sm">{edu.institute}</p>}
                {edu.year && <p className="text-dark-text-secondary text-sm">{edu.year}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
