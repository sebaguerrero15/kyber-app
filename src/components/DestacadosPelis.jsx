"use client";

import useSeriesStore from '../store/store';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const DestacadosPelis = () => {
  const peliculas = useSeriesStore((state) => state.peliculas);

  // Asegúrate de que `peliculas` esté definido y tenga una estructura esperada.
  const sortedPeliculas = peliculas && peliculas.length > 0 ? peliculas.sort((a, b) => b.rating - a.rating).slice(0, 5) : [];

  return (
    <>
      <section>
        <div className="container mx-auto">
          <h2 className="text-2xl text-gray-300 font-bold mt-4 mx-4">Películas de Animación Destacadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-5">
            {sortedPeliculas.map((pelicula) => (
              <article key={pelicula._id}>
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
                      <Image src={pelicula.image} width={250} height={200} alt={pelicula.name} className="w-[150px] h-[250px] sm:w-[200px] sm:h-[300px] rounded-xl transition-all duration-75 border-4 border-transparent hover:border-white" />
                    </Link>
                  </motion.div>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DestacadosPelis;
