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
      className={`flex justify-center items-center p-4 sm:p-8 lg:p-12 ${fadeIn ? "animate-smoothFadeIn" : ""} 
      ${darkMode ? "text-white" : "text-gray-700"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className={`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${darkMode ? "bg-[#444444]" : "bg-white bg-opacity-70"}`}
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.div
          className="text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8"
          variants={containerVariants}
        >
          <motion.p
            className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4"
            variants={itemVariants}
          >
            Experienced <b>Software Engineer</b> with proven expertise in crafting <b>scalable solutions</b> and implementing <b>robust architecture</b>. Adept at turning concepts
            into reality and contributing to successful project outcomes through meticulous planning and execution.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4"
            variants={itemVariants}
          >
            I am always looking to improve myself both as a professional and as an individual. Researching the <b>latest technologies</b> and applying the best <b>design patterns </b>
            where applicable. Experienced with <b>Agile (Scrum/Kanban)</b>. My proficiency in Scrum and Kanban allows me to adapt to various project needs, leveraging the strengths of
            each methodology to drive efficiency, collaboration and successful project outcomes.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4"
            variants={itemVariants}
          >
            <b>Adaptable</b> to different technologies, teams and environments. Strong analytical problem-solving skills, breaking down complex challenges into manageable parts and
            delivering effective solutions. Experienced with client interaction <b>(USA, The Netherlands, Switzerland, Germany, Denmark)</b>.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4"
            variants={itemVariants}
          >
            A strong team player with the ability to <b>collaborate, </b> <b>contribute</b> ideas and <b>compromise</b> when necessary to work towards common goals. Excellent
            communication skills, capable of explaining complex technical concepts to non-technical stakeholders while being a good listener and collaborator within a team
            environment. Writing <b>clean, efficient code</b> ensures high-quality and maintainable software solutions.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
