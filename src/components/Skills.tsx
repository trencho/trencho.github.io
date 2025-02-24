import GridContainer from "./GridContainer";

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
  { title: "Microsoft SQL Server", imageSrc: "image-skills/databases/microsoft-sql-server.png" },
  { title: "MongoDB", imageSrc: "image-skills/databases/mongodb.png" },
  { title: "MySQL", imageSrc: "image-skills/databases/mysql.png" },
  { title: "Oracle", imageSrc: "image-skills/databases/oracle.png" },
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
  { title: "Scipy", imageSrc: "image-skills/data-science-tools/scipy.png" },
];

const dataEngineeringTools = [
  { title: "Apache Spark", imageSrc: "image-skills/data-engineering-tools/apache-spark.png" },
  { title: "Databricks", imageSrc: "image-skills/data-engineering-tools/databricks.png" },
];

const certificates = [
  { title: "Databricks Certified Data Engineer Associate", imageSrc: "image-skills/certificates/databricks-data-engineer-associate.png", url: "https://credentials.databricks.com/ecb77163-c63a-45f7-a02f-7747fe0ad658#acc.vuI371hQ" },
]

const Skills = () => {
  return (
    <section id="skills" className="p-4 sm:p-6 lg:p-8">
      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Programming Languages
      </h2>
      <GridContainer elements={programmingLanguages} />

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Web Frameworks
      </h2>
      <GridContainer elements={webFrameworks} />

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Databases
      </h2>
      <GridContainer elements={databases} />

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        DevOps
      </h2>
      <GridContainer elements={devOpsTools} />

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Tools
      </h2>
      <GridContainer elements={tools} />

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Data Science
      </h2>
      <GridContainer elements={dataScienceTools} />

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Data Engineering
      </h2>
      <GridContainer elements={dataEngineeringTools} />

      <h2 className="p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Certificates
      </h2>
      <GridContainer elements={certificates} />
    </section>
  );
};

export default Skills;
