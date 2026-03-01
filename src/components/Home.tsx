import { useTheme } from '@/hooks/useTheme';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
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
      <Navbar />

      <section id='home' className='p-8'>
        <Hero />
      </section>

      <section id='about' className='p-8'>
        <About />
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
