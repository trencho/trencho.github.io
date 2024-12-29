import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiTypescript } from "react-icons/si";
import { useTheme } from "../context/ThemeProvider";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`p-4 text-center ${darkMode
          ? "bg-gradient-to-r from-[#1e1e1e] via-[#333333] to-[#1e1e1e] text-white"
          : "bg-white text-gray-700"
        }`}
    >
      {/* Footer Text */}
      <p className="text-xs sm:text-base">
        © Igor Veic {new Date().getFullYear()}. All rights reserved.
      </p>

      {/* Built With Section */}
      <div className="mt-4">
        <span className="text-xs sm:text-sm">Built with:</span>

        {/* Icons and Labels next to each other with smaller font */}
        <div className="flex justify-center items-center mt-2 space-x-2 sm:space-x-4 text-xs sm:text-sm">
          {/* React Icon */}
          <div className="flex items-center space-x-1">
            <FaReact className="text-blue-500" />
            <span>React</span>
          </div>

          {/* Tailwind CSS Icon */}
          <div className="flex items-center space-x-1">
            <SiTailwindcss className="text-blue-400" />
            <span>Tailwind CSS</span>
          </div>

          {/* Framer Motion Icon */}
          <div className="flex items-center space-x-1">
            <SiFramer className="text-pink-500" />
            <span>Framer Motion</span>
          </div>

          {/* TypeScript Icon */}
          <div className="flex items-center space-x-1">
            <SiTypescript className="text-blue-600" />
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
