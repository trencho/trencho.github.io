import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";

const skills = [
  { title: "HTML", imageSrc: "image-skills/html.png" },
  { title: "CSS", imageSrc: "image-skills/css.png" },
  { title: "JavaScript", imageSrc: "image-skills/javascript.png" },
  { title: "TypeScript", imageSrc: "image-skills/typescript.png" },
  { title: "Bootstrap", imageSrc: "image-skills/bootstrap.png" },
  { title: "React", imageSrc: "image-skills/react.png" },
  { title: "Tailwind CSS", imageSrc: "image-skills/tailwindcss.png" },
  { title: "NextJS", imageSrc: "image-skills/nextjs.png" },
  { title: "Node", imageSrc: "image-skills/node.png" },
  { title: "MongoDB", imageSrc: "image-skills/mongodb.png" },
  { title: "Express.js", imageSrc: "image-skills/express.png" },
  { title: "PostgreSQL", imageSrc: "image-skills/postgressql.png" },
  { title: "Angular", imageSrc: "image-skills/angular.png" },
  { title: "NestJS", imageSrc: "image-skills/nestjs.png" },
  { title: "Postman", imageSrc: "image-skills/postman.png" },
  { title: "Swagger", imageSrc: "image-skills/swagger.png" },
];

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`p-6 sm:p-8 lg:p-12 ${darkMode
        ? "bg-gradient-to-r from-[#1e1e1e] via-[#333333] to-[#1e1e1e] text-white"
        : "bg-white text-black"
        }`}
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
