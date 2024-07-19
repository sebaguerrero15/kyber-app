"use client";

import FooterComponent from "../components/Footer";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import SeriesFetcher from "../store/useFetcher"



const Home = () => {

  return (
    <SeriesFetcher className="min-h-[80vh]">
      <div>
        <Navbar />
        <Menu />
        {/* Destacados */}
        <FooterComponent />
      </div>
      
    </SeriesFetcher>
  )
}

export default Home