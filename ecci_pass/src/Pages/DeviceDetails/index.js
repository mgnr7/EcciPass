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
          <div className="w-full inline-flex items-center">
            <div className="">
              <button className="btn bg-ucr-green text-white font-bold py-2 px-4">
                Volver a dispositivos
              </button>

              <button className="btn bg-ucr-blue text-white font-bold py-2 px-4">
                Reportar como extraviado
              </button>

              <button className="btn bg-red-600 text-white font-bold py-2 px-4">
                Eliminar dispositivo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
