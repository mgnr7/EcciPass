import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanState, registerDevice } from "../../Slices/devicesSlice";
import Mixpanel from "../../Services/mixpanel";

export default function RegisterDevice() {
  const [picture, setPicture] = useState(null);
  const [device, setDevice] = useState({
    brand: "",
    model: "",
    serialNumber: "",
    deviceType: "Laptop",
    imageUrl: "",
    state: "revision",
  });

  const handleChange = (field, value) => {
    setDevice({
      ...device,
      [field]: value,
    });
  };

  const dispatch = useDispatch();
  const deviceCondition = useSelector((state) => state.devices);
  return (
    <div>
      {deviceCondition.condition ? (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
          <div className="rounded-md mb-10 animate-bounce">
            <p>Dispositivo registrado exitósamente</p>
          </div>
          <div className="justify-center mt-10">
            <Link
              className="btn bg-ucr-green hover:bg-green-600 text-white font-bold py-5 px-8 rounded-lg"
              to="/"
              onClick={() => {
                dispatch(cleanState());
              }}
            >
              Volver a dispositivos
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-5 gap-0">
            <div className="col-span-4">
              <div className="flow-root w-100 text-gray-700 px-14 py-2 md:flex-row">
                <div className="mb-8">
                  <h1 className="text-4xl mt-14 mb-16"> Registro activo nuevo </h1>
                </div>
                <div className="w-11/12">
                  <form className="bg-white shadow-lg rounded px-8 pt-6 pb-10 mb-8 border-2">
                    <div className="mb-10">
                      <label
                        className="block text-gray-700 text-xl font-bold mb-2"
                        htmlFor="brand"
                      >
                        Marca activo
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="brand"
                        type="text"
                        placeholder="Inserte la marca del dispositivo"
                        value={device.brand}
                        onChange={(evt) => {
                          handleChange("brand", evt.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-10">
                      <label
                        className="block text-gray-700 text-xl font-bold mb-2"
                        htmlFor="model"
                      >
                        Modelo del activo
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="model"
                        type="text"
                        placeholder="Inserte el modelo del dispositivo"
                        value={device.model}
                        onChange={(evt) => {
                          handleChange("model", evt.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-10">
                      <label
                        className="block text-gray-700 text-xl font-bold mb-2"
                        htmlFor="serialNumber"
                      >
                        Número de serie
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="serialNumber"
                        type="text"
                        placeholder="Digite el número de serie del dispositivo"
                        value={device.serialNumber}
                        onChange={(evt) => {
                          handleChange("serialNumber", evt.target.value);
                        }}
                      />
                      <p className="text-blue-900 text-sm italic mt-2">
                        El número de serie lo puede encontrar en los ajustes del
                        dispositivo
                      </p>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-xl font-bold mb-2"
                        htmlFor="activeType"
                      >
                        Tipo de dispositivo
                      </label>
                      <div className="relative">
                        <select
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="activeType"
                          value={device.deviceType}
                          onChange={(evt) => {
                            handleChange("deviceType", evt.target.value);
                          }}
                        >
                          <option>Laptop</option>
                          <option>Tablet</option>
                          <option>Periférico</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center pt-60 mb-6 pb-1 mt-2 mr-24">
              <label className="block text-gray-700 text-xl font-bold mb-2">
                Imágen activo
              </label>
              {picture && (
                <img src={URL.createObjectURL(picture)} alt="Device preview" />
              )}
              {!picture && (
                <div className="flex justify-center items-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
          </div>
          <div className="text-center pt-1 mb-12 pb-1 mt-8">
            <Link
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline mr-24"
              type="button"
              to="/"
            >
              Cancelar
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                Mixpanel.track(Mixpanel.TYPES.OPEN_ADD_DEVICE_BUTTON);
                dispatch(registerDevice({ device, picture }));
              }}
            >
              Registrar activo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
