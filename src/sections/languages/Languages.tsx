import { m } from 'motion/react';
import { languages } from '@/data';
import { slideUp } from '@/shared/utils/animationVariants';
import { accentText, cardSurface } from '@/shared/theme/tokens';
import AnimatedSection from '@/shared/ui/AnimatedSection';

const Languages = () => (
  <AnimatedSection title='Languages' headingId='languages-heading'>
    <div className='grid gap-6 sm:grid-cols-3'>
      {languages.map((language) => (
        <m.div
          key={language.name}
          className={`rounded-lg shadow-lg p-5 sm:p-6 text-center ${cardSurface}`}
          variants={slideUp}
        >
          <h3 className='text-lg sm:text-xl font-semibold'>{language.name}</h3>
          <p className={`text-sm sm:text-base mt-1 ${accentText}`}>
            {language.proficiency}
          </p>
        </m.div>
      ))}
    </div>
  </AnimatedSection>
);

export default Languages;
