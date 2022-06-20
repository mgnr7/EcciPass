import Header from "../../Component/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flow-root w-screen text-gray-700 px-14 py-2">
        <div className="float-left">
          <p className="text-4xl">Activos electrónicos registrados</p>
        </div>
        <div className="float-right">
          <p className="text-lg">Nombre Usuario</p>
        </div>
      </div>

      <div class="pt-6 pb-12">
        <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
          <div className="flow-root text-gray-700 px-14 py-2">
            <div className="float-left">
              <p>Estado</p>
            </div>
            <div className="float-right">
              <button className="bg-ucr-blue text-white">
                Registrar dispositivo
              </button>
            </div>
          </div>

          <div class="flex flex-col border-2 border-black md:flex-row overflow-hidden bg-gray-300 rounded-lg shadow-xl  mt-4 w-100 mx-2">
            <div class="h-64 w-auto md:w-1/2">
              <img
                class="inset-0 h-full w-full object-cover object-center"
                src=""
                alt="Imagen del dispositivo"
              />
            </div>

            <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
              <h3 class="font-semibold text-lg leading-tight truncate">
                Titulo
              </h3>
              <p class="mt-2">texto de prueba</p>
              <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                Autor
              </p>
            </div>
            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
              <button className="bg-ucr-green">Generar Comprobante</button>
              <button className="bg-ucr-orange ">Más detalles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
