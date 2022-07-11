import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserDetails } from "../../Slices/userSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const params = useParams();
  const userId = parseInt(params.id);

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, [userId, dispatch]);

  // const device = useSelector((state) => state.devices.userDevice);
  const user = useSelector((state) => state.user.userProfile);

  return (
    <div>
      <Header />
      {user ? (
        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-3 mb-6">
            <div className="flow-root w-100 text-gray-700 px-14 py-2 md:flex-row">
              <div className="mb-8">
                <h1 className="text-4xl mt-6"> Información sobre usuario </h1>
              </div>
              <div className="w-11/12">
                <div className="bg-white shadow-lg rounded px-8 pt-6 pb-10 mb-8 border-2">
                  <div className="mb-10">
                    <label
                      className="block text-gray-700 text-xl font-bold mb-2"
                      htmlFor="brand"
                    >
                      Usuario
                    </label>
                    <p>{user.user}</p>
                  </div>
                  <div className="mb-10 mt-5">
                    <label
                      className="block text-gray-700 text-xl font-bold mb-2"
                      htmlFor="brand"
                    >
                      Nombre
                    </label>
                    <p>{user.name}</p>
                  </div>
                  <div className="mb-10 mt-5">
                    <label
                      className="block text-gray-700 text-xl font-bold mb-2"
                      htmlFor="brand"
                    >
                      Apellido
                    </label>
                    <p>{user.lastName}</p>
                  </div>
                  <div className="mb-10 mt-5">
                    <label
                      className="block text-gray-700 text-xl font-bold mb-2"
                      htmlFor="brand"
                    >
                      Identificacion
                    </label>
                    <p>{user.Identificacion}</p>
                  </div>
                  <div className="mb-10 mt-5">
                    <label
                      className="block text-gray-700 text-xl font-bold mb-2"
                      htmlFor="brand"
                    >
                      Correo electrónico
                    </label>
                    <p>{user.email}</p>
                  </div>
                  <div className="mb-1 mt-5">
                    <label
                      className="block text-gray-700 text-xl font-bold mb-2"
                      htmlFor="brand"
                    >
                      Tipo de cuenta
                    </label>
                    <p>{user.AccountType}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-60 mb-6 pb-1 mt-2 mr-2 ml-20">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Imágen de perfil
            </label>

            <div className="flex justify-center items-center w-full">
              
              <div className="relative w-52 h-52 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-52 h-52 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
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
