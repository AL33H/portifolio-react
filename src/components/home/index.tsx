import Typed from "react-typed";

const Home = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col ml-10 lg:flex-row items-center justify-center gap-6 lg:h-[calc(100vh-48px)]  ">
        <div>
          <p className="font-normal">Olá, meu nome é</p>
          <p className="uppercase font-black tracking-widest text-slate-900 text-4xl">
            Aleff Remberto
          </p>
          <Typed
            className="text-4xl"
            strings={[
              "Front-end developer",
              "Back-end developer",
              "Full-stack developer",
              "Web developer",
            ]}
            typeSpeed={30}
            backSpeed={60}
            loop
          />
          <div className="flex flex-row gap-5 mt-5">
            <a
              className="hover:scale-150"
              href="https://github.com/AL33H"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/doodle/40/000000/github.png"
                alt="github"
              />
            </a>
            <a
              className="hover:scale-150"
              href="https://www.linkedin.com/in/aleff-remberto-0b60b21b2"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/doodle/40/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a
              className="hover:scale-150"
              href="https://cursos.alura.com.br/user/aleff-santos"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-10 h-10"
                src="https://cursos.alura.com.br/assets/images/logos/logo-alura.svg"
                alt="alura"
              />
            </a>
            <a
              className="hover:scale-150"
              href="https://www.dio.me/users/aleff_remberto"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-10 h-10"
                src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg"
                alt="Digital Innovation One"
              />
            </a>
          </div>
        </div>
        <div>
          <img
            className="px-6 mb-10"
            src="https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/master/code.gif"
            alt="eu"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
