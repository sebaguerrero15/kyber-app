"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"
import FooterComponent from "../components/Footer"

const error = () => {
  return (
    <>
    <Navbar />
    <section className="min-h-[80vh] m-2">

    <Link href="/" className="flex justify-center mt-4 mb-10">
      <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg m-2 text-2xl">
        Volver al Inicio
      </button>
      </Link>
    
      <div className='flex justify-center items-center'>
        <Image src="https://cdnebasnet.com/data/cache/opt_png/eshop/funnatic/images/posts/524-1675765865-1400x1400.png" width={600} height={600} alt="error" className="mb-14" />
      </div>
    </section>
    <FooterComponent />
    </>
  )
}

export default error