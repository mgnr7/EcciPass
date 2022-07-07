import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../Slices/userSlice";
import { createUser } from "../../Slices/userSlice";

export default function Register() {

  const [userPicture, setPicture] = useState(null);
  const [user, setUser] = useState({
    username: "",
    password: "",
    mail: "",
    name: "",
    apellido: "",
    id: "",
    userType: "",
    profilePicture: "",
  });

  const errorMessage = useSelector((state) => state.user.errorMessage);
  const userIsLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const handleChange = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

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
            value={user.username}
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
            value={user.password}
            onChange={(evt) => {
              handleChange("password", evt.target.value);
            }}
          />
        </div>
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
        <div className="flex justify-center mb-4">
          <input
            type="name"
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="name"
            placeholder="Nombre"
            value={user.name}
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
            value={user.apellido}
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
            value={user.id}
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
            value={user.mail}
            onChange={(evt) => {
              handleChange("mail", evt.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <select 
            type="userType"
            id="userType" 
            className="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            defaultValue={"Tipo"}
            value={user.userType}
            onChange={(evt) => {
              handleChange("userType", evt.target.value);
            }}
            >
            <option value="Tipo" disabled>
              Seleccione un tipo de cuenta
            </option>
            <option value="Estudiante">Estudiante</option>
            <option value="Profesor">Profesor</option>
            <option value="Invitado">Invitado</option>
          </select>
        </div>
        <div className="mb-1 flex justify-evenly">
          <p className="mb-2 text-gray-200 text-1xl">
            Imágen de perfil
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <input
              className="block w-full mb-4 border rounded-md"
              id="productPhoto"
              onChange={(evt) => {
                setPicture(evt.target.files[0]);
              }}
              type="file"
            />
            {userPicture && (
              <img
                src={URL.createObjectURL(userPicture)}
                alt="Preview Foto perfil"
              />
            )}
        </div>
        <div className="text-center pt-1 mb-8 pb-1 mt-10">
          <button
            className="inline-block h-14 px-6 py-2.5 text-white bg-[#1271c0] hover:bg-ucr-blue font-medium text-1xl leading-tight uppercase rounded-3xl shadow-md mb-0"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={() => {
              dispatch(
                login(),
                createUser({
                  user,
                  userPicture,
                })
              );
            }}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
