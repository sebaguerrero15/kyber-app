"use client";
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion";

const PeliculasList = ({pelicula}) => {
  return (
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
      <Link href={`/peliculas/${pelicula._id}`}>
      <Image src={pelicula.image} width={250} height={200} alt={pelicula.name} className="rounded-xl transition-all duration-75 border-4 border-transparent hover:border-white"/>
    
    </Link>
      </motion.div>
   
  </motion.div>
  </article>
  )
}

export default PeliculasList