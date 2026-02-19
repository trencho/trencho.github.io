import { useState } from 'react';
import { useTheme } from '@/context/ThemeProvider';
import { toast, ToastContainer } from 'react-toastify';
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const { darkMode } = useTheme();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error('Please complete the CAPTCHA to proceed.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: darkMode ? 'dark' : 'light',
      });
      return;
    }

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitted(true);
        setShowMessage(true);
        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: darkMode ? 'dark' : 'light',
        });

        // setFormData({ name: '', email: '', message: '' });
        // setCaptchaValue(null);
      } else {
        toast.error(
          'Failed to send message. Please try again or contact me directly.',
          {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: darkMode ? 'dark' : 'light',
          },
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An unexpected error occurred. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: darkMode ? 'dark' : 'light',
      });
    } finally {
      // setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          className={`font-semibold ${darkMode ? 'text-teal-400' : 'text-[#28b487]'}`}
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
        >
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={`text-4xl mb-4 ${darkMode ? 'text-green-400' : 'text-green-500'}`}
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
          onSubmit={handleSubmit}
          className={`max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto ${darkMode ? 'bg-[#374151] text-white' : 'bg-white'}`}
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
        >
          <motion.div className='mb-4 sm:mb-6' variants={fadeInUp}>
            <label
              htmlFor='name'
              className={`block text-sm sm:text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className='text-gray-500 mr-2 text-lg'
              />
              Your Name
            </label>
            <input
              id='name'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-gray-500'
                  : 'focus:ring-blue-400'
              }`}
              required
            />
          </motion.div>

          <motion.div className='mb-4 sm:mb-6' variants={fadeInUp}>
            <label
              htmlFor='email'
              className={`block text-sm sm:text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className='text-gray-500 mr-2 text-lg'
              />
              Your Email
            </label>
            <input
              id='email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-gray-500'
                  : 'focus:ring-blue-400'
              }`}
              required
            />
          </motion.div>

          <motion.div className='mb-4 sm:mb-6' variants={fadeInUp}>
            <label
              htmlFor='message'
              className={`block text-sm sm:text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}
            >
              <FontAwesomeIcon
                icon={faCommentDots}
                className='text-gray-500 mr-2 text-lg'
              />
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full p-2 sm:p-3 h-24 sm:h-32 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-gray-500'
                  : 'focus:ring-blue-400'
              }`}
              required
            />
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
              className={`px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none cursor-pointer 
                ${darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-black text-white hover:bg-gray-800'}`}
              variants={fadeInUp}
            >
              <span>Send Message</span>
            </motion.button>
          </motion.div>
        </motion.form>
      )}
    </motion.section>
  );
};

export default Contact;
