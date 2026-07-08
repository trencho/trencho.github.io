import { useTheme } from '@/hooks/useTheme';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const NotFound = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-center p-6 ${
        darkMode
          ? 'bg-linear-to-br from-[#0d0221] via-[#2a0a4a] to-[#0d0221] text-white'
          : 'bg-linear-to-br from-amber-300 via-pink-400 to-purple-400 text-gray-700'
      }`}
    >
      {/* Content sits in a card over the gradient (matches Hero/About) so text
          and the SVG stay readable against the sunset/neon backdrop. */}
      <div
        className={`w-full max-w-lg p-8 sm:p-12 rounded-2xl shadow-lg flex flex-col items-center ${
          darkMode
            ? 'bg-[#1a0b2e]/70 border border-fuchsia-500/15'
            : 'bg-white bg-opacity-70'
        }`}
      >
        <motion.div
          className='w-56 sm:w-72 mb-6 flex items-center justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Simple SVG 404 illustration instead of external GIF */}
          <svg
            viewBox='0 0 200 200'
            className={`w-full h-full ${darkMode ? 'text-cyan-400' : 'text-fuchsia-600'}`}
            fill='currentColor'
          >
            <circle
              cx='100'
              cy='100'
              r='95'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              opacity='0.3'
            />
            <text
              x='100'
              y='110'
              fontSize='80'
              fontWeight='bold'
              textAnchor='middle'
              fill='currentColor'
              opacity='0.8'
            >
              404
            </text>
          </svg>
        </motion.div>

        <motion.h1
          className='text-4xl sm:text-5xl font-bold mb-4'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          404 - Page Not Found
        </motion.h1>
        <motion.p
          className={`text-lg sm:text-xl mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Oops! Looks like you&apos;re lost in the void.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to='/'>
            <button
              type='submit'
              className={`px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none cursor-pointer 
              ${darkMode ? 'bg-fuchsia-700 text-white hover:bg-fuchsia-600' : 'bg-black text-white'}`}
            >
              <span>Back to Home</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
