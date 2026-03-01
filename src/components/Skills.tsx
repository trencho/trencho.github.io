import { useState, useMemo } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { motion } from 'motion/react';
import { staggerContainerDelayed, slideUp } from '@/utils/animationVariants';
import '@/styles/global.scss';

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
  categories: SkillCategory | SkillCategory[];
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

const normalizeCategories = (
  categories: SkillCategory | SkillCategory[],
): SkillCategory[] => {
  return Array.isArray(categories) ? categories : [categories];
};

const skills: Skill[] = [
  {
    title: 'Java',
    imageSrc: 'image-skills/backend/java.png',
    categories: 'Backend',
  },
  {
    title: 'Python',
    imageSrc: 'image-skills/backend/python.png',
    categories: 'Backend',
  },
  {
    title: 'Spring',
    imageSrc: 'image-skills/backend/spring.png',
    categories: 'Backend',
  },
  {
    title: 'FastAPI',
    imageSrc: 'image-skills/backend/fastapi.png',
    categories: 'Backend',
  },
  {
    title: 'Flask',
    imageSrc: 'image-skills/backend/flask.png',
    categories: 'Backend',
  },
  {
    title: 'JavaScript',
    imageSrc: 'image-skills/frontend/javascript.png',
    categories: 'Frontend',
  },
  {
    title: 'TypeScript',
    imageSrc: 'image-skills/frontend/typescript.png',
    categories: 'Frontend',
  },
  {
    title: 'React',
    imageSrc: 'image-skills/frontend/react.png',
    categories: 'Frontend',
  },
  {
    title: 'Vue.js',
    imageSrc: 'image-skills/frontend/vuejs.png',
    categories: 'Frontend',
  },
  {
    title: 'Microsoft SQL Server',
    imageSrc: 'image-skills/databases/microsoft-sql-server.png',
    categories: 'Databases',
  },
  {
    title: 'MongoDB',
    imageSrc: 'image-skills/databases/mongodb.png',
    categories: 'Databases',
  },
  {
    title: 'MySQL',
    imageSrc: 'image-skills/databases/mysql.png',
    categories: 'Databases',
  },
  {
    title: 'Oracle',
    imageSrc: 'image-skills/databases/oracle.png',
    categories: 'Databases',
  },
  {
    title: 'PostgreSQL',
    imageSrc: 'image-skills/databases/postgresql.png',
    categories: 'Databases',
  },
  {
    title: 'Docker',
    imageSrc: 'image-skills/devops/docker.png',
    categories: 'DevOps',
  },
  {
    title: 'Kubernetes',
    imageSrc: 'image-skills/devops/kubernetes.png',
    categories: 'DevOps',
  },
  {
    title: 'Nginx',
    imageSrc: 'image-skills/devops/nginx.png',
    categories: 'DevOps',
  },
  { title: 'Git', imageSrc: 'image-skills/tools/git.png', categories: 'Tools' },
  {
    title: 'GitHub',
    imageSrc: 'image-skills/tools/github.png',
    categories: 'Tools',
  },
  {
    title: 'GitHub Actions',
    imageSrc: 'image-skills/tools/github-actions.png',
    categories: 'Tools',
  },
  {
    title: 'Gunicorn',
    imageSrc: 'image-skills/tools/gunicorn.png',
    categories: 'Tools',
  },
  {
    title: 'Lombok',
    imageSrc: 'image-skills/tools/lombok.png',
    categories: 'Tools',
  },
  {
    title: 'Maven',
    imageSrc: 'image-skills/tools/maven.png',
    categories: 'Tools',
  },
  {
    title: 'Postman',
    imageSrc: 'image-skills/tools/postman.png',
    categories: 'Tools',
  },
  {
    title: 'Pytest',
    imageSrc: 'image-skills/tools/pytest.png',
    categories: 'Tools',
  },
  {
    title: 'Swagger',
    imageSrc: 'image-skills/tools/swagger.png',
    categories: 'Tools',
  },
  {
    title: 'Matplotlib',
    imageSrc: 'image-skills/data-science/matplotlib.png',
    categories: 'Data Science',
  },
  {
    title: 'NumPy',
    imageSrc: 'image-skills/data-science/numpy.png',
    categories: 'Data Science',
  },
  {
    title: 'Pandas',
    imageSrc: 'image-skills/data-science/pandas.png',
    categories: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Scikit-learn',
    imageSrc: 'image-skills/data-science/scikit-learn.png',
    categories: 'Data Science',
  },
  {
    title: 'Scipy',
    imageSrc: 'image-skills/data-science/scipy.png',
    categories: 'Data Science',
  },
  {
    title: 'Apache Spark',
    imageSrc: 'image-skills/data-engineering/apache-spark.png',
    categories: 'Data Engineering',
  },
  {
    title: 'Azure Blob Storage',
    imageSrc: 'image-skills/data-engineering/azure-blob-storage.png',
    categories: 'Data Engineering',
  },
  {
    title: 'Azure Data Factory',
    imageSrc: 'image-skills/data-engineering/azure-data-factory.png',
    categories: 'Data Engineering',
  },
  {
    title: 'Azure Data Lake',
    imageSrc: 'image-skills/data-engineering/azure-data-lake.png',
    categories: 'Data Engineering',
  },
  {
    title: 'Databricks',
    imageSrc: 'image-skills/data-engineering/databricks.png',
    categories: 'Data Engineering',
  },
  {
    title: 'Delta Lake',
    imageSrc: 'image-skills/data-engineering/delta-lake.png',
    categories: 'Data Engineering',
  },
];

