import React from 'react'

function ProjectCard({ title, url, github, description, techStack }) {
  return (
    <div className='project-card'>
      <h3 className='project-title'>{title}</h3>
      <div className='iframe-wrapper'>
        <iframe
          src={url}
          title={title}
          className='project-iframe'
          scrolling="no"
          loading="lazy"
        />
      </div>
      <p className='project-description'>{description}</p>
      <p className='tech-stack-text'><strong>Tech Stack:</strong> {techStack}</p>
      <div className='project-links'>
        <a href={url} target="_blank" rel="noopener noreferrer" className='project-link'>Live Demo</a>
        <a href={github} target="_blank" rel="noopener noreferrer" className='project-link'>GitHub</a>
      </div>
    </div>
  )
}

export default ProjectCard
