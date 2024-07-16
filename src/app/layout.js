import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import FooterComponent from "../components/Footer";
import Navbar from "../components/Navbar";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Kyber",
  description: "Series y Peliculas gratis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} absolute top-0 z-[-2] h-full w-full bg-[#141414]`}>
        {children}
        <FooterComponent />
        </body>
    </html>
  );
}