const Skills = () => {
  const { darkMode } = useTheme();

  const [activeFilter, setActiveFilter] = useState<'All' | SkillCategory>(
    'All',
  );
  const { ref: sectionRef, isIntersecting: isInView } = useIntersectionObserver(
    {
      threshold: 0.2,
      triggerOnce: true,
    },
  );

  // Memoize filtered skills to avoid unnecessary recalculations
  const filteredSkills = useMemo(() => {
    if (activeFilter === 'All') {
      return skills;
    }

    return skills.filter((skill) => {
      const categories = normalizeCategories(skill.categories);
      return categories.includes(activeFilter);
    });
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
      ref={sectionRef}
      id='skills'
      className={`flex max-w-6xl mx-auto justify-center items-center p-4 sm:p-6 lg:p-12 skills-section ${darkMode ? 'dark-mode' : 'light-mode'}`}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainerDelayed}
    >
      <motion.div
        className={`w-full max-w-lg sm:max-w-6xl p-4 sm:p-8 rounded-lg shadow-lg ${darkMode ? 'bg-[#444444]' : 'bg-white bg-opacity-70'}`}
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
                    ? 'bg-teal-500/30 text-white border-teal-400/50 focus:ring-teal-400 shadow-lg'
                    : 'bg-emerald-500/30 text-black border-emerald-400/50 focus:ring-emerald-400 shadow-lg'
                  : darkMode
                    ? 'bg-teal-500/20 text-white hover:bg-teal-500/30 border-teal-400/30 hover:scale-105'
                    : 'bg-emerald-500/20 text-black hover:bg-emerald-500/30 border-emerald-400/30 hover:scale-105'
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
                      ? 'bg-teal-500/30 text-white border-teal-400/50 focus:ring-teal-400 shadow-lg'
                      : 'bg-emerald-500/30 text-black border-emerald-400/50 focus:ring-emerald-400 shadow-lg'
                    : darkMode
                      ? 'bg-teal-500/20 text-white hover:bg-teal-500/30 border-teal-400/30 hover:scale-105'
                      : 'bg-emerald-500/20 text-black hover:bg-emerald-500/30 border-emerald-400/30 hover:scale-105'
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
            animate={isInView ? 'visible' : 'hidden'}
            key={activeFilter}
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.title}
                className={`flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group ${darkMode ? 'darkMode bg-[#444444] hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                variants={slideUp}
                whileHover={{ y: -5 }}
                role='img'
                aria-label={`${skill.title} skill`}
              >
                <div className='w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-teal-500/20 p-2 border border-purple-400/30'>
                  <img
                    src={skill.imageSrc}
                    alt={`${skill.title} logo`}
                    className='w-full h-full object-contain'
                    loading='lazy'
                    decoding='async'
                  />
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
              <p className='text-white/60 text-lg'>
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
