import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";

const skills = [
  { title: "Java", imageSrc: "image-skills/java.png" },
  { title: "Python", imageSrc: "image-skills/python.png" },
  { title: "Docker", imageSrc: "image-skills/docker.png" },
  { title: "FastAPI", imageSrc: "image-skills/fastapi.png" },
  { title: "Flask", imageSrc: "image-skills/flask.png" },
  { title: "Git", imageSrc: "image-skills/git.png" },
  { title: "GitHub", imageSrc: "image-skills/github.png" },
  { title: "JSON", imageSrc: "image-skills/json.png" },
  { title: "Kubernetes", imageSrc: "image-skills/kubernetes.png" },
  { title: "Maven", imageSrc: "image-skills/maven.png" },
  { title: "MongoDB", imageSrc: "image-skills/mongodb.png" },
  { title: "PostgreSQL", imageSrc: "image-skills/postgressql.png" },
  { title: "Postman", imageSrc: "image-skills/postman.png" },
  { title: "REST API", imageSrc: "image-skills/restapi.png" },
  { title: "Spring", imageSrc: "image-skills/spring.png" },
  { title: "Swagger", imageSrc: "image-skills/swagger.png" },
];

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`p-6 sm:p-8 lg:p-12`}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
        My Skills
      </h2>

      {/* Container with max-width and centered */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className={`p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${darkMode
              ? "bg-[#444444] hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
            initial={{ opacity: 0, y: 10 }} // Faster initial animation
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.03 }} // Reduced duration and delay for faster load
          >
            <img
              src={skill.imageSrc}
              alt={skill.title}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? "text-white" : "text-black"
                }`}
            >
              {skill.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
