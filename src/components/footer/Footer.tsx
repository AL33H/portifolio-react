const Footer = () => {
  return (
    <section className="flex flex-col items-center bg-gray-800">
      <div className="mt-5 mb-2 text-white">
        <h5>Designed and Built by Aleff Remberto</h5>
      </div>
      <div className="flex flex-row gap-3">
        <a
          className=""
          href="https://img.icons8.com/doodle/40/000000/github.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/doodle/40/000000/github.png"
            alt="github"
          />
        </a>
        <a
          className=""
          href="https://www.linkedin.com/in/aleff-remberto-0b60b21b2"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/doodle/40/000000/linkedin.png"
            alt="linkedin"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
