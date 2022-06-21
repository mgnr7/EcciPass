function Footer() {
  return (
    <footer class="dark:bg-gray-800 text-white border-t-4 fixed inset-x-0 bottom-0 p-6 bg-white shadow md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ©{" "}
        <a href="https://www.ecci.ucr.ac.cr/" class="hover:underline">
            Escuela de Computación e Informática 2022
        </a>{" "}
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/" class="hover:underline">
            Contactáctenos
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

// Se puede mantener ese color o negro para mayor neutralidad
