import { useDispatch } from "react-redux";
import Header from "../../Component/Header";

export default function DeviceDetails() {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="container mx-auto h-screen">
        <div className="h-5/6 p-10">
          <div className="columns-2">
            <div>
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
            <div>
              <img
                alt="Imagen del dispositivo"
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
              ></img>
            </div>
          </div>
          <div className="w-full my-20 flex justify-center">
            <button className="btn mr-5 bg-ucr-green hover:bg-green-600 text-white font-bold py-5 px-8 rounded-lg">
              Volver a dispositivos
            </button>

            <button className="btn mx-5 bg-sky-600 hover:bg-ucr-blue text-white font-bold py-5 px-8 rounded-lg">
              Reportar como extraviado
            </button>

            <button className="btn ml-5 bg-red-500 hover:bg-red-600 text-white font-bold py-5 px-8 rounded-lg">
              Eliminar dispositivo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
