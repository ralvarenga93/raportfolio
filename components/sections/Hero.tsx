"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Roger Alvarenga
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
          >
            Front-End Developer & Product Designer
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-500 mb-8 max-w-2xl mx-auto"
          >
            Creating exceptional user experiences through thoughtful design,
            data-driven insights, and clean, modern code
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-colors shadow-lg"
              aria-label="View my projects"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  const element = document.querySelector("#projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold hover:bg-foreground hover:text-background transition-colors"
              aria-label="Get in touch"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

