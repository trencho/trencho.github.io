import { useTheme } from '@/hooks/useTheme';
import { motion } from 'motion/react';
import languages from '@/data/languages.json';
import { staggerContainer, slideUp } from '@/utils/animationVariants';

const Languages = () => {
  const { darkMode } = useTheme();
  const accent = darkMode ? 'text-teal-400' : 'text-emerald-600';

  return (
    <motion.section
      className={`flex justify-center animate-smoothFadeIn ${darkMode ? 'text-white' : 'text-gray-700'}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className='w-full max-w-lg sm:max-w-3xl'>
        <motion.h2
          className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12'
          variants={slideUp}
        >
          Languages
        </motion.h2>

        <div className='grid gap-6 sm:grid-cols-3'>
          {languages.map((language) => (
            <motion.div
              key={language.name}
              className={`rounded-lg shadow-lg p-5 sm:p-6 text-center ${darkMode ? 'bg-[#444444]' : 'bg-white bg-opacity-70'}`}
              variants={slideUp}
            >
              <h3 className='text-lg sm:text-xl font-semibold'>
                {language.name}
              </h3>
              <p className={`text-sm sm:text-base mt-1 ${accent}`}>
                {language.proficiency}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Languages;
