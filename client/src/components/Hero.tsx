import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

export default function Hero() {
  const socialLinks = [
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/pratyush-goutam-387837250", label: "LinkedIn" },
    { icon: "fab fa-github", href: "https://github.com/prat555", label: "GitHub" },
    { icon: "fas fa-code", href: "https://leetcode.com/u/pratg555/", label: "LeetCode" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-purple-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={profileImage} 
                alt="Pratyush Goutam" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary dark:text-white mb-6"
          >
            Pratyush <span className="text-accent">Goutam</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          >
            Full Stack Developer & Problem Solver
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web and mobile solutions with modern technologies. Currently pursuing a B.Tech in Computer Science with expertise in the MERN stack, AI integration, and cross-platform App development.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="/api/download-resume"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </motion.a>
            <motion.a
              href="mailto:pratyush8600@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-all duration-300"
            >
              <i className="fas fa-envelope"></i>
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors duration-300 relative group"
                aria-label={link.label}
              >
                <i className={`${link.icon} text-2xl`}></i>
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
