import { useState, useMemo } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'motion/react';
import skillsJson from '@/data/skills.json';
import { staggerContainerDelayed, slideUp } from '@/utils/animationVariants';

// Unified type for categories (always array internally for consistency)
type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Tools'
  | 'DevOps'
  | 'Data Science'
  | 'Data Engineering';

interface Skill {
  title: string;
  imageSrc: string;
  categories: SkillCategory[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  'Frontend',
  'Backend',
  'Databases',
  'Tools',
  'DevOps',
  'Data Science',
  'Data Engineering',
];

const skills = skillsJson as Skill[];

const Skills = () => {
  const { darkMode } = useTheme();

  const [activeFilter, setActiveFilter] = useState<'All' | SkillCategory>(
    'All',
  );

  // Memoize filtered skills to avoid unnecessary recalculations
  const filteredSkills = useMemo(() => {
    if (activeFilter === 'All') {
      return skills;
    }

    return skills.filter((skill) => skill.categories.includes(activeFilter));
  }, [activeFilter]);

  const handleFilter = (filter: string) => {
    if (filter === 'All') {
      setActiveFilter('All');
    } else {
      setActiveFilter(filter as SkillCategory);
    }
  };

  return (
    <motion.section
      className={`flex max-w-6xl mx-auto justify-center items-center p-4 sm:p-6 lg:p-12 skills-section ${darkMode ? 'dark-mode' : 'light-mode'}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerContainerDelayed}
    >
      <motion.div
        className={`w-full max-w-lg sm:max-w-6xl p-4 sm:p-8 rounded-lg shadow-lg ${darkMode ? 'bg-[#1a0b2e]/70' : 'bg-white bg-opacity-70'}`}
        variants={staggerContainerDelayed}
      >
        <motion.h2
          className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6'
          variants={slideUp}
        >
          Skills
        </motion.h2>
        <motion.div
          className='glass-card p-8 sm:p-12 lg:p-16'
          variants={slideUp}
        >
          <div
            className='flex flex-wrap justify-center gap-4 mb-12'
            role='tablist'
            aria-label='Filter skills by category'
          >
            <button
              onClick={() => handleFilter('All')}
              role='tab'
              aria-selected={activeFilter === 'All'}
              aria-controls={`skills-All`}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                activeFilter === 'All'
                  ? darkMode
                    ? 'bg-cyan-500/30 text-white border-cyan-400/50 focus:ring-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg'
                  : darkMode
                    ? 'bg-cyan-500/15 text-white hover:bg-cyan-500/25 border-cyan-400/30 hover:scale-105'
                    : 'bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105'
              }`}
            >
              All
            </button>
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                role='tab'
                aria-selected={activeFilter === category}
                aria-controls={`skills-${category}`}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                  activeFilter === category
                    ? darkMode
                      ? 'bg-cyan-500/30 text-white border-cyan-400/50 focus:ring-cyan-400 shadow-lg shadow-cyan-500/20'
                      : 'bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg'
                    : darkMode
                      ? 'bg-cyan-500/15 text-white hover:bg-cyan-500/25 border-cyan-400/30 hover:scale-105'
                      : 'bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'
            role='tabpanel'
            id={`skills-${activeFilter}`}
            aria-label={`${activeFilter} skills`}
            variants={staggerContainerDelayed}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            key={activeFilter}
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.title}
                className={`flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group ${darkMode ? 'bg-[#241041] hover:bg-[#33165c]' : 'bg-gray-100 hover:bg-gray-200'}`}
                variants={slideUp}
                whileHover={{ y: -5 }}
                role='img'
                aria-label={`${skill.title} skill`}
              >
                <div className='w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-linear-to-br from-fuchsia-500/20 to-cyan-500/20 p-2 border border-fuchsia-400/30'>
                  <picture>
                    <source
                      srcSet={skill.imageSrc.replace(/\.png$/, '.webp')}
                      type='image/webp'
                    />
                    <img
                      src={skill.imageSrc}
                      alt={`${skill.title} logo`}
                      className='w-full h-full object-contain'
                      width='80'
                      height='80'
                      loading='lazy'
                      decoding='async'
                    />
                  </picture>
                </div>
                <span
                  className={`text-sm font-medium text-center transition-colors duration-300 ${darkMode ? 'text-white/80 group-hover:text-white' : 'text-black/80 group-hover:text-black'}`}
                >
                  {skill.title}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {filteredSkills.length === 0 && (
            <motion.div className='text-center py-16' variants={slideUp}>
              <p
                className={`text-lg ${darkMode ? 'text-white/80' : 'text-gray-700'}`}
              >
                No skills found for the selected category.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
