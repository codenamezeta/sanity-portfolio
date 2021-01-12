import React from 'react'
import img from '../yosemite.jpg'

export default function Home() {
  return (
    <main>
      <img
        className='absolute object-cover w-full h-full'
        alt='yosemite'
        src={img}
      />
      <section className='relative flex justify-center min-h-screen pt-12 px-8 lg:pt-64'>
        <h1 className='text-6xl text-black font-bold leading-none cursive lg:leading-snug home-name'>
          Hey, I'm Michael!
        </h1>
      </section>
    </main>
  )
}
