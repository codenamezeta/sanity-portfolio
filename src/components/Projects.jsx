import React, { useState, useEffect } from 'react'
import sanityClient from '../client' //* Imports the project ID and dataset name.

//TODO: learn GROQ debugging

export default function Projects() {
  const [projectData, setProject] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{
            title,
            date,
            description,
            projectType,
            link,
            
        }`
      )
      // @reverse() cause the query is sorted by oldest date first and I want new projects at the top.
      .then((data) => setProject(data.reverse()))
      .catch(console.error)
  })
  return (
    <main className='bg-blue-100 min-h-screen min-w-screen p-4 md:p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>Portfolio</h1>
        <h2 className='text-lg text-gray-600 flex justify-center text-center cursive mb-12'>
          Take a look at a few of my projects.
        </h2>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article className='relative rounded-lg shadow-xl bg-white py-6 px-4 md:p-16'>
                <h3 className='text-gray-800 font-bold mb-2 hover:text-blue-700'>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_black'
                    rel='noopener noreferrer'
                    className='text-xl'
                  >
                    {project.title}
                  </a>
                </h3>
                <div className='text-gray-500 md:space-x-4'>
                  <span>
                    <strong className='font-bold text-xs'>Updated</strong>{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className='font-bold text-xs'>Project Type:</strong>{' '}
                    {project.projectType}
                  </span>
                  <p className='my-6 text-xs text-gray-700 leading-relaxed'>
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  alt={project.title}
                  target='_black'
                  rel='noopener noreferrer'
                  className='text-blue-500 font-bold hover:underline hover:text-blue-700'
                >
                  View This Project{' '}
                  <span role='img' aria-label='right pointer'>
                    👉🏼
                  </span>
                </a>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}
