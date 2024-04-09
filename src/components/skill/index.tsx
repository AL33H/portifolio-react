import Skillcard from "./skillCard";

const skillList = [
  {
    nome: "Java",
    img: "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
    desc: "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.",
  },
  {
    nome: "Python",
    img: "https://www.vectorlogo.zone/logos/python/python-ar21.svg",
    desc: "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.",
  },

  {
    nome: "Go",
    img: "https://www.vectorlogo.zone/logos/golang/golang-ar21.svg",
    desc: "Go é uma linguagem de programação criada pela Google e lançada em código livre em novembro de 2009. É uma linguagem compilada e focada em produtividade e programação concorrente, baseada em trabalhos feitos no sistema operacional chamado Inferno.",
  },
  {
    nome: "Angular",
    img: "https://www.vectorlogo.zone/logos/angular/angular-ar21.svg",
    desc: "Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.",
  },
  {
    nome: "React",
    img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
    desc: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
  },
  {
    nome: "Oracle",
    img: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg",
    desc: "O Oracle é um SGBD que surgiu no fim dos anos 70, quando Larry Ellison vislumbrou uma oportunidade que outras companhias não haviam percebido, quando encontrou uma descrição de um protótipo funcional de um banco de dados relacional e descobriu que nenhuma empresa tinha se empenhado em comercializar essa tecnologia.",
  },
  {
    nome: "Spring",
    img: "https://www.vectorlogo.zone/logos/springio/springio-ar21.svg",
    desc: "O Spring é um framework open source para a plataforma Java criado por Rod Johnson e descrito em seu livro 'Expert One-on-One: JEE Design e Development'. Trata-se de um framework não intrusivo, baseado nos padrões de projeto inversão de controle e injeção de dependência.",
  },
  {
    nome: "JavaScript",
    img: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    desc: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
  },
  {
    nome: "TypeScript",
    img: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg",
    desc: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
  },
  {
    nome: "HTML5",
    img: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
    desc: "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.",
  },
  {
    nome: "CSS3",
    img: "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg",
    desc: "CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.",
  },
  {
    nome: "Flask",
    img: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-ar21.svg",
    desc: "Flask é um pequeno framework web escrito em Python. É classificado como um microframework porque não requer ferramentas ou bibliotecas particulares, mantendo um núcleo simples, porém, extensível.",
  },
  {
    nome: "Maven",
    img: "https://www.vectorlogo.zone/logos/apache_maven/apache_maven-ar21.svg",
    desc: "Apache Maven, ou Maven, é uma ferramenta de automação de compilação utilizada primariamente em projetos Java. Ela é similar à ferramenta Ant, mas é baseada em conceitos e trabalhos diferentes em um modo diferente. Também é utilizada para construir e gerenciar projetos escritos em C#, Ruby, Scala e outras linguagens.",
  },
  {
    nome: "Hibernate",
    img: "https://www.vectorlogo.zone/logos/hibernate/hibernate-ar21.svg",
    desc: "O Hibernate é um framework para o mapeamento objeto-relacional escrito na linguagem Java, mas também é disponível em .Net com o nome NHibernate.",
  },
  {
    nome: "Boostrap",
    img: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg",
    desc: "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.",
  },
  {
    nome: "tailwindcss",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg",
    desc: "Traduzido do inglês-Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.",
  },
  {
    nome: "postgresql",
    img: "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg",
    desc: "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
  },
  {
    nome: "mysql",
    img: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
    desc: "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.",
  },
  {
    nome: "sqlite",
    img: "https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg",
    desc: "SQLite é uma biblioteca em linguagem C que implementa uma base de dados SQL embutida. Programas que usem a biblioteca SQLite podem ter acesso a banco de dados SQL sem executar um processo SGBD separado",
  },
  {
    nome: "visual studio code",
    img: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg",
    desc: "O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.",
  },
  {
    nome: "git",
    img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg",
    desc: "Git (ou em inglês britânico) é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
  },
  {
    nome: "gitlab",
    img: "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg",
    desc: "O GitLab é um gerenciador de repositório de software baseado em git, com suporte a Wiki, gerenciamento de tarefas e CI/CD. GitLab é similar ao GitHub, mas o GitLab permite que os desenvolvedores armazenem o código em seus próprios servidores, ao invés de servidores de terceiros.",
  },
  {
    nome: "github",
    img: "https://www.vectorlogo.zone/logos/github/github-ar21.svg",
    desc: "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",
  },
  {
    nome: "bitbucket",
    img: "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-ar21.svg",
    desc: "Bitbucket é um serviço de hospedagem de projetos controlados através do Mercurial, um sistema de controle de versões distribuído. É similar ao GitHub. Bitbucket têm um serviço grátis e um comercial. O serviço é escrito em Python.",
  },
  {
    nome: "jenkins",
    img: "https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg",
    desc: "Jenkins é um servidor de automação de código aberto. Ele ajuda a automatizar as partes do desenvolvimento de software relacionadas à construção, teste e implantação, facilitando a integração e a entrega contínuas. É um sistema baseado em servidor executado em contêineres de servlet como o Apache Tomcat.",
  },
  {
    nome: "redis",
    img: "https://www.vectorlogo.zone/logos/redis/redis-ar21.svg",
    desc: "Redis é um armazenamento de estrutura de dados em memória, usado como um banco de dados em memória distribuído de chave-valor, cache e agente de mensagens, com durabilidade opcional.",
  },
  {
    nome: "postman",
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg",
    desc: "Postman é uma aplicação que permite testar APIs web. O software foi criado em 2012 por Abhinav Asthana, Ankit Sobti e Abhijit Kane em Bangalore, Índia, para resolver o problema de compartilhamento de testes de API.",
  },
  {
    nome: "jira",
    img: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg",
    desc: "Jira é um software comercial desenvolvido pela empresa Australiana Atlassian. É uma ferramenta que permite o monitoramento de tarefas e acompanhamento de projetos garantindo o gerenciamento de todas as suas atividades em único lugar.",
  },
  {
    nome: "discord",
    img: "https://www.vectorlogo.zone/logos/discord/discord-ar21.svg",
    desc: "Discord é um aplicativo de voz sobre IP e comunicação textual. É uma aplicação gratuita que foi projetado inicialmente para comunidades específicas de jogos. O aplicativo Discord está disponível para os sistemas operacionais Microsoft Windows, MacOS, Android, iOS, Linux e em navegadores da Web.",
  },
];

export default function Skills() {
  return (
    <section className="bg-gradient-to-t from-slate-500 pb-5 p-10 flex flex-col">
      <div className="text-2xl self-center">
        <h2 className="my-10 font-black lg:text-2xl ">About</h2>
      </div>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {skillList.map((skill, index) => (
          <Skillcard
            key={index}
            imgSrc={skill.img}
            alt={skill.nome}
            text={skill.desc}
          />
        ))}
      </div>
    </section>
  );
}
