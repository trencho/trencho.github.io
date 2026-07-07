import { useTheme } from '@/hooks/useTheme';
import { motion } from 'motion/react';
import { staggerContainer, slideUp } from '@/utils/animationVariants';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <motion.section
      className={`flex justify-center items-center p-4 sm:p-8 lg:p-12 animate-smoothFadeIn ${darkMode ? 'text-white' : 'text-gray-700'}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div
        className={`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${darkMode ? 'bg-[#444444]' : 'bg-white bg-opacity-70'}`}
        variants={staggerContainer}
      >
        <motion.h2
          className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6'
          variants={slideUp}
        >
          About Me
        </motion.h2>

        <motion.div
          className='text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8'
          variants={staggerContainer}
        >
          <motion.p
            className='text-base sm:text-lg lg:text-xl leading-relaxed mb-4'
            variants={slideUp}
          >
            I&apos;m a software engineer focused on <b>backend</b> and{' '}
            <b>data engineering</b>. I&apos;ve designed and shipped{' '}
            <b>RESTful APIs</b> and, more recently, large-scale{' '}
            <b>ETL pipelines</b> — building data workflows on{' '}
            <b>Azure Databricks</b> and <b>Apache Spark</b> for the insurance
            sector, after years of <b>Java/Spring</b> development across banking
            (3DS secure payments), telecommunications and healthcare.
          </motion.p>
          <motion.p
            className='text-base sm:text-lg lg:text-xl leading-relaxed mb-4'
            variants={slideUp}
          >
            My work spans the full delivery cycle: modelling data and APIs,
            containerising with <b>Docker</b> and <b>Kubernetes</b>, and
            shipping through <b>CI/CD</b>. I&apos;ve collaborated directly with
            international clients across <b>Europe and the US</b>, translating
            business requirements into maintainable, production-ready systems.
          </motion.p>
          <motion.p
            className='text-base sm:text-lg lg:text-xl leading-relaxed mb-4'
            variants={slideUp}
          >
            I hold a{' '}
            <b>
              Master&apos;s in Electrical Engineering and Information
              Technologies
            </b>
            , where my thesis on monitoring atmospheric impacts and predicting
            air pollution grew into open-source machine-learning projects. I
            value <b>clean, well-tested code</b>, pragmatic design and
            continuous learning — and I&apos;m comfortable explaining technical
            trade-offs to both engineers and non-technical stakeholders.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
