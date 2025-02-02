import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider";

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const { darkMode } = useTheme();

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className={`"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6" ${darkMode ? "text-white" : "text-gray-900"}`}
        variants={itemVariants}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-center max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8"
        variants={containerVariants}
      >
        <motion.p
          className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
          variants={itemVariants}>
          Experienced <b>Backend Engineer</b> with proven expertise in crafting <b>scalable solutions</b> and implementing <b>robust architecture</b>. Adept at turning concepts into
          reality and contributing to successful project outcomes through meticulous planning and execution.
        </motion.p>
        <motion.p
          className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
          variants={itemVariants}>
          I am always looking to improve myself both as a professional and as an individual. Researching the <b>latest technologies</b> and applying the best <b>design patterns </b>
          where applicable. Experienced with <b>Agile (Scrum/Kanban)</b>. My proficiency in Scrum and Kanban allows me to adapt to various project needs, leveraging the strengths of
          each methodology to drive efficiency, collaboration and successful project outcomes.
        </motion.p>
        <motion.p
          className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
          variants={itemVariants}>
          <b>Adaptable</b> to different technologies, teams and environments. The ability to approach problems analytically, break them down into manageable parts and find effective
          solutions. Experienced with client interaction <b>(USA, The Netherlands, Switzerland, Germany, Denmark)</b>.
        </motion.p>
        <motion.p
          className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
          variants={itemVariants}>
          Being able to work well within a team. This includes the ability to <b>collaborate</b> with others, <b>contribute</b> ideas, <b>compromise</b> when necessary and work
          towards common goals. Great communication skills, explaining complex concepts to non-technical stakeholders, but also being a good listener and collaborator within a team
          environment. Writing <b>clean, efficient code</b> helps ensure the quality and accuracy of the task.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
