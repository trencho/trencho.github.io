import { motion } from 'motion/react';
import { staggerContainer, slideUp } from '@/shared/utils/animationVariants';
import { bodyText, cardSurface } from '@/shared/theme/tokens';
import { SUMMARY_PARAGRAPHS } from '@/shared/content/summary';

const About = () => {
  return (
    <motion.section
      className={`flex justify-center items-center p-4 sm:p-8 lg:p-12 ${bodyText}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div
        className={`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${cardSurface}`}
        variants={staggerContainer}
      >
        <motion.h2
          className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6'
          variants={slideUp}
        >
          About Me
        </motion.h2>

        <motion.div
          className='text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8'
          variants={staggerContainer}
        >
          {/* The words live in shared/content/summary so the /cv route renders the
              same three paragraphs. Two hand-maintained descriptions of one career
              is the thing that route exists to remove; this is the other half of it. */}
          {SUMMARY_PARAGRAPHS.map((paragraph) => (
            <motion.p
              key={paragraph.id}
              className='text-base sm:text-lg lg:text-xl leading-relaxed mb-4'
              variants={slideUp}
            >
              {paragraph.body}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
