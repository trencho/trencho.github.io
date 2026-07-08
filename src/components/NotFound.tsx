import { useTheme } from '@/hooks/useTheme';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const NotFound = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-center p-6 ${darkMode ? 'bg-[#0d0221] text-white' : 'bg-gray-100 text-gray-700'}`}
    >
      <motion.div
        className='w-64 sm:w-80 md:w-96 mb-6 flex items-center justify-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Simple SVG 404 illustration instead of external GIF */}
        <svg
          viewBox='0 0 200 200'
          className={`w-full h-full ${darkMode ? 'text-cyan-400' : 'text-fuchsia-500'}`}
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
  );
};

export default NotFound;
