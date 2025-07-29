import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/global.scss";
import { useTheme } from "../context/ThemeProvider";

const skills = [
  { title: "Java", imageSrc: "image-skills/programming-languages/java.png" },
  { title: "Python", imageSrc: "image-skills/programming-languages/python.png" },
  { title: "FastAPI", imageSrc: "image-skills/web-frameworks/fastapi.png" },
  { title: "Flask", imageSrc: "image-skills/web-frameworks/flask.png" },
  { title: "Vue.js", imageSrc: "image-skills/web-frameworks/vuejs.png" },
  { title: "Spring", imageSrc: "image-skills/web-frameworks/spring.png" },
  { title: "Microsoft SQL Server", imageSrc: "image-skills/databases/microsoft-sql-server.png" },
  { title: "MongoDB", imageSrc: "image-skills/databases/mongodb.png" },
  { title: "MySQL", imageSrc: "image-skills/databases/mysql.png" },
  { title: "Oracle", imageSrc: "image-skills/databases/oracle.png" },
  { title: "PostgreSQL", imageSrc: "image-skills/databases/postgresql.png" },
  { title: "Docker", imageSrc: "image-skills/devops-tools/docker.png" },
  { title: "Kubernetes", imageSrc: "image-skills/devops-tools/kubernetes.png" },
  { title: "Nginx", imageSrc: "image-skills/devops-tools/nginx.png" },
  { title: "Git", imageSrc: "image-skills/tools/git.png" },
  { title: "GitHub", imageSrc: "image-skills/tools/github.png" },
  { title: "GitHub Actions", imageSrc: "image-skills/tools/github-actions.png" },
  { title: "Gunicorn", imageSrc: "image-skills/tools/gunicorn.png" },
  { title: "Lombok", imageSrc: "image-skills/tools/lombok.png" },
  { title: "Maven", imageSrc: "image-skills/tools/maven.png" },
  { title: "Postman", imageSrc: "image-skills/tools/postman.png" },
  { title: "Pytest", imageSrc: "image-skills/tools/pytest.png" },
  { title: "Swagger", imageSrc: "image-skills/tools/swagger.png" },
  { title: "Matplotlib", imageSrc: "image-skills/data-science-tools/matplotlib.png" },
  { title: "NumPy", imageSrc: "image-skills/data-science-tools/numpy.png" },
  { title: "Pandas", imageSrc: "image-skills/data-science-tools/pandas.png" },
  { title: "Scikit-learn", imageSrc: "image-skills/data-science-tools/scikit-learn.png" },
  { title: "Scipy", imageSrc: "image-skills/data-science-tools/scipy.png" },
  { title: "Apache Spark", imageSrc: "image-skills/data-engineering-tools/apache-spark.png" },
  { title: "Databricks", imageSrc: "image-skills/data-engineering-tools/databricks.png" },
];

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`skills-section ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <h2 className="skills-title">Skills</h2>

      <Swiper
        modules={[Autoplay, Scrollbar]}
        loop={true}
        spaceBetween={30}
        slidesPerView="auto"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={2000}
        autoHeight={true}
        roundLengths={true}
        centeredSlides={true}
        grabCursor={true}
        watchSlidesProgress={true}
        scrollbar={{
          enabled: true,
          hide: false,
          draggable: true,
          snapOnRelease: true,
          dragSize: 30,
        }}
        className="skills-swiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="skills-slide">
            <img
              src={skill.imageSrc}
              alt={skill.title}
              className="skills-image"
            />
            <span className="skills-title-text">{skill.title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;
