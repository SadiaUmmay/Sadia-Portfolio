// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'ummayjannatsadia@gmail.com',
      href: 'mailto:ummayjannatsadia@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+880 1811399307',
      href: 'tel:+8801811399307'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'WhatsApp',
      value: '+880 1811399307',
      href: 'https://wa.me/8801811399307'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Barisal, Bangladesh',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/SadiaUmmay', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/ummay-jannat-sadia/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/SadiaUmmay_', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get In <span className="bg-linear-to-r from-lilac-400 via-white to-lilac-300 bg-clip-text text-transparent">Touch</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-lilac-400 mb-4">Let's Connect!</h3>
              <p className="text-dark-text-secondary text-lg">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                Feel free to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  href={info.href}
                  target={info.title === 'WhatsApp' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="p-6 bg-dark-card rounded-2xl hover:bg-dark-card/80 transition-all duration-300 border border-lilac-900/20 hover:border-lilac-500/30 group"
                >
                  <div className="text-lilac-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                  <p className="text-dark-text-secondary">{info.value}</p>
                </motion.a>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-lilac-400 mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-card rounded-2xl p-6 md:p-8 border border-lilac-900/20"
          >
            <h3 className="text-2xl font-semibold text-lilac-400 mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-lilac-900/30 rounded-lg text-dark-text focus:border-lilac-500 focus:ring-2 focus:ring-lilac-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-text-secondary mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-lilac-900/30 rounded-lg text-dark-text focus:border-lilac-500 focus:ring-2 focus:ring-lilac-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-lilac-900/30 rounded-lg text-dark-text focus:border-lilac-500 focus:ring-2 focus:ring-lilac-500/20 focus:outline-none transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text-secondary mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-bg border border-lilac-900/30 rounded-lg text-dark-text focus:border-lilac-500 focus:ring-2 focus:ring-lilac-500/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Hello Sadia, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-linear-to-r from-lilac-600 to-lilac-800 rounded-lg hover:from-lilac-700 hover:to-lilac-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center p-3 bg-green-400/10 rounded-lg"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center p-3 bg-red-400/10 rounded-lg"
                >
                  ❌ Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;