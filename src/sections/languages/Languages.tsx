import { motion } from 'motion/react';
import languages from '@/data/languages.json';
import { staggerContainer, slideUp } from '@/shared/utils/animationVariants';
import { accentText, bodyText, cardSurface } from '@/shared/theme/tokens';
import SectionHeading from '@/shared/ui/SectionHeading';

const Languages = () => {

  return (
    <motion.section
      className={`flex justify-center ${bodyText}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className='w-full max-w-lg sm:max-w-3xl'>
        <SectionHeading
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
              className={`rounded-lg shadow-lg p-5 sm:p-6 text-center ${cardSurface}`}
              variants={slideUp}
            >
              <h3 className='text-lg sm:text-xl font-semibold'>
                {language.name}
              </h3>
              <p className={`text-sm sm:text-base mt-1 ${accentText}`}>
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
