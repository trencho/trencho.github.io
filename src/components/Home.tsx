import { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import LazySection from './LazySection';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';
import { useTheme } from '../context/ThemeProvider';

const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Certificates = lazy(() => import('./Certificates'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-gray-900 ${darkMode ? 'text-white' : 'text-gray-700'}`}
      style={{
        background: darkMode
          ? 'linear-gradient(to right, #1e1e1e, #333333, #1e1e1e)'
          : 'linear-gradient(to right, #28b487, #7dd56f)',
      }}
    >
      <Navbar />

      <section id="home" className="p-8">
        <Hero />
      </section>

      <section id="about" className="p-8">
        <LazySection rootMargin="200px">
          <Suspense
            fallback={
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
              </div>
            }
          >
            <About />
          </Suspense>
        </LazySection>
      </section>

      <section id="skills" className="p-8">
        <LazySection rootMargin="200px">
          <Suspense
            fallback={
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
              </div>
            }
          >
            <Skills />
          </Suspense>
        </LazySection>
      </section>

      <section id="certificates" className="p-8">
        <LazySection rootMargin="200px">
          <Suspense
            fallback={
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
              </div>
            }
          >
            <Certificates />
          </Suspense>
        </LazySection>
      </section>

      <section id="projects" className="p-8">
        <LazySection rootMargin="200px">
          <Suspense
            fallback={
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
              </div>
            }
          >
            <Projects />
          </Suspense>
        </LazySection>
      </section>

      <section id="contact" className="p-8">
        <LazySection rootMargin="200px">
          <Suspense
            fallback={
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
              </div>
            }
          >
            <Contact />
          </Suspense>
        </LazySection>
      </section>

      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default Home;
