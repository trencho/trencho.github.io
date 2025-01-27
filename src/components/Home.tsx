import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { useTheme } from "../context/ThemeProvider";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-gray-900 ${darkMode
        ? "bg-linear-to-r from-[#1e1e1e] via-[#333333] to-[#1e1e1e] text-white"
        : "bg-linear-to-r from-[#8cff5d] to-[#a6c1ee] text-black"
        }`}
    >
      <Navbar />

      <section id="home" className="p-8">
        <Hero />
      </section>

      <section id="about" className="p-8">
        <About />
      </section>

      <section id="skills" className="p-8">
        <Skills />
      </section>

      <section id="projects" className="p-8">
        <Projects />
      </section>

      <section id="contact" className="p-8">
        <Contact />
      </section>

      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default Home;
