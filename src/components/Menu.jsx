"use client";

import Link from 'next/link';


const Menu = () => {
  return (
    <article className="mt-4">
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 justify-center items-center sm:flex gap-4 m-2 font-bold text-xl'>
            <Link href="/caricatura" className='text-center'>
                <button className='w-52 h-32 text-center text-white bg-gradient-to-br from-sky-950 to-teal-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 border-transparent uppercase rounded-lg hover:border-4 hover:border-white transition-all duration-100'>
                    SERIES ANIMACIÓN
                </button>
            </Link>

                <Link href="/peliculas" className='text-center'>
                <button className="w-52 h-32 text-center bg-gradient-to-br from-sky-950 to-teal-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 border-transparent uppercase text-white rounded-lg hover:border-4 hover:border-white hover:bg-black transition-all duration-100">
                    Películas Animación
                </button>
                </Link>
            </div>
        </div>
    </article>
  )
}

export default Menu