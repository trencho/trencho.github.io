import { m } from 'motion/react';
import { staggerContainer, slideUp } from '@/shared/utils/animationVariants';
import { bodyText, cardSurface } from '@/shared/theme/tokens';
import { SUMMARY_PARAGRAPHS } from '@/shared/content/summary';
import SectionHeading from '@/shared/ui/SectionHeading';

const About = () => {
  return (
    <m.div
      className={`flex justify-center items-center p-4 sm:p-8 lg:p-12 ${bodyText}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <m.div
        className={`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${cardSurface}`}
        variants={staggerContainer}
      >
        <SectionHeading
          id='about-heading'
          className='mb-4 sm:mb-6'
          animated
          variants={slideUp}
        >
          About Me
        </SectionHeading>

        <m.div
          className='text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8'
          variants={staggerContainer}
        >
          {/* Shared with the /cv route, so the two cannot describe the career differently. */}
          {SUMMARY_PARAGRAPHS.map((paragraph) => (
            <m.p
              key={paragraph.id}
              className='text-base sm:text-lg lg:text-xl leading-relaxed mb-4'
              variants={slideUp}
            >
              {paragraph.body}
            </m.p>
          ))}
        </m.div>
      </m.div>
    </m.div>
  );
};

export default About;
