"use client";

import { useEffect, Suspense } from "react"
import motion from "framer-motion"
import { FaArrowLeft } from "react-icons/fa";
import useSeriesStore from "../../../store/store";
import Loading from "../loading"
import Link from "next/link";



const PeliculaDetails = ({ params }) => {
   
    const peliculaId = params.id;
    const fetchPeliculaById = useSeriesStore((state) => state.fetchPeliculaById);
    const selectedPelicula = useSeriesStore((state) => state.selectedPelicula);
  
    useEffect(() => {
      if (peliculaId) {
        fetchPeliculaById(peliculaId);
      }
    }, [peliculaId, fetchPeliculaById]);
  
    const pelicula = selectedPelicula;

  return (
    
    <section className="min-h-[80vh] pb-12" style={{
        backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${pelicula.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: 'auto',
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
                <h2 className="sm:text-center text-[80px] font-bold md:text-start">{pelicula.name}</h2>
                <p className="text-xl md:mr-[580px]">{pelicula.description}</p>
            </div>

          
            <div className="container mx-auto mt-10">
                <div className="flex flex-col gap-2">
                    
                <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
          
            <motion.div
              key={index}
              className='flex flex-col items-center text-lg text-white'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className='rounded-xl relative p-2 transition-all duration-75 border-4 border-transparent hover:border-white'
              >
                <Link href={pelicula.link} >
                  <iframe
                    src={pelicula.link}
                    className='realtive overflow-hidden pointer-events-none'
                    width={350}
                    height={200}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </Link>
              </motion.div>
            </motion.div>
        </div>
        </Suspense>
                  
                </div>
           
            </div>
    </div>


            
    </section>
    
  )
}

export default PeliculaDetails;