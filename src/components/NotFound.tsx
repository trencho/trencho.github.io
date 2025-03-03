import { motion } from "motion/react";
import { Link } from "react-router";
import { useTheme } from "../context/ThemeProvider";

const NotFound = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-center p-6 ${darkMode ? "bg-[#1e1e1e] text-white" : "bg-gray-100 text-gray-700"}`}
    >
      <motion.img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2w5azZ5NHdwNjZmcjRnd3M5MG5xdTNoNzQxaGNsamZzN2l4cmhrYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VwoJkTfZAUBSU/giphy.gif"
        alt="Lost in the void"
        className="w-64 sm:w-80 md:w-96 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-gray-400 mb-6"
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
        <Link to="/">
          <button
            type="submit"
            className={`px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none cursor-pointer 
              ${darkMode ? "bg-gray-600 text-white" : "bg-black text-white"}`}
          >
            <span>Back to Home</span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
