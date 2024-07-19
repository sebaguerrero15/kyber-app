"use client";

import { useEffect} from "react"
import { FaArrowLeft } from "react-icons/fa";
import useSeriesStore from "../../../store/store";
import Loading from "../loading"
import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";


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

    if (!pelicula) {
      return <Loading />;
    }

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
            <Link href={"https://kyber-swart.vercel.app/peliculas"}>
            <button>
            <FaArrowLeft className="text-white cursor-pointer mx-3 mt-5 text-4xl hover:text-amber-400 hover:transition-all hover:duration-200" />
            </button>
                
            </Link>
           
        
        <div className='container mx-auto flex flex-col justify-center items-center text-white'>
            
            <div className='flex flex-col gap-2 mt-12'>
                <h2 className="sm:text-center text-[80px] font-bold md:text-start">{pelicula.name}</h2>
                <p className="text-xl md:mr-[580px]">{pelicula.description}</p>
            </div>

          
            <div className="container mx-auto">
                <div className="flex flex-col gap-2">
                    
        <div className="grid grid-cols-1 mt-12 gap-8">
          
           
           <div className="flex justify-start">
           <Link href={`${pelicula.link}`} className="flex justify-center items-center px-6 py-2 rounded-3xl border-none bg-white hover:bg-[#9FA1A5] transition-all duration-300">
                  <button className="flex justify-center items-center text-black gap-4 hover:bg uppercase text-2xl font-medium">
                    Ver Ahora <MdPlayCircle className="text-4xl" />
                    </button>
                </Link>
           </div>
              
             

              <div className="flex justify-center items-center">
                  <iframe width="653" height="480" src="https://www.youtube.com/embed/N2lzGmhf0yY" title="EL GRINCH Trailer Oficial Español Latino (2018)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

        </div>
      
                  
                </div>
           
            </div>
    </div>


            
    </section>
   
  )
}

export default PeliculaDetails;