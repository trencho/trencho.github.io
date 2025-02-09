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
      className={`text-gray-900 ${darkMode ? "text-white" : "text-black"}`}
      style={{
        background: darkMode
          ? "linear-gradient(to right, #1e1e1e, #333333, #1e1e1e)"
          : "linear-gradient(to right, #28b487, #7dd56f)",
        animationDelay: "0s",
      }}
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
