export default function Footer() {
  return (
    <section className="flex flex-col items-center justify-end bg-slate-500 h-80 pb-5">
      <div className="mt-5 mb-2 text-white">
        <h5>Powered by Aleff Remberto</h5>
      </div>
      <div className="flex flex-row gap-3">
        <a href="https://github.com/AL33H" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/doodle/40/000000/github.png"
            alt="github"
          />
        </a>
        <a
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
    </section>
  );
}
