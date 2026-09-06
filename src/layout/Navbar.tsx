import { useTheme } from '@/shared/hooks/useTheme';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router';
import { scrollToElement } from '@/shared/utils/scrollUtils';
import { FaFileAlt, FaMoon, FaSun } from 'react-icons/fa';
import {
  NAVIGATION_SECTIONS,
  formatSectionName,
  CV_ROUTE,
} from '@/shared/utils/constants';
import { iconPulse } from '@/shared/utils/animationVariants';
import { useActiveSection } from '@/shared/hooks/useActiveSection';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAVIGATION_SECTIONS);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <nav
      className={`p-5 fixed w-full top-0 z-10 backdrop-blur-md shadow-md transition-colors duration-300 bg-white/90 text-gray-900 dark:bg-[#0d0221]/90 dark:text-white`}
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
            className='relative flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2'
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
        <div className='hidden sm:flex flex-1 justify-center space-x-4 lg:space-x-6'>
          {NAVIGATION_SECTIONS.map((section) => {
            const isActive = activeSection === section;
            return (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  scrollToElement(e, section);
                }}
                className={`relative text-sm sm:text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 transition-colors ${
                  isActive
                    ? 'text-fuchsia-700 dark:text-cyan-400'
                    : 'hover:text-gray-600 dark:hover:text-gray-400'
                }`}
                aria-label={`Navigate to ${section} section`}
                aria-current={isActive ? 'true' : undefined}
              >
                {formatSectionName(section)}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  } bg-fuchsia-600 dark:bg-cyan-400`}
                  aria-hidden='true'
                />
              </a>
            );
          })}
        </div>
        <div className='flex items-center gap-3'>
          {/* The route, not the PDF. /cv is generated from the same data the
              sections render, so it cannot fall out of step with them; the PDF is
              still one click away on that page and on the Hero button. */}
          <Link
            to={CV_ROUTE}
            className='hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-[0_0_16px_rgba(217,70,239,0.35)]'
            aria-label='View CV'
          >
            <FaFileAlt aria-hidden='true' />
            <span>CV</span>
          </Link>
          <button
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
            className='flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded p-1'
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
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`absolute top-16 left-0 w-full backdrop-blur-md shadow-md bg-white/90 text-gray-900 dark:bg-[#0d0221]/90 dark:text-white`}
            id='mobile-menu'
          >
            <ul className='flex flex-col space-y-4 py-4 px-6'>
              {NAVIGATION_SECTIONS.map((section) => {
                const isActive = activeSection === section;
                return (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      onClick={(e) => {
                        scrollToElement(e, section);
                        closeMenu();
                      }}
                      className={`relative text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 block ${
                        isActive
                          ? 'text-fuchsia-700 dark:text-cyan-400'
                          : 'hover:text-gray-600 dark:hover:text-gray-400'
                      }`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {formatSectionName(section)}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        } bg-fuchsia-600 dark:bg-cyan-400`}
                        aria-hidden='true'
                      />
                    </a>
                  </li>
                );
              })}
              <li>
                <Link
                  to={CV_ROUTE}
                  onClick={closeMenu}
                  className='flex items-center gap-2 text-lg font-semibold px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded hover:text-gray-600 dark:hover:text-gray-400'
                >
                  <FaFileAlt aria-hidden='true' />
                  <span>View CV</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
