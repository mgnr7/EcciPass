import { FiSettings, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-ucr-light-blue px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <span className="self-center text-xl font-semibold">ECCIPASS</span>
        <div className="flow-root w-96 h-1/2 bg-ucr-yellow border-black border-2 rounded-md">
          <div className="float-left mt-1 mb-1">
            <div className="border-black border-t-0 border-l-0 border-r-2 border-b-0">
              <a href="/" className="block pr-10 pl-10 text-black ">
                Inicio
              </a>
            </div>
          </div>
          <div className="float-right mt-1 mb-1">
            <div className="border-black border-t-0 border-l-2 border-r-0 border-b-0">
              <a href="/" className="block pr-10 pl-10 text-black ">
                Ayuda
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between w-full md:flex md:w-auto md:order-1 ">
          <div className=" py-2 pr-5 pl-3">
            {/*Modificar Link para que rediriga a Settings cuando este implementada la pantalla*/}
            <Link to="/login">
              <FiSettings size={25} />
            </Link>
          </div>
          <div className=" py-2 pl-5">
            <Link to="/login">
              <FiUser size={25} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
