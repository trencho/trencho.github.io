import { useTheme } from '@/hooks/useTheme';
import { motion } from 'motion/react';
import React from 'react';
import certificates from '@/data/certificates.json';
import { slideUp } from '@/utils/animationVariants';

const Certificates = () => {
  const { darkMode } = useTheme();

  return (
    <section className='p-4 sm:p-6 lg:p-8'>
      <h2 className='p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>
        Certificates
      </h2>

      <div className='max-w-6xl mx-auto flex justify-center gap-6 sm:gap-8 text-center'>
        {certificates.map((certificate, index) => {
          const content = (
            <motion.div
              className={`w-48 sm:w-56 lg:w-72 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${
                darkMode
                  ? 'bg-[#444444] hover:bg-gray-600'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              variants={slideUp}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            >
              <picture>
                <source
                  srcSet={certificate.imageSrc.replace(/\.png$/, '.webp')}
                  type='image/webp'
                />
                <img
                  src={certificate.imageSrc}
                  alt={certificate.title}
                  width='128'
                  height='128'
                  loading='lazy'
                  decoding='async'
                  className='mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain select-none'
                />
              </picture>
              <h3
                className={`mt-4 text-lg sm:text-xl font-medium text-center line-clamp-2 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}
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
                  target='_blank'
                  rel='noopener noreferrer'
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
