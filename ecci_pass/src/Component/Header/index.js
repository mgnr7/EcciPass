import { FiSettings, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-ucr-light-blue border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          ECCIPASS
        </span>
        <div className="flow-root w-96 bg-ucr-yellow rounded-md">
          <div className="float-left">
            <a href="/" className="block py-2 pr-4 pl-3 text-black">
              Inicio
            </a>
          </div>
          <div className="float-right">
            <a href="/" className="block py-2 pr-4 pl-3 text-black">
              Ayuda
            </a>
          </div>
        </div>

        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 ">
          <div className="border-2 border-black py-2 pr-4 pl-3">
            <Link to="/login">
              <FiSettings />
            </Link>
          </div>
          <div className="border-2 border-black py-2 pr-4 pl-3">
            <Link to="/login">
              <FiUser />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
