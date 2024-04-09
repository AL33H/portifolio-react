import "./../../index.css";
import { FaHome } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { FaBook } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gradient-to-tr from-cyan-300 py-2">
      <div className="">
        <nav className="flex font-bold text-cyan-600 items-center ml-2">
          <ul className="flex gap-4 ">
            <li>
              <a
                className="flex flex-row items-center gap-1 hover:text-cyan-900"
                href="/"
              >
                <FaHome />
                Home
              </a>
            </li>
            <li>
              <a
                className="flex flex-row items-center gap-1 hover:text-cyan-900"
                href="#about"
              >
                <AiFillFire />
                About
              </a>
            </li>
            <li>
              <a
                className="flex flex-row items-center gap-1 hover:text-cyan-900"
                href="#skills"
              >
                <FaBook />
                Skills
              </a>
            </li>
            <li>
              <a
                className="flex flex-row items-center gap-1 hover:text-cyan-900"
                href="#contact"
              >
                <FaRegAddressBook />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
