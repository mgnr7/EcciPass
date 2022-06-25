// import { useSelector } from "react-redux";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RegisterDevice() {

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [activeType, setActiveType] = useState("");

    const dispatch = useDispatch();

    return (
        <div>
            <Header />
            <div className="flow-root w-100 text-gray-700 px-14 py-2 md:flex-row">
                <div className="mb-2">
                    <h1 className="text-4xl mt-8" > Registro activo nuevo </h1>
                </div>
                <div className="w-6/12">
                    <form className="bg-white shadow-md rounded px-8 pt-10 pb-10 mb-8">
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
            <Footer />
        </div>
    );
}