"use client";

import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {

  const date = new Date().getFullYear()

  return (
    

<footer className="bg-black py-16">
    <div className="">
        <div className="flex items-center justify-around">
        <ul className="mb-6 space-y-2 text-md font-medium text-white sm:mb-0">
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
            
            <Link href={"/"} className="flex justify-center ml-[130px] mb-4 sm:mb-0  rtl:space-x-reverse">
              <Image src={"/logo.png"} width={100} height={100} className="cursor-pointer" />
              <span className="text-white">©</span>
             </Link>
             
             {/* logo web */}
             <Link href={"https://www.paypal.com/ncp/payment/M94ZUAW2MSWQS"} target="_blank" className="flex items-center mb-4 sm:mb-0 rtl:space-x-reverse">
              <Image src={"/paypal.png"} width={300} height={300} className="cursor-pointer relative" />
             </Link>

           
        
        </div>

        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <span className="block text-sm text-gray-500 sm:text-center">Kyber© {date} Todos los derechos Reservados.</span>
    </div>
</footer>


   
  )
}

export default FooterComponent