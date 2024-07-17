"use client";

import { useEffect } from "react"
import Dropdown from "../../../components/Dropdown"
import { FaArrowLeft } from "react-icons/fa";
import useSeriesStore from "../../../store/store";
import Link from "next/link";



const SerieDetails = ({ params }) => {
   
    const serieId = params.id;
    const fetchSerieById = useSeriesStore((state) => state.fetchSerieById);
    const selectedSerie = useSeriesStore((state) => state.selectedSerie);
  
    useEffect(() => {
      if (serieId) {
        fetchSerieById(serieId);
      }
    }, [serieId, fetchSerieById]);
  
    const serie = selectedSerie;

  return (
    
    <section className="min-h-[80vh] pb-12" style={{
        backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${serie.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        }}
        >
            {/* flecha volver atras */}
            <Link href={"/"}>
            <button>
            <FaArrowLeft className="text-white cursor-pointer mx-3 mt-5 text-4xl hover:text-amber-400 hover:transition-all hover:duration-200" />
            </button>
                
            </Link>
           
        
        <div className='container mx-auto flex flex-col justify-center items-center text-white'>
            
            <div className='flex flex-col gap-2 mt-12'>
                <h2 className="sm:text-center text-[80px] font-bold md:text-start">{serie.name}</h2>
                <p className="text-xl md:mr-[580px]">{serie.description}</p>
            </div>

            {/* dropdown */}
            <div className="container mx-auto mt-10">
                <div className="flex flex-col gap-2">
                    <h3 className="sm:text-center text-2xl font-semibold md:mb-4 md:ml-4 md:text-start">Episodios</h3>
                    
                    <Dropdown serie={serie} />
                  
                </div>
           
            </div>
    </div>


            
    </section>
    
  )
}

export default SerieDetails;