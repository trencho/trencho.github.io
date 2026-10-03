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
import { pageBackground } from '@/shared/theme/tokens';

/**
 * The page's sections, in scroll order. Each `<section>` is the landmark, named
 * by the heading its component renders with the id `<section>-heading`.
 */
const SECTIONS = [
  { id: 'home', Component: Hero },
  { id: 'about', Component: About },
  { id: 'experience', Component: Experience },
  { id: 'education', Component: Education },
  { id: 'skills', Component: Skills },
  { id: 'certificates', Component: Certificates },
  { id: 'projects', Component: Projects },
  { id: 'languages', Component: Languages },
  { id: 'contact', Component: Contact },
] as const;

const Home = () => (
  <div className={pageBackground}>
    <a
      href='#home'
      className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400'
    >
      Skip to content
    </a>

    <Navbar />

    {SECTIONS.map(({ id, Component }) => (
      <section
        key={id}
        id={id}
        aria-labelledby={`${id}-heading`}
        className='p-8'
      >
        <Component />
      </section>
    ))}

    <ScrollToTopButton />

    <Footer />
  </div>
);

export default Home;
