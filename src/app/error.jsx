"use client";

import Image from "next/image";

const error = () => {
  return (
    <div className='min-h-[80vh] flex justify-center items-center'>
      <Image src="https://cdnebasnet.com/data/cache/opt_png/eshop/funnatic/images/posts/524-1675765865-1400x1400.png" width={500} height={500} alt="error" />
    </div>
  )
}

export default error