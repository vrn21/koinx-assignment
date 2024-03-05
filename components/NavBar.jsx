import React from 'react'
import Image from "next/image";


export default function 
() {
  return (
    <div className="h-20 bg-white flex flex-row w-100vw items-center justify-between pl-14 pr-14">
        <Image src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="logo" width={100} height={80} />
        <div className="text-black font-medium">
            <a className="p-4">Crypto taxes</a>
            <a className=" p-4">Free tools</a>
            <a className="p-4">Resource center</a>
            <button className=" p-3 bg-[#1B4AEF] rounded-lg text-white font-normal px-5"> Get started </button>
        </div>
    </div>
  )
}
