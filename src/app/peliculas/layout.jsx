
import FooterComponent from "../../components/Footer";
import Navbar from "../../components/Navbar";



export const metadata = {
  title: "Kyber | Peliculas",
  description: "Series y Peliculas gratis",
};

export default function Layout({ children }) {
  return (
  
      <div>
        <Navbar />
        {children}
        </div>

  );
}