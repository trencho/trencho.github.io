import { motion } from "motion/react";
import { useTheme } from "../context/ThemeProvider";

const programmingLanguages = [
  { title: "Java", imageSrc: "image-skills/programming-languages/java.png" },
  { title: "Python", imageSrc: "image-skills/programming-languages/python.png" },
];

const webFrameworks = [
  { title: "FastAPI", imageSrc: "image-skills/web-frameworks/fastapi.png" },
  { title: "Flask", imageSrc: "image-skills/web-frameworks/flask.png" },
  { title: "Spring", imageSrc: "image-skills/web-frameworks/spring.png" },
];

const databases = [
  { title: "MongoDB", imageSrc: "image-skills/databases/mongodb.png" },
  { title: "MySQL", imageSrc: "image-skills/databases/mysql.png" },
  { title: "PostgreSQL", imageSrc: "image-skills/databases/postgresql.png" },
];

const devOpsTools = [
  { title: "Docker", imageSrc: "image-skills/devops-tools/docker.png" },
  { title: "Kubernetes", imageSrc: "image-skills/devops-tools/kubernetes.png" },
  { title: "Nginx", imageSrc: "image-skills/devops-tools/nginx.png" },
];

const tools = [
  { title: "Git", imageSrc: "image-skills/tools/git.png" },
  { title: "GitHub", imageSrc: "image-skills/tools/github.png" },
  { title: "GitHub Actions", imageSrc: "image-skills/tools/github-actions.png" },
  { title: "Gunicorn", imageSrc: "image-skills/tools/gunicorn.png" },
  { title: "Lombok", imageSrc: "image-skills/tools/lombok.png" },
  { title: "Maven", imageSrc: "image-skills/tools/maven.png" },
  { title: "Postman", imageSrc: "image-skills/tools/postman.png" },
  { title: "Swagger", imageSrc: "image-skills/tools/swagger.png" },
];

const dataScienceTools = [
  { title: "Matplotlib", imageSrc: "image-skills/data-science-tools/matplotlib.png" },
  { title: "NumPy", imageSrc: "image-skills/data-science-tools/numpy.png" },
  { title: "Pandas", imageSrc: "image-skills/data-science-tools/pandas.png" },
  { title: "Scikit-learn", imageSrc: "image-skills/data-science-tools/scikit-learn.png" },
];

const dataEngineeringTools = [
  { title: "Apache Spark", imageSrc: "image-skills/data-engineering-tools/apache-spark.png" },
  { title: "Databricks", imageSrc: "image-skills/data-engineering-tools/databricks.png" },
];

const certificates = [
  { title: "Databricks Certified Data Engineer Associate", imageSrc: "image-skills/certificates/databricks-data-engineer-associate.png" },
]

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`p-4 sm:p-6 lg:p-8`}
    >
      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Programming Languages
      </h2>

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        style={{
          gridTemplateColumns: `repeat(${programmingLanguages.length % 4}, minmax(0, 1fr))`,
        }}
      >
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

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        style={{
          gridTemplateColumns: `repeat(${webFrameworks.length % 4}, minmax(0, 1fr))`,
        }}
      >
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

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        style={{
          gridTemplateColumns: `repeat(${databases.length % 4}, minmax(0, 1fr))`,
        }}
      >
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

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        style={{
          gridTemplateColumns: `repeat(${devOpsTools.length % 4}, minmax(0, 1fr))`,
        }}
      >
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

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        style={{
          gridTemplateColumns: `repeat(${tools.length % 4}, minmax(0, 1fr))`,
        }}
      >
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

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        style={{
          gridTemplateColumns: `repeat(${dataScienceTools.length % 4}, minmax(0, 1fr))`,
        }}
      >
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

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Data Engineering
      </h2>

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        style={{
          gridTemplateColumns: `repeat(${dataEngineeringTools.length % 4}, minmax(0, 1fr))`,
        }}
      >
        {dataEngineeringTools.map((dataEngineeringTool, index) => (
          <motion.div
            key={dataEngineeringTool.title}
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
              src={dataEngineeringTool.imageSrc}
              alt={dataEngineeringTool.title}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain select-none"
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? "text-white" : "text-black"}`}
            >
              {dataEngineeringTool.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Certificates
      </h2>

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
        style={{
          gridTemplateColumns: `repeat(${certificates.length % 4}, minmax(0, 1fr))`,
        }}
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.title}
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
              src={certificate.imageSrc}
              alt={certificate.title}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain select-none"
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium ${darkMode ? "text-white" : "text-black"}`}
            >
              {certificate.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
