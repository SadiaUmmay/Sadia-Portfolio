// src/components/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X, Globe, Code } from 'lucide-react';
// import img1 from './../assets/WhatsApp Image 2026-01-05 at 4.27.53 PM.jpeg'
const projects = [
  {
    id: 1,
    title: 'Blood Donation Management System',
    description: 'A user-friendly platform that helps manage blood donation requests efficiently. It connects donors, volunteers, and admins in one system to ensure timely blood donations and proper request management.',
    image:'https://i.ibb.co.com/dh0xcZ2/blood.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Firebase', 'Express.js', 'Tailwind CSS'],
    liveLink: 'https://blood-donationnn.netlify.app/',
    githubLink: 'https://github.com/SadiaUmmay/Blood-Donation',
    challenges: 'Ensured secure login using authentication, Managed different user roles with role-based access, Solved data validation and deployment issues.',
    improvements: 'Real-time notifications for donors, Advanced search & filtering system, Location-based donor matching, Admin analytics dashboard, Mobile app version',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'PawMart — Pet Adoption & Supply Portal',
    description: 'PawMart is an online platform that helps users adopt pets and purchase pet supplies easily. It connects pet seekers with animals in need of homes, offers a variety of products for pet care, and provides helpful resources and tips for pet owners — all in one convenient place.',
    image: 'https://i.ibb.co.com/hR3KWWZT/pawmart.png',
    tech: ['React', 'Firebase', 'MongoDB', 'Framer Motion', 'Express.js', 'Tailwind CSS'],
    liveLink: ' https://pawmart-adoption.netlify.app/',
    githubLink: 'https://github.com/SadiaUmmay/PawMart',
    challenges: 'While building PawMart, I faced challenges in displaying dynamic pet listings, managing product data for the shop, and ensuring smooth interaction between front-end and back-end. These were solved by using React for the frontend, structured APIs for data handling, and careful testing for a seamless user experience.',
    improvements: 'PawMart can be enhanced by adding advanced search and filter options for pets, a user review and rating system for products, real-time chat with shelters, and personalized recommendations based on user preferences. Mobile app support and integration with payment gateways can also improve accessibility and convenience for users.',
    category: 'Full Stack'
  },
  {
    id: 3,
    title: 'WarmPaws Pet  Care in Winter',
    description: 'A cozy winter companion platform designed to help pet owners keep their furry friends warm, healthy, and safe during the cold season. Users can explore pet care services, view details, book services, and securely log in to access protected pages',
    image: 'https://i.ibb.co.com/TDTw6rxF/warmpaw.png',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'DaisyUI', 'react-hot-toast', 'lucide-react (icons)', 'vite', 'Slider'],
    liveLink: 'https://warmpaw.netlify.app/',
    githubLink: 'https://github.com/SadiaUmmay/WarmPaws-Pet-Care-in-Winter',
    challenges: 'Developing WarmPaws Pet Care involved ensuring pet safety features, designing a user-friendly interface, managing seasonal care content, and integrating reminders for pet owners. Balancing functionality with simplicity while addressing various winter pet care needs was a key challenge. I focused on clear, easy-to-use features, seasonal care guides, and alert systems for pet owners. This ensures pets stay safe and healthy, while owners get simple, practical winter care advice.',
    improvements: 'We plan to add features like personalized pet care tips, real-time health tracking, and a community forum for pet owners to share advice, making WarmPaws even more interactive and helpful.',
    category: 'Frontend'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured <span className="bg-gradient-to-r from-lilac-400 via-white to-lilac-300 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark-card rounded-2xl overflow-hidden border border-lilac-900/20 hover:border-lilac-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-lilac-600/90 backdrop-blur-sm rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-dark-text-secondary mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-dark-bg text-dark-text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-lilac-900/30 rounded-full transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-lilac-900/30 rounded-full transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="cursor-pointer px-4 py-2 bg-gradient-to-r from-lilac-600/20 to-lilac-800/20 text-lilac-400 rounded-lg hover:from-lilac-600/30 hover:to-lilac-800/30 transition-all duration-300 flex items-center gap-2"
                  >
                    Details
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={closeProjectDetails}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-lilac-900/30"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h3>
                      <span className="inline-block mt-2 px-3 py-1 bg-lilac-600/20 text-lilac-400 rounded-full">
                        {selectedProject.category}
                      </span>
                    </div>
                    <button
                      onClick={closeProjectDetails}
                      className="cursor-pointer p-2 hover:bg-dark-bg rounded-full transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-lilac-400 mb-3 flex items-center gap-2">
                            <Code size={18} />
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 bg-lilac-900/30 text-lilac-400 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-lilac-400 mb-3">Links</h4>
                          <div className="flex flex-wrap gap-4">
                            <a 
                              href={selectedProject.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-gradient-to-r from-lilac-600 to-lilac-800 rounded-lg hover:from-lilac-700 hover:to-lilac-900 transition-all duration-300 flex items-center gap-2"
                            >
                              <Globe size={18} />
                              Live Demo
                            </a>
                            <a 
                              href={selectedProject.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 border-2 border-lilac-600 text-lilac-400 rounded-lg hover:bg-lilac-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                              <Github size={18} />
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-lilac-400 mb-3">Description</h4>
                        <p className="text-dark-text-secondary">{selectedProject.description}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-lilac-400 mb-3">Challenges & Solutions</h4>
                        <p className="text-dark-text-secondary">{selectedProject.challenges}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-lilac-400 mb-3">Future Improvements</h4>
                        <p className="text-dark-text-secondary">{selectedProject.improvements}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;