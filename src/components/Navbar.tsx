import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { scrollToElement } from '@/utils/scrollUtils';
import { FaMoon, FaSun } from 'react-icons/fa';
import { NAVIGATION_SECTIONS, formatSectionName } from '@/utils/constants';
import { iconPulse } from '@/utils/animationVariants';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`p-5 fixed w-full top-0 z-10 bg-opacity-90 shadow-md transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}
      aria-label='Main navigation'
    >
      <div className='container mx-auto flex justify-between items-center'>
        <div className='sm:hidden'>
          <button
            id='toggleButton'
            onClick={toggleMenu}
            aria-label={
              menuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
            className='relative flex flex-col items-center justify-center w-10 h-10'
          >
            <div
              className={`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              aria-hidden='true'
            />
            <div
              className={`transition-opacity duration-300 ease-in-out w-6 h-0.5 bg-current my-1 ${menuOpen ? 'opacity-0' : ''}`}
              aria-hidden='true'
            />
            <div
              className={`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              aria-hidden='true'
            />
          </button>
        </div>
        <div className='hidden sm:flex flex-1 justify-center space-x-6'>
          {NAVIGATION_SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                scrollToElement(e, section);
              }}
              className='relative text-sm sm:text-lg font-semibold hover:text-gray-400 group focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-2 py-1'
              aria-label={`Navigate to ${section} section`}
            >
              {formatSectionName(section)}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left 
                  ${darkMode ? 'bg-teal-400' : 'bg-purple-600'}`}
                aria-hidden='true'
              />
            </a>
          ))}
        </div>
        <button
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className='flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-1'
        >
          <AnimatePresence mode='wait'>
            {darkMode ? (
              <motion.div
                key='sun'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={iconPulse}
                aria-hidden='true'
              >
                <FaSun size={24} />
              </motion.div>
            ) : (
              <motion.div
                key='moon'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={iconPulse}
                aria-hidden='true'
              >
                <FaMoon size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`absolute top-16 left-0 w-full bg-opacity-90 shadow-md ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}
            id='mobile-menu'
          >
            <ul className='flex flex-col space-y-4 py-4 px-6'>
              {NAVIGATION_SECTIONS.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => {
                      scrollToElement(e, section);
                      closeMenu();
                    }}
                    className='relative text-lg font-semibold hover:text-gray-400 group focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-2 py-1 block'
                  >
                    {formatSectionName(section)}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left 
                      ${darkMode ? 'bg-teal-400' : 'bg-purple-600'}`}
                      aria-hidden='true'
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
