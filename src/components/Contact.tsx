import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCommentDots,
  faEnvelope,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeProvider";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { darkMode } = useTheme(); // Access dark mode

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_2936zzf", // Your correct service ID
        "template_q859oph", // Your correct template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "YDO5GNDdewVvMoyTz" // Your public key (USER_ID)
      )
      .then(
        () => {
          setSubmitted(true);
          setShowMessage(true);
        },
        (error) => {
          console.error("Failed to send email", error.text);
        }
      );
  };

  // Animation variants for fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="contact"
      className={`p-6 sm:p-8 md:p-10 lg:p-16 rounded-xl shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${darkMode ? "bg-[#444444]" : "bg-gray-50"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
        variants={fadeInUp}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className={`text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 p-4 rounded-lg ${darkMode ? "bg-[#444444] text-white" : "bg-gray-50 text-gray-600"}`}
        variants={fadeInUp}
      >
        Feel free to contact me directly at{" "}
        <a
          href="mailto:atrenchevski@gmail.com"
          className={`font-semibold ${darkMode ? "text-teal-400" : "text-green-700"}`}
        >
          atrenchevski@gmail.com
        </a>{" "}
        or by filling out the form below. I’ll get back to you as soon as I can.
      </motion.p>

      {/* Show message after form submission */}
      {showMessage && (
        <motion.div
          className={`text-center p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto flex items-center justify-center ${darkMode
            ? "bg-green-900 border-green-600"
            : "bg-green-50 border-green-400"
            }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* First, show the icon with its animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mr-4"
          >
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={`text-3xl sm:text-4xl ${darkMode ? "text-green-400" : "text-green-500"}`}
            />
          </motion.div>

          {/* Then, show the message with sliding effect */}
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-base sm:text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Thank you! Your message has been sent successfully.
          </motion.span>
        </motion.div>
      )}

      {/* Conditionally render the form or success message */}
      {!submitted && (
        <motion.form
          onSubmit={handleSubmit}
          className={`max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto ${darkMode ? "bg-[#374151] text-white" : "bg-white"}`}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div className="mb-4 sm:mb-6" variants={fadeInUp}>
            <label
              htmlFor="name"
              className={`block text-sm sm:text-base font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-500 mr-2 text-lg"
              />
              Your Name
            </label>
            <div className="flex items-center">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                  : "focus:ring-blue-400"
                  }`}
                required
              />
            </div>
          </motion.div>

          <motion.div
            className="mb-4 sm:mb-6 flex items-center"
            variants={fadeInUp}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-500 mr-2 text-lg"
            />
            <label
              htmlFor="email"
              className={`block text-sm sm:text-base font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
            >
              Your Email
            </label>
          </motion.div>
          <motion.div className="mb-4 sm:mb-6" variants={fadeInUp}>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${darkMode
                ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                : "focus:ring-blue-400"
                }`}
              required
            />
          </motion.div>
          <motion.div
            className="mb-4 sm:mb-6 flex items-center"
            variants={fadeInUp}
          >
            <FontAwesomeIcon
              icon={faCommentDots}
              className="text-gray-500 mr-2 text-lg"
            />
            <label
              htmlFor="message"
              className={`block text-sm sm:text-base font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
            >
              Your Message
            </label>
          </motion.div>
          <motion.div className="mb-4 sm:mb-6" variants={fadeInUp}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full p-2 sm:p-3 h-24 sm:h-32 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${darkMode
                ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                : "focus:ring-blue-400"
                }`}
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            className={`px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${darkMode
              ? "bg-gray-600 text-white hover:bg-gray-500"
              : "bg-black text-white hover:bg-gray-800"
              }`}
            variants={fadeInUp}
          >
            <span>Send Message</span>
          </motion.button>
        </motion.form>
      )}
    </motion.section>
  );
};

export default Contact;
