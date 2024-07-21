"use client";

import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
  return (
    <article className="mt-4">
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 justify-center items-center sm:flex gap-4 m-2 font-bold text-xl'>
            <Link href="/caricatura" className='text-center'>
                <button className='w-52 h-32 text-center bg-[#A91D3A] border-transparent uppercase text-white rounded-lg hover:border-4 hover:border-white hover:bg-black transition-all duration-100'>
                    Series Animación
                </button>
            </Link>

                <Link href="/peliculas" className='text-center'>
                <button className="w-52 h-32 text-center bg-[#0F3D3E] border-transparent uppercase text-white rounded-lg hover:border-4 hover:border-white hover:bg-black transition-all duration-100">
                    Películas Animación
                </button>
                </Link>
            </div>
        </div>
    </article>
  )
}

export default Menu