import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

export default function GenerateVoucher() {
  return (
    <div>
      <Header />
      <div className="container mx-auto h-screen mb-12">
        <div className="h-5/6 p-10">
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-2/3 lg:w-3/4">
              <p className="text-3xl">Generar Comprobante</p>
              <ul className="mt-7">
                <li className="font-semibold text-2xl">Marca</li>
                <li className="mb-2">Apple</li>
                <li className="font-semibold text-2xl">Modelo</li>
                <li className="mb-2">MacBook pro 2019</li>
                <li className="font-semibold text-2xl">Número de serie</li>
                <li className="mb-2">AIJFDB992BNHB2</li>
                <li className="font-semibold text-2xl">Tipo de dispositivo</li>
                <li className="mb-2">Laptop</li>
                <li className="font-semibold text-2xl">Estado</li>
                <li className="mb-2">Aprobado</li>
              </ul>
            </div>
            <div className="lg:flex lg:w-2/6 lg:mt-12 lg:py-2 lg:items-center lg:justify-center lg:border-2 lg:border-black lg:rounded-lg">
              {/*Cambiar cuando se haya echo el deploy*/}
              <QRCode value="http://localhost:3000/device-details/1" />
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
