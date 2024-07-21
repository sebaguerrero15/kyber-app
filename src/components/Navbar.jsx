"use client";

import Link from "next/link";
import Image from "next/image";



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

      
        </div>


        </div>
        
    </header>
  )
}

export default Navbar