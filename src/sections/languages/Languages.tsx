import { useTheme } from '@/shared/hooks/useTheme';
import { motion } from 'motion/react';
import languages from '@/data/languages.json';
import { staggerContainer, slideUp } from '@/shared/utils/animationVariants';
import { accentText, bodyText, cardSurface } from '@/shared/theme/tokens';
import SectionHeading from '@/shared/ui/SectionHeading';

const Languages = () => {
  const { darkMode } = useTheme();
  const accent = accentText(darkMode);

  return (
    <motion.section
      className={`flex justify-center animate-smoothFadeIn ${bodyText(darkMode)}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className='w-full max-w-lg sm:max-w-3xl'>
        <SectionHeading
          darkMode={darkMode}
          className='mb-8 sm:mb-12'
          animated
          variants={slideUp}
        >
          Languages
        </SectionHeading>

        <div className='grid gap-6 sm:grid-cols-3'>
          {languages.map((language) => (
            <motion.div
              key={language.name}
              className={`rounded-lg shadow-lg p-5 sm:p-6 text-center ${cardSurface(darkMode)}`}
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
