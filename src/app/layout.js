import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "CaricaToons",
  description: "Series y Peliculas gratis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} absolute top-0 z-[-2] h-full w-full bg-[#141414]`}>{children}</body>
    </html>
  );
}
