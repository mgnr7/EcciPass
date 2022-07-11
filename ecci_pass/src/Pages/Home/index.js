import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { FiCheck, FiClipboard } from "react-icons/fi";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { getUserDevices } from "../../Slices/devicesSlice";
import Mixpanel from "../../Services/mixpanel";

export default function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const devices = useSelector((state) => state.devices.devicesList);

  useEffect(() => {
    dispatch(getUserDevices());
  }, [dispatch]);

  const admin = user.accountType === "administrador";

  console.log("user: ", user);

  return admin ? (
    <Navigate to="/admin-home" />
  ) : (
    <div className="h-screen">
      <Header />
      <div className="flow-root w-100 text-gray-700 px-14 py-2 md:flex-row">
        <div className="float-left mt-8 ml-36">
          <p className="text-4xl">Activos electrónicos registrados</p>
        </div>
        <div className="float-right mr-24">
          <p className="text-lg">
            {user && user.name ? `Bienvenido ${user.name}` : "Bienvenid@"}
          </p>
        </div>
      </div>

      <div className="pt-6 pb-12">
        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col mb-12">
          <div className="flow-root text-gray-700 px-14 py-2">
            <div className="float-right">
              <Link
                className="bg-sky-600 hover:bg-ucr-blue text-white rounded-lg px-4 py-4"
                to="/registerDevice"
              >
                Registrar dispositivo
              </Link>
            </div>
          </div>

          {devices.map((d) => {
            return (
              <div key={`device_${d.deviceId}`}>
                <div className="text-gray-700 mt-4 ml-4 inline-flex">
                  <p className="font-semibold">Estado: {d.state}</p>
                  {d.state === "Aprobado" ? (
                    <FiCheck className="ml-2" />
                  ) : (
                    <FiClipboard className="ml-2" />
                  )}
                </div>
                <div className="flex flex-col border-2 border-black md:flex-row bg-gray-300 rounded-lg shadow-xl mt-4 w-100 mx-2 px-5 py-2">
                  <div className="h-64 w-auto md:w-1/2">
                    <img
                      className="inset-0 h-full w-full object-center object-scale-down"
                      src={d.imageUrl}
                      alt="Imagen del dispositivo"
                    />
                  </div>
                  <div className="w-full py-4 px-6 text-gray-800 flex flex-col">
                    <p className="font-semibold text-lg">Marca</p>
                    <p className="">{d.brand}</p>
                    <p className="font-semibold text-lg">Modelo</p>
                    <p className="text-lg truncate">{d.model}</p>
                    <p className="font-semibold text-lg truncate">
                      Número de serie
                    </p>
                    <p className="text-lg truncate">{d.serialNumber}</p>
                    <p className="font-semibold text-lg truncate">
                      Tipo de dispositivo
                    </p>
                    <p className="text-lg truncate">{d.deviceType}</p>
                  </div>

                  <div className="w-full py-4 px-6 text-gray-800 flex flex-col items-center">
                    <Link
                      className="lg:w-3/4 lg:mb-8 lg:mt-8 bg-ucr-green hover:bg-green-600 text-white text-center rounded-lg px-4 py-4"
                      onClick={() => {Mixpanel.track(Mixpanel.TYPES.OPEN_DEVICE_QR);}}
                      to={`/generate-voucher/${d.deviceId}`}
                    >
                      Generar Comprobante
                    </Link>
                    <Link
                      className="btn lg:w-3/4 lg:mt-8 lg:mb-8 bg-ucr-orange hover:bg-orange-600 text-white text-center rounded-lg px-4 py-4"
                      onClick={() => {Mixpanel.track(Mixpanel.TYPES.OPEN_DEVICE_DETAILS);}}
                      to={`/device-details/${d.deviceId}`}
                    >
                      Más detalles
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
