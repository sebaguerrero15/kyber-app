"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import useSeriesStore from "../../../store/store";
import { MoonLoader } from "react-spinners";
import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import PeliculaData from "../../../components/PeliculaData"


const PeliculaDetails = ({ params }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const peliculaId = params.id;
  const fetchPeliculaById = useSeriesStore((state) => state.fetchPeliculaById);
  const selectedPelicula = useSeriesStore((state) => state.selectedPelicula);

  useEffect(() => {
    if (peliculaId) {
      fetchPeliculaById(peliculaId);
    }

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [peliculaId, fetchPeliculaById]);

  const pelicula = selectedPelicula;


  if (!pelicula) {
    return <MoonLoader color="#03d4ff" size={50} />;
  }



  return (
    <section
      className={`min-h-[80vh] pb-12 ${
        isSmallScreen ? "" : "bg-fixed"
      }`}
      style={{
        backgroundImage: isSmallScreen
          ? ""
          : `linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${pelicula.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center gap-3">
      <Link href="https://kyber-swart.vercel.app/peliculas">
          <FaArrowLeft className="text-white cursor-pointer mx-3 mt-5 text-4xl hover:text-amber-400 hover:transition-all hover:duration-200" />
      </Link>
      
      <Link href={"/"}>
        <MdHome className="text-white cursor-pointer mx-3 mt-5 text-5xl hover:text-amber-400 hover:transition-all hover:duration-200"/>
      </Link>
      </div>

      <div className='container mx-auto flex flex-col justify-center items-center text-white'>
        <div className='flex flex-col gap-2 mt-12'>
          <h2 className="text-4xl m-2 sm:text-center sm:text-[80px] font-bold md:text-start">{pelicula.name}</h2>
          <p className="m-2 mt-10 text-xl md:mr-[580px]">{pelicula.description}</p>

          <div className="flex flex-wrap gap-2">
            {pelicula.category.map((category, index) => (
              <div key={index} className="border py-1 px-4 rounded-lg">
              <p className="text-white">
            {category.name}
             </p>
              </div>
           
             ))}
           </div>

          <p className="flex items-center gap-2 text-xl font-bold m-2"><span><TiStarFullOutline className="text-amber-400"/></span>{pelicula.rating}
          </p>
        </div>
        <PeliculaData pelicula={pelicula} />
      </div>
    </section>
  );
}

export default PeliculaDetails;

