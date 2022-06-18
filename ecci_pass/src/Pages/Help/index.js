import Header from "../../Component/Header";

export default function HelpSection() {
  return (
    <div>
      <Header />
      <div className="text-center  pt-1 mb-12 pb-1 mt-6 px-80 items-center">
        <h1 className="text-4xl">Sección de ayuda e Información</h1>
        <div className="text-justify mt-6">
          <p className="text-lg">
            EcciPass es una plataforma desarrollada por estudiantes para todas
            aquellas personas que deseen acceder con un activo electrónico a la
            Escuela de Comutacion e Informática de la Universidad de Costa Rica.{" "}
            <br></br> <br></br> La aplicación pretende crear un proceso más ágil
            a la hora de inscribir activos electrónicos cómo: tables,
            computadoras personales, periféricos, etc. Junto a esto, se
            desarrolla un proceso más eficiente y efectivo a la hora de
            abandonar las instalaciones con el mismo.EcciPass es sinónimo de
            seguridad para la instituación y usuario.
          </p>
        </div>
        <div className="flex justify-center  mb-4">
          <div className="mt-12 block p-6 max-w-screen-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 ">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manual de uso EcciPass
            </h2>
            <p class="px-4 text-lg font-normal text-gray-700 dark:text-gray-400 text-justify mt-4">
              1. Inicie sesión o regístrese <br></br> <br></br> 2. Seleccione la
              opción de "Registrar Dispositivo" <br></br> <br></br> 3. Ingrese
              los datos indicados de su Dispositivo y oprima "agregar
              dispositivo" <br></br> <br></br> 4. El estado de su dispositivo se
              mantenrá en "Revisión" hasta que un administrativo lo acepte{" "}
              <br></br> <br></br> 5. Al ser aceptado su dispositivo, puede
              genera un comprobante del mismo <br></br> <br></br> 6. Ingrese a
              la ECCI sin llenar formularios
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
