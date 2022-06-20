import { useDispatch } from "react-redux";
import Header from "../../Component/Header";

export default function DeviceDetails() {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="container mx-auto h-screen">
        <div className="h-5/6 p-10">
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-2/3 lg:w-3/4">
              <p className="text-3xl">Detalles del Activo</p>
              <ul className="mt-7">
                <li className="font-semibold text-lg">Marca</li>
                <li className="mb-2">Apple</li>
                <li className="font-semibold text-lg">Modelo</li>
                <li className="mb-2">MacBook pro 2019</li>
                <li className="font-semibold text-lg">Número de serie</li>
                <li className="mb-2">AIJFDB992BNHB2</li>
                <li className="font-semibold text-lg">Tipo de dispositivo</li>
                <li className="mb-2">Laptop</li>
                <li className="font-semibold text-lg">Estado</li>
                <li className="mb-2">Aprobado</li>
              </ul>
            </div>
            <div className="md:w-2/3 lg:w-3/4">
              <img
                className=""
                alt="Imagen del dispositivo"
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
              ></img>
            </div>
          </div>
          <div className="w-full flex justify-center lg:my-20">
            <div className="justify-center">
              <button className="btn bg-ucr-green hover:bg-green-600 text-white font-bold py-5 px-8 rounded-lg lg:mr-5 ">
                Volver a dispositivos
              </button>

              <button className="btn bg-sky-600 hover:bg-ucr-blue text-white font-bold py-5 px-8 rounded-lg lg:mx-5">
                Reportar como extraviado
              </button>

              <button className="btn bg-red-500 hover:bg-red-600 text-white font-bold py-5 px-8 rounded-lg lg:ml-5q">
                Eliminar dispositivo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
