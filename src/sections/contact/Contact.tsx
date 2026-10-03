import type React from 'react';
import { useTheme } from '@/shared/hooks/useTheme';
import { ToastContainer } from 'react-toastify';
import { m } from 'motion/react';
import {
  FaCheckCircle,
  FaCommentDots,
  FaEnvelope,
  FaUser,
} from 'react-icons/fa';
import LazyReCAPTCHA from './LazyReCAPTCHA';
import ContactField from './ContactField';
import { MAX_MESSAGE_LENGTH, useContactForm } from './useContactForm';
import { fadeInUp } from '@/shared/utils/animationVariants';
import SectionHeading from '@/shared/ui/SectionHeading';
import {
  cardSurface,
  disabledButton,
  focusRing,
  headingText,
  primaryButton,
  secondaryButton,
} from '@/shared/theme/tokens';

const fieldIcon = 'text-gray-500 mr-2 text-lg';

const SuccessMessage = ({ onReset }: { onReset: () => void }) => (
  <m.div
    className='text-center p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-center justify-center bg-green-50 border-green-400 dark:bg-green-900 dark:border-green-600'
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    role='status'
    aria-live='polite'
  >
    <FaCheckCircle
      className='text-4xl mb-4 text-green-500 dark:text-green-400'
      aria-hidden='true'
    />
    <span className={`text-base sm:text-lg font-semibold mb-2 ${headingText}`}>
      Thank you! Your message has been sent successfully.
    </span>
    <button
      type='button'
      onClick={onReset}
      className={`mt-4 px-6 py-2 rounded-full font-semibold transition cursor-pointer ${focusRing} ${secondaryButton}`}
    >
      Send another message
    </button>
  </m.div>
);

const Contact = () => {
  const { darkMode } = useTheme();
  const theme = darkMode ? 'dark' : 'light';
  const {
    formData,
    errors,
    submitted,
    isSubmitting,
    recaptchaRef,
    handleInputChange,
    handleCaptchaChange,
    handleSubmit,
    handleReset,
  } = useContactForm();

  return (
    <m.div
      className={`p-6 sm:p-8 md:p-10 lg:p-16 rounded-lg shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${cardSurface}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Sets the palette for every toast that does not choose its own. */}
      <ToastContainer theme={theme} />
      <SectionHeading
        id='contact-heading'
        className='mb-6 sm:mb-8'
        animated
        variants={fadeInUp}
      >
        Get In Touch
      </SectionHeading>
      <m.p
        className='text-base sm:text-lg lg:text-xl text-center max-w-2xl mx-auto mb-8 sm:mb-10 text-gray-700 dark:text-white/85'
        variants={fadeInUp}
      >
        Have a question or a project in mind? Fill out the form below and
        I&apos;ll get back to you as soon as I can.
      </m.p>

      {submitted ? (
        <SuccessMessage onReset={handleReset} />
      ) : (
        <m.form
          onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
            void handleSubmit(e);
          }}
          className='max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto bg-white dark:bg-[#160a2e] dark:text-white dark:border dark:border-cyan-500/15'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          noValidate
        >
          <ContactField
            id='name'
            label='Your Name'
            icon={<FaUser className={fieldIcon} aria-hidden='true' />}
            value={formData.name}
            error={errors.name}
            onChange={handleInputChange}
          />

          <ContactField
            id='email'
            label='Your Email'
            icon={<FaEnvelope className={fieldIcon} aria-hidden='true' />}
            type='email'
            value={formData.email}
            error={errors.email}
            onChange={handleInputChange}
          />

          <ContactField
            id='message'
            label='Your Message'
            icon={<FaCommentDots className={fieldIcon} aria-hidden='true' />}
            value={formData.message}
            error={errors.message}
            onChange={handleInputChange}
            maxLength={MAX_MESSAGE_LENGTH}
          />

          <m.div
            className='flex flex-col items-center justify-center'
            variants={fadeInUp}
          >
            <LazyReCAPTCHA
              widgetRef={recaptchaRef}
              onChange={handleCaptchaChange}
              theme={theme}
            />
            <m.button
              type='submit'
              disabled={isSubmitting}
              className={`mt-6 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${focusRing} ${
                isSubmitting
                  ? disabledButton
                  : `${primaryButton} cursor-pointer`
              }`}
              variants={fadeInUp}
              aria-busy={isSubmitting}
            >
              {isSubmitting && (
                <m.div
                  className='w-4 h-4 border-2 border-current border-t-transparent rounded-full'
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  aria-hidden='true'
                />
              )}
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </m.button>
          </m.div>
        </m.form>
      )}
    </m.div>
  );
};

export default Contact;
