import { useDispatch } from "react-redux";
import { logout } from "../../Slices/userSlice";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <p>Dar click en el boton para poder acceder a la pantalla de login</p>
      <div className="text-center pt-1 mb-12 pb-1 mt-8">
        <button
          className="inline-block h-12 px-6 py-2.5 text-white bg-[#1271c0] hover:bg-ucr-blue font-medium text-xs leading-tight uppercase rounded-3xl shadow-md mb-3"
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
