"use client";

import SeriesComponent from "../app/caricatura/page"
import FooterComponent from "../components/Footer"
import Navbar from "../components/Navbar"
import SeriesFetcher from "../store/useFetcher"

const Home = () => {
  return (
    <SeriesFetcher className="min-h-[80vh]">
      <div>
       <Navbar />
        <SeriesComponent />
        <FooterComponent />
      </div>
      
    </SeriesFetcher>
  )
}

export default Home