import type { ReactNode } from 'react';
import { m } from 'motion/react';
import { staggerContainer, slideUp } from '@/shared/utils/animationVariants';
import { bodyText } from '@/shared/theme/tokens';
import SectionHeading from './SectionHeading';

interface AnimatedSectionProps {
  title: string;
  /** The `<h2>` id, so the page's `<section>` landmark can name itself after it. */
  headingId: string;
  children: ReactNode;
}

/** The narrow single-column shell Experience, Education and Languages share. */
const AnimatedSection = ({
  title,
  headingId,
  children,
}: AnimatedSectionProps) => (
  <m.div
    className={`flex justify-center ${bodyText}`}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    variants={staggerContainer}
  >
    <div className='w-full max-w-lg sm:max-w-3xl'>
      <SectionHeading
        id={headingId}
        className='mb-8 sm:mb-12'
        animated
        variants={slideUp}
      >
        {title}
      </SectionHeading>
      {children}
    </div>
  </m.div>
);

export default AnimatedSection;
