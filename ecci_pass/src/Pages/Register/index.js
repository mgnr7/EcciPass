import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../Slices/userSlice";
import { /*cleanState,*/ registerUser } from "../../Slices/userSlice";

export default function Register() {
  const [picture, setPicture] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    name: "",
    apellido: "",
    id: "",
    email: "",
    userType: "Estudiante",
    imageUrl: "",
  });

  const handleChange = (field, value) => {
    setNewUser({
      ...newUser,
      [field]: value,
    });
  };

  const userIsLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  //const deviceCondition = useSelector((state) => state.devices);

  return userIsLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-ucr-light-blue h-3/2 rounded-lg p-3">
        <div className="text-center">
          <h1 className="text-5xl text-white font-semibold mt-1 mb-10 pb-1">
            Registro cuenta
          </h1>
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="username"
            placeholder="Usuario"
            value={newUser.username}
            onChange={(evt) => {
              handleChange("username", evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center  mb-4">
          <input
            type="password"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="password"
            placeholder="Contraseña"
            value={newUser.password}
            onChange={(evt) => {
              handleChange("password", evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="name"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="name"
            placeholder="Nombre"
            value={newUser.name}
            onChange={(evt) => {
              handleChange("name", evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="apellido"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="apellido"
            placeholder="Apellido"
            value={newUser.apellido}
            onChange={(evt) => {
              handleChange("apellido", evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="id"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="id"
            placeholder="Identificacion"
            value={newUser.id}
            onChange={(evt) => {
              handleChange("id", evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="mail"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="mail"
            placeholder="Correo"
            value={newUser.email}
            onChange={(evt) => {
              handleChange("email", evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <select
            type="userType"
            id="userType"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={newUser.userType}
            onChange={(evt) => {
              handleChange("userType", evt.target.value);
            }}
          >
            <option selected>Tipo de cuenta</option>
            <option value="Estudiante">Estudiante</option>
            <option value="Profesor">Profesor</option>
            <option value="Invitado">Invitado</option>
          </select>
        </div>
        <div className="mb-1 flex justify-evenly">
          <p className="mb-2 text-gray-200 text-1xl">Imágen de perfil</p>
        </div>
        <div className="flex justify-center mb-4">
          {picture && (
            <img src={URL.createObjectURL(picture)} alt="Device preview" />
          )}
          {!picture && (
            <div className="flex justify-center items-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col justify-center items-center w-10/12 h-36  rounded-lg border-2 border-dashed cursor-pointer dark:hover:bg-bray-800 bg-gray-50  border-gray-50 hover:border-gray-300 hover:bg-gray-300"
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    className="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">
                      Presione para subir un archivo
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Imágen del activo a registrar
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    setPicture(e.target.files[0]);
                  }}
                />
              </label>
            </div>
          )}
        </div>
        <div className="text-center pt-1 mb-8 pb-1 mt-10">
          <button
            className="inline-block h-14 px-6 py-2.5 text-white bg-[#1271c0] hover:bg-ucr-blue font-medium text-1xl leading-tight uppercase rounded-3xl shadow-md mb-0"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={() => {
              dispatch(login());
              dispatch(registerUser({ newUser, picture }));
            }}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
