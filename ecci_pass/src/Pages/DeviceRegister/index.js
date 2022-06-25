//import { useSelector } from "react-redux";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

export default function DeviceRegister() {
  return (
    <div>
      <Header />
      <div className="flow-root w-100 text-gray-700 px-14 py-2 md:flex-row">
        <h1 className="text-4xl mt-12">Registro activo</h1>
        <div className="mb-4">
          <div className="mt-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-2xl"
              for="brand"
            >
              Marca activo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-22 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline"
              id="brand"
              type="text"
              placeholder="Inserte la marca"
            ></input>
          </div>
          <div className="mt-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-2xl"
              for="model"
            >
              Modelo activo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-22 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline"
              id="model"
              type="text"
              placeholder="Inserte el modelo"
            ></input>
          </div>
          <div className="mt-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-2xl"
              for="serialModel"
            >
              Número de serie
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-22 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline"
              id="serialModel"
              type="text"
              placeholder="Inserte el numero de serie"
            ></input>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Tipo de activo
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Laptop</option>
                <option>Tablet</option>
                <option>Periférico</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
