import { m } from 'motion/react';
import type { Experience, ExperienceProject } from '@/types/content';
import { slideUp } from '@/shared/utils/animationVariants';
import { accentText, cardSurface, techChip } from '@/shared/theme/tokens';

/** A project's build tools or version control, as labelled outline chips. */
const ToolRow = ({ label, items }: { label: string; items: string[] }) =>
  items.length > 0 ? (
    <div className='flex flex-wrap items-center gap-2'>
      <span className='opacity-90 font-medium'>{label}</span>
      {items.map((item) => (
        <span
          key={item}
          className='rounded-full border border-gray-400/50 px-2.5 py-0.5 select-none'
        >
          {item}
        </span>
      ))}
    </div>
  ) : null;

const ProjectEntry = ({ project }: { project: ExperienceProject }) => (
  <li>
    <h5 className='text-base font-semibold'>{project.name}</h5>
    <p className='text-base leading-relaxed mt-1 mb-3'>{project.description}</p>
    <div className='flex flex-wrap gap-2'>
      {project.technologies.map((tech) => (
        <span key={tech} className={`text-xs sm:text-sm ${techChip}`}>
          {tech}
        </span>
      ))}
    </div>
    <div className='mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 text-xs sm:text-sm'>
      <ToolRow label='Build' items={project.buildTools} />
      <ToolRow label='Version control' items={project.versionControl} />
    </div>
  </li>
);

/**
 * One company on the timeline. A company with several roles names itself in the
 * heading and gives each role a sub-heading; a single-role company leads with
 * the title.
 */
const JobCard = ({ job }: { job: Experience }) => {
  const multiRole = job.roles.length > 1;

  return (
    <m.li className='ms-6 sm:ms-8' variants={slideUp}>
      <span
        className='absolute -start-2.25 flex h-4 w-4 rounded-full border-2 bg-fuchsia-500 border-white dark:bg-cyan-400 dark:border-[#0d0221] dark:shadow-[0_0_10px_rgba(34,211,238,0.7)]'
        aria-hidden='true'
      />
      <div className={`rounded-lg shadow-lg p-5 sm:p-6 ${cardSurface}`}>
        <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
          <h3 className='text-lg sm:text-xl font-semibold'>
            {multiRole ? (
              job.company
            ) : (
              <>
                {job.roles[0]?.title}
                <span className={accentText}> · {job.company}</span>
              </>
            )}
          </h3>
          <span className='text-sm sm:text-base whitespace-nowrap opacity-80'>
            {job.period}
          </span>
        </div>
        <p className='text-sm sm:text-base opacity-80 mb-4'>{job.location}</p>

        <div className='space-y-6'>
          {job.roles.map((role) => (
            <div key={role.title}>
              {multiRole && (
                <h4
                  className={`text-base sm:text-lg font-semibold mb-3 ${accentText}`}
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
                  <ProjectEntry key={project.name} project={project} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </m.li>
  );
};

export default JobCard;
