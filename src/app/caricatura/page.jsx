"use client";

import FooterComponent from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import SeriesList from "../../components/SeriesList"
import useSeriesStore from '../../store/store';


const SeriesComponent =  () => {
   
  const series = useSeriesStore((state) => state.series);


  return (
    <>
    <Navbar />
    <Menu />
    <section className="min-h-[80vh] mt-4">
      <div className="container mx-auto">
        <h2 className="text-2xl text-gray-300 font-bold">Series de Animación</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-5">
            {series.map((serie) => (
              <SeriesList serie={serie} key={serie._id} />
            ))}
        
          </div>
      </div>
     
    </section>
    <FooterComponent />
    </>
  )
}

export default SeriesComponent