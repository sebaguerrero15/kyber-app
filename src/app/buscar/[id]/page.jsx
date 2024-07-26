"use client";

import { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { FaArrowLeft } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import useSeriesStore from "../../../store/store";
import Link from "next/link";
import PeliculaData from "../../../components/PeliculaData";


const SerieDetails = ({ params }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const busquedaId = params.id;
  const fetchBusquedaById = useSeriesStore((state) => state.fetchBusquedaById);
  const selectedBusqueda = useSeriesStore((state) => state.selectedBusqueda);

  useEffect(() => {
    if (busquedaId) {
        fetchBusquedaById(busquedaId);
    }

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [busquedaId, fetchBusquedaById]);

  const buscar = selectedBusqueda;

  if (!buscar) {
    return null; // Handle loading or error state as needed
  }

  return (
    <section
      className={`min-h-[80vh] pb-12 ${
        isSmallScreen ? "" : "bg-fixed"
      }`}
      style={{
        backgroundImage: isSmallScreen
          ? ""
          : `linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${buscar.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center gap-3">
      <Link href="https://kyber-swart.vercel.app/buscar">
          <FaArrowLeft className="text-white cursor-pointer mx-3 mt-5 text-4xl hover:text-amber-400 hover:transition-all hover:duration-200" />
      </Link>

      <Link href={"/"}>
      <MdHome className="text-white cursor-pointer mx-3 mt-5 text-5xl hover:text-amber-400 hover:transition-all hover:duration-200"/>
      </Link>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center text-white">
        <div className="flex flex-col mt-6 gap-2 sm:mt-12">
          <h2 className="text-4xl m-2 sm:text-center sm:text-[80px] font-bold md:text-start">{buscar.name}</h2>
          <p className="m-2 text-xl md:mr-[580px]">{buscar.description}</p>

          <div className="flex flex-wrap gap-2">
            {buscar.category.map((category, index) => (
              <div key={index} className="border py-1 px-4 rounded-lg">
              <p className="text-white">
            {category.name}
             </p>
              </div>
             ))}
           </div>

          <p className="flex items-center gap-2 text-xl font-bold m-2"><span><TiStarFullOutline className="text-amber-400"/></span>{buscar.rating}
          </p>
        </div>

      {}
        <div className="container mx-auto mt-10">
          <div className="flex flex-col gap-2">
            {buscar.type === 'serie' ? (
              <>
            <h3 className="m-2 sm:text-center text-2xl font-semibold md:mb-4 md:ml-4 md:text-start">Episodios</h3>
            <Dropdown serie={buscar} />
            </>
            ) : <PeliculaData pelicula={buscar} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SerieDetails;