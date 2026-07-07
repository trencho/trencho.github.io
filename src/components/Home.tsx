import { useTheme } from '@/hooks/useTheme';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Certificates from './Certificates';
import Projects from './Projects';
import Contact from './Contact';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-gray-900 ${
        darkMode
          ? 'text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
          : 'text-gray-700 bg-gradient-to-r from-emerald-500 to-lime-400'
      }`}
    >
      <a
        href='#home'
        className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-teal-500'
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

      <section id='skills' className='p-8'>
        <Skills />
      </section>

      <section id='certificates' className='p-8'>
        <Certificates />
      </section>

      <section id='projects' className='p-8'>
        <Projects />
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
