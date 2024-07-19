"use client";

import Navbar from "../../components/Navbar";
import PeliculasList from "../../components/PeliculasList"
import useSeriesStore from '../../store/store';


const Peliculas =  () => {
   
  const peliculas = useSeriesStore((state) => state.peliculas);


  return (
  <>
    <Navbar />
    <section className="min-h-[80vh] mt-[70px]">
      <div className="container mx-auto">
      <h2 className="text-2xl text-gray-300 font-bold">Películas de Animación</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-10">
            {peliculas.map((pelicula) => (
              <PeliculasList pelicula={pelicula} key={pelicula._id} />
            ))}
        
          </div>
      </div>
     
    </section>
  </>
  )
}

export default Peliculas