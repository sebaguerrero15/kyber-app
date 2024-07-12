"use client";

import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {

  const date = new Date().getFullYear()

  return (
    

<footer className="bg-black rounded-lg shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href={"https://www.paypal.com/ncp/payment/M94ZUAW2MSWQS"} target="_blank" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image src={"/paypal.png"} width={300} height={300} className="cursor-pointer relative" />
             </Link>
             
             {/* logo web */}
             <Link href={"https://www.paypal.com/ncp/payment/M94ZUAW2MSWQS"} target="_blank" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image src={"/paypal.png"} width={300} height={300} className="cursor-pointer relative" />
             </Link>

           
            <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Acerca de Nosotros</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Politicas de Privacidad</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contacto</Link>
                </li>
            </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {date} Todos los derechos Reservados.</span>
    </div>
</footer>


   
  )
}

export default FooterComponent