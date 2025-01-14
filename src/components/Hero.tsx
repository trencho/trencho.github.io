import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeProvider";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [text, setText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const fullText = "Backend Engineer";

  const { darkMode } = useTheme();

  // Fade in effect on mount
  useEffect(() => {
    setFadeIn(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };
    typeText();
  }, []);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="hero"
      className={`min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 mt-16 ${fadeIn ? "animate-smoothFadeIn" : ""}`}
      style={{
        background: darkMode
          ? "linear-gradient(to right, #1e1e1e, #333333, #1e1e1e)"
          : "linear-gradient(to right, #8cff5d, #a6c1ee)",
        animationDelay: "0s",
      }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Profile Image with Smooth Transition on Hover */}
      <motion.div
        className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8"
        variants={fadeInUp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="Aleksandar Profile"
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none ${isHovered ? "opacity-0" : "opacity-100"}`}
        />

        {/* Conditional Logo Image based on dark mode */}
        <img
          src="/logo.png"
          alt="Aleksandar Logo"
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </motion.div>

      {/* Text Section with Typing Effect */}
      <motion.div
        className={`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg flex justify-center items-center ${darkMode ? "bg-[#444444]" : "bg-white bg-opacity-70"}`}
        variants={fadeInLeft}
      >
        <div className="text-center space-y-4 sm:space-y-6 max-w-xl leading-relaxed">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Hello, my name is Aleksandar and I'm a {" "}
            <span className="text-green-400 dark:text-teal-400">{text}</span>{" "}
          </h1>
          <p
            className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
          >
            Hardworking and detail-oriented backend engineer with 6 years of experience in designing and implementing RESTful APIs, integrating third-party services,
            and ensuring adherence to coding standards.
          </p>
          <p
            className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
          >
            Proficient in containerization technologies, CI/CD pipelines, and version control systems.
          </p>

          <p
            className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
          >
            Possesses a strong background in software development, with a Master's degree in Electrical Engineering Technology.
          </p>

          {/* Buttons and Icons */}
          <motion.div
            className="space-x-2 sm:space-x-4 flex flex-col sm:flex-row items-center justify-center"
            variants={fadeInUp}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none cursor-pointer ${darkMode
                ? "bg-gray-600 text-white hover:bg-gray-500"
                : "bg-black text-white hover:bg-gray-800"
                }`}
            >
              <span>Contact me here</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <a
              href="/CV - Aleksandar Trenchevski.pdf"
              className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 border select-none ${darkMode
                ? "bg-gray-600 text-white hover:bg-gray-500 border-gray-600"
                : "bg-white text-black hover:bg-gray-200 border-gray-300"
                }`}
              download
            >
              <span>Download CV</span>
              <FontAwesomeIcon icon={faDownload} />
            </a>
            {/* GitHub and LinkedIn Icons */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a
                href="https://github.com/trencho"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition dark:bg-gray-600 dark:hover:bg-gray-500"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className="text-gray-700 dark:text-white"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aleksandar-trenchevski-593b45168/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition dark:bg-gray-600 dark:hover:bg-gray-500"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="text-gray-700 dark:text-white"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
