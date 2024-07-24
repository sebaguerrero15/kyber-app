"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import FooterComponent from "../../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <section className="min-h-[80vh] mt-4">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-bold text-center my-12">
            Contacto
          </h2>
          <div className="text-white mt-4 m-2">
          <form className="w-[350px] h-[500px] sm:w-[600px] mx-auto">
                <label className="block m-2 mb-2 text-xl font-medium text-white">
                    Nombre:
                </label>
                <input type="text" placeholder="Ingresa Tu Nombre" className="text-lg text-black bg-gray-400 border border-gray-300 rounded-lg block p-2.5 w-full placeholder:text-gray-700" />

                <label className="block m-2 mb-2 text-xl font-medium text-white">
                    Correo:
                </label>
                <input type="email" placeholder="Ingresa Tu Correo" className="text-lg text-black bg-gray-400 border border-gray-300 rounded-lg block p-2.5 w-full placeholder:text-gray-700" />

                <label for="message" className="block m-2 mb-2 text-xl font-medium text-white">
                    Mensaje:
                </label>
                <textarea id="message" rows="4" className="block p-4 w-full text-lg text-black bg-gray-400 rounded-lg border border-gray-300 placeholder:text-gray-700" placeholder="Escribe un comentario..."></textarea>

                <button className="w-full mt-6 text-white bg-gradient-to-br from-sky-950 to-teal-900 rounded-lg hover:border-4 hover:border-white transition-all duration-100 text-xl px-5 py-2.5 text-center">Enviar</button>
        </form>

            <div className="flex flex-col justify-center items-center">
              <Image src="/logo.png" width={150} height={250} alt="logo" />
              <p className="mb-10">Equipo Kyber.</p>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default About;
