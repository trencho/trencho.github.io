import { useTheme } from '@/shared/hooks/useTheme';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
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
import { focusRing, navSurface, primaryButton } from '@/shared/theme/tokens';

type Section = (typeof NAVIGATION_SECTIONS)[number];

interface NavItemProps {
  section: Section;
  isActive: boolean;
  onNavigate?: () => void;
  className: string;
}

/** One section link, shared by the desktop row and the mobile menu. */
const NavItem = ({
  section,
  isActive,
  onNavigate,
  className,
}: NavItemProps) => (
  <a
    href={`#${section}`}
    onClick={(e) => {
      scrollToElement(e, section);
      onNavigate?.();
    }}
    className={`relative font-semibold group rounded px-2 py-1 transition-colors ${focusRing} ${className} ${
      isActive
        ? 'text-fuchsia-700 dark:text-cyan-400'
        : 'hover:text-gray-600 dark:hover:text-gray-400'
    }`}
    aria-current={isActive ? 'location' : undefined}
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

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAVIGATION_SECTIONS);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const wasOpen = useRef(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Opening the menu moves focus into it; closing it returns focus to the toggle.
  useEffect(() => {
    if (menuOpen) {
      menuRef.current?.querySelector<HTMLElement>('a')?.focus();
    } else if (wasOpen.current) {
      toggleRef.current?.focus();
    }
    wasOpen.current = menuOpen;
  }, [menuOpen]);

  return (
    <nav
      className={`p-5 fixed w-full top-0 z-10 backdrop-blur-md shadow-md transition-colors duration-300 ${navSurface}`}
      aria-label='Main navigation'
    >
      <div className='container mx-auto flex justify-between items-center'>
        <div className='sm:hidden'>
          <button
            ref={toggleRef}
            id='toggleButton'
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
            className={`relative flex flex-col items-center justify-center w-10 h-10 rounded ${focusRing}`}
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
          {NAVIGATION_SECTIONS.map((section) => (
            <NavItem
              key={section}
              section={section}
              isActive={activeSection === section}
              className='text-sm sm:text-lg'
            />
          ))}
        </div>
        <div className='flex items-center gap-3'>
          {/* The generated /cv route, which cannot drift from the sections. */}
          <Link
            to={CV_ROUTE}
            className={`hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition ${focusRing} ${primaryButton}`}
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
            className={`flex items-center justify-center cursor-pointer rounded p-1 ${focusRing}`}
          >
            <AnimatePresence mode='wait'>
              <m.div
                key={darkMode ? 'sun' : 'moon'}
                initial='initial'
                animate='animate'
                exit='exit'
                variants={iconPulse}
                aria-hidden='true'
              >
                {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
              </m.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`absolute top-16 left-0 w-full backdrop-blur-md shadow-md ${navSurface}`}
            id='mobile-menu'
          >
            <ul ref={menuRef} className='flex flex-col space-y-4 py-4 px-6'>
              {NAVIGATION_SECTIONS.map((section) => (
                <li key={section}>
                  <NavItem
                    section={section}
                    isActive={activeSection === section}
                    onNavigate={closeMenu}
                    className='text-lg block'
                  />
                </li>
              ))}
              <li>
                <Link
                  to={CV_ROUTE}
                  onClick={closeMenu}
                  className={`flex items-center gap-2 text-lg font-semibold px-2 py-1 rounded hover:text-gray-600 dark:hover:text-gray-400 ${focusRing}`}
                >
                  <FaFileAlt aria-hidden='true' />
                  <span>View CV</span>
                </Link>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
