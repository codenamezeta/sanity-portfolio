import React from 'react'
import img from '../space.jpg'

export default function Home() {
  return (
    <main>
      <img
        className='fixed bottom-0 object-cover min-h-screen'
        alt='yosemite'
        src={img}
      />
      <section className='relative flex justify-center pt-12 px-8 '>
        <h1
          className='text-sm lg:text-6xl text-gray-900 font-bold leading-none cursive lg:leading-snug home-name'
          style={{ textShadow: '1px 1px 2px white' }}
        >
          Hey, I'm Michael!
        </h1>
        <span className='fixed bottom-5 right-5 text-gray-700 text-xs'>
          Photo by{' '}
          <a href='https://unsplash.com/@grakozy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
            Greg Rakozy
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/s/photos/space?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
            Unsplash
          </a>
        </span>
      </section>
    </main>
  )
}
