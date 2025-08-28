import { motion } from 'motion/react';
import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const certificates = [
  {
    title: 'Databricks Certified Data Engineer Associate',
    imageSrc: 'image-skills/certificates/databricks-data-engineer-associate.png',
    url: 'https://credentials.databricks.com/ecb77163-c63a-45f7-a02f-7747fe0ad658#acc.vuI371hQ',
  },
];

const Certificates = () => {
  const { darkMode } = useTheme();

  return (
    <section id="skills" className="p-4 sm:p-6 lg:p-8">
      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Certificates</h2>

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        style={{
          gridTemplateColumns: `repeat(${certificates.length % 4}, minmax(0, 1fr))`,
        }}
      >
        {certificates.map((certificate, index) => {
          const content = (
            <motion.div
              className={`p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${
                darkMode ? 'bg-[#444444] hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            >
              <img
                src={certificate.imageSrc}
                alt={certificate.title}
                className="mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain select-none"
              />
              <h3
                className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? 'text-white' : 'text-black'}`}
              >
                {certificate.title}
              </h3>
            </motion.div>
          );

          return (
            <React.Fragment key={certificate.title}>
              {certificate.url ? (
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={certificate.title}
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
