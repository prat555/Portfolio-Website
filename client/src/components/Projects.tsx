import { motion } from "framer-motion";
import ecommerceBg from "@/assets/shizuka.png";
import aiBg from "@/assets/ecovision.png";
import neuroBg from "@/assets/nuerorisk.png";
import movieAppBg from "@/assets/movieapp.png";
import foodDeliveryBg from "@/assets/food-delivery-app.png";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "Firebase"],
      links: {
        github: "https://github.com/prat555/Shizuka",
        live: "https://shizuka-san.vercel.app/",
      },
      gradient: "from-green-400 to-blue-500",
      icon: "fas fa-shopping-cart",
      backgroundImage: ecommerceBg,
    },
    {
      title: "Food Delivery App - React Native Expo",
      description:
        "A modern React Native food delivery app with Expo featuring clean UI, seamless payment integration, real-time order tracking, and Appwrite backend.",
      technologies: ["React Native", "Expo", "Appwrite", "Stripe", "Zustand", "Sentry"],
      links: {
        github: "https://github.com/prat555/Food-Delivery-App",
      },
      gradient: "from-orange-400 to-yellow-500",
      icon: "fas fa-utensils",
      backgroundImage: foodDeliveryBg,
    },
    {
      title: "EcoVision - AI Waste Classification and Management",
      description:
        "An AI-powered web application that classifies waste through image recognition, helping users make eco-friendly disposal decisions with a chatbot integrated.",
      technologies: ["React", "Vite", "TypeScript", "DeepSeek R1 API", "PostgreSQL"],
      links: {
        github: "https://github.com/prat555/EcoVision",
        live: "https://ecovisionscan.onrender.com/",
      },
      gradient: "from-purple-400 to-pink-500",
      icon: "fas fa-camera",
      backgroundImage: aiBg,
    },
    {
      title: "Xylo - React Native Movie App made with Expo",
      description:
        "A modern React Native movie app with Expo featuring movie browsing, detailed views, interactive elements like likes and downloads, and a sleek dark theme UI design.",
      technologies: ["React Native", "Expo", "TypeScript", "Redux", "NativeWind"],
      links: {
        github: "https://github.com/prat555/Movie-App",
      },
      gradient: "from-blue-400 to-purple-500",
      icon: "fas fa-film",
      backgroundImage: movieAppBg,
    },
    {
      title: "NeuroRisk - Drug Risk Prediction Platform",
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my latest work in web/app development and AI integration
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="h-48 relative overflow-hidden"
                      style={{
                        backgroundImage: `url(${project.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
                      {/* Project Icon */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <i className={`${project.icon} text-3xl drop-shadow-lg`}></i>
                      </div>
                      {/* Action Buttons - top right, show on hover */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.links.github && (
                          <motion.a
                            href={project.links.github}
                            className="w-10 h-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors duration-300"
                            title="GitHub Repository"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className="fab fa-github text-sm"></i>
                          </motion.a>
                        )}
                        {project.links.live && (
                          <motion.a
                            href={project.links.live}
                            className="w-10 h-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors duration-300"
                            title="Live Demo"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className="fas fa-external-link-alt text-sm"></i>
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}