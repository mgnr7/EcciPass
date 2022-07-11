import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { getDeviceDetails } from "../../Slices/devicesSlice";

export default function DeviceDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const deviceId = parseInt(params.id);

  useEffect(() => {
    dispatch(getDeviceDetails(deviceId));
  }, [deviceId, dispatch]);


  const device = useSelector((state) => state.devices.userDevice);
  const user = useSelector((state) => state.user.user);
  
  return (
    <div>
      <Header />
      {device ? (
        <div className="container mx-auto h-full mb-24">
          <div className="h-5/6 p-10">
            <div className="w-full flex flex-col md:flex-row">
              <div className="md:w-2/3 lg:w-3/4">
                <p className="text-3xl">Detalles del Activo</p>
                <ul className="mt-7">
                  <li className="font-semibold text-lg">Marca</li>
                  <li className="mb-2">{device.brand}</li>
                  <li className="font-semibold text-lg">Modelo</li>
                  <li className="mb-2">{device.model}</li>
                  <li className="font-semibold text-lg">Número de serie</li>
                  <li className="mb-2">{device.serialNumber}</li>
                  <li className="font-semibold text-lg">Tipo de dispositivo</li>
                  <li className="mb-2">{device.deviceType}</li>
                  <li className="font-semibold text-lg">Estado</li>
                  <li className="mb-2">{device.state}</li>
                </ul>
              </div>
              <div className="md:w-2/3 lg:w-3/4">
                <img
                  className=""
                  alt="Imagen del dispositivo"
                  src={device.imageUrl}
                ></img>
              </div>
            </div>
            <div className="w-full flex justify-center lg:my-20">
              <div className="justify-center">
                <Link
                  className="btn bg-ucr-green hover:bg-green-600 text-white font-bold py-5 px-8 rounded-lg lg:mr-5 "
                  to="/"
                >
                  Volver a dispositivos
                </Link>

                <button className="btn bg-sky-600 hover:bg-ucr-blue text-white font-bold py-5 px-8 rounded-lg lg:mx-5">
                  Reportar como extraviado
                </button>
                {user.accountType !== "guarda" && (
                  <button className="btn bg-red-500 hover:bg-red-600 text-white font-bold py-5 px-8 rounded-lg lg:ml-5q">
                    Eliminar dispositivo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Cargando ... </p>
        </div>
      )}

      <Footer />
    </div>
  );
}
