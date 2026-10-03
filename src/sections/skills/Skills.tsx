import { useState } from 'react';
import { m } from 'motion/react';
import { skills, SKILL_CATEGORIES } from '@/data';
import type { SkillCategory } from '@/types/content';
import {
  staggerContainerDelayed,
  slideUp,
} from '@/shared/utils/animationVariants';
import { cardSurface } from '@/shared/theme/tokens';
import SectionHeading from '@/shared/ui/SectionHeading';
import Picture from '@/shared/ui/Picture';
import SkillFilterButton from './SkillFilterButton';

type Filter = 'All' | SkillCategory;

const FILTERS: readonly Filter[] = ['All', ...SKILL_CATEGORIES];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filteredSkills =
    activeFilter === 'All'
      ? skills
      : skills.filter((skill) => skill.categories.includes(activeFilter));

  return (
    <m.div
      className='flex max-w-6xl mx-auto justify-center items-center p-4 sm:p-6 lg:p-12 skills-section'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerContainerDelayed}
    >
      <m.div
        className={`w-full max-w-lg sm:max-w-6xl p-4 sm:p-8 rounded-lg shadow-lg ${cardSurface}`}
        variants={staggerContainerDelayed}
      >
        <SectionHeading
          id='skills-heading'
          className='mb-4 sm:mb-6'
          animated
          variants={slideUp}
        >
          Skills
        </SectionHeading>
        <m.div className='glass-card p-8 sm:p-12 lg:p-16' variants={slideUp}>
          <div
            className='flex flex-wrap justify-center gap-4 mb-12'
            role='group'
            aria-label='Filter skills by category'
          >
            {FILTERS.map((category) => (
              <SkillFilterButton
                key={category}
                label={category}
                active={activeFilter === category}
                onSelect={() => setActiveFilter(category)}
              />
            ))}
          </div>

          <m.ul
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'
            aria-label={`${activeFilter} skills`}
            variants={staggerContainerDelayed}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            key={activeFilter}
          >
            {filteredSkills.map((skill) => (
              <m.li
                key={skill.title}
                className='flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group bg-gray-100 hover:bg-gray-200 dark:bg-[#241041] dark:hover:bg-[#33165c]'
                variants={slideUp}
                whileHover={{ y: -5 }}
              >
                <div className='w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-linear-to-br from-fuchsia-500/20 to-cyan-500/20 p-2 border border-fuchsia-400/30'>
                  {/* The visible name below labels the item; the logo is decoration. */}
                  <Picture
                    src={skill.imageSrc}
                    alt=''
                    className='w-full h-full object-contain'
                    width='80'
                    height='80'
                  />
                </div>
                <span className='text-sm font-medium text-center transition-colors duration-300 text-black/80 group-hover:text-black dark:text-white/80 dark:group-hover:text-white'>
                  {skill.title}
                </span>
              </m.li>
            ))}
          </m.ul>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Skills;
