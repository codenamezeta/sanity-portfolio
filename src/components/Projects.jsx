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
            tags
        }`
      )
      .then((data) => setProject(data))
      .catch(console.error)
  })
  return (
    <main className='bg-blue-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
        <h2 className='text-lg text-gray-600 flex justify-center  mb-12'>
          Subtitle
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article className='relative rounded-lg shadow-xl bg-white p-16'>
                <h3 className='text-gray-800 text3xl font-bold mb-2 hover:text-blue-700'>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_black'
                    rel='noopener noreferrer'
                  >
                    {project.title}
                  </a>
                </h3>
                <div className='text-gray-500 text-xs space-x-4'>
                  <span>
                    <strong className='font-bold'>Finished on</strong>{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className='font-bold'>Project Type:</strong>{' '}
                    {project.projectType}
                  </span>
                  <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                    {project.description}
                  </p>
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
                  <span></span>
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}
