"use client";
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion";

const SeriesList = ({serie}) => {
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
       className='flex flex-col items-center rounded-xl'
      >
      <Link href={`/caricatura/${serie._id}`}>
      <Image src={serie.image} width={250} height={200} alt={serie.name} className="rounded-md transition-all duration-75 border-4 border-transparent hover:border-white"/>
      {/* <h3 className="text-center">{serie.name}</h3> */}
    </Link>
      </motion.div>
   
  </motion.div>
  </article>
  )
}

export default SeriesList