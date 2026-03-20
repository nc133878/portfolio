import React from 'react'

function ProjectCard({ title, url, description, techStack }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className='project-card'>
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
    </a>
  )
}

export default ProjectCard
