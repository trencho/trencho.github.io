import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { motion, useReducedMotion } from 'motion/react';
import { scrollToElement } from '@/utils/scrollUtils';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
} from '@/utils/animationVariants';
import { SOCIAL_LINKS, CV_DOWNLOAD } from '@/utils/constants';

const Hero = () => {
  const fullText = 'Software Engineer';
  const prefersReducedMotion = useReducedMotion();
  const [text, setText] = useState('');
  const dateOfCareerStart = new Date('2018-07-15');
  const yearsOfExperience =
    new Date().getFullYear() - dateOfCareerStart.getFullYear();

  const { darkMode } = useTheme();

  const highlights = [
    `${yearsOfExperience}+ years experience`,
    'Backend & Data Engineering',
    'Java · Python · Spring · Spark',
    'Skopje, North Macedonia',
  ];

  useEffect(() => {
    if (prefersReducedMotion) return;

    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeText, 100);
      }
    };
    typeText();
    return () => clearTimeout(timeoutId);
  }, [prefersReducedMotion]);

  return (
    <motion.section
      className='min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 pt-16 lg:p-12 animate-smoothFadeIn'
      initial='hidden'
      animate='visible'
      variants={staggerContainer}
    >
      <motion.div
        className='relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8'
        variants={fadeInUp}
      >
        <picture>
          <source srcSet='/profile.webp' type='image/webp' />
          <img
            src='/profile.jpg' // JPG fallback for browsers without WebP support
            alt='Aleksandar profile picture'
            className='absolute top-0 left-0 w-full h-full object-cover rounded-full select-none'
            width='648'
            height='648'
            loading='eager'
            fetchPriority='high'
          />
        </picture>
      </motion.div>

      <motion.div
        className={`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg flex justify-center items-center ${darkMode ? 'bg-[#444444] text-white' : 'bg-white bg-opacity-70 text-gray-700'}`}
        variants={fadeInLeft}
      >
        <div className='text-center space-y-4 sm:space-y-6 max-w-xl leading-relaxed'>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Hello, my name is Aleksandar and I&apos;m a{' '}
            <span
              className={`${darkMode ? 'text-teal-400' : 'text-emerald-500'}`}
            >
              {typeof window === 'undefined' || prefersReducedMotion
                ? fullText
                : text}
            </span>{' '}
          </h1>
          <p className='text-base sm:text-lg lg:text-xl leading-relaxed'>
            I build RESTful APIs and large-scale data pipelines across
            insurance, banking, telecom and healthcare. Currently a Data
            Engineer at Encora, designing ETL workflows on Azure Databricks and
            Apache Spark.
          </p>

          <motion.ul
            className='flex flex-wrap justify-center gap-2'
            variants={fadeInUp}
            aria-label='Highlights'
          >
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className={`rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none ${
                  darkMode
                    ? 'bg-gray-700 text-teal-200'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {highlight}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'
            variants={fadeInUp}
          >
            <a
              href='#contact'
              onClick={(e) => {
                scrollToElement(e, 'contact');
              }}
              className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${
                darkMode
                  ? 'bg-gray-600 text-white hover:bg-gray-500'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              <span>Contact me here</span>
              <FaArrowRight aria-hidden='true' />
            </a>
            <a
              href={CV_DOWNLOAD.filename}
              className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${
                darkMode
                  ? 'bg-gray-600 text-white hover:bg-gray-500'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
              download
            >
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
                    className={`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white transition
                    ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-black hover:bg-gray-800'}`}
                    aria-label={link.ariaLabel}
                  >
                    <Icon className='text-xl' aria-hidden='true' />

                    <span
                      className={`absolute bottom-full mb-2 hidden w-auto px-2 py-1 text-xs text-white rounded opacity-0 group-hover:block group-hover:opacity-100 transition-opacity
                      ${darkMode ? 'bg-gray-600' : 'bg-black'}`}
                    >
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
