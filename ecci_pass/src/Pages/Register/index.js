import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../Slices/userSlice";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [carnet, setCarnet] = useState("");
  const [id, setId] = useState("");
  const [mail, setMail] = useState("");
  const [userType, setUserType] = useState("");
  const [userPicture, setPicture] = useState("");

  //TODO- Agregar seleccionar tipo cuenta
  //TODO- Estandarizacion

  const userIsLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return userIsLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-ucr-light-blue h-3/2 rounded-lg p-4">
        <div className="text-center">
          <h1 className="text-5xl text-white font-semibold mt-1 mb-4 pb-1">
            Registrar cuenta ECCIPASS
          </h1>
          <p className="mb-8 text-gray-200 text-2xl">
            Regístrese para acceder a la plataforma
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
        <div className="flex justify-center mb-4">
          <input
            type="name"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="name"
            placeholder="Nombre"
            value={name}
            onChange={(evt) => {
              setName(evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="apellido"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="apellido"
            placeholder="Apellido"
            value={apellido}
            onChange={(evt) => {
              setApellido(evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="carnet"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="carnet"
            placeholder="Carnet"
            value={carnet}
            onChange={(evt) => {
              setCarnet(evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="id"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="id"
            placeholder="Identificacion"
            value={id}
            onChange={(evt) => {
              setId(evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="mail"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="mail"
            placeholder="Correo"
            value={mail}
            onChange={(evt) => {
              setMail(evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <select 
            type="userType"
            id="userType" 
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={userType}
            onChange={(evt) => {
              setUserType(evt.target.value);
            }}
            >
            <option selected>Tipo de cuenta</option>
            <option value="Estudiante">Estudiante</option>
            <option value="Profesor">Profesor</option>
            <option value="Invitado">Invitado</option>
          </select>
        </div>
        <div className="mb-1 flex justify-evenly">
          <p className="mb-2 text-gray-200 text-1xl">
            Imagen de perfil
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <input 
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            id="userPicture" 
            type="file"
            value={userPicture}
            onChange={(evt) => {
              setPicture(evt.target.value);
            }}
          />
        </div>
        <div className="text-center">
          <a className="text-white text-sm" href="#!">
            Olvidó su contraseña?
          </a>
        </div>
        <div className="text-center pt-1 mb-12 pb-1 mt-8">
          <button
            className="inline-block h-12 px-6 py-2.5 text-white bg-[#1271c0] hover:bg-ucr-blue font-medium text-1xl leading-tight uppercase rounded-3xl shadow-md mb-0"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={() => {
              dispatch(login());
            }}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
