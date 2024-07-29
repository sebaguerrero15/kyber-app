"use client";

import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";


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

        <Link href="/buscar" className="space-x-2">
          <button className="flex justify-center items-center gap-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg m-2 text-2xl">
            <FaSearch className="text-lg" />
          </button>
        </Link>
      </div>


        </div>
    </header>
  )
}

export default Navbar