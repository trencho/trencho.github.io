import Navbar from './Navbar';
import Hero from '@/sections/hero/Hero';
import About from '@/sections/about/About';
import Experience from '@/sections/experience/Experience';
import Education from '@/sections/education/Education';
import Skills from '@/sections/skills/Skills';
import Certificates from '@/sections/certificates/Certificates';
import Projects from '@/sections/projects/Projects';
import Languages from '@/sections/languages/Languages';
import Contact from '@/sections/contact/Contact';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';

const Home = () => {
  return (
    // `text-gray-900`, not the `text-gray-800` the old ternary named for light mode.
    // Both were on the element at once and Tailwind emits gray-900 later, so gray-900
    // is what the live page has always rendered and gray-800 never applied. Measured
    // against the deployed site rather than inferred from the class list.
    <div className='text-gray-900 bg-linear-to-br from-amber-300 via-pink-400 to-purple-400 dark:text-white dark:from-[#0d0221] dark:via-[#2a0a4a] dark:to-[#0d0221]'>
      <a
        href='#home'
        className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400'
      >
        Skip to content
      </a>

      <Navbar />

      <section id='home' className='p-8'>
        <Hero />
      </section>

      <section id='about' className='p-8'>
        <About />
      </section>

      <section id='experience' className='p-8'>
        <Experience />
      </section>

      <section id='education' className='p-8'>
        <Education />
      </section>

      <section id='skills' className='p-8'>
        <Skills />
      </section>

      <section id='certificates' className='p-8'>
        <Certificates />
      </section>

      <section id='projects' className='p-8'>
        <Projects />
      </section>

      <section id='languages' className='p-8'>
        <Languages />
      </section>

      <section id='contact' className='p-8'>
        <Contact />
      </section>

      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default Home;
