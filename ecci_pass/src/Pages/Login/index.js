import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-5/12 px-4 md:px-0">
                  <div className="md:p-12 bg-ucr-light-blue">
                    <div className="text-center">
                      <h2 className="text-xl text-white font-semibold mt-1 mb-7 pb-1">
                        Inicio de Sesión
                      </h2>
                    </div>
                    <form>
                      <p className="mb-8 text-white">
                        Inicie sesión para poder acceder a su cuenta
                      </p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Usuario"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Contraseña"
                        />
                      </div>
                      <a className="text-white" href="#!">
                        Olvidó su contraseña?
                      </a>
                      <div className="text-center pt-1 mb-12 pb-1 mt-12">
                        <button
                          className="inline-block px-6 py-2.5 text-white bg-[#1271c0] hover:bg-ucr-blue font-medium text-xs leading-tight uppercase rounded shadow-md w-full mb-3"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Iniciar Sesión
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <div>
                      <h2 className="text-xl font-semibold mt-1 mb-7 pb-1">
                        Registrese
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
