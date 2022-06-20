import Header from "../../Component/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flow-root w-screen text-gray-700 px-14 py-2 md:flex-row">
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
              <p className="font-semibold">Estado: </p>
            </div>
            <div className="float-right">
              <button className="bg-sky-600 hover:bg-ucr-blue text-white rounded-lg px-4 py-2">
                Registrar dispositivo
              </button>
            </div>
          </div>

          <div class="flex flex-col border-2 border-black md:flex-row bg-gray-300 rounded-lg shadow-xl mt-4 w-100 mx-2 px-5 py-2">
            <div class="h-64 w-auto md:w-1/2">
              <img
                class="inset-0 h-full w-full object-cover object-center object-scale-down"
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
                alt="Imagen del dispositivo"
              />
            </div>

            <div class="w-full py-4 px-6 text-gray-800 flex flex-col">
              <p class="font-semibold text-lg">Marca</p>
              <p class="">Apple</p>
              <p class="font-semibold text-lg">Modelo</p>
              <p class="text-lg truncate">MacBook Pro 2019</p>
              <p class="font-semibold text-lg truncate">Número de serie</p>
              <p class="text-lg truncate">IJASN23KM200</p>
              <p class="font-semibold text-lg truncate">Tipo de dispositivo</p>
              <p class="text-lg truncate">Laptop</p>
            </div>

            <div className="w-full py-4 px-6 text-gray-800 flex flex-col items-center">
              <button className="lg:w-3/4 lg:mb-8 lg:mt-8 bg-ucr-green hover:bg-green-600 text-white rounded-lg px-4 py-4">
                Generar Comprobante
              </button>
              <button className="lg:w-3/4 lg:mt-8 lg:mb-8 bg-ucr-orange hover:bg-orange-600 text-white rounded-lg px-4 py-4">
                Más detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
