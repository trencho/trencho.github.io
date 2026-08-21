import type React from 'react';
import { useTheme } from '@/shared/hooks/useTheme';
import { ToastContainer } from 'react-toastify';
import { motion } from 'motion/react';
import { config } from '@/config/environment';
import {
  FaCheckCircle,
  FaCommentDots,
  FaEnvelope,
  FaUser,
} from 'react-icons/fa';
import LazyReCAPTCHA from './LazyReCAPTCHA';
import ContactField from './ContactField';
import { useContactForm } from './useContactForm';
import { fadeInUp } from '@/shared/utils/animationVariants';
import {
  accentText,
  bodyText,
  cardSurface,
  disabledButton,
  headingText,
  inputField,
  primaryButton,
} from '@/shared/theme/tokens';

const Contact = () => {
  const { darkMode } = useTheme();
  const {
    formData,
    errors,
    submitted,
    showMessage,
    isSubmitting,
    recaptchaRef,
    handleInputChange,
    handleCaptchaChange,
    handleSubmit,
    handleReset,
  } = useContactForm(darkMode);

  return (
    <motion.section
      className={`p-6 sm:p-8 md:p-10 lg:p-16 rounded-lg shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${cardSurface(darkMode)}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <ToastContainer />
      <motion.h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center ${headingText(darkMode)}`}
        variants={fadeInUp}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className={`text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 p-4 rounded-lg ${darkMode ? 'bg-[#241041] text-white' : 'bg-gray-50 text-gray-600'}`}
        variants={fadeInUp}
      >
        Feel free to contact me directly at{' '}
        <a
          href={`mailto:${config.contact.email}`}
          className={`font-semibold ${accentText(darkMode)}`}
        >
          {config.contact.email}
        </a>{' '}
        or by filling out the form below. I&apos;ll get back to you as soon as I
        can.
      </motion.p>

      {showMessage && (
        <motion.div
          className={`text-center p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-center justify-center ${
            darkMode
              ? 'bg-green-900 border-green-600'
              : 'bg-green-50 border-green-400'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          role='status'
          aria-live='polite'
        >
          <FaCheckCircle
            className={`text-4xl mb-4 ${darkMode ? 'text-green-400' : 'text-green-500'}`}
            aria-hidden='true'
          />
          <span
            className={`text-base sm:text-lg font-semibold mb-2 ${headingText(darkMode)}`}
          >
            Thank you! Your message has been sent successfully.
          </span>
          <button
            type='button'
            onClick={handleReset}
            className={`mt-4 px-6 py-2 rounded-full font-semibold transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              darkMode
                ? 'bg-purple-800 text-white hover:bg-purple-700 focus:ring-cyan-400'
                : 'bg-black text-white hover:bg-gray-800 focus:ring-fuchsia-500'
            }`}
          >
            Send another message
          </button>
        </motion.div>
      )}

      {!submitted && (
        <motion.form
          onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
            void handleSubmit(e);
          }}
          className={`max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto ${darkMode ? 'bg-[#160a2e] text-white border border-cyan-500/15' : 'bg-white'}`}
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          noValidate
        >
          <ContactField
            id='name'
            label='Your Name'
            icon={
              <FaUser
                className='text-gray-500 mr-2 text-lg'
                aria-hidden='true'
              />
            }
            type='text'
            value={formData.name}
            error={errors.name}
            darkMode={darkMode}
            onChange={handleInputChange}
          />

          <ContactField
            id='email'
            label='Your Email'
            icon={
              <FaEnvelope
                className='text-gray-500 mr-2 text-lg'
                aria-hidden='true'
              />
            }
            type='email'
            value={formData.email}
            error={errors.email}
            darkMode={darkMode}
            onChange={handleInputChange}
          />

          <motion.div className='mb-4 sm:mb-6' variants={fadeInUp}>
            <label
              htmlFor='message'
              className={`block text-sm sm:text-base font-semibold mb-2 ${bodyText(darkMode)}`}
            >
              <FaCommentDots
                className='text-gray-500 mr-2 text-lg'
                aria-hidden='true'
              />
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              maxLength={5000}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full p-2 sm:p-3 h-24 sm:h-32 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${inputField(darkMode, Boolean(errors.message))}`}
              required
            />
            <div className='mt-1 flex items-center justify-between'>
              {errors.message ? (
                <p
                  id='message-error'
                  className='text-red-500 text-sm'
                  role='alert'
                >
                  {errors.message}
                </p>
              ) : (
                <span />
              )}
              <span
                className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
                aria-live='polite'
              >
                {formData.message.length}/5000
              </span>
            </div>
          </motion.div>

          <motion.div
            className='flex flex-col items-center justify-center'
            variants={fadeInUp}
          >
            <LazyReCAPTCHA
              widgetRef={recaptchaRef}
              onChange={handleCaptchaChange}
              theme={darkMode ? 'dark' : 'light'}
            />
            <motion.button
              type='submit'
              disabled={isSubmitting}
              className={`mt-6 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${
                isSubmitting
                  ? disabledButton(darkMode)
                  : `${primaryButton(darkMode)} cursor-pointer`
              }`}
              variants={fadeInUp}
              aria-busy={isSubmitting}
            >
              {isSubmitting && (
                <motion.div
                  className='w-4 h-4 border-2 border-current border-t-transparent rounded-full'
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  aria-hidden='true'
                />
              )}
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </motion.button>
          </motion.div>
        </motion.form>
      )}
    </motion.section>
  );
};

export default Contact;
