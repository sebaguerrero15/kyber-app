"use client";

import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";


const PeliculaData = ({pelicula}) => {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 mt-12 gap-8">
        <div className="flex justify-start">
          <Link href={`${pelicula.link}`} className="flex justify-center items-center m-2 px-6 py-2 rounded-3xl border-none bg-white hover:bg-[#9FA1A5] transition-all duration-300">
            <button className="flex justify-center items-center text-black gap-4 hover:bg uppercase text-2xl font-medium">
              Ver Ahora <MdPlayCircle className="text-4xl" />
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center m-2">
        <h3 className="text-3xl font-bold mb-3">Tráiler</h3>

          <iframe src={`https://www.youtube.com/embed/${pelicula.trailer}`} 
           frameBorder="0" className="w-[350px] h-[200px] sm:w-[550px] sm:h-[400px] overflow-hidden">
          </iframe>

        </div>
      </div>
    </div>
  </div>
  )
}

export default PeliculaData