"use client"

import Image from "next/image"
import Navbar from "../../components/Navbar"
import Menu from "../../components/Menu"
import FooterComponent from "../../components/Footer"

const About = () => {
  return (
    <>
    <Navbar />
    <Menu />
    <section className="min-h-[80vh] mt-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mt-12">Acerca de Nosotros</h2>
            <div className='text-white mt-4 m-2'>
                <p className='text-xl'>Bienvenidos a Kyber, tu destino definitivo para revivir la magia de las series y películas retro. Somos apasionados por el cine clásico y la televisión de antaño, y hemos creado este espacio para todos los amantes de lo retro que comparten nuestra pasión por las joyas audiovisuales del pasado.</p>
                <br />

                <h3 className='font-semibold text-2xl text-center'>Nuestra Misión</h3>
                <p className='text-xl'>En Kyber, nuestra misión es preservar y celebrar las series y películas que marcaron una época. Queremos ofrecerte una ventana al pasado, donde puedas disfrutar de aquellos títulos que hicieron historia y que siguen siendo relevantes hoy en día. Creemos que las historias y personajes de estas obras tienen un valor atemporal que merece ser redescubierto y compartido con nuevas generaciones.</p>
                <br />

                <h3 className='font-semibold text-2xl text-center'>Nuestro Compromiso</h3>
                <p className='text-xl'>Nos comprometemos a ofrecerte una experiencia de usuario excepcional, con contenido de alta calidad y una navegación sencilla y agradable. Cada miembro de nuestro equipo es un verdadero fanático de lo retro, y trabajamos con dedicación para que cada visita a nuestra página sea un viaje nostálgico inolvidable.</p>
                <br />

                <div className="flex flex-col justify-center items-center mt-10 mb-20">
                    <Image src="/logo.png" width={150} height={250} alt="logo"/>
                    <p className="mb-10">Equipo Kyber.</p>
                </div>
            </div>
      </div>
     
    </section>
    <FooterComponent />
    </>
  )
}

export default About