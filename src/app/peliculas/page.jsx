"use client";

import PeliculasList from "../../components/PeliculasList"
import Navbar from "../../components/Navbar"
import Menu from "../../components/Menu"
import FooterComponent from "../../components/Footer"
import useSeriesStore from '../../store/store';


const Peliculas =  () => {
   
  const peliculas = useSeriesStore((state) => state.peliculas);


  return (
  <>
  <Navbar />
  <Menu />
    <section className="min-h-[80vh]">
      <div className="container mx-auto">
      <h2 className="text-2xl text-gray-300 font-bold mt-4">Películas de Animación</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-5">
            {peliculas.map((pelicula) => (
              <PeliculasList pelicula={pelicula} key={pelicula._id} />
            ))}
        
          </div>
      </div>
    </section>
    <FooterComponent />
  </>
  )
}

export default Peliculas