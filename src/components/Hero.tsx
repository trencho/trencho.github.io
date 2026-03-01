import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'motion/react';
import { scrollToElement } from '@/utils/scrollUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
} from '@/utils/animationVariants';
import { SOCIAL_LINKS, CV_DOWNLOAD } from '@/utils/constants';

const Hero = () => {
  const [text, setText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const fullText = 'Software Engineer';
  const dateOfCareerStart = new Date('2018-07-15');

  const { darkMode } = useTheme();

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };
    typeText();
  }, []);

  return (
    <motion.section
      id='hero'
      className='min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 pt-16 lg:p-12 animate-smoothFadeIn'
      initial='hidden'
      animate='visible'
      variants={staggerContainer}
    >
      <motion.div
        className='relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8'
        variants={fadeInUp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <picture>
          <source srcSet='/profile.webp' type='image/webp' />
          <img
            src='/profile.png' // PNG fallback (prepare this file)
            alt='Aleksandar profile picture'
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            width='400'
            height='400'
            loading='eager'
            fetchPriority='high'
          />
        </picture>

        <picture>
          <source srcSet='/logo.webp' type='image/webp' />
          <img
            src='/logo.png'
            alt='Logo'
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            width='200'
            height='200'
            loading='lazy'
            decoding='async'
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
              {text}
            </span>{' '}
          </h1>
          <p className='text-base sm:text-lg lg:text-xl leading-relaxed mb-4'>
            Hardworking and detail-oriented software engineer with{' '}
            {new Date().getFullYear() - dateOfCareerStart.getFullYear()} years
            of experience in designing and implementing RESTful APIs,
            integrating third-party services and ensuring adherence to coding
            standards. Strong knowledge of data engineering, including data
            pipeline design, ETL processes and working with databases for
            scalable data solutions.
          </p>
          <p className='text-base sm:text-lg lg:text-xl leading-relaxed mb-4'>
            Proficient in containerization technologies, CI/CD pipelines,
            version control systems and data engineering workflows. Experienced
            in working with relational and NoSQL databases, optimizing queries
            and handling large-scale data processing.
          </p>

          <p className='text-base sm:text-lg lg:text-xl leading-relaxed mb-4'>
            Possesses a strong background in software development, with a
            Master&apos;s degree in Electrical Engineering Technology.
          </p>

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
              <FontAwesomeIcon icon={faArrowRight} />
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
              <FontAwesomeIcon icon={faDownload} />
            </a>
            <div className='flex space-x-4 mt-4 sm:mt-0'>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white transition 
                    ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-black hover:bg-gray-800'}`}
                  aria-label={link.ariaLabel}
                >
                  <FontAwesomeIcon
                    icon={link.name === 'GitHub' ? faGithub : faLinkedin}
                    size='lg'
                  />

                  <span
                    className={`absolute bottom-full mb-2 hidden w-auto px-2 py-1 text-xs text-white rounded opacity-0 group-hover:block group-hover:opacity-100 transition-opacity 
                    ${darkMode ? 'bg-gray-600' : 'bg-black'}`}
                  >
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
