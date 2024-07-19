"use client";

import Link from 'next/link';

const Menu = () => {
  return (
    <article className="mt-4">
        <div className='container mx-auto'>
            <div className='flex justify-center items-center gap-4 m-2 font-bold text-xl'>
            <Link href="/caricatura">
                <button className='w-52 h-32 bg-slate-500 border uppercase text-white rounded-lg'>
                    Series
                </button>
            </Link>

                <Link href="/peliculas">
                <button className='w-52 h-32 bg-slate-500 border uppercase text-white rounded-lg'>
                    Películas
                </button>
                </Link>
            </div>
        </div>
    </article>
  )
}

export default Menu