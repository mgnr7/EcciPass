// import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterDevice() {

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [activeType, setActiveType] = useState("");

    return (
        <div>
            <div class="grid grid-cols-5 gap-0">
                <div class="col-span-4">
                    <div className="flow-root w-100 text-gray-700 px-14 py-2 md:flex-row">
                        <div className="mb-8">
                            <h1 className="text-4xl mt-6" > Registro activo nuevo </h1>
                        </div>
                        <div className="w-11/12">
                            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-10 mb-8 border-2">
                                <div className="mb-10">
                                    <label className="block text-gray-700 text-xl font-bold mb-2" for="brand">
                                        Marca activo
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="brand"
                                        type="text"
                                        placeholder="Inserte la marca del dispositivo"
                                        value={brand}
                                        onChange={(evt) => {
                                            setBrand(evt.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-10">
                                    <label className="block text-gray-700 text-xl font-bold mb-2" for="model">
                                        Modelo activo
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="model"
                                        type="text"
                                        placeholder="Inserte el modelo del dispositivo"
                                        value={model}
                                        onChange={(evt) => {
                                            setModel(evt.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-10">
                                    <label className="block text-gray-700 text-xl font-bold mb-2" for="serialNumber">
                                        Número de serie
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="serialNumber"
                                        type="text"
                                        placeholder="Digite el número de serie del dispositivo"
                                        value={serialNumber}
                                        onChange={(evt) => {
                                            setSerialNumber(evt.target.value);
                                        }}
                                    />
                                    <p className="text-blue-900 text-sm italic mt-2">El número de serie lo puede encontrar en los ajustes del dispositivo</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-xl font-bold mb-2" for="activeType">
                                        Tipo de dispositivo
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="activeType">
                                            value={activeType}
                                            onChange={(evt) => {
                                                setActiveType(evt.target.value);
                                            }}

                                            <option>Laptop</option>
                                            <option>Tablet</option>
                                            <option>Periférico</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="text-center pt-60 mb-6 pb-1 mt-2 mr-24">
                    <label className="block text-gray-700 text-xl font-bold mb-2">
                        Imágen activo
                    </label>
                    <div class="flex justify-center items-center w-full">
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Presione para subir un archivo</span></p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Imágen del activo a registrar</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="text-center pt-1 mb-12 pb-1 mt-8">
                <Link
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline mr-24"
                    type="button"
                    to="/"
                >
                Cancelar
                </Link>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded focus:outline-none focus:shadow-outline" type="button">
                    Registrar activo
                </button>
            </div>
        </div>
    );
}