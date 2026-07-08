import { useTheme } from '@/hooks/useTheme';
import projectJson from '@/data/projects.json';
import { motion } from 'motion/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { popIn } from '@/utils/animationVariants';

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section className='py-8 sm:py-12'>
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        My Projects
      </h2>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 md:px-8'>
        {projectJson.map((project, index) => (
          <motion.div
            key={project.title}
            className={`flex flex-col md:flex-row mb-10 sm:mb-12 shadow-lg rounded-lg p-6 ${
              darkMode
                ? 'bg-[#1a0b2e]/70 border border-fuchsia-500/15'
                : 'bg-gray-100'
            } ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={popIn}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              className='w-full md:w-1/2 p-4 flex justify-center items-center'
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <picture>
                <source
                  srcSet={project.imageSrc.replace(/\.png$/, '.webp')}
                  type='image/webp'
                />
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  width='240'
                  height='240'
                  loading='lazy'
                  decoding='async'
                  className='w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-2xl select-none'
                />
              </picture>
            </motion.div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
                {project.title}
              </h3>
              <p className='mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='bg-[#2a0a4a] text-fuchsia-100 rounded-full px-3 py-1 text-sm font-medium select-none'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap gap-4'>
                {project.links.map((projectLink) => (
                  <a
                    key={projectLink.url}
                    href={projectLink.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 select-none ${
                      darkMode
                        ? 'bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)]'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                    aria-label={`${project.title} – ${projectLink.label}`}
                  >
                    <span>{projectLink.label}</span>
                    <AiOutlineGithub className='text-xl' aria-hidden='true' />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
