import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import bgImg from '../developer-desk.jpg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])

  if (!author) {
    return <div className='pl-5'>Loading...</div>
  }

  return (
    <main className='relative'>
      <img
        src={bgImg}
        alt='developer-desk'
        className='absolute w-full h-full'
      />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-gray-800 rounded-lg shadow-2xl lg:flex p-20'>
          <div className='lg:w-64 lg:h-64 mr-8'>
            <img
              src={urlFor(author.authorImage).url()}
              className='rounded mb-5'
              alt={author.name}
            />
            <a href='mailto:michael@a2zeta.com' className='button text-white'>
              michael@a2zeta.com
            </a>
          </div>
          <div className='flex text-lg flex-col justify-center'>
            <h1 className='cursive text-blue-300 mb-4'>
              Hey there, I'm
              <br />
              <span className='text-6xl text-blue-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent
                blocks={author.bio}
                projectId='puadnmze'
                dataset='production'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
