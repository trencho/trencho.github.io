import { useTheme } from '@/hooks/useTheme';
import { motion } from 'motion/react';
import education from '@/data/education.json';
import publications from '@/data/publications.json';
import { staggerContainer, slideUp } from '@/utils/animationVariants';
import { cardSurface } from '@/utils/cardStyles';

const Education = () => {
  const { darkMode } = useTheme();
  const accent = darkMode ? 'text-cyan-400' : 'text-fuchsia-600';
  const card = `rounded-lg shadow-lg p-5 sm:p-6 ${cardSurface(darkMode)}`;

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
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          variants={slideUp}
        >
          Education
        </motion.h2>

        <div className='space-y-6'>
          {education.map((degree) => (
            <motion.div key={degree.degree} className={card} variants={slideUp}>
              <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
                <h3 className='text-lg sm:text-xl font-semibold'>
                  {degree.degree}
                </h3>
                <span className='text-sm sm:text-base whitespace-nowrap opacity-80'>
                  {degree.period}
                </span>
              </div>
              <p className={`text-sm sm:text-base font-medium ${accent}`}>
                {degree.institution}
              </p>
              <p className='text-base leading-relaxed mt-2'>
                <span className='opacity-80'>Thesis: </span>
                <span className='italic'>{degree.thesis}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {publications.length > 0 && (
          <motion.div className='mt-10' variants={slideUp}>
            <h3
              className={`text-xl sm:text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Publications
            </h3>
            <ul className='space-y-4'>
              {publications.map((publication) => (
                <li key={publication.title} className={card}>
                  <a
                    href={publication.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`text-base leading-relaxed font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded ${accent}`}
                  >
                    {publication.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Education;
