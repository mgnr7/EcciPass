import { FiSettings, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className=" w-full bg-ucr-light-blue p-3">
      <div className=" container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">ECCIPASS</span>
        </div>

        <div className="h-11 w-96 flex items-center bg-ucr-yellow rounded-md">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
          >
            Inicio
          </a>
          <a
            href="/"
            className="block text-right mt-4 lg:inline-block lg:mt-0 text-black hover:text-white"
          >
            Ayuda
          </a>
        </div>

        <div className="absolute inset-y-0 right-0">
          <Link to="/login">
            <FiSettings />
          </Link>
          <Link to="/login">
            <FiUser />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
