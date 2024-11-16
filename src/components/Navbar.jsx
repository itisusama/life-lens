"use cllient"

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center bg-black py-4'>
      <nav>
        <Link href="/"><span className='text-4xl text-white font-extrabold'>Life Lens</span></Link>
      </nav>
    </div>
  )
}

export default Navbar
