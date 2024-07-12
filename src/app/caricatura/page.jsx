"use client";

import SeriesList from "../../components/SeriesList"
import useSeriesStore from '../../store/store';


const SeriesComponent =  () => {
   
  const series = useSeriesStore((state) => state.series);


  return (

    <section className="min-h-[80vh] mt-8">
      <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-2 mt-10">
            {series.map((serie) => (
              <SeriesList serie={serie} key={serie._id} />
            ))}
        
          </div>
      </div>
     
    </section>

  )
}

export default SeriesComponent