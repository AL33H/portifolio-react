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
