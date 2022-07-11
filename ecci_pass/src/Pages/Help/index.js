import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

export default function HelpSection() {
  return (
    <div>
      <Header />
      <div class="grid grid-cols-5 gap-0 text-center ">
        <div class="col-span-4 text-center">
          <h1 className="text-4xl mt-12">Sección de ayuda e Información</h1>
          <div className="text-justify mt-8 px-20">
            <p className="text-xl">
              EcciPass es una plataforma desarrollada por estudiantes para todas
              aquellas personas que deseen acceder con un activo electrónico a
              la Escuela de Comutacion e Informática de la Universidad de Costa
              Rica. La aplicación pretende crear un proceso más ágil a la hora
              de inscribir activos electrónicos cómo: tablets, computadoras
              personales, periféricos, etc. Junto a esto, se desarrolla un
              proceso más eficiente y efectivo a la hora de abandonar las
              instalaciones con el mismo. EcciPass es sinónimo de seguridad para
              la institución y usuario.
            </p>
          </div>
          <h2 className="text-4xl mt-12">Manual de uso para el usuario</h2>
          <div className="text-justify mt-10 px-28 mb-32">
            <p class="text-xl">
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
        <div class="some-class">
          <div className="flex justify-center mb-4 px-8">
            <div className="mt-14 block p-6 max-w-screen-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 ">
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Información Contacto
              </h2>
              <p class="px-4 text-xl font-normal text-gray-700 dark:text-gray-400 text-justify mt-4">
                Teléfono: (506)2511-8000 <br></br> <br></br> Correo electrónico: 
                recepcion.ecci@ucr.ac.cr <br></br> <br></br> Universidad de Costa Rica, 
                Sede Rodrigo Facio Brenes Montes de Oca, San José, Costa Rica<br></br> 
                <br></br> Código Postal: 2060 San José, Costa Rica
                <br></br> <br></br> Central telefónica: (506) 2511-8000 <br></br> 
                <br></br> En caso de requerir información puede enviar un mensaje al correo recepcion.ecci@ucr.ac.cr.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
