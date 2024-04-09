import "../../index.css";
import Typed from "react-typed";

const Home = () => {
  return (
    <section className="bg-hero bg-no-repeat w-full">
      <div className="flex flex-col ml-10 lg:flex-row items-center justify-center gap-6 lg:h-[calc(100vh-48px)]  ">
        <div>
          <p className="font-normal">Olá, meu nome é</p>
          <p className="uppercase font-black tracking-widest text-blue-700 text-4xl">
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
        <div className="w-2/3">
          <img
            src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
            alt="eu"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
