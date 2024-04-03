import SkillCard from "./skillCard";

const skills = [
  {
    nome: "Java",
    img: "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
  },
  {
    nome: "Python",
    img: "https://www.vectorlogo.zone/logos/python/python-ar21.svg",
  },

  {
    nome: "Go",
    img: "https://www.vectorlogo.zone/logos/golang/golang-ar21.svg",
  },
  {
    nome: "Kotlin",
    img: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-ar21.svg",
  },
  {
    nome: "NodeJs",
    img: "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg",
  },
  {
    nome: "Angular",
    img: "https://www.vectorlogo.zone/logos/angular/angular-ar21.svg",
  },
  {
    nome: "React",
    img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
  },
  {
    nome: "Oracle",
    img: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg",
  },
  {
    nome: "Spring",
    img: "https://www.vectorlogo.zone/logos/springio/springio-ar21.svg",
  },
  {
    nome: "JavaScript",
    img: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },
  {
    nome: "TypeScript",
    img: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg",
  },
  {
    nome: "HTML5",
    img: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
  },
  {
    nome: "CSS3",
    img: "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg",
  },
  {
    nome: "Flask",
    img: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-ar21.svg",
  },
  {
    nome: "Maven",
    img: "https://www.vectorlogo.zone/logos/apache_maven/apache_maven-ar21.svg",
  },
  {
    nome: "Hibernate",
    img: "https://www.vectorlogo.zone/logos/hibernate/hibernate-ar21.svg",
  },
  {
    nome: "Bostrap",
    img: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg",
  },
  {
    nome: "tailwindcss",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg",
  },
  {
    nome: "postgresql",
    img: "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg",
  },
  {
    nome: "mysql",
    img: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
  },
  {
    nome: "sqlite",
    img: "https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg",
  },
  {
    nome: "visual studio code",
    img: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg",
  },
  {
    nome: "git",
    img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg",
  },
  {
    nome: "gitlab",
    img: "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg",
  },
  {
    nome: "github",
    img: "https://www.vectorlogo.zone/logos/github/github-ar21.svg",
  },
  {
    nome: "bitbucket",
    img: "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-ar21.svg",
  },
  {
    nome: "tomcat",
    img: "https://www.vectorlogo.zone/logos/apache_tomcat/apache_tomcat-ar21.svg",
  },
  {
    nome: "jenkins",
    img: "https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg",
  },
  {
    nome: "redis",
    img: "https://www.vectorlogo.zone/logos/redis/redis-ar21.svg",
  },
  {
    nome: "postman",
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg",
  },
  {
    nome: "jira",
    img: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg",
  },
  {
    nome: "notion",
    img: "https://raw.githubusercontent.com/gilbarbara/logos/52addcaa18dfecb4df77f3ee0753dca6b98187ad/logos/notion.svg",
  },
  {
    nome: "discord",
    img: "https://www.vectorlogo.zone/logos/discord/discord-ar21.svg",
  },
  {
    nome: "heroku",
    img: "https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg",
  },
  {
    nome: "linux",
    img: "https://upload.vectorlogo.zone/logos/kali/images/4f107199-98a3-43c2-9d1f-19af3082b59b.svg",
  },
  {
    nome: "microsoft",
    img: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg",
  },
];

const Skills = () => {
  return (
    <section className="h-screen lg:mt-10">
      <div className="flex flex-row flex-wrap p-10 gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill.nome} imgSource={skill.img} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
