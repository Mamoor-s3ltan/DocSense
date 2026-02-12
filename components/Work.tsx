"use client"
import React from 'react'
import BasicGrid from './ui/Grid'
import ResponsiveGrid from './ui/Grid'

const Work = () => {
  return (
    <section id='about'>
    <div className='flex items-center justify-center p-2 flex-col'>
        <h1 className="text-2xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            How It Works ?
          </span>
        </h1>
        <div className='w-full p-2'>
        <ResponsiveGrid/>
        </div>
    </div>
    </section>
  )
}

export default Work