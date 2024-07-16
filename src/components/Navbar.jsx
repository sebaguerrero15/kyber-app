"use client";

import Link from "next/link";
import Image from "next/image";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";


const Navbar = () => {
  return (
    <header className="py-6 bg-black text-white">
      <div className="flex justify-around items-center">

      <div className="container mx-auto flex justify-start items-center gap-6">
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            className="cursor-pointer"
            alt="logo"
          />
        </Link>

        <Link href="/" className="ml-[45px]">
        <BiSolidCameraMovie className="text-2xl cursor-pointer"/>
        </Link>

        <Link href="/">
        <FaSearch className="text-xl cursor-pointer"/>
        </Link>

        <Link href="/">
        <MdFavorite className="text-xl cursor-pointer"/>
        </Link>
        </div>

        {/* perfil */}
        <div className="mr-10">
          <Link href="/">
          <PiUserCircleFill className="text-3xl cursor-pointer"/>
          </Link>
        </div>

        </div>
        
    </header>
  )
}

export default Navbar