"use client";

import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {

  const date = new Date().getFullYear()

  return (
    <footer className="py-10">
      <div className="grid grid-cols-2 gap-4 h-full bottom-0 py-10 bg-black text-white justify-center">

      
      <div className="flex flex-col text-lg">
          <Link href={"/privacy" }><p>Política de Privacidad</p></Link>
          <Link href={"/terms"} className="hover:text-gray-400">Términos de Servicio</Link>
          <Link href={"/contact"} className="hover:text-gray-400">Contáctanos</Link>
      </div>

      {/* paypal */}
     
        <Link href={"https://www.paypal.com/ncp/payment/M94ZUAW2MSWQS"} target="_blank">
          <Image src={"/paypal.png"} width={300} height={300} className="cursor-pointer absolute" />
        </Link>
     

        {/* logo aqui */}
        <p className="text-white text-center">© {date} Caricatoons. Todos los derechos reservados.</p>
      </div>

    
      
   
    </footer>
  )
}

export default FooterComponent