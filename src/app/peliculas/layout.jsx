
import Peliculas from "./page";
import Navbar from "../../components/Navbar";



export const metadata = {
  title: "Kyber | Peliculas",
  description: "Peliculas gratis",
};

export default function Layout() {
  return (
  
      <div>
        <Navbar />
       <Peliculas />
       
        </div>

  );
}