import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeProvider";
import { scrollToElement } from "../utils/scrollUtils";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

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
        <div className="sm:hidden">
          <button
            id="toggleButton"
            onClick={toggleMenu}
            className="relative flex flex-col items-center justify-center w-10 h-10"
          >
            <div className={`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`transition-opacity duration-300 ease-in-out w-6 h-0.5 bg-current my-1 ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
        <div className="hidden sm:flex flex-1 justify-center space-x-6">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <a
              href={`#${section}`}
              onClick={(e) => {
                scrollToElement(e, section);
              }}
              className="relative text-sm sm:text-lg font-semibold hover:text-gray-400 group"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left 
                  ${darkMode ? "bg-teal-400" : "bg-purple-600"}`} />
            </a>
          ))}
        </div>
        <div
          onClick={toggleDarkMode}
          className="cursor-pointer flex items-center justify-center"
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
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`absolute top-16 left-0 w-full bg-opacity-90 shadow-md ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}
        >
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    scrollToElement(e, section);
                    closeMenu();
                  }}
                  className="relative text-lg font-semibold hover:text-gray-400 group"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left 
                      ${darkMode ? "bg-teal-400" : "bg-purple-600"}`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
