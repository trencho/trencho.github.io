import { motion } from "motion/react";
import { useTheme } from "../context/ThemeProvider";

const programmingLanguages = [
  { title: "Java", imageSrc: "image-skills/java.png" },
  { title: "Python", imageSrc: "image-skills/python.png" },
];

const webFrameworks = [
  { title: "FastAPI", imageSrc: "image-skills/fastapi.png" },
  { title: "Flask", imageSrc: "image-skills/flask.png" },
  { title: "Spring", imageSrc: "image-skills/spring.png" },
];

const databases = [
  { title: "MongoDB", imageSrc: "image-skills/mongodb.png" },
  { title: "MySQL", imageSrc: "image-skills/mysql.png" },
  { title: "PostgreSQL", imageSrc: "image-skills/postgresql.png" },
];

const devOpsTools = [
  { title: "Docker", imageSrc: "image-skills/docker.png" },
  { title: "Kubernetes", imageSrc: "image-skills/kubernetes.png" },
  { title: "Nginx", imageSrc: "image-skills/nginx.png" },
];

const tools = [
  { title: "Git", imageSrc: "image-skills/git.png" },
  { title: "GitHub", imageSrc: "image-skills/github.png" },
  { title: "GitHub Actions", imageSrc: "image-skills/github-actions.png" },
  { title: "Gunicorn", imageSrc: "image-skills/gunicorn.png" },
  { title: "Lombok", imageSrc: "image-skills/lombok.png" },
  { title: "Maven", imageSrc: "image-skills/maven.png" },
  { title: "Postman", imageSrc: "image-skills/postman.png" },
  { title: "Swagger", imageSrc: "image-skills/swagger.png" },
];

const dataScienceTools = [
  { title: "Matplotlib", imageSrc: "image-skills/matplotlib.png" },
  { title: "NumPy", imageSrc: "image-skills/numpy.png" },
  { title: "Pandas", imageSrc: "image-skills/pandas.png" },
  { title: "Scikit-learn", imageSrc: "image-skills/scikit-learn.png" },
];

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`p-4 sm:p-8 lg:p-8`}
    >
      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Programming Languages
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        {programmingLanguages.map((programmingLanguage, index) => (
          <motion.div
            key={programmingLanguage.title}
            className={`p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${darkMode
              ? "bg-[#444444] hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
          >
            <img
              src={programmingLanguage.imageSrc}
              alt={programmingLanguage.title}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain select-none"
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? "text-white" : "text-black"}`}
            >
              {programmingLanguage.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Web Frameworks
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        {webFrameworks.map((webFramework, index) => (
          <motion.div
            key={webFramework.title}
            className={`p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${darkMode
              ? "bg-[#444444] hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
          >
            <img
              src={webFramework.imageSrc}
              alt={webFramework.title}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain select-none"
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? "text-white" : "text-black"}`}
            >
              {webFramework.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Databases
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        {databases.map((database, index) => (
          <motion.div
            key={database.title}
            className={`p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${darkMode
              ? "bg-[#444444] hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
          >
            <img
              src={database.imageSrc}
              alt={database.title}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain select-none"
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? "text-white" : "text-black"}`}
            >
              {database.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        DevOps
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        {devOpsTools.map((devOpsTool, index) => (
          <motion.div
            key={devOpsTool.title}
            className={`p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${darkMode
              ? "bg-[#444444] hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
          >
            <img
              src={devOpsTool.imageSrc}
              alt={devOpsTool.title}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain select-none"
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? "text-white" : "text-black"}`}
            >
              {devOpsTool.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Tools
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.title}
            className={`p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${darkMode
              ? "bg-[#444444] hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
          >
            <img
              src={tool.imageSrc}
              alt={tool.title}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain select-none"
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? "text-white" : "text-black"}`}
            >
              {tool.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Data Science
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        {dataScienceTools.map((dataScienceTool, index) => (
          <motion.div
            key={dataScienceTool.title}
            className={`p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${darkMode
              ? "bg-[#444444] hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
          >
            <img
              src={dataScienceTool.imageSrc}
              alt={dataScienceTool.title}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain select-none"
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? "text-white" : "text-black"}`}
            >
              {dataScienceTool.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
