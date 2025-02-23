import { FaReact } from "react-icons/fa";
import { SiFramer, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useTheme } from "../context/ThemeProvider";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`p-4 text-center ${darkMode ? "text-white" : "text-gray-700"}`}>
      <p className="text-xs sm:text-base">
        © Aleksandar Trenchevski {new Date().getFullYear()}. All rights reserved.
      </p>

      <div className="mt-4">
        <span className="text-xs sm:text-sm">Built with:</span>

        <div className="flex justify-center items-center mt-2 space-x-2 sm:space-x-4 text-xs sm:text-sm">
          <div className="flex items-center space-x-1">
            <FaReact className="text-blue-500" />
            <span>React</span>
          </div>

          <div className="flex items-center space-x-1">
            <SiTailwindcss className="text-blue-400" />
            <span>Tailwind CSS</span>
          </div>

          <div className="flex items-center space-x-1">
            <SiFramer className="text-pink-500" />
            <span>Framer Motion</span>
          </div>

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
