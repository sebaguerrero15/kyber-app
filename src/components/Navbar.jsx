"use client";

import Link from "next/link";
import Image from "next/image";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";


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
            className="m-2 cursor-pointer"
            alt="logo"
          />
        </Link>

        <Link href="/peliculas" className="ml-[45px]">
        <BiSolidCameraMovie className="text-2xl cursor-pointer"/>
        </Link>

        <Link href="/">
        <FaSearch className="text-xl cursor-pointer"/>
        </Link>

        <Link href="/">
        <MdFavorite className="text-xl cursor-pointer"/>
        </Link>
        </div>


        </div>
        
    </header>
  )
}

export default Navbar