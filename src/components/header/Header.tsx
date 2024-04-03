import "./../../index.css";

const Header = () => {
  return (
    <header className="flex flex-row justify-between bg-gradient-to-r from-cyan-300 h-12 items-center">
      <div className="ml-4">
        <h1>Al33H</h1>
      </div>
      <div className="flex flex-row">
        <nav>
          <ul className="flex flex-row gap-4 mr-4 font-bold scroll-smooth hover:cursor-pointer">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a
                className="scroll-smooth"
                href="#about"
                rel="#about"
                target="about"
              >
                About
              </a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
