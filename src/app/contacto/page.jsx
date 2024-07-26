"use client";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import { useForm } from "react-hook-form";
import FooterComponent from "../../components/Footer";

const About = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    emailjs.sendForm('service_5w92ee9', 'template_f8u651s', form.current, {
      publicKey: 'lLEYCY8Sh5PUmOyXs',
    })
    .then(
        () => {
          console.log('Enviado!');
          reset();
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

            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="w-[350px] h-[500px] sm:w-[600px] mx-auto">
              <label className="block m-2 mb-2 text-xl font-medium text-white">
                Nombre:
              </label>
              <input
                type="text"
                placeholder="Ingresa Tu Nombre"
                className="text-lg text-black bg-gray-400 border border-gray-300 rounded-lg block p-2.5 w-full placeholder:text-gray-700"
                {...register("name", { required: "El nombre es requerido" })}
              />
              {errors.name && <span className='text-red-500'>{errors.name.message}</span>}

              <label className="block m-2 mb-2 text-xl font-medium text-white">
                Correo:
              </label>
              <input
                type="email"
                placeholder="Ingresa Tu Correo"
                className="text-lg text-black bg-gray-400 border border-gray-300 rounded-lg block p-2.5 w-full placeholder:text-gray-700"
                {...register("email", {
                  required: "El correo es requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Correo inválido"
                  }
                })}
              />
              {errors.email && <span className='text-red-500'>{errors.email.message}</span>}

              <label className="block m-2 mb-2 text-xl font-medium text-white">
                Mensaje:
              </label>
              <textarea
                rows="4"
                className="block p-4 w-full text-lg text-black bg-gray-400 rounded-lg border border-gray-300 placeholder:text-gray-700"
                placeholder="Escribe un comentario..."
                {...register("message", { required: "El mensaje es requerido" })}
              />
              {errors.message && <span className='text-red-500'>{errors.message.message}</span>}

              <button type='submit' className="w-full py-3 mt-6 font-bold text-white bg-gradient-to-br from-sky-950 to-teal-900 uppercase rounded-lg">
                Enviar Mensaje
              </button>
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
