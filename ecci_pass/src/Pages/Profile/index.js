import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import {useSelector } from "react-redux";
//import { useEffect } from "react";
//import userSlice, { login, register } from "../../Slices/userSlice";
//import Register from "../Register";

const InformacionUser = [
    {
        usuario: "User EcciPass",
        Nombre: "NombreUser",
        Apellidos: "Appellido1 Appellido2",
        Identificacion: "118180582",
        Correo: "user@ucr.ac.cr",
        TipoCuenta: "Estudiante",
    },
];

export default function Profile() {
    const user = useSelector((state) => state.user.user);

    return (
        <div>
            <Header />
            <div class="grid grid-cols-5 gap-0">
                <div class="col-span-3 ">
                    <div className="flow-root w-100 text-gray-700 px-14 py-2 md:flex-row">
                        <div className="mb-8">
                            <h1 className="text-4xl mt-6"> Información sobre usuario </h1>
                        </div>
                        <div className="w-11/12">
                            <div className="bg-white shadow-lg rounded px-8 pt-6 pb-10 mb-8 border-2">
                                {InformacionUser.map((d) => {
                                    return (
                                        <div>
                                            <div className="mb-10">
                                                <label className="block text-gray-700 text-xl font-bold mb-2">
                                                    Usuario
                                                </label>
                                                <p> {d.usuario} </p>
                                            </div>
                                            <div className="mb-10 mt-5">
                                                <label
                                                    className="block text-gray-700 text-xl font-bold mb-2">
                                                    Nombre
                                                </label>
                                                <p> {d.Nombre} </p>
                                            </div>
                                            <div className="mb-10 mt-5">
                                                <label
                                                    className="block text-gray-700 text-xl font-bold mb-2">
                                                    Apellidos
                                                </label>
                                                <p> {d.Apellidos} </p>
                                            </div>
                                            <div className="mb-10 mt-5">
                                                <label
                                                    className="block text-gray-700 text-xl font-bold mb-2">
                                                    Identificacion
                                                </label>
                                                <p> {user && user.id ? `${user.id}` : "x-xxxx-xxxx"} </p>
                                            </div>
                                            <div className="mb-10 mt-5">
                                                <label
                                                    className="block text-gray-700 text-xl font-bold mb-2">
                                                    Correo electrónico
                                                </label>
                                                <p> {d.Correo} </p>
                                            </div>
                                            <div className="mb-1 mt-5">
                                                <label
                                                    className="block text-gray-700 text-xl font-bold mb-2">
                                                    Tipo de cuenta
                                                </label>
                                                <p> {d.TipoCuenta} </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center pt-60 mb-6 pb-1 mt-2 mr-2 ml-20">
                    <label className="block text-gray-700 text-xl font-bold mb-2">
                        Imágen de perfil
                    </label>
                    <div class="flex justify-center items-center w-full">
                        <div class="relative w-52 h-52 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg
                                class="absolute w-52 h-52 text-gray-400 -left-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
