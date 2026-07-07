import { useTheme } from '@/hooks/useTheme';
import { motion } from 'motion/react';
import experience from '@/data/experience.json';
import { staggerContainer, slideUp } from '@/utils/animationVariants';

const Experience = () => {
  const { darkMode } = useTheme();
  const accent = darkMode ? 'text-teal-400' : 'text-emerald-600';

  return (
    <motion.section
      className={`flex justify-center animate-smoothFadeIn ${darkMode ? 'text-white' : 'text-gray-700'}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className='w-full max-w-lg sm:max-w-3xl'>
        <motion.h2
          className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12'
          variants={slideUp}
        >
          Experience
        </motion.h2>

        <ol className='relative border-s-2 border-gray-400/40 ms-3 sm:ms-4 space-y-8 sm:space-y-10'>
          {experience.map((job) => {
            const multiRole = job.roles.length > 1;

            return (
              <motion.li
                key={job.company}
                className='ms-6 sm:ms-8'
                variants={slideUp}
              >
                <span
                  className={`absolute -start-[9px] flex h-4 w-4 rounded-full border-2 ${
                    darkMode
                      ? 'bg-teal-400 border-gray-900'
                      : 'bg-emerald-500 border-white'
                  }`}
                  aria-hidden='true'
                />
                <div
                  className={`rounded-lg shadow-lg p-5 sm:p-6 ${darkMode ? 'bg-[#444444]' : 'bg-white bg-opacity-70'}`}
                >
                  <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
                    <h3 className='text-lg sm:text-xl font-semibold'>
                      {multiRole ? (
                        job.company
                      ) : (
                        <>
                          {job.roles[0]?.title}
                          <span className={accent}> · {job.company}</span>
                        </>
                      )}
                    </h3>
                    <span className='text-sm sm:text-base whitespace-nowrap opacity-80'>
                      {job.period}
                    </span>
                  </div>
                  <p className='text-sm sm:text-base opacity-70 mb-4'>
                    {job.location}
                  </p>

                  <div className='space-y-6'>
                    {job.roles.map((role) => (
                      <div key={role.title}>
                        {multiRole && (
                          <h4
                            className={`text-base sm:text-lg font-semibold mb-3 ${accent}`}
                          >
                            {role.title}
                          </h4>
                        )}
                        <ul
                          className={
                            multiRole
                              ? 'space-y-4 border-s-2 border-gray-400/25 ps-4 sm:ps-5'
                              : 'space-y-4'
                          }
                        >
                          {role.projects.map((project) => (
                            <li key={project.name}>
                              <h5 className='text-base font-semibold'>
                                {project.name}
                              </h5>
                              <p className='text-base leading-relaxed mt-1 mb-3'>
                                {project.description}
                              </p>
                              <div className='flex flex-wrap gap-2'>
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className='bg-gray-700 text-white rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none'
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <div className='mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 text-xs sm:text-sm'>
                                {[
                                  {
                                    label: 'Build',
                                    items: project.buildTools,
                                  },
                                  {
                                    label: 'Version control',
                                    items: project.versionControl,
                                  },
                                ].map(({ label, items }) =>
                                  items.length > 0 ? (
                                    <div
                                      key={label}
                                      className='flex flex-wrap items-center gap-2'
                                    >
                                      <span className='opacity-60 font-medium'>
                                        {label}
                                      </span>
                                      {items.map((item) => (
                                        <span
                                          key={item}
                                          className='rounded-full border border-gray-400/50 px-2.5 py-0.5 select-none'
                                        >
                                          {item}
                                        </span>
                                      ))}
                                    </div>
                                  ) : null,
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </motion.section>
  );
};

export default Experience;
