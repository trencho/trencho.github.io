import { m } from 'motion/react';
import { Link } from 'react-router';
import {
  accentText,
  cardSurface,
  focusRing,
  pageBackground,
  primaryButton,
} from '@/shared/theme/tokens';

const NotFound = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-center p-6 ${pageBackground}`}
    >
      <div
        className={`w-full max-w-lg p-8 sm:p-12 rounded-2xl shadow-lg flex flex-col items-center ${cardSurface}`}
      >
        <m.div
          className='w-56 sm:w-72 mb-6 flex items-center justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <svg
            viewBox='0 0 200 200'
            aria-hidden='true'
            className={`w-full h-full ${accentText}`}
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
        </m.div>

        <m.h1
          className='text-4xl sm:text-5xl font-bold mb-4'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          404 - Page Not Found
        </m.h1>
        <m.p
          className={`text-lg sm:text-xl mb-6 text-gray-600 dark:text-gray-400`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Oops! Looks like you&apos;re lost in the void.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to='/'
            className={`px-6 py-3 rounded-full font-semibold transition inline-flex items-center justify-center select-none ${focusRing} ${primaryButton}`}
          >
            Back to Home
          </Link>
        </m.div>
      </div>
    </div>
  );
};

export default NotFound;
