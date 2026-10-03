import { experience } from '@/data';
import AnimatedSection from '@/shared/ui/AnimatedSection';
import JobCard from './JobCard';

const Experience = () => (
  <AnimatedSection title='Experience' headingId='experience-heading'>
    <ol className='relative border-s-2 border-gray-400/40 ms-3 sm:ms-4 space-y-8 sm:space-y-10'>
      {experience.map((job) => (
        <JobCard key={job.company} job={job} />
      ))}
    </ol>
  </AnimatedSection>
);

export default Experience;
