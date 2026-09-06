import { Link } from 'react-router';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import experienceJson from '@/data/experience.json';
import educationJson from '@/data/education.json';
import skillsJson from '@/data/skills.json';
import certificatesJson from '@/data/certificates.json';
import publicationsJson from '@/data/publications.json';
import languagesJson from '@/data/languages.json';
import type {
  Certificate,
  Education,
  Experience,
  Language,
  Publication,
  Skill,
  SkillCategory,
} from '@/types/content';
import { SUMMARY_PARAGRAPHS } from '@/shared/content/summary';
import { CV_DOWNLOAD, PROFILE, SOCIAL_LINKS } from '@/shared/utils/constants';
import { config } from '@/config/environment';

/**
 * The CV, rendered from the same `src/data/*.json` the portfolio sections read.
 *
 * The point is that there is nothing to keep in step: add a role to
 * experience.json and it appears here, in the Experience section, and nowhere
 * else needs touching. The committed PDF is still linked, but it is the copy that
 * can drift, not this one.
 *
 * Two constraints shape the markup. It is prerendered (dist/cv/index.html), so no
 * browser API may be read during render. And it is meant to be printed - the
 * `@media print` block in index.css drops the chrome, forces a light palette and
 * keeps each entry off a page break - so the structure is plain semantic sections
 * rather than anything that depends on animation or viewport.
 */

const experience = experienceJson as Experience[];
const education = educationJson as Education[];
const skills = skillsJson as Skill[];
const certificates = certificatesJson as Certificate[];
const publications = publicationsJson as Publication[];
const languages = languagesJson as Language[];

/** Category order follows the Skills filter row, so both read the same way. */
const SKILL_CATEGORIES: SkillCategory[] = [
  'Backend',
  'Frontend',
  'Databases',
  'Data Engineering',
  'Data Science',
  'AI',
  'DevOps',
  'Tools',
];

const CvSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className='cv-section mb-8'>
    <h2 className='text-xl font-bold border-b border-gray-300 pb-1 mb-4 dark:border-gray-600'>
      {title}
    </h2>
    {children}
  </section>
);

const Cv = () => (
  <div className='cv-page min-h-screen bg-white text-gray-900 dark:bg-[#0d0221] dark:text-white'>
    <div className='mx-auto max-w-3xl px-6 py-10 print:max-w-none print:px-0 print:py-0'>
      <nav className='cv-chrome mb-8 flex flex-wrap items-center justify-between gap-3'>
        <Link
          to='/'
          className='inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded'
        >
          <FaArrowLeft aria-hidden='true' />
          <span>Back to portfolio</span>
        </Link>
        <a
          href={CV_DOWNLOAD.filename}
          download
          className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600'
        >
          <FaDownload aria-hidden='true' />
          <span>Download PDF</span>
        </a>
      </nav>

      <header className='mb-8'>
        <h1 className='text-3xl font-bold'>{PROFILE.name}</h1>
        <p className='text-lg text-fuchsia-600 dark:text-cyan-400'>
          {PROFILE.title}
        </p>
        <ul className='mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm'>
          <li>{PROFILE.location}</li>
          {config.contact.email && (
            <li>
              <a
                className='underline underline-offset-2'
                href={`mailto:${config.contact.email}`}
              >
                {config.contact.email}
              </a>
            </li>
          )}
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                className='underline underline-offset-2'
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <CvSection title='Summary'>
        {SUMMARY_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph.id} className='mb-3 leading-relaxed'>
            {paragraph.body}
          </p>
        ))}
      </CvSection>

      <CvSection title='Experience'>
        {experience.map((job) => (
          <article key={job.company} className='cv-entry mb-6'>
            <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
              <h3 className='text-lg font-semibold'>{job.company}</h3>
              <span className='text-sm whitespace-nowrap opacity-80'>
                {job.period} · {job.location}
              </span>
            </div>
            {job.roles.map((role) => (
              <div key={role.title} className='mt-3'>
                <h4 className='font-semibold text-fuchsia-600 dark:text-cyan-400'>
                  {role.title}
                </h4>
                <ul className='mt-2 space-y-3'>
                  {role.projects.map((project) => (
                    <li key={project.name}>
                      <p className='font-medium'>{project.name}</p>
                      <p className='leading-relaxed'>{project.description}</p>
                      <p className='text-sm opacity-80'>
                        {project.technologies.join(' · ')}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </CvSection>

      <CvSection title='Education'>
        {education.map((degree) => (
          <article key={degree.degree} className='cv-entry mb-4'>
            <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
              <h3 className='font-semibold'>{degree.degree}</h3>
              <span className='text-sm whitespace-nowrap opacity-80'>
                {degree.period}
              </span>
            </div>
            <p className='text-sm'>{degree.institution}</p>
            <p className='text-sm opacity-80'>Thesis: {degree.thesis}</p>
          </article>
        ))}
      </CvSection>

      <CvSection title='Skills'>
        <dl className='space-y-2'>
          {SKILL_CATEGORIES.map((category) => {
            const inCategory = skills.filter((skill) =>
              skill.categories.includes(category),
            );
            if (inCategory.length === 0) return null;
            return (
              <div key={category} className='cv-entry sm:flex sm:gap-3'>
                <dt className='font-semibold sm:w-44 sm:shrink-0'>
                  {category}
                </dt>
                <dd>{inCategory.map((skill) => skill.title).join(' · ')}</dd>
              </div>
            );
          })}
        </dl>
      </CvSection>

      <CvSection title='Certificates'>
        <ul className='space-y-1'>
          {certificates.map((certificate) => (
            <li key={certificate.title} className='cv-entry'>
              <a
                className='underline underline-offset-2'
                href={certificate.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {certificate.title}
              </a>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title='Publications'>
        <ul className='space-y-1'>
          {publications.map((publication) => (
            <li key={publication.title} className='cv-entry'>
              <a
                className='underline underline-offset-2'
                href={publication.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {publication.title}
              </a>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title='Languages'>
        <ul className='space-y-1'>
          {languages.map((language) => (
            <li key={language.name} className='cv-entry'>
              <span className='font-semibold'>{language.name}</span> —{' '}
              {language.proficiency}
            </li>
          ))}
        </ul>
      </CvSection>
    </div>
  </div>
);

export default Cv;
