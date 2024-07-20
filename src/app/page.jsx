"use client";

import FooterComponent from "../components/Footer";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import DestacadosPelis from "../components/DestacadosPelis"
import DestacadosSeries from "../components/DestacadosSeries"
import SeriesFetcher from "../store/useFetcher"



const Home = () => {

  return (
    <SeriesFetcher className="min-h-[80vh]">
      <div>
        <Navbar />
        <Menu />
        <DestacadosSeries />
        <DestacadosPelis />
        <FooterComponent />
      </div>
      
    </SeriesFetcher>
  )
}

export default Home