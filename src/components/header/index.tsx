import "./../../index.css";
import { FaHome } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { FaBook } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa";

export default function Header() {
  return (
    <header className=" py-2 bg-slate-800">
      <div className="">
        <nav className="flex font-bold text-cyan-400 items-center ml-2">
          <ul className="flex gap-4 ">
            <li>
              <a
                className="flex flex-row items-center gap-1 hover:text-white"
                href="/"
              >
                <FaHome />
                Home
              </a>
            </li>
            <li>
              <a
                className="flex flex-row items-center gap-1 hover:text-white"
                href="#about"
              >
                <AiFillFire />
                About
              </a>
            </li>
            <li>
              <a
                className="flex flex-row items-center gap-1 hover:text-white"
                href="#skills"
              >
                <FaBook />
                Skills
              </a>
            </li>
            <li>
              <a
                className="flex flex-row items-center gap-1 hover:text-white"
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
