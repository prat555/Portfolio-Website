import { motion } from "framer-motion";
import ecommerceBg from "@/assets/shizuka.png";
import aiBg from "@/assets/ecovision.png";
import neuroBg from "@/assets/nuerorisk.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
  gradient: string;
  icon: string;
  backgroundImage: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Shizuka - Sustainable Ecommerce Platform",
      description:
        "A sustainable shopping platform built with MERN stack, featuring product catalog, cart/wishlist functionality, and JWT-secured checkout process.",
      technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "JWT"],
      links: {
        github: "https://github.com/prat555/Shizuka",
        live: "https://shizuka-san.vercel.app/",
      },
      gradient: "from-green-400 to-blue-500",
      icon: "fas fa-shopping-cart",
      backgroundImage: ecommerceBg,
    },
    {
      title: "EcoVision - AI Waste Classification",
      description:
        "An AI-powered web application that classifies waste through image recognition, helping users make eco-friendly disposal decisions.",
      technologies: ["React", "Vite", "TypeScript", "OpenAI API", "PostgreSQL"],
      links: {
        github: "https://github.com/prat555/EcoVision",
        live: "https://ecovisionscan.onrender.com/",
      },
      gradient: "from-purple-400 to-pink-500",
      icon: "fas fa-camera",
      backgroundImage: aiBg,
    },
    {
      title: "NeuroRisk - Risk Prediction Platform",
      description:
        "A machine learning platform that predicts substance use risk based on psychological profiles with interactive data visualizations and persistent PostgreSQL risk tracking.",
      technologies: ["Python", "Numpy", "Streamlit", "Scikit-learn", "PostgreSQL"],
      links: {
        github: "https://github.com/prat555/NueroRisk",
      },
      gradient: "from-orange-400 to-red-500",
      icon: "fas fa-brain",
      backgroundImage: neuroBg,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my latest work in web development and AI integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div 
                className="h-48 relative overflow-hidden group/image"
                style={{
                  backgroundImage: `url(${project.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover/image:bg-black/50 transition-all duration-300"></div>
                
                {/* Project Icon */}
                <div className="absolute bottom-4 left-4 text-white">
                  <i className={`${project.icon} text-3xl drop-shadow-lg`}></i>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-blue-500 hover:bg-blue-400 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors duration-300"
                      title="Live Demo"
                    >
                      <i className="fas fa-external-link-alt text-sm"></i>
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-blue-500 hover:bg-blue-400 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors duration-300"
                      title="GitHub Repository"
                    >
                      <i className="fab fa-github text-sm"></i>
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
