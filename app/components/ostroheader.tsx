import Link from 'next/link'
import React from 'react'

export default function Ostroheader() {
  return (
    <div className="header-container flex flex-row justify-between items-center h-1/10 w-24/25">
      <div className='flex flex-row gap-4 items-center'>
        <Link className="logo w-11 h-11 mt-1 rounded-full bg-lion" href={'./'}></Link>
        <Link className="uppercase text-lion font-bold text-4xl text-shadow-ostroborea" href={'./'}>Ostroborea</Link>
      </div>
        <div className="mode-toggle uppercase text-lion font-extrabold text-3xl cursor-pointer">X</div>
    </div>
  )
}
