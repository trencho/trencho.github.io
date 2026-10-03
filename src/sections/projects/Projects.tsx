import { m } from 'motion/react';
import { projects } from '@/data';
import { popIn } from '@/shared/utils/animationVariants';
import { cardSurface, techChip } from '@/shared/theme/tokens';
import SectionHeading from '@/shared/ui/SectionHeading';
import Picture from '@/shared/ui/Picture';
import ProjectLink from './ProjectLink';

const Projects = () => (
  <div className='py-8 sm:py-12'>
    <SectionHeading id='projects-heading' className='mb-8 sm:mb-12'>
      My Projects
    </SectionHeading>

    <div className='max-w-6xl mx-auto px-4 sm:px-6 md:px-8'>
      {projects.map((project, index) => (
        <m.div
          key={project.title}
          className={`flex flex-col md:flex-row mb-10 sm:mb-12 shadow-lg rounded-lg p-6 ${cardSurface} ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={popIn}
          transition={{ delay: index * 0.2 }}
        >
          <m.div
            className='w-full md:w-1/2 p-4 flex justify-center items-center'
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Picture
              src={project.imageSrc}
              alt={project.title}
              width='240'
              height='240'
              className='w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-2xl select-none'
            />
          </m.div>
          <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
              {project.title}
            </h3>
            <p className='mb-4'>{project.description}</p>
            <ul
              className='flex flex-wrap gap-2 mb-4'
              aria-label={`${project.title} technologies`}
            >
              {project.technologies.map((tech) => (
                <li key={tech} className={`text-sm ${techChip}`}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className='flex flex-wrap gap-4'>
              {project.links.map((projectLink) => (
                <ProjectLink
                  key={projectLink.url}
                  label={projectLink.label}
                  url={projectLink.url}
                  projectTitle={project.title}
                />
              ))}
            </div>
          </div>
        </m.div>
      ))}
    </div>
  </div>
);

export default Projects;
