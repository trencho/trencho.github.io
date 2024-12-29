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
          ? "bg-gradient-to-r from-[#1e1e1e] via-[#333333] to-[#1e1e1e] text-white"
          : "bg-white text-black"
        }`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="p-8">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-8">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8">
        <Contact />
      </section>

      {/* Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
