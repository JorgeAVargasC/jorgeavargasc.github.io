import React from 'react'
import mydata from '../../data/mydata'
import Project from './Project'

export default function Projects () {
  return (
    <div id='projects' className='container'>
      <h1>Projects</h1>
      {
        mydata.projects.map((project) => {
          return (
            <Project key={project.id} project={project} />
          )
        })
      }

    </div>
  )
}
