import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { postLogin } from "../../Slices/userSlice";
import Mixpanel from "../../Services/mixpanel";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userIsLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();

  return userIsLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-ucr-light-blue h-2/3 rounded-lg p-4">
        <div className="text-center">
          <h1 className="text-4xl text-white font-semibold mt-1 mb-4 pb-1">
            Inicio de Sesión
          </h1>
          <p className="mb-8 text-gray-200">
            Inicie sesión para poder acceder a su cuenta
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="username"
            placeholder="Usuario"
            value={username}
            onChange={(evt) => {
              setUsername(evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center  mb-4">
          <input
            type="password"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
          />
        </div>
        <div className="text-center">
          <a className="text-white text-sm" href="#!">
            Olvidó su contraseña?
          </a>
        </div>
        <div className="text-center mt-8">
          <a className="text-white text-lg" href="/register">
            Registrarse
          </a>
        </div>
        <div className="text-center pt-1 mb-12 pb-1 mt-8">
          <button
            className="inline-block h-12 px-6 py-2.5 text-white bg-[#1271c0] hover:bg-ucr-blue font-medium text-xs leading-tight uppercase rounded-3xl shadow-md mb-3"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={() => {
              Mixpanel.track(Mixpanel.TYPES.USER_LOGIN_ECCIPASS);
              dispatch(
                postLogin({
                  username,
                  password,
                })
                //login()
              );
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
