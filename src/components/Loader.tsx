import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isLogoCentered, setIsLogoCentered] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoCentered(false);
      setTimeout(onComplete, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLogoCentered ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 bg-black flex items-center justify-center'
    >
      <motion.img
        src='/logo.png'
        alt='Logo'
        className='w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64'
        initial={{ y: 0, scale: 1, rotate: 0 }}
        animate={{
          y: isLogoCentered ? [0, -20, 0, -20, 0] : -250,
          scale: isLogoCentered ? [1, 1.2, 1, 1.2, 1] : 0.5,
          rotate: isLogoCentered ? 0 : 720,
        }}
        transition={{
          duration: isLogoCentered ? 3 : 1,
          ease: 'easeInOut',
          times: isLogoCentered ? [0, 0.25, 0.5, 0.75, 1] : [0, 1],
        }}
      />

      {isLogoCentered && (
        <motion.div
          className='absolute inset-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0.6, 0.4, 0] }}
          transition={{ repeat: 2, duration: 1, ease: 'easeInOut' }}
          style={{ background: 'linear-gradient(to right, #5d3fd3, #144500)' }}
        />
      )}
    </motion.div>
  );
};

export default Loader;
