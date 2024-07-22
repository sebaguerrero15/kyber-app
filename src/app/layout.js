import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Kyber",
  description: "Series y Peliculas gratis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gradient-to-br from-zinc-900 to-gray-950`}>
       
        {children}
        
        </body>
    </html>
  );
}
