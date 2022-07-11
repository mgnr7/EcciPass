import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import QRCode from "react-qr-code";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { getDeviceDetails } from "../../Slices/devicesSlice";

export default function GenerateVoucher() {
  const dispatch = useDispatch();
  const params = useParams();
  const deviceId = parseInt(params.id);

  useEffect(() => {
    dispatch(getDeviceDetails(deviceId));
  }, [deviceId, dispatch]);

  const device = useSelector((state) => state.devices.userDevice);

  return (
    <div>
      <Header />
      {device && (
        <div className="container mx-auto h-full mb-40">
          <div className="h-5/6 p-10">
            <div className="w-full flex flex-col md:flex-row">
              <div className="md:w-2/3 lg:w-3/4">
                <p className="text-3xl">Generar Comprobante</p>
                <ul className="mt-7">
                  <li className="font-semibold text-2xl">Marca</li>
                  <li className="mb-2">{device.brand}</li>
                  <li className="font-semibold text-2xl">Modelo</li>
                  <li className="mb-2">{device.model}</li>
                  <li className="font-semibold text-2xl">Número de serie</li>
                  <li className="mb-2">{device.serialNumber}</li>
                  <li className="font-semibold text-2xl">
                    Tipo de dispositivo
                  </li>
                  <li className="mb-2">{device.deviceType}</li>
                  <li className="font-semibold text-2xl">Estado</li>
                  <li className="mb-2">{device.state}</li>
                </ul>
              </div>
              <div className="lg:flex lg:w-2/6 lg:mt-12 lg:py-2 lg:items-center lg:justify-center lg:border-2 lg:border-black lg:rounded-lg mb-5">
                {/*Cambiar cuando se haya echo el deploy*/}
                <QRCode
                  value={`${process.env.REACT_APP_WEB_URL}/device-details/${deviceId}`}
                />
              </div>
            </div>
            <div className="flex justify-center lg:my-20">
              <div className="justify-center">
                <Link
                  className="btn bg-ucr-green hover:bg-green-600 text-white font-bold py-2 px-2 lg:py-5 lg:px-8 rounded-lg lg:mr-5"
                  to="/"
                >
                  Volver a dispositivos
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
