"use client";

import useSeriesStore from '../store/store';
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion";


const DestacadosSeries =  () => {
   
  const series = useSeriesStore((state) => state.series);


  return (
  <>

    <section>
      <div className="container mx-auto">
      <h2 className="text-2xl text-gray-300 font-bold mt-4">Películas de Animación</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
            {series.map((serie) => (
                <>
               <article>
               <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               >
           
                 <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className='flex flex-col justify-center rounded-xl m-4'
                 >
                 <Link href={`/caricatura/${serie._id}`}>
                 <Image src={serie.image} width={250} height={200} alt={serie.name} className="rounded-xl transition-all duration-75 border-4 border-transparent hover:border-white"/>
               
               </Link>
                 </motion.div>
              
             </motion.div>
             </article>
             </>
            ))}
        
          </div>
      </div>
    </section>
   
  </>
  )
}

export default DestacadosSeries