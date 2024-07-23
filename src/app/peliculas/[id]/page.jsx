"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import useSeriesStore from "../../../store/store";
import Loading from "../loading";
import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";

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
    return <Loading />;
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
        </div>

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
                 frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-[350px] h-[200px] sm:w-[550px] sm:h-[400px] overflow-hidden pointer-events-none">
                </iframe>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeliculaDetails;

