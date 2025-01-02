import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider";

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const { darkMode } = useTheme();

  // Fade in effect on mount
  useEffect(() => {
    setFadeIn(true);
  }, []);

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className={`items-center justify-center p-4 sm:p-8 lg:p-12 ${fadeIn ? "animate-smoothFadeIn" : ""}`}
      style={{
        background: darkMode
          ? "linear-gradient(to right, #1e1e1e, #333333, #1e1e1e)"
          : "linear-gradient(to right, #8cff5d, #a6c1ee)",
        animationDelay: "0s",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* About Me Section */}
      <motion.h2
        className={`"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6" ${darkMode ? "text-white" : "text-gray-900"}`}
        variants={itemVariants}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-center max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12"
        variants={containerVariants}
      >
        <motion.p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"
          }`} variants={itemVariants}>
          I am currently diving into full-stack programming, mastering
          technologies like HTML, CSS, JavaScript, Node.js, Nest.js, Express,
          MongoDB, PostgreSQL, Angular, React, and NextJS.
        </motion.p>
        <motion.p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"
          }`} variants={itemVariants}>
          Along with building my technical skills, I'm actively exploring
          opportunities to start a career in programming, seeking to apply my
          knowledge in real-world projects.
        </motion.p>
        <motion.p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"
          }`} variants={itemVariants}>
          I'm passionate about continuous learning, constantly improving my
          coding abilities, and keeping up with the latest trends in web
          development.
        </motion.p>
        <motion.p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"
          }`} variants={itemVariants}>
          I enjoy tackling complex challenges, finding efficient solutions, and
          collaborating with teams to build impactful, user-friendly
          applications.
        </motion.p>
        <motion.p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"
          }`} variants={itemVariants}>
          As I advance my skills, I'm excited to contribute to innovative
          projects, whether in front-end development, back-end infrastructure,
          or full-stack solutions.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
