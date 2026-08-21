import { useTheme } from '@/shared/hooks/useTheme';
import projectJson from '@/data/projects.json';
import { motion } from 'motion/react';
import { popIn } from '@/shared/utils/animationVariants';
import { cardSurface } from '@/shared/theme/tokens';
import SectionHeading from '@/shared/ui/SectionHeading';
import ProjectLink from './ProjectLink';

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section className='py-8 sm:py-12'>
      <SectionHeading darkMode={darkMode} className='mb-8 sm:mb-12'>
        My Projects
      </SectionHeading>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 md:px-8'>
        {projectJson.map((project, index) => (
          <motion.div
            key={project.title}
            className={`flex flex-col md:flex-row mb-10 sm:mb-12 shadow-lg rounded-lg p-6 ${cardSurface(darkMode)} ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
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
                  <ProjectLink
                    key={projectLink.url}
                    label={projectLink.label}
                    url={projectLink.url}
                    projectTitle={project.title}
                    darkMode={darkMode}
                  />
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
