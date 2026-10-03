import { m } from 'motion/react';
import { education, publications } from '@/data';
import { slideUp } from '@/shared/utils/animationVariants';
import {
  accentText,
  cardSurface,
  focusRing,
  headingText,
} from '@/shared/theme/tokens';
import AnimatedSection from '@/shared/ui/AnimatedSection';

const Education = () => {
  const card = `rounded-lg shadow-lg p-5 sm:p-6 ${cardSurface}`;

  return (
    <AnimatedSection title='Education' headingId='education-heading'>
      <div className='space-y-6'>
        {education.map((degree) => (
          <m.div key={degree.degree} className={card} variants={slideUp}>
            <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
              <h3 className='text-lg sm:text-xl font-semibold'>
                {degree.degree}
              </h3>
              <span className='text-sm sm:text-base whitespace-nowrap opacity-80'>
                {degree.period}
              </span>
            </div>
            <p className={`text-sm sm:text-base font-medium ${accentText}`}>
              {degree.institution}
            </p>
            <p className='text-base leading-relaxed mt-2'>
              <span className='opacity-80'>Thesis: </span>
              <span className='italic'>{degree.thesis}</span>
            </p>
          </m.div>
        ))}
      </div>

      {publications.length > 0 && (
        <m.div className='mt-10' variants={slideUp}>
          <h3
            className={`text-xl sm:text-2xl font-bold text-center mb-6 ${headingText}`}
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
                  className={`text-base leading-relaxed font-medium hover:underline rounded ${focusRing} ${accentText}`}
                >
                  {publication.title}
                </a>
              </li>
            ))}
          </ul>
        </m.div>
      )}
    </AnimatedSection>
  );
};

export default Education;
