import { motion } from "motion/react";
import React from "react";
import { useTheme } from "../context/ThemeProvider";

interface GridContainerProps {
  elements: { title: string; imageSrc: string; url?: string }[];
}

const GridContainer: React.FC<GridContainerProps> = ({ elements }) => {
  const { darkMode } = useTheme();

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:gap-6">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(16.6666%,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(33%,_1fr))] gap-4 sm:gap-8 justify-center">
        {elements.map((element, index) => {
          const content = (
            <motion.div
              className={`p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 justify-center
                ${darkMode ? "bg-[#444444] hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            >
              <img
                src={element.imageSrc}
                alt={element.title}
                className="mx-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-lg object-contain select-none"
              />
              <h3 className={`mt-4 text-lg sm:text-xl font-medium text-center ${darkMode ? "text-white" : "text-gray-700"}`}>
                {element.title}
              </h3>
            </motion.div>
          );

          return element.url ? (
            <a key={index} href={element.url} target="_blank" rel="noopener noreferrer" className="block">
              {content}
            </a>
          ) : (
            <React.Fragment key={index}>{content}</React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default GridContainer;
