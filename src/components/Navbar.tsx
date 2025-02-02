import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeProvider";
import { scrollToElement } from "../utils/scrollUtils";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const iconVariants = {
    initial: { scale: 1, rotate: 0, opacity: 1 },
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotate: 180,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <nav
      className={`p-5 fixed w-full top-0 z-10 bg-opacity-90 shadow-md transition-colors duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="grow"></div>

        <div className="flex space-x-4 sm:space-x-8 justify-center">
          <a
            href="#home"
            onClick={(e) => {
              scrollToElement(e, "home");
            }}
            className="relative text-sm sm:text-lg font-semibold hover:text-gray-400 cursor-pointer group"
          >
            Home
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left ${darkMode ? "bg-teal-400" : "bg-green-700"
                }`}
            ></span>
          </a>

          <a
            href="#about"
            onClick={(e) => {
              scrollToElement(e, "about");
            }}
            className="relative text-sm sm:text-lg font-semibold hover:text-gray-400 cursor-pointer group"
          >
            About
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left ${darkMode ? "bg-teal-400" : "bg-green-700"
                }`}
            ></span>
          </a>

          <a
            href="#skills"
            onClick={(e) => {
              scrollToElement(e, "skills");
            }}
            className="relative text-sm sm:text-lg font-semibold hover:text-gray-400 cursor-pointer group"
          >
            Skills
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left ${darkMode ? "bg-teal-400" : "bg-green-700"
                }`}
            ></span>
          </a>

          <a
            href="#projects"
            onClick={(e) => {
              scrollToElement(e, "projects");
            }}
            className="relative text-sm sm:text-lg font-semibold hover:text-gray-400 cursor-pointer group"
          >
            Projects
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left ${darkMode ? "bg-teal-400" : "bg-green-700"
                }`}
            ></span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              scrollToElement(e, "contact");
            }}
            className="relative text-sm sm:text-lg font-semibold hover:text-gray-400 cursor-pointer group"
          >
            Contact
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left ${darkMode ? "bg-teal-400" : "bg-green-700"
                }`}
            ></span>
          </a>
        </div>

        <div
          onClick={toggleDarkMode}
          className="cursor-pointer grow flex justify-end"
        >
          <AnimatePresence mode="wait">
            {darkMode ? (
              <motion.div
                key="sun"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={iconVariants}
              >
                <FaSun size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={iconVariants}
              >
                <FaMoon size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
