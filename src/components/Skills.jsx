// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiGit, SiTypescript, SiNextdotjs, SiFirebase, SiFigma, SiBootstrap } from 'react-icons/si';


const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'React.js', level: 90, icon: <FaReact className="text-blue-400" /> },
        { name: 'JavaScript', level: 85, icon: <FaJs className="text-yellow-400" /> },
        { name: 'Bootstrap', level: 90, icon: <SiBootstrap className="text-blue-500" /> },
        { name: 'Next.js', level: 75, icon: <SiNextdotjs className="text-white" /> },
        { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-teal-400" /> },
      ]
    },
    {
      category: 'Backend',
      color: 'from-green-500 to-emerald-400',
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', level: 80, icon: <SiExpress className="text-white" /> },
        { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-green-600" /> },
        { name: 'REST APIs', level: 85, icon: '🔗' },
        { name: 'Firebase', level: 70, icon: <SiFirebase className="text-orange-400" /> },
      ]
    },
    {
      category: 'Tools & Others',
      color: 'from-purple-500 to-pink-400',
      skills: [
        { name: 'Git & GitHub', level: 85, icon: <SiGit className="text-orange-500" /> },
        { name: 'Figma', level: 75, icon: <SiFigma className="text-purple-400" /> },
        { name: 'GSAP', level: 70, icon: '🎨' },
        { name: 'Framer Motion', level: 80, icon: '✨' },
        { name: 'Problem Solving', level: 90, icon: '💡' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="bg-gradient-to-r from-lilac-400 via-white to-lilac-300 bg-clip-text text-transparent">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-dark-card rounded-2xl p-6 border border-lilac-900/20 hover:border-lilac-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-8 bg-gradient-to-b ${category.color} rounded-full`} />
                <h3 className="text-xl font-semibold text-lilac-400">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {typeof skill.icon === 'string' ? (
                          <span className="text-xl">{skill.icon}</span>
                        ) : (
                          <span className="text-xl">{skill.icon}</span>
                        )}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-lilac-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-bg rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;