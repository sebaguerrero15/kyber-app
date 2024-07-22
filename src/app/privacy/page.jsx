"use client"

import Image from "next/image"
import Navbar from "../../components/Navbar"
import Menu from "../../components/Menu"
import FooterComponent from "../../components/Footer"

const Privacy = () => {
  return (
    <>
    <Navbar />
    <Menu />
    <section className="min-h-[80vh] mt-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mt-12">Políticas de Privacidad</h2>
            <div className='text-white mt-4 m-2'>
                <p className='text-xl'>En Kyber, nos tomamos muy en serio la privacidad y la seguridad de tus datos personales. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal cuando visitas y utilizas nuestro sitio web.</p>
                <br />

                <h3 className='font-semibold text-2xl text-center'>Información que Recopilamos</h3>
                    <ol className="text-xl">
                        <li>
                            <p>Información Personal: Incluye datos como tu nombre, dirección de correo electrónico y cualquier otra información que nos proporciones voluntariamente al registrarte en nuestro sitio, suscribirte a nuestros boletines o participar en nuestras encuestas y concursos.</p>
                        </li>
                        <br />
                        <li>
                        Información de Uso: Recopilamos datos sobre cómo accedes y utilizas nuestro sitio web, incluyendo tu dirección IP, tipo de navegador, páginas visitadas y tiempo dedicado en cada página. Esto nos ayuda a mejorar tu experiencia de usuario y a personalizar nuestro contenido.
                        </li>
                        <br />
                        <li>
                        Cookies y Tecnologías Similares: Utilizamos cookies y otras tecnologías de seguimiento para recopilar información sobre tus actividades en nuestro sitio web. Las cookies nos permiten recordar tus preferencias y mejorar tu experiencia de navegación.
                        </li>
                    </ol>
                <br />

                <h3 className='font-semibold text-2xl text-center'>Como utilizamos tu Información</h3>
                    <ul className="text-xl">
                        <li>
                        * Proveer y mantener nuestros servicios.
                        </li>
                        <li>
                        * Mejorar y personalizar tu experiencia en nuestro sitio.
                        </li>
                        <li>
                        * Enviarte notificaciones y comunicaciones relevantes, como boletines informativos, actualizaciones y promociones.
                        </li>
                        <li>
                        * Analizar el uso de nuestro sitio web y generar informes estadísticos.
                        </li>
                        <li>
                        * Detectar y prevenir fraudes y actividades no autorizadas.
                        </li>
                    </ul>
                    <br />

                    <h3 className='font-semibold text-2xl text-center'>Compartir Información</h3>
                    <p className="text-xl">No vendemos ni alquilamos tu información personal a terceros. Sin embargo, podemos compartir tu información en las siguientes circunstancias:</p>
                    <br />

                    <ul className="text-xl">
                        <li>
                        <strong>Proveedores de Servicios:</strong> Podemos compartir tu información con proveedores de servicios que nos ayudan a operar y mantener nuestro sitio web, como servicios de alojamiento web, análisis de datos y envío de correos electrónicos.
                        </li>
                        <br />
                        <li>
                        <strong>Requisitos Legales:</strong> Podemos divulgar tu información si estamos obligados a hacerlo por ley o en respuesta a solicitudes legales de autoridades gubernamentales.
                        </li>
                        <br />
                        <li>
                        <strong>Transferencias Comerciales:</strong> En caso de una fusión, adquisición o venta de activos, tu información personal puede ser transferida a la nueva entidad.
                        </li>
                    </ul>

                    <br />
                    <h3 className='font-semibold text-2xl text-center'>Seguridad de la Información</h3>
                    <p className="text-xl">
                    Implementamos medidas de seguridad razonables para proteger tu información personal contra accesos no autorizados, alteraciones, divulgación o destrucción. Sin embargo, ninguna transmisión de datos por Internet o sistema de almacenamiento es completamente seguro. Por lo tanto, no podemos garantizar la seguridad absoluta de tu información.
                    </p>
                    <br />

                    <p className="text-xl">Gracias por confiar en Kyber. Nos comprometemos a proteger tu privacidad y a ofrecerte una experiencia segura y agradable en nuestro sitio web.</p>


                <div className="flex flex-col justify-center items-center mt-10 mb-20">
                    <Image src="/logo.png" width={150} height={250} alt="logo"/>
                    <p>Equipo Kyber.</p>
                </div>
            </div>
      </div>
     
    </section>
    <FooterComponent />
    </>
  )
}

export default Privacy