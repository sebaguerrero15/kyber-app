"use client";

import SeriesComponent from "../app/caricatura/page"
import Navbar from "../components/Navbar";
import SeriesFetcher from "../store/useFetcher"
import Peliculas from "./peliculas/page";

const Home = () => {
  return (
    <SeriesFetcher className="min-h-[80vh]">
      <div>
        <Navbar />
        <SeriesComponent />
        <Peliculas />
      </div>
      
    </SeriesFetcher>
  )
}

export default Home