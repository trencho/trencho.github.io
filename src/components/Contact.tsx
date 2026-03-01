import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { ToastContainer } from 'react-toastify';
import { sendEmail } from '@/services/emailService';
import { motion } from 'motion/react';
import { config } from '@/config/environment';
import {
  faCheckCircle,
  faCommentDots,
  faEnvelope,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyReCAPTCHA from './LazyReCAPTCHA';
import { showError, showSuccess } from '@/utils/toastUtils';
import { fadeInUp } from '@/utils/animationVariants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { darkMode } = useTheme();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const MIN_NAME_LENGTH = 2;
    const MIN_MESSAGE_LENGTH = 10;
    const MAX_MESSAGE_LENGTH = 5000;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Name validation
    if (!trimmedName) {
      newErrors.name = 'Name is required';
    } else if (trimmedName.length < MIN_NAME_LENGTH) {
      newErrors.name = `Name must be at least ${MIN_NAME_LENGTH} characters`;
    }

    // Email validation
    if (!trimmedEmail) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) ||
      trimmedEmail.length > 254
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!trimmedMessage) {
      newErrors.message = 'Message is required';
    } else if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
    } else if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      showError('Please fix the form errors before submitting.', darkMode);
      return;
    }

    if (!captchaValue) {
      showError('Please complete the CAPTCHA to proceed.', darkMode);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitted(true);
        setShowMessage(true);
        showSuccess(
          "Message sent successfully! I'll get back to you soon.",
          darkMode,
        );
      } else {
        showError(
          `Failed to send message: ${result.error}. Please try again or contact me directly.`,
          darkMode,
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showError('An unexpected error occurred. Please try again.', darkMode);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id='contact'
      className={`p-6 sm:p-8 md:p-10 lg:p-16 rounded-xl shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${darkMode ? 'bg-[#444444]' : 'bg-gray-50'}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <ToastContainer />
      <motion.h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}
        variants={fadeInUp}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className={`text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 p-4 rounded-lg ${darkMode ? 'bg-[#444444] text-white' : 'bg-gray-50 text-gray-600'}`}
        variants={fadeInUp}
      >
        Feel free to contact me directly at{' '}
        <a
          href={`mailto:${config.contact.email}`}
          className={`font-semibold ${darkMode ? 'text-teal-400' : 'text-emerald-500'}`}
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
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={`text-4xl mb-4 ${darkMode ? 'text-green-400' : 'text-green-500'}`}
            aria-hidden='true'
          />
          <span
            className={`text-base sm:text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Thank you! Your message has been sent successfully.
          </span>
        </motion.div>
      )}

      {!submitted && (
        <motion.form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            void handleSubmit(e);
          }}
          className={`max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto ${darkMode ? 'bg-[#374151] text-white' : 'bg-white'}`}
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          noValidate
        >
          <motion.div className='mb-4 sm:mb-6' variants={fadeInUp}>
            <label
              htmlFor='name'
              className={`block text-sm sm:text-base font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className='text-gray-500 mr-2 text-lg'
                aria-hidden='true'
              />
              Your Name
            </label>
            <input
              id='name'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-red-500 focus:ring-red-400'
                  : darkMode
                    ? 'bg-gray-700 border-gray-600 text-white focus:ring-gray-500'
                    : 'focus:ring-blue-400'
              }`}
              required
            />
            {errors.name && (
              <p
                id='name-error'
                className='text-red-500 text-sm mt-1'
                role='alert'
              >
                {errors.name}
              </p>
            )}
          </motion.div>

          <motion.div className='mb-4 sm:mb-6' variants={fadeInUp}>
            <label
              htmlFor='email'
              className={`block text-sm sm:text-base font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className='text-gray-500 mr-2 text-lg'
                aria-hidden='true'
              />
              Your Email
            </label>
            <input
              id='email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-400'
                  : darkMode
                    ? 'bg-gray-700 border-gray-600 text-white focus:ring-gray-500'
                    : 'focus:ring-blue-400'
              }`}
              required
            />
            {errors.email && (
              <p
                id='email-error'
                className='text-red-500 text-sm mt-1'
                role='alert'
              >
                {errors.email}
              </p>
            )}
          </motion.div>

          <motion.div className='mb-4 sm:mb-6' variants={fadeInUp}>
            <label
              htmlFor='message'
              className={`block text-sm sm:text-base font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon
                icon={faCommentDots}
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
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full p-2 sm:p-3 h-24 sm:h-32 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                errors.message
                  ? 'border-red-500 focus:ring-red-400'
                  : darkMode
                    ? 'bg-gray-700 border-gray-600 text-white focus:ring-gray-500'
                    : 'focus:ring-blue-400'
              }`}
              required
            />
            {errors.message && (
              <p
                id='message-error'
                className='text-red-500 text-sm mt-1'
                role='alert'
              >
                {errors.message}
              </p>
            )}
          </motion.div>

          <motion.div
            className='flex flex-col items-center justify-center'
            variants={fadeInUp}
          >
            <LazyReCAPTCHA
              onChange={handleCaptchaChange}
              theme={darkMode ? 'dark' : 'light'}
            />
            <motion.button
              type='submit'
              disabled={isSubmitting}
              className={`mt-6 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${
                isSubmitting
                  ? darkMode
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : darkMode
                    ? 'bg-gray-600 text-white hover:bg-gray-500 cursor-pointer'
                    : 'bg-black text-white hover:bg-gray-800 cursor-pointer'
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
