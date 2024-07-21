"use client";

import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
  return (
    <article className="mt-4">
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 justify-center items-center sm:flex gap-4 m-2 font-bold text-xl'>
            <Link href="/caricatura" className='text-center'>
                <button className='w-52 h-32 text-center bg-slate-500 border-none uppercase text-white rounded-lg'>
                    Series Animación
                </button>
            </Link>

                <Link href="/peliculas" className='text-center'>
                <button className="w-52 h-32 bg-[url('https://pa1.aminoapps.com/6694/c4fa8ff034986d3f21c219fca3d96e9fea9a2046_00.gif')] border-transparent uppercase text-white rounded-lg hover:border-4 hover:border-white transition-all duration-75">
                    Películas Animación
                </button>
                </Link>
            </div>
        </div>
    </article>
  )
}

export default Menu