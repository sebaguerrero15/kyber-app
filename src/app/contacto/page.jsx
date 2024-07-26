"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import FooterComponent from "../../components/Footer";

const About = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
        .then(
          () => {
            console.log('Enviado!');
          },
          (error) => {
            console.log('Error en el envio...', error.text);
          },
        );
    };


  return (
    <>
      <Navbar />
      <Menu />
      <section className="min-h-[80vh] mt-4">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mt-12">
            Contacto
          </h2>
          <p className="text-white text-xl text-justify m-2 sm:text-center">Si necesitas que agreguemos alguna serie, película, reportar algún link caído o alguna sugerencia no dudes en contactarnos 😄</p>
          <div className="text-white mt-4 m-2">
          <form ref={form} onSubmit={sendEmail} className="w-[350px] h-[500px] sm:w-[600px] mx-auto">
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

                <button type='submit' className="w-full mt-6 text-white bg-gradient-to-br from-sky-950 to-teal-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg border-4 border-transparent hover:border-white transition-all duration-100 text-2xl py-2.5 text-center font-semibold">Enviar Mensaje</button>

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
