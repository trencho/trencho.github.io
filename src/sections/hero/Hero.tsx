import { m } from 'motion/react';
import { scrollToElement } from '@/shared/utils/scrollUtils';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
} from '@/shared/utils/animationVariants';
import { SOCIAL_LINKS, CV_DOWNLOAD, PROFILE } from '@/shared/utils/constants';
import {
  focusRing,
  headingText,
  primaryButton,
  secondaryButton,
} from '@/shared/theme/tokens';
import Picture from '@/shared/ui/Picture';
import Typewriter from './Typewriter';
import { startsFromPrerender } from '@/shared/utils/prerendered';
import { yearsSince } from '@/shared/utils/dates';

const CAREER_START = new Date(2018, 6, 15);

const HIGHLIGHTS = [
  `${yearsSince(CAREER_START)}+ years experience`,
  'Backend & Data Engineering',
  'Java · Python · Spring · Spark',
  PROFILE.location,
];

const ctaClasses = `px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${focusRing} ${primaryButton}`;

const portraitClasses =
  'absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none';

const Hero = () => (
  <m.div
    className='min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 pt-16 lg:p-12'
    // Over prerendered HTML the Hero is already on screen, so it starts in place.
    initial={startsFromPrerender ? false : 'hidden'}
    animate='visible'
    variants={staggerContainer}
  >
    {/* Hovering the portrait cross-fades it into the logo, in CSS alone. */}
    <m.div
      className='group relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8'
      variants={fadeInUp}
    >
      <Picture
        src='/profile.jpg'
        alt={`${PROFILE.firstName} profile picture`}
        className={`${portraitClasses} opacity-100 group-hover:opacity-0`}
        width='648'
        height='648'
        loading='eager'
        decoding='auto'
        fetchPriority='high'
      />
      <Picture
        src='/logo.png'
        alt=''
        aria-hidden='true'
        className={`${portraitClasses} opacity-0 group-hover:opacity-100`}
        width='200'
        height='200'
      />
    </m.div>

    <m.div
      className='w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg flex justify-center items-center bg-white/70 text-gray-700 dark:bg-[#1a0b2e]/80 dark:text-white dark:border dark:border-fuchsia-500/20'
      variants={fadeInLeft}
    >
      <div className='text-center space-y-4 sm:space-y-6 max-w-xl leading-relaxed'>
        <h1
          id='home-heading'
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 ${headingText}`}
        >
          Hello, my name is {PROFILE.firstName} and I&apos;m a{' '}
          {/* Screen readers get the title once; the typing effect is visual only. */}
          <span className='sr-only'>{PROFILE.title}</span>
          <span
            aria-hidden='true'
            className='text-fuchsia-600 dark:text-cyan-400 dark:drop-shadow-[0_0_10px_rgba(34,211,238,0.55)]'
          >
            <Typewriter text={PROFILE.title} />
          </span>
        </h1>
        <p className='text-base sm:text-lg lg:text-xl leading-relaxed'>
          I build RESTful APIs and large-scale data pipelines across insurance,
          banking, telecom and healthcare. Currently a Data Engineer at Encora,
          designing ETL workflows on Azure Databricks and Apache Spark.
        </p>

        <m.ul
          className='flex flex-wrap justify-center gap-2'
          variants={fadeInUp}
          aria-label='Highlights'
        >
          {HIGHLIGHTS.map((highlight) => (
            <li
              key={highlight}
              className='rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-500/10 dark:text-cyan-300 dark:border dark:border-cyan-400/20'
            >
              {highlight}
            </li>
          ))}
        </m.ul>

        <m.div
          className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'
          variants={fadeInUp}
        >
          <a
            href='#contact'
            onClick={(e) => {
              scrollToElement(e, 'contact');
            }}
            className={ctaClasses}
          >
            <span>Contact me here</span>
            <FaArrowRight aria-hidden='true' />
          </a>
          <a href={CV_DOWNLOAD.filename} className={ctaClasses} download>
            <span>{CV_DOWNLOAD.label}</span>
            <FaDownload aria-hidden='true' />
          </a>
          <div className='flex space-x-4 mt-4 sm:mt-0'>
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.name === 'GitHub' ? FaGithub : FaLinkedin;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition ${focusRing} ${secondaryButton}`}
                  aria-label={link.ariaLabel}
                >
                  <Icon className='text-xl' aria-hidden='true' />
                  <span
                    aria-hidden='true'
                    className='pointer-events-none absolute bottom-full mb-2 px-2 py-1 text-xs text-white rounded whitespace-nowrap invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 bg-black dark:bg-purple-800'
                  >
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>
        </m.div>
      </div>
    </m.div>
  </m.div>
);

export default Hero;
