import { /*useSelector,*/ useDispatch } from "react-redux";
import { useState } from "react";
import { registerDevice } from "../../Slices/devicesSlice";
import { Link } from "react-router-dom";

export default function RegisterDevice() {
  const [devicePicture, setDevicePicture] = useState(null);
  const [device, setDevice] = useState({
    brand: "",
    model: "",
    serialNumber: "",
    activeType: "",
    picture: "",
  });

  const dispatch = useDispatch();
  const handleChange = (field, value) => {
    setDevice({
      ...device,
      [field]: value,
    });
  };

  //const deviceState = useSelector((state) => state.product);

  return (
    <div>
      <div className="grid grid-cols-5 gap-0">
        <div className="col-span-4">
          <div className="flow-root w-100 text-gray-700 px-14 py-2 md:flex-row">
            <div className="mb-8">
              <h1 className="text-4xl mt-6"> Registro activo nuevo </h1>
            </div>
            <div className="w-11/12">
              <form className="bg-white shadow-lg rounded px-8 pt-6 pb-10 mb-8 border-2">
                <div className="mb-10">
                  <label
                    className="block text-gray-700 text-xl font-bold mb-2"
                    for="brand"
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
                    for="model"
                  >
                    Modelo activo
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
                    for="serialNumber"
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
                    for="activeType"
                  >
                    Tipo de dispositivo
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="activeType"
                      defaultValue={"Dispositivo"}
                      value={device.activeType}
                      onChange={(evt) => {
                        handleChange("activeType", evt.target.value);
                      }}
                    >
                      <option value="Dispositivo" disabled>
                        Seleccione una opción
                      </option>
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
          <div class="flex justify-center items-center w-full">
            <input
              className="block w-full mb-4 border rounded-md"
              id="productPhoto"
              onChange={(evt) => {
                setDevicePicture(evt.target.files[0]);
              }}
              type="file"
            />
            {devicePicture && (
              <img
                src={URL.createObjectURL(devicePicture)}
                alt="Preview activo"
              />
            )}
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
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            dispatch(
              registerDevice({
                device,
                devicePicture,
              })
            );
            <div className="flex items-center justify-center h-16 bg-green-800 text-white w-full rounded-md mb-8 animate-bounce">
                <p>Activo registrado exitósamente</p>
            </div>
          }}
        >
          Registrar activo
        </button>
      </div>
    </div>
  );
}
