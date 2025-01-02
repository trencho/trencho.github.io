import { useState } from "react";
import { motion } from "framer-motion";
import projectJson from "../data/projects.json";
import { AiOutlineGithub } from "react-icons/ai";
import { useTheme } from "../context/ThemeProvider";

const Projects = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const { darkMode } = useTheme();

  const filteredProjects =
    selectedTechnology === "All"
      ? projectJson
      : projectJson.filter((project) => project.type === selectedTechnology);

  // Motion variants for animation effects
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Hover animation for images
  const imageHoverVariants = {
    hover: { scale: 1.1, rotate: 2, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="projects"
      className={`py-8 sm:py-12`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
        My Projects
      </h2>

      {/* Dropdown to filter projects */}
      <div className="text-center mb-6 sm:mb-8">
        <label
          htmlFor="tech-select"
          className={`mr-2 sm:mr-4 text-lg font-medium ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          Filter by technology:
        </label>
        <select
          id="tech-select"
          value={selectedTechnology}
          onChange={(e) => setSelectedTechnology(e.target.value)}
          className={`border p-2 rounded-lg focus:outline-none focus:ring-2 ${darkMode
            ? "bg-gray-700 text-white focus:ring-gray-500"
            : "focus:ring-blue-500"
            }`}
        >
          <option value="All">All Projects</option>
          <option value="Vanilla JavaScript">Vanilla JavaScript</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="NestJS">NestJS</option>
          <option value="Node.js">Node.js</option>
          <option value="Full Stack">Full Stack</option>
        </select>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } mb-10 sm:mb-12 shadow-lg`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ delay: index * 0.2 }}
            style={{
              backgroundColor: darkMode ? "#444444" : "#f7f7f7",
              borderRadius: "1rem",
              padding: "1.5rem",
            }}
          >
            <motion.div
              className="w-full md:w-1/2 p-4 flex justify-center items-center"
              whileHover="hover"
              variants={imageHoverVariants}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-lg select-none"
              />
            </motion.div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-white rounded-full px-3 py-1 text-sm font-medium select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 select-none ${darkMode
                    ? "bg-gray-600 text-white hover:bg-gray-500"
                    : "bg-black text-white hover:bg-gray-800"
                    }`}
                >
                  <span>View Project</span>
                  <AiOutlineGithub className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
